import { ProgressBar } from '@/components/ui/progress-bar';
import { GetPoolQuery, GetPoolsQuery } from '@/types';

interface BettingProgressProps {
  percentages: number[];
  pool: GetPoolQuery['pool'] | GetPoolsQuery['pools'][number];
  totalVolume: string;
}

export const BettingProgress = ({ percentages, pool, totalVolume }: BettingProgressProps) => {
  const isZeroState = totalVolume === '$0' || totalVolume === '0 pts' || percentages[0] === 0;

  if (!pool) {
    return null;
  }

  return (
    <div className='mb-6'>
      <ProgressBar
        percentages={percentages}
        height='h-4'
        className='mb-2'
        isZeroState={isZeroState}
      />
      <div className='mb-2 flex justify-between text-sm font-medium'>
        {pool.options.map((option: string, index: number) => (
          <span
            key={index}
            className={
              index === 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }
          >
            {option} {percentages[index]}%
          </span>
        ))}
      </div>
    </div>
  );
};
