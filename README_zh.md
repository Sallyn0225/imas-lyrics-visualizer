<div align="center">

# 🎵 偶像大师歌词档案馆 (iDOLM@STER Lyrics Archive)

[English](./README.md)

**"一曲一格" (One Song, One Style)** — *为偶像大师宇宙打造的高端、沉浸式视觉叙事体验。*

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

![主预览](./docs/assets/README/sunfaded.gif)

*《サンフェーデッド》的怀旧胶片美学 —— 每一首歌都有专属灵魂。*

</div>

---

## 🌟 一曲一格：视觉画廊 (Visual Gallery)

每一首曲目都不止是歌词，而是一场经过精心策划的数字表演。

| **OH MY GOD** | **Spread the Wings** | **Anniversary** |
| :---: | :---: | :---: |
| ![OH MY GOD](./docs/assets/README/oh_my_god.png) | ![Spread the Wings](./docs/assets/README/spread_the_wings.png) | ![Anniversary](./docs/assets/README/anniversary.png) |
| *SHHis 的都市流行美学，高冷且极具时尚感。* | *283 Production 广阔的蔚蓝天空 —— 纯粹且充满希望。* | *温馨华丽的周年庆典色调，记录每一个里程碑。* |

---

## 🤖 "Sisyphus" 代理协作生态

本项目通过独特的**多代理协作 (Multi-Agent Collaboration)** 体系进行维护与演进，确保每一首歌都能获得其独特的“灵魂”。

- 🏛️ **Sisyphus (协调者)**：管理核心架构与部署策略。
- 🎨 **前端 UI/UX 工程师**：为“定制”布局打造专属 CSS 艺术与沉浸式动效。
- 📚 **资源馆长 (Librarian)**：研究高性能 WebGL 特效与字体优化方案。
- ✍️ **文档撰写者**：维护叙事一致性与技术文档标准。

*在 [AGENTS.md](./AGENTS.MD) 中了解更多关于我们工作流的信息。*

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
