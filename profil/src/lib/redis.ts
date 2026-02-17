const store = new Map<string, { value: string; expiresAt?: number }>();

function isExpired(key: string) {
  const entry = store.get(key);
  if (!entry) return true;
  if (!entry.expiresAt) return false;
  const expired = entry.expiresAt <= Date.now();
  if (expired) store.delete(key);
  return expired;
}

export const redis = {
  async get(key: string): Promise<string | null> {
    if (isExpired(key)) return null;
    return store.get(key)?.value ?? null;
  },
  async set(key: string, value: string): Promise<void> {
    store.set(key, { value });
  },
  async expire(key: string, ttlSeconds: number): Promise<boolean> {
    const entry = store.get(key);
    if (!entry) return false;
    entry.expiresAt = Date.now() + Math.max(ttlSeconds, 0) * 1000;
    store.set(key, entry);
    return true;
  },
  async del(key: string): Promise<boolean> {
    return store.delete(key);
  },
};
