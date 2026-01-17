# Sisyphus 代理协作体系 (AGENTS.MD)

本文档定义了“偶像大师歌词库”项目中的 AI 代理 (Agents) 协作模式，旨在实现 **“一曲一格 (One Song, One Style)”** 的极致视觉表现。

## 1. 代理角色定义

| 角色 | 核心职责 | 使用场景 |
| :--- | :--- | :--- |
| **Sisyphus (Orchestrator)** | 架构设计、任务编排、工程实现 | 全局指挥、重构、复杂逻辑实现 |
| **Frontend UI/UX Engineer** | 极致视觉呈现、CSS 动画、响应式布局 | **定制单曲页面**、全局播放器美化、特效实现 |
| **Librarian** | 外部资源调研、三方库最佳实践 | 寻找特殊的 WebGL 效果、字体库或 CSS 技巧 |
| **Document Writer** | 技术文档撰写、用户指南、README | 维护 `README.md`, `my-plan.md`, `AGENTS.MD` |
| **Explore** | 代码库上下文检索、结构一致性检查 | 确保新加歌曲路径正确、全局样式不冲突 |

---

## 2. 核心工作流：新增一首“定制单曲”

为了实现真正的个性化，新增歌曲遵循 **“数据注册 -> 灵魂注入”** 的分工模式：

### 步骤 A：元数据注册 (Sisyphus)
1.  在 `src/content/lyrics/[brand]/[team]/[song].md` 创建元数据。
2.  确保 `layoutType` 字段定义了预期的风格基调。

### 步骤 B：灵魂注入 (Frontend UI/UX Engineer)
1.  **输入**：提供 Markdown 内容及视觉风格描述。
2.  **执行**：
    -   在 `src/pages/[brand]/[team]/[song].astro` 创建独立文件。
    -   编写该歌曲专用的 HTML 结构。
    -   设计专属 CSS 变量、`@keyframes` 动画和背景装饰。
    -   实现与歌曲意境相符的交互效果。

---

## 3. 视觉规范与技术栈

-   **基础框架**：Astro 5 + Tailwind CSS 4。
-   **动画原则**：
    -   **转场**：必须利用 Astro `ViewTransitions` 实现封面图的跨页英雄转场。
    -   **滚动**：利用 `IntersectionObserver` 实现歌词的随动浮现。
    -   **氛围**：使用 CSS 背景渐变动画或轻量级 Canvas 粒子系统。
-   **响应式**：移动端优先（Mobile First），PC 端利用宽屏优势展示更多背景元素。

---

## 4. 协作指令示例 (Prompts)

### 给 Frontend UI/UX Engineer：
> “请为歌曲《サンフェーデッド》设计一个专属的 Astro 页面。
> - **风格**：筱泽广个人曲，带有浓郁的日光褪色感和紫灰色调。
> - **布局**：歌词采用错落排版，副歌部分文字需有‘过曝’的光晕效果。
> - **背景**：实现一种像老照片褪色一样的 CSS 噪点渐变背景。”

---

## 5. 文档维护规范

任何架构层面的调整（如目录结构变更、新路由方案引入）后，必须调用 **Document Writer** 或具有 `docs-write` 技能的代理同步更新以下文件：
-   `README.md`: 项目概览与快速启动。
-   `my-plan.md`: 开发进度与技术细节。
-   `AGENTS.MD`: 代理协作规范。

---

*由 Sisyphus 代理体系维护 | 最后更新：2026-01-17*
