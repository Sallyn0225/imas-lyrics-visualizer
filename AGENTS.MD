# Sisyphus 代理协作体系 (AGENTS.MD)

本文档定义了“偶像大师歌词库”项目中的 AI 代理 (Agents) 协作模式，旨在通过跨角色的深度配合，实现 **“一曲一格 (One Song, One Style)”** 的极致视觉表现。

## 1. 代理角色定义

| 角色 | 核心职责 | 典型使用场景 |
| :--- | :--- | :--- |
| **Sisyphus (Orchestrator)** | 架构演进、任务编排、基础设施与多平台部署策略 | 全局架构重构、`vercel.json`/`netlify.toml` 维护、复杂逻辑实现 |
| **Frontend UI/UX Engineer** | 极致视觉呈现、CSS 艺术、交互动效 | **定制单曲页面开发**、全局播放器美化、视觉特效 (VFX) |
| **Librarian** | 资源调研、第三方库选型、资产管理 | 寻找高性能 WebGL 效果、字体子集化建议、CSS 技巧探索 |
| **Document Writer** | 技术文档编排、语言润色、品牌一致性维护 | 维护 `README.md`, `my-plan.md`, `AGENTS.MD`，并负责建立响应式技术标准 |
| **Explore** | 代码库嗅探、结构一致性校验 | 检查新增歌曲路由、分析全局样式冲突、上下文检索 |

---

## 2. 核心工作流：新增一首“定制单曲”

为了实现真正的个性化，新增歌曲遵循 **“元数据注册 -> 灵魂注入”** 的分工模式：

### 步骤 A：元数据注册 (Sisyphus)
1. **查重校验**：在创建新曲目前，检查 `src/content/lyrics` 是否已存在同名或同品牌曲目，避免因中英文命名不一致（如 `gkmas` vs `Gakuen`）导致的冗余。
2. 在 `src/content/lyrics/[brand]/[team]/[song].md` 创建结构化数据。
3. **架构验证**：运行 `npm run build` 或使用 `Explore` 代理检查 Frontmatter 完整性（必须包含 `title`, `brand`, `cover`, `audio`）。
4. 确保 `themeColor` 与 `layoutType` 准确定义了视觉基调。

### 步骤 B：灵魂注入 (Frontend UI/UX Engineer)
1. **输入**：Markdown 元数据、歌曲意境描述（如：空灵、华丽、赛博朋克）。
2. **执行**：
    - 在 `src/pages/[brand]/[team]/[song].astro` 构建专属页面。
    - **路由同步**：若自定义页面 slug（如 `sunfaded`）与元数据文件名（如 `サンフェーデッド`）不一致，必须在路由逻辑中建立映射。
    - 编写该歌曲专用的 HTML 骨架与 CSS 动画。
    - 实现与歌词情感共鸣的交互效果（如：随着副歌滚动的光晕）。
    - **响应式审计**：执行 `docs/RESPONSIVE_GUIDE.md` 中的 [Mobile Compatibility Checklist]。

---

## 3. 视觉规范与技术标准

- **基础框架**：Astro 5 + Tailwind CSS 4。
- **核心原则**：
    - **响应式优先 (Responsive-First)**：所有页面必须通过 `100vw` 边界检查，大号文字须具备换行策略，装饰性背景元素必须有 `overflow-hidden` 约束（详见 `docs/RESPONSIVE_GUIDE.md`）。
    - **转场 (Transitions)**：必须启用 `ViewTransitions` 实现封面图的英雄动画。

    - **滚动 (Scrolling)**：利用 `IntersectionObserver` 或原生 CSS 滚动驱动动画。
    - **性能 (Performance)**：视觉特效优先使用 CSS，Canvas 仅作为增强手段。
    - **音频 (Audio)**：所有音频播放器组件（含定制页面与通用模板）必须包含音量控制组件，且默认音量需设为 `0.5` (中等)。
- **响应式**：移动端优先 (Mobile First)，PC 端增强 (Desktop Enhanced)。

---

## 4. 指令协作示例 (Prompts)

### 给 Frontend UI/UX Engineer：
> “请为歌曲《サンフェーデッド》设计一个专属的 Astro 页面。
> - **调性**：筱泽广个人曲，日光褪色的质感，紫灰色调。
> - **动效**：歌词采用错落排版，副歌部分文字需有‘过曝’的光晕扩散感。
> - **背景**：实现一种类似老胶片颗粒感的 CSS 渐变噪点背景。”

---

## 5. 文档维护规范

任何系统级变更后，必须由 **Document Writer** 同步更新以下资产，确保项目“言行一致”：
- `README.md`: 项目门户与快速上手。
- `my-plan.md`: 开发进度与架构蓝图。
- `AGENTS.MD`: 代理协作契约。

---

*由 Sisyphus 代理体系维护 | 最后更新：2026-01-17*
