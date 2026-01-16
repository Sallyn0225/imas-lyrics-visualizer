# 偶像大师歌词库 (iDOLM@STER Lyrics Archive) 开发文档

## 1. 项目概述
本项目是一个基于 **Astro** 框架开发的静态歌词展示网站。旨在为《偶像大师》系列的每一首歌曲提供极致的、个性化的视觉展示。
- **核心理念**：一曲一格（Every song has its own soul）。
- **技术目标**：高性能（SSG）、无服务器化、多端适配、丝滑转场。
- **部署平台**：Vercel / Cloudflare Pages。

## 2. 技术栈
- **框架**：[Astro](https://astro.build/) (采用 SSG 静态生成模式)
- **样式**：Tailwind CSS (基础框架) + 原生 CSS/Sass (针对单曲定制)
- **存储**：Cloudflare R2 (存放 MP3 音频及大尺寸图片)
- **搜索**：[Pagefind](https://pagefind.app/) (静态全文检索库)
- **动画**：Astro View Transitions + Framer Motion / GSAP (可选)
- **数据格式**：Markdown (歌词数据源) + Astro Pages (最终呈现)

## 3. 目录结构设计
```text
/src
  /components       # 通用组件（导航栏、搜索框、全局播放器底层）
  /layouts          # 基础布局（首页布局、品牌列表布局、歌词页布局）
  /pages
    index.astro     # 首页（品牌入口）
    /[brand]
      index.astro   # 品牌首页（队伍列表 + 品牌直属歌曲）
      /[team]
        index.astro # 队伍页面（歌曲列表）
        [song].astro # 歌曲详情页（个性化代码）
      [song].astro   # 无队伍的歌曲详情页（个性化代码）
  /content
    /lyrics         # 存放原始 Markdown 歌词数据
/public
  /assets           # 本地静态资源（Logo、小图标）
```

## 4. 核心功能实现方案

### 4.1 “一曲一格”的实现 (The Unique Style)
每一首歌曲都是一个独立的 `.astro` 页面，或者通过 Astro 内容集合（Content Collections）渲染。
- **实现方式**：AI 辅助生成。您提供 Markdown 歌词，AI 根据歌曲风格生成包含特定 HTML 结构、排版样式和 `<style>` 标签的页面。
- **个性化范围**：
  - 变量控制：背景色、主题色、字体库引用。
  - 布局定制：歌词居中、分栏或错落排版。
  - 特效：例如《Shiny Colors》的透明感特效，或《Million Live》的华丽舞台感。

### 4.2 歌词展示逻辑
- **数据源**：直接读取 `/src/content/lyrics/` 下的 Markdown 文件。
- **音频支持**：页面集成简单的 HTML5 `<audio>` 播放器，供用户手动播放音频，不要求同步滚动。

### 4.3 搜索功能
由于是静态网站，使用 **Pagefind**：
- 在构建阶段，Pagefind 会扫描所有生成的 HTML。
- 在前端提供一个轻量级的搜索框，支持歌名、品牌、队伍关键词检索。

### 4.4 品牌与分类逻辑
- **Frontmatter 设计**：在每个 Markdown 歌词或歌曲页面顶部定义元数据：
  ```markdown
  ---
  title: "M@STERPIECE"
  brand: "765PRO ALLSTARS"
  team: "" # 若无则留空
  cover: "https://r2.example.com/covers/masterpiece.jpg"
  audio: "https://r2.example.com/audio/masterpiece.mp3"
  themeColor: "#e0115f"
  ---
  ```

## 5. 视觉与交互规范
- **转场动画**：启用 Astro 的 `ViewTransitions`。当用户从列表页点击进入歌词页时，封面图通过 `view-transition-name` 实现跨页面的平滑放大。
- **响应式适配**：
  - **移动端**：歌词占据全屏，优化阅读体验。
  - **PC端**：利用宽屏展示更多视觉元素（如背景动画、大图）。

## 6. AI 辅助开发工作流 (Prompt 指导)
当您需要新增一首歌时，可以按照以下步骤给 AI 发指令：

1.  **输入**：提供歌曲的 Markdown 歌词、所属品牌、主题风格描述。
2.  **指令示例**：
    > “请基于 Astro 框架为我生成一个歌曲页面。歌曲是《[歌名]》，风格要求是[例如：和风/摇滚/清新]。
    > 1. 请读取 Frontmatter 中的音频和歌词内容。
    > 2. 页面背景需要有符合歌曲意境的 CSS 装饰或动画。
    > 3. 歌词排版请根据歌曲节奏进行错落布局或分段处理。
    > 4. 适配移动端阅读。”

## 7. 部署与维护
1.  **资源托管**：音频和高分辨率大图托管于 Cloudflare R2。
2.  **代码托管**：GitHub。
3.  **自动部署**：关联 Vercel 或 Cloudflare Pages。
