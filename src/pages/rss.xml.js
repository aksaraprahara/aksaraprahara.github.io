import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getVisiblePosts } from '../utils/posts';

export async function GET(context) {
  const sortedPosts = getVisiblePosts(await getCollection('posts'));
  
  return rss({
    title: 'Yudi Putra Wiratama',
    description: 'Catatan teknikal seputar Linux, container, monitoring, storage, dan infrastruktur',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>id-ID</language>`,
  });
}
