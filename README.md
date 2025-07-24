# 简约博客系统

一个基于 Astro 的现代化博客系统，专注于简洁设计和内容展示。

## ✨ 特性

- **极简设计** - 专注于内容本身，减少视觉干扰
- **快速加载** - 使用 Astro 构建，零 JavaScript 运行时
- **响应式布局** - 完美适配各种设备尺寸
- **暗色模式** - 支持亮色/暗色主题切换
- **Markdown 支持** - 使用 Markdown 撰写文章
- **标签系统** - 为文章添加标签便于分类
- **SEO 优化** - 优秀的搜索引擎优化表现

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看博客。

### 构建生产版本

```bash
npm run build
```

构建后的文件将在 `dist/` 目录中。

## ✍️ 写作指南

### 创建新文章

在 `src/content/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "文章标题"
date: "2024-07-24"
excerpt: "文章的简短描述"
tags: ["标签1", "标签2"]
readingTime: "5分钟阅读"
---

# 文章标题

从这里开始写作...
```

### 文章元数据说明

- **title**: 文章标题
- **date**: 发布日期，格式为 YYYY-MM-DD
- **excerpt**: 文章摘要，显示在文章列表中
- **tags**: 文章标签数组，用于分类
- **readingTime**: 阅读时间估计

### 文件命名

Markdown 文件名将成为文章的 URL slug。例如：
- `my-first-post.md` → `/blog/my-first-post`
- `hello-world.md` → `/blog/hello-world`

## 🎨 自定义

### 修改主题颜色

编辑 `src/layouts/BaseLayout.astro` 中的 CSS 变量：

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #0066cc;
  /* 更多变量... */
}
```

### 添加新页面

在 `src/pages/` 目录下创建新的 `.astro` 文件即可添加新页面。

## 📁 项目结构

```
src/
├── components/          # 可复用的组件
├── content/
│   └── blog/           # 博客文章
├── layouts/
│   └── BaseLayout.astro # 基础布局
├── pages/
│   ├── index.astro     # 首页
│   ├── about.astro     # 关于页面
│   ├── blog/
│   │   └── [...slug].astro # 文章详情页
│   └── tags/
│       └── [tag].astro # 标签页面
└── content.config.ts   # 内容配置
```

## 🛠️ 技术栈

- **Astro** - 静态站点生成器
- **TypeScript** - 类型安全
- **Markdown** - 内容写作
- **CSS 变量** - 主题系统

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。
