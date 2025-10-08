import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  const publishedPosts = blog
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.publish_date.valueOf() - a.data.publish_date.valueOf());

  return rss({
    title: 'Caleb Ukle',
    description: 'Developer blog and thoughts',
    site: context.site!,
    items: publishedPosts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publish_date,
      link: `/blog/${post.id.replace('.md', '')}`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
