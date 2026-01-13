# Astro 静态文章列表网站

这是一个使用 Astro 构建的静态文章列表网站，具有双栏布局、标签系统、搜索功能、分页、面包屑导航和完整的 SEO 优化。

## 功能特性

### 核心功能
- ✅ **双栏布局**：左侧文章列表，右侧标签云和友情链接
- ✅ **文章系统**：支持 Markdown 格式文章，包含自定义 SEO 元数据
- ✅ **标签系统**：标签云展示，标签聚合页面
- ✅ **搜索功能**：客户端搜索，仅搜索文章标题
- ✅ **分页功能**：每页显示 30 篇文章
- ✅ **面包屑导航**：文章页面顶部显示导航路径
- ✅ **响应式设计**：移动端优化布局

### SEO 优化
- 完整的 meta 标签（标题、描述、关键词）
- Open Graph 和 Twitter Card 支持
- 结构化数据（JSON-LD）
- 自动生成 sitemap
- robots.txt 配置
- 自定义文章 URL（通过 slug）

### 设计风格
- Web2 资讯类风格
- 白底黑字，简洁清晰
- 简单线条分隔
- 无复杂组件

## 项目结构

```
article-site/
├── content/                    # 文章 Markdown 文件
│   ├── example-article-1.md
│   ├── example-article-2.md
│   └── example-article-3.md
├── pages/                      # 页面文件（预留，与 content 同级）
├── src/
│   ├── components/            # 组件
│   │   ├── Breadcrumb.astro   # 面包屑导航
│   │   ├── Header.astro       # 头部组件
│   │   ├── Pagination.astro   # 分页组件
│   │   ├── Search.astro       # 搜索组件
│   │   ├── SEO.astro          # SEO 组件
│   │   └── Sidebar.astro      # 侧边栏组件
│   ├── layouts/               # 布局
│   │   └── BaseLayout.astro   # 基础布局
│   ├── pages/                 # 页面路由
│   │   ├── index.astro        # 首页
│   │   ├── article/[slug].astro  # 文章详情页
│   │   ├── page/[page].astro     # 分页页面
│   │   ├── tag/[tag].astro       # 标签聚合页
│   │   └── api/
│   │       ├── articles.json.ts  # 文章 API（搜索用）
│   │       └── tags.json.ts      # 标签 API
│   ├── utils/                 # 工具函数
│   │   └── articles.ts        # 文章处理函数
│   └── types.ts               # TypeScript 类型定义
├── public/
│   └── robots.txt             # 搜索引擎爬虫配置
├── astro.config.mjs           # Astro 配置
├── package.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:4321 查看网站。

### 构建生产版本

```bash
pnpm build
```

构建后的静态文件位于 `dist/` 目录。

### 预览生产版本

```bash
pnpm preview
```

## 添加文章

### 文章格式

在 `content/` 目录下创建 Markdown 文件，使用以下 frontmatter 格式：

```yaml
---
title: "文章标题"
slug: "custom-url-slug"
description: "SEO 描述，用于搜索引擎和社交媒体分享"
keywords: ["关键词1", "关键词2", "关键词3"]
tags: ["标签1", "标签2"]
---

# 文章内容

这里是文章的 Markdown 内容...
```

### Frontmatter 字段说明

- **title**（必填）：文章标题，显示在列表和详情页
- **slug**（必填）：自定义 URL，例如 `my-article` 会生成 `/article/my-article/`
- **description**（必填）：文章描述，用于 SEO 和搜索引擎摘要
- **keywords**（必填）：关键词数组，用于 SEO
- **tags**（必填）：标签数组，用于分类和标签聚合页

### 示例文章

项目已包含 3 篇示例文章：
1. `example-article-1.md` - Astro 入门指南
2. `example-article-2.md` - Web 开发最佳实践
3. `example-article-3.md` - 响应式设计原则

## 自定义配置

### 修改网站信息

编辑以下文件中的占位符：

1. **网站名称和描述**：
   - `src/layouts/BaseLayout.astro` - 修改 `description` 默认值
   - `src/components/Header.astro` - 修改 `siteName` 变量
   - `src/components/SEO.astro` - 修改 `siteName` 变量

2. **网站域名**：
   - `astro.config.mjs` - 修改 `site` 字段
   - `public/robots.txt` - 修改 sitemap URL

### 修改分页数量

编辑 `src/pages/index.astro` 和 `src/pages/page/[page].astro`，修改 `paginateArticles` 函数的第三个参数（默认 30）。

### 添加友情链接

编辑 `src/components/Sidebar.astro`，在"友情链接"部分添加链接：

```astro
<section class="sidebar-section">
  <h2 class="sidebar-title">友情链接</h2>
  <div class="links">
    <a href="https://example.com">友链名称</a>
  </div>
</section>
```

## 响应式设计

### 桌面端（>768px）
- 双栏布局：左侧文章列表，右侧标签云和友情链接
- 侧边栏固定定位（sticky）

### 移动端（≤768px）
- 单栏布局
- 右侧栏隐藏，改为顶部导航栏
- 导航栏包含：首页按钮、标签下拉菜单
- 友情链接移至页面底部

## SEO 最佳实践

### 已实现的 SEO 功能

1. **元数据管理**
   - 每页独立的 title、description、keywords
   - Open Graph 标签（社交媒体分享）
   - Twitter Card 支持

2. **结构化数据**
   - 网站级别的 WebSite schema
   - 文章级别的 Article schema

3. **网站地图**
   - 自动生成 XML sitemap
   - 包含所有文章、标签页和分页

4. **Canonical URL**
   - 每页设置规范链接，避免重复内容

5. **语义化 HTML**
   - 使用正确的 HTML5 标签
   - 面包屑导航使用 `<nav>` 和 `aria-label`

### SEO 优化建议

1. 为每篇文章编写独特的标题和描述
2. 使用相关的关键词，但避免堆砌
3. 标题控制在 60 字符以内
4. 描述控制在 160 字符以内
5. 使用有意义的 slug（URL）
6. 定期更新内容

## 部署

### 静态托管平台

构建后的 `dist/` 目录可以部署到任何静态托管平台：

- **Vercel**：连接 Git 仓库，自动部署
- **Netlify**：拖拽 `dist/` 目录或连接 Git
- **GitHub Pages**：推送到 `gh-pages` 分支
- **Cloudflare Pages**：连接 Git 仓库
- **阿里云 OSS / 腾讯云 COS**：上传静态文件

### 部署前检查

1. 修改 `astro.config.mjs` 中的 `site` 为实际域名
2. 修改 `public/robots.txt` 中的 sitemap URL
3. 运行 `pnpm build` 确保构建成功
4. 检查 `dist/` 目录内容

## 技术栈

- **Astro 5.16.9** - 静态网站生成器
- **TypeScript** - 类型安全
- **@astrojs/sitemap** - 自动生成网站地图
- **原生 CSS** - 无需额外 CSS 框架
- **原生 JavaScript** - 搜索和交互功能

## 浏览器支持

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）
- 移动端浏览器

## 许可证

MIT License

## 支持

如有问题或建议，请提交 Issue。
