import { PoolDetailClient } from '@/components/pools/PoolDetailClient';
import { createClient } from '@/lib/supabase/server';
import { fetchPool } from '@/utils/fetchPool';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<any>;
};

export const revalidate = 60;

async function getPoolData(poolId: string) {
  try {
    const supabase = await createClient();

    const [pool, postResponse, commentsResponse] = await Promise.all([
      fetchPool(poolId),
      supabase.from('truth_social_posts').select('*').eq('pool_id', poolId).single(),
      supabase
        .from('comments')
        .select('*')
        .eq('pool_id', poolId)
        .is('commentID', null)
        .order('created_at', { ascending: false }),
    ]);

    return {
      pool,
      postData: postResponse.data || null,
      comments: commentsResponse.data || [],
    };
  } catch (error) {
    console.error('Error fetching pool data:', error);
    return { pool: null, postData: null, comments: [] };
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const { pool, postData } = await getPoolData(id);

  if (!pool) {
    return { title: 'Pool Not Found' };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pool.question || `Prediction Pool #${id}`,
    description: pool.question || 'Predict the outcome of this event',
    openGraph: {
      images: [postData?.image_url || '/default-pool-image.jpg', ...previousImages],
    },
  };
}
export default async function PoolDetailPage({ params }: Props) {
  const id = (await params).id;
  const { pool, postData, comments } = await getPoolData(id);

  if (!pool) {
    notFound();
  }

  return (
    <PoolDetailClient
      id={id}
      initialPostData={postData}
      initialComments={comments}
      initialPool={pool}
    />
  );
}
