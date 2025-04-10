import type { TruthSocialPost } from './truth-social-post';

/**
 * Represents a research item containing a Truth Social post and related data
 * for generating betting pool ideas
 */
export interface ResearchItem {
  truth_social_post: TruthSocialPost;
  related_news?: string[];
  related_news_urls?: string[];
  related_search_results?: string[];
  related_news_search_results?: string[];
  related_tavily_search_results?: string[];
  betting_pool_idea?: string;
  news_search_query?: string;
  related_news_search_query?: string;
  tavily_search_query?: string;
  related_tavily_search_query?: string;
  transaction_hash?: string | null; // Blockchain transaction hash from creating the betting pool
  pool_id?: string | null; // ID of the betting pool on the smart contract
  should_process?: boolean; // Flag to indicate if this item should be processed further
  skip_reason?: string; // Reason why the item was marked for skipping (e.g., "already_processed", "too_old")
  image_prompt?: string; // Generated prompt for image creation
  image_url?: string | null;

  // New fields for reference chain tracing
  reference_chains?: ReferenceChain[];
  source_tracing_complete?: boolean;
  primary_source_found?: boolean;
  primary_source_url?: string;
  primary_source_summary?: string;
}

// Define the reference chain interface
export interface ReferenceChain {
  chain_id: string;
  sources: SourceReference[];
  confidence_score: number; // 0-1 score indicating confidence in this chain
  is_complete: boolean; // Whether we've reached a primary source
}

export interface SourceReference {
  url: string;
  title?: string;
  source_type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'social_media'
    | 'blog'
    | 'news'
    | 'official'
    | 'unknown';
  publication_date?: string;
  referenced_urls: string[]; // URLs referenced by this source
  content_summary: string;
  is_primary_source: boolean;
  verification_status: 'verified' | 'partially_verified' | 'unverified';
}

export interface SingleResearchItem {
  truth_social_post: TruthSocialPost;
  related_news?: string[];
  related_news_urls?: string[];
  related_search_results?: string[];
  betting_pool_idea?: string;
  news_search_query?: string;
  related_news_search_query?: string;
  tavily_search_query?: string;
  related_tavily_search_query?: string;
  related_news_search_results?: string[];
  related_tavily_search_results?: string[];
  transaction_hash?: string | null;
  pool_id?: string | null;
  should_process?: boolean;
  skip_reason?: string;
  image_prompt?: string;
  image_url?: string | null;
  external_link_content?: string | null;
  external_link_url?: string | null;
  external_link_error?: string | null;
  alternative_search_queries?: string[];
  search_domains?: string[];
  successful_news_query?: string;
  tavily_search_failed?: boolean;
  source_tracing_complete?: boolean;
  reference_chains?: ReferenceChain[];
  primary_source_found?: boolean;
  primary_source_url?: string;
  primary_source_summary?: string;
}
