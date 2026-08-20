import manifest from './image-manifest.json';

const m = manifest as Record<string, string>;

export function imageFor(id: string): string | null {
  return m[id] || null;
}
