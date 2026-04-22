import type { CollectionEntry } from 'astro:content';

type PostEntry = CollectionEntry<'posts'>;

export function getVisiblePosts(posts: PostEntry[]) {
  return posts
    .filter((post) => import.meta.env.DEV || !post.data.draft)
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}
