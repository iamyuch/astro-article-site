import type { APIRoute } from 'astro';
import { getAllArticles } from '../../utils/articles';

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  
  // 只返回搜索需要的字段
  const searchData = articles.map(article => ({
    title: article.title,
    tags: article.tags,
    url: article.url
  }));
  
  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
