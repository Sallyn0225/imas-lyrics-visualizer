# 偶像大师歌词库 (iDOLM@STER Lyrics Archive) 核心规划蓝图

## 1. 项目愿景 (Vision)
本项目旨在突破传统歌词展示的边界，基于 **Astro 5** 架构，为《偶像大师》系列的每一首歌曲提供极致的、个性化的视觉叙事体验。
- **核心理念**：一曲一格 (Every song has its own soul)。
- **技术目标**：高性能（SSG）、多平台适配、丝滑的 View Transitions。

## 2. 技术栈 (Tech Stack)
- **框架**：[Astro 5](https://astro.build/) (全量 SSG 模式)
- **样式**：Tailwind CSS 4 (原子化 CSS) + 原生 CSS 变量 (针对单曲定制)
- **存储**：Cloudflare R2 (存放 MP3 音频及 4K 视觉资源)
- **搜索**：[Pagefind](https://pagefind.app/) (高性能静态全文检索)
- **动画**：Astro View Transitions + CSS Scroll-driven Animations
- **数据**：Markdown Content Collections (元数据中心)

## 3. 架构设计 (Architecture)
```text
/src
  /components       # 全局 UI 组件（导航、搜索、基础播放器）
  /layouts          # 抽象布局（品牌母版、通用歌词页模版）
  /pages
    index.astro     # 门户（品牌选择界面）
    /[brand]
      index.astro   # 品牌主页（队伍矩阵 + 独立曲目）
      /[team]
        index.astro # 队伍详情（曲目列表）
        [song].astro # 定制化单曲页面 (Soul injection point)
  /content
    /lyrics         # 原始歌词元数据 (SSOT - Single Source of Truth)
/public
  _headers          # 针对 Cloudflare/Netlify 的安全与缓存配置
```

## 4. 核心功能实现路径

### 4.1 “一曲一格”的灵魂注入 (Soul Injection)
- **元数据驱动**：Markdown 记录核心信息（BPM、主题色、音频 URL）。
- **个性化 Astro 页面**：为每首重点歌曲在 `/pages` 路径下创建独立 `.astro` 文件，实现专属视觉布局与动效。
- **动态回退机制**：当未创建定制页面时，自动采用 `[song].astro` 动态模板展示基础内容。

### 4.2 极致视听体验
- **Hero Transitions**：利用 View Transitions 实现封面图跨页面的无缝衔接。
- **响应式排版**：针对移动端优化长歌词阅读，针对 PC 端利用宽屏展示复杂的 CSS 背景粒子。

## 5. 搜索与索引
- **Pagefind 集成**：构建阶段自动扫描 HTML，生成轻量级索引，支持即时搜索。

## 6. 部署与分发 (Deployment)
项目已实现 **多平台原生兼容**，通过专项配置文件确保在不同 CDN 边缘的行为一致性：
- **Vercel**: 通过 `vercel.json` 处理 Clean URLs 和重定向。
- **Netlify**: 通过 `netlify.toml` 优化构建环境与边缘规则。
- **Cloudflare Pages**: 通过 `public/_headers` 强制执行安全策略与缓存控制。

## 7. 开发协作流程
- **Sisyphus (Orchestrator)** 负责维护上述基础设施与自动化部署链路。
- **UI/UX Engineer** 负责单曲页面的“灵魂注入”。
- **Librarian** 负责资产管理与字体优化。

---
*Last Updated: 2026-01-17 | 致力于打造极致的偶像美学数字化档案*
