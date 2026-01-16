# iDOLM@STER Lyrics Archive | 偶像大师歌词档案馆

> **"一曲一格" (One Song, One Style)** —— 为偶像大师宇宙的歌词打造的高端、沉浸式视觉叙事体验。

iDOLM@STER Lyrics Archive 是一个基于 **Astro 5** 和 **Tailwind CSS 4** 构建的现代 Web 应用。它不仅仅是文字的堆砌，我们将每一首歌都视为一场独特的视觉表演，配备了定制播放器、基于关键词的视觉特效（VFX）以及滚动驱动的动画。

## ✨ 核心特性

- 🎭 **沉浸式视觉体验**：针对不同组合设计的特定布局 (`layoutType`)，完美契合组合的美学风格。
- 🎵 **定制音频播放器**：一个磨砂玻璃质感的响应式播放器，颜色与歌曲主题色深度集成。
- ✨ **关键词视觉特效**：自动识别歌词中的特定关键词（如 "夢"、"愛"、"光"）并为其添加高亮和特殊效果。
- 📜 **滚动驱动动画**：利用 Intersection Observer 和 CSS 动画，让内容在滚动过程中自然呈现与转化。
- 🔍 **静态搜索**：由 **Pagefind** 驱动的快速客户端搜索，实现全站歌词的即时检索。
- 📱 **响应式设计**：在移动端、平板端和桌面端均能提供流畅、精致的体验。
- ⚡ **极致性能**：通过静态站点生成（SSG）实现极速加载和 SEO 优化。

## 🛠️ 技术栈

- **框架**: [Astro 5](https://astro.build/) (Content Collections, View Transitions)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **搜索**: [Pagefind](https://pagefind.app/)
- **字体**: Google Fonts (Cinzel, Great Vibes, Noto Serif JP)
- **部署**: 针对静态托管（Vercel, Netlify, Cloudflare Pages）进行了优化

## 🚀 快速开始

### 前置条件
- Node.js (建议最新 LTS 版本)
- npm 或 pnpm

### 安装
```bash
# 克隆仓库
git clone https://github.com/your-repo/idolmaster-lyrics.git

# 安装依赖
npm install
```

### 开发环境
```bash
# 启动开发服务器
npm run dev
```

### 构建与搜索索引
由于 Pagefind 索引静态文件，您需要构建项目后才能更新搜索索引：
```bash
# 构建项目
npm run build

# 在本地预览构建结果
npm run preview
```

## 📖 文档

关于如何贡献代码或添加新歌的详细指南，请参考：
- [贡献指南](./docs/CONTRIBUTING.md) — 了解如何添加新歌词以及数据结构。

## 📄 开源协议

本项目仅用于教育及粉丝交流目的。iDOLM@STER（偶像大师）是 BANDAI NAMCO Entertainment Inc. 的注册商标。
