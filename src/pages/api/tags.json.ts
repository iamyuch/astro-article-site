import type { APIRoute } from 'astro';
import { getAllTags } from '../../utils/articles';

export const GET: APIRoute = async () => {
  const tagMap = await getAllTags();
  const tags = Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  
  return new Response(JSON.stringify(tags), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
