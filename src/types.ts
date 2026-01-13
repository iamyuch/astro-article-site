export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  tags: string[];
  content: string;
  url: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  tags: string[];
}
