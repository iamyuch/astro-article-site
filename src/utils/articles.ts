import type { Article, ArticleFrontmatter } from '../types';

/**
 * 获取所有文章
 */
export async function getAllArticles(): Promise<Article[]> {
  const articles = await import.meta.glob<{ frontmatter: ArticleFrontmatter; compiledContent: () => string }>('/content/*.md', { eager: true });
  
  return Object.entries(articles).map(([path, article]) => {
    const { frontmatter } = article;
    return {
      slug: frontmatter.slug,
      title: frontmatter.title,
      description: frontmatter.description,
      keywords: frontmatter.keywords || [],
      tags: frontmatter.tags || [],
      content: article.compiledContent(),
      url: `/article/${frontmatter.slug}/`
    };
  }).sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * 根据slug获取文章
 */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug);
}

/**
 * 获取所有标签及其文章数量
 */
export async function getAllTags(): Promise<Map<string, number>> {
  const articles = await getAllArticles();
  const tagMap = new Map<string, number>();
  
  articles.forEach(article => {
    article.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  return tagMap;
}

/**
 * 根据标签获取文章
 */
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter(article => article.tags.includes(tag));
}

/**
 * 分页文章
 */
export function paginateArticles(articles: Article[], page: number = 1, pageSize: number = 30) {
  const totalPages = Math.ceil(articles.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    articles: articles.slice(start, end),
    currentPage: page,
    totalPages,
    totalArticles: articles.length,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}
