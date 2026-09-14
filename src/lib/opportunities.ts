const API_BASE = import.meta.env.VITE_API_URL ?? '/api';
const API_ORIGIN = import.meta.env.VITE_API_ORIGIN ?? '';

export type ApiOpportunity = {
  id: string;
  title: string;
  slug: string;
  category: string;
  opportunityType?: string | null;
  organization?: string | null;
  country?: string | null;
  regionOrState?: string | null;
  city?: string | null;
  locationLabel?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  shortDescription?: string | null;
  salaryText?: string | null;
  experienceRequired?: string | null;
  educationRequired?: string | null;
  tag?: string | null;
  tagLabel?: string | null;
  detailIcon?: string | null;
  postedAt: string;
  applicationDeadline?: string | null;
  applyUrl?: string | null;
  aboutContent?: string | null;
  requirementsContent?: string | null;
  howToApplyContent?: string | null;
  isFeatured: boolean;
  popularityScore: number;
  status: string;
};

export type PagedOpportunities = {
  items: ApiOpportunity[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export function resolveMediaUrl(path?: string | null): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_ORIGIN}${path}`;
}

export function formatPostedLabel(iso: string): string {
  const posted = new Date(iso);
  if (Number.isNaN(posted.getTime())) return 'Posted recently';
  const diffMs = Date.now() - posted.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return 'Posted today';
  if (days === 1) return 'Posted 1 day ago';
  if (days < 7) return `Posted ${days} days ago`;
  if (days < 14) return 'Posted 1 week ago';
  return `Posted ${posted.toLocaleDateString()}`;
}

export function splitRequirements(content?: string | null): string[] {
  if (!content?.trim()) return [];
  return content
    .split(/\r?\n|•|;/)
    .map((line) => line.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
}

export async function fetchPublicOpportunities(params: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  location?: string;
  opportunityType?: string;
  experience?: string;
  sort?: string;
} = {}): Promise<PagedOpportunities> {
  const qs = new URLSearchParams();
  qs.set('page', String(params.page ?? 1));
  qs.set('limit', String(params.limit ?? 12));
  if (params.search) qs.set('search', params.search);
  if (params.category && params.category !== 'All') qs.set('category', params.category);
  if (params.location && params.location !== 'all') qs.set('location', params.location);
  if (params.opportunityType && params.opportunityType !== 'all') {
    qs.set('opportunityType', params.opportunityType);
  }
  if (params.experience && params.experience !== 'all') qs.set('experience', params.experience);
  if (params.sort) qs.set('sort', params.sort);

  const response = await fetch(`${API_BASE}/opportunities?${qs.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to load opportunities');
  }
  return (await response.json()) as PagedOpportunities;
}
