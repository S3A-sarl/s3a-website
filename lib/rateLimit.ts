const buckets = new Map<string, { count: number; resetAt: number }>();

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

export function rateLimit(key: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }
  if (bucket.count >= LIMIT) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}
