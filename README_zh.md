<div align="center">

# 🎵 偶像大师歌词档案馆 (iDOLM@STER Lyrics Archive)

**"一曲一格" (One Song, One Style)** — *为偶像大师宇宙的歌词打造的高端、沉浸式视觉叙事体验。*

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 一曲一格 (One Song, One Style)

档案馆中的每一首歌都被视为一场独特的视觉表演。我们超越了静态文字的界限，致力于创造一个能与音乐灵魂产生共鸣的数字氛围。

| 歌曲示例 | 视觉识别度 | 核心技术 |
| :--- | :--- | :--- |
| **Shiny Stories** | ✨ 虹彩磨砂玻璃 | 背景滤镜、毛玻璃层叠、动态渐变色。 |
| **Sunfaded** (サンフェーデッド) | 🎞️ 怀旧胶片质感 | CSS 噪点纹理、深褐色滤镜、优雅的衬线体。 |
| **Overexposed** | 💡 纯白过曝美学 | 高对比度光效、光晕扩散、运动模糊呈现。 |

---

## ✨ 核心特性

- 🎭 **沉浸式视觉设计**：为每个组合量身定制的特定布局 (`layoutType`) 与主题色板，完美复刻原曲意境。
- 🎵 **艺术化播放器**：具备磨砂玻璃质感的响应式音频播放器，颜色与歌曲视觉主题深度集成。
- ✨ **关键词视觉特效 (VFX)**：自动为歌词中的关键意象（如 "夢"、"愛"、"光"）渲染实时视觉特效。
- 📜 **滚动驱动叙事**：利用现代 CSS 与 Intersection Observer，让内容在滚动中随呼吸起伏、转化。
- 🔍 **瞬时全站搜索**：基于 **Pagefind** 的超快速客户端索引，让寻找心仪歌词变得轻而易举。
- 📱 **极致响应式体验**：全方位优化的设计确保“舞台”在移动端、平板与桌面端均能完美呈现。

---

## 🛠️ 技术栈

| 技术 | 职责 |
| :--- | :--- |
| **Astro 5** | 静态站点生成 (SSG) 与内容集管理 |
| **Tailwind CSS 4** | 下一代实用优先的样式引擎 |
| **Pagefind** | 极速静态搜索库 |
| **TypeScript** | 类型安全的逻辑开发 |
| **View Transitions** | 流畅的、类似原生应用的页面转场 |

---

## 🚀 快速开始

<details>
<summary><b>安装与开发</b></summary>

### 前置条件
- Node.js (建议最新 LTS 版本)
- npm, pnpm 或 yarn

### 环境配置
```bash
# 克隆仓库
git clone https://github.com/your-repo/idolmaster-lyrics.git

# 安装依赖
npm install
```

### 开发模式
```bash
# 启动本地开发服务器
npm run dev
```

### 构建与搜索索引
由于 Pagefind 索引静态文件，您需要构建项目后才能更新搜索索引：
```bash
# 执行生产构建
npm run build

# 在本地预览构建结果
npm run preview
```
</details>

<details>
<summary><b>部署说明</b></summary>

本项目专为多平台部署架构设计：
- **Vercel**: 通过 `vercel.json` 深度优化。
- **Netlify**: 通过 `netlify.toml` 进行构建配置。
- **Cloudflare Pages**: 利用 `public/_headers` 实现高性能响应头。
</details>

---

## 📖 相关文档

通过以下指南深入了解项目的内在机制：
- [**贡献指南**](./docs/CONTRIBUTING_zh.md) — 了解如何添加新歌词并掌握数据结构。
- [**代理协作体系**](./AGENTS.MD) — 探索 Sisyphus 与其他 AI 代理如何共同维护档案馆的“灵魂”。

---

## 📄 协议与免责声明

本项目是一个开源的粉丝创作项目，仅用于教育、交流与欣赏目的。

**免责声明**：*iDOLM@STER (偶像大师)* 是 **BANDAI NAMCO Entertainment Inc.** 的注册商标。所有音乐内容及相关知识产权均归其原作者及版权方所有。

<div align="center">
  <sub>为全球的制作人们用心打造 ❤️</sub>
</div>
