# Sisyphus 代理协作体系 (AGENTS.MD)

本文档为“偶像大师歌词库”项目的核心工程规范，定义了 AI 代理 (Agents) 如何协作实现 **“一曲一格 (One Song, One Style)”** 的极致视觉表现。所有参与代码编写、资产管理或文档润色的代理必须严格遵守。

## 1. 代理角色与协作矩阵 (Agents & Collaboration)

| 角色 | 核心职责 | 协作依赖 |
| :--- | :--- | :--- |
| **Sisyphus** | 架构演进、部署策略 (`vercel.json`), 路由编排 | 审核 UI Engineer 的路由过滤逻辑 |
| **UI/UX Engineer** | CSS 艺术、定制化 `.astro` 页面、VFX 特效 | 依赖 Librarian 提供的技术调研 |
| **Librarian** | 第三方库选型 (Pagefind, WebGL), 字体优化 | 为 UI Engineer 提供高性能方案 |
| **Document Writer** | 维护 `AGENTS.MD`, `README.md`, `CONTRIBUTING.md` | 在 Sisyphus 变更架构后同步更新 |
| **Explore** | 全局一致性校验, 检查 Slug 冲突 | 为所有角色提供上下文检索与审计 |

---

## 2. 工程指令集 (Commands & Verification)

### 2.1 核心指令
- **开发环境**: `npm run dev` (启动 Astro 本地服务器)
- **静态构建**: `npm run build` (生成产物并自动触发 `postbuild` 索引)
- **搜索索引**: `npm run postbuild` (由 Pagefind 执行，产物位于 `dist`)
- **预览**: `npm run preview` (本地预览生产环境产物)
- **类型审计**: `npm run astro check` (交付代码前必须执行，确保 TypeScript 与 Astro 语法无误)

### 2.2 测试与验证规范
- **单项测试**: 本项目目前暂未引入 `vitest`。如需进行组件逻辑测试，请先咨询 **Sisyphus** 进行测试环境初始化。
- **视觉回归**: 手动执行 `docs/RESPONSIVE_GUIDE.md` 中的 [Mobile Compatibility Checklist]。
- **SEO 校验**: 检查生成产物的 `<title>` 与 `<meta description>` 是否包含歌曲元数据。

---

## 3. 技术规范与代码风格 (Technical Standards)

### 3.1 命名约定 (Naming Conventions)
- **内容 Slug**: 必须使用 **小写英文 + 下划线** (例如 `shiny_stories.md`)。严禁使用中日文字符作为文件名，以防止在 Vercel/GitHub Pages 等环境下的编码冲突。
- **目录/路由**: 遵循 Astro 约定，品牌与团队目录使用 `kebab-case` (例如 `shiny-colors/alstroemeria`)。
- **变量与类型**: 使用 TypeScript 标准 `camelCase`。
- **CSS 类名**: 优先使用 Tailwind CSS 4 实用类；定制样式建议使用 `custom-` 前缀以作区分。

### 3.2 导入与模块 (Imports & Modules)
- **TypeScript**: 强制开启严格模式。禁止使用 `any`，所有复杂对象必须定义 `interface` 或 `type`。
- **Astro 组件**: 必须在 Frontmatter 部分定义 `interface Props`。
- **静态资产**: 优先通过 `import.meta.env.BASE_URL` 处理路径，确保在子目录部署时 `favicon` 与 `assets` 加载正确。

### 3.3 内容管理 (Content Collections)
- **Schema 强制**: 所有 Markdown 必须通过 `src/content.config.ts` 的 Zod 校验。
- **必填字段**: `title`, `brand`, `cover`, `audio`, `layoutType`, `themeColor`。
- **layoutType**: 
  - `standard`: 使用通用模板。
  - `custom`: 意味着该歌曲拥有独立的 `.astro` 页面，Sisyphus 需负责配置路由过滤。

### 3.4 响应式与 UI 准则 (Responsive & UI)
- **边界约束**: 严禁在大屏幕下出现横向滚动条。
- **视觉 Containment**: 任何 `absolute` 或 `fixed` 的装饰性背景元素必须包裹在 `overflow-hidden` 的容器中。
- **流体排版**: 
  - 避免 `text-9xl` 等固定巨型字。
  - 使用 `text-4xl md:text-7xl` 或 `clamp(2rem, 5vw, 5rem)` 处理标题。
- **交互性能**: 优先使用 CSS 硬件加速 (`transform`, `opacity`)，避免频繁触发 Layout Reflow。

---

## 4. 关键工作流：定制单曲开发 (Custom Song Workflow)

### 步骤 1: 元数据准备 (Sisyphus)
- 在 `src/content/lyrics/[brand]/[team]/[song_slug].md` 注册数据。
- 将 `layoutType` 显式设为 `custom`。
- 确认 `themeColor` 的 Hex 值是否与封面视觉调性匹配。

### 步骤 2: 页面注入 (Frontend UI/UX Engineer)
- 创建 `src/pages/[brand]/[team]/[song_slug].astro`。
- **路由过滤**: 必须检查并修改 `src/pages/[brand]/[team]/[song].astro` (通用路由)，在 `getStaticPaths` 中过滤掉 `layoutType: 'custom'` 的条目。
- **视觉适配**: 遵循“一曲一格”原则，通过 `themeColor` 驱动全局 CSS 变量。

### 步骤 3: 脚本生命周期审计 (Explore/UI)
- **View Transitions**: 严禁使用 `DOMContentLoaded`。所有客户端 JS 必须封装在 `astro:page-load` 监听器中。
- **清理逻辑**: 离开页面时必须断开 `IntersectionObserver` 或 `requestAnimationFrame`，防止内存泄漏。

---

## 5. 视觉特效与交互 (VFX & Interaction)

### 5.1 关键词特效 (Keyword Enhancements)
- 通用组件通过 `enhanceText` 函数自动扫描歌词中的关键词（如 "夢", "愛", "光"）。
- UI Engineer 可在定制页面中通过 `src/styles/global.css` 扩展 `.kw-` 类名来实现特定的粒子或发光效果。

### 5.2 滚动驱动动画 (Scroll-Driven Storytelling)
- 强制使用 `Intersection Observer` 实现歌词的淡入与位移。
- 定制页面应利用 `CSS scroll-timeline` (如环境支持) 或 `requestAnimationFrame` 确保动画的丝滑感。

---

## 6. 异常处理与故障排除 (Error Handling)

- **构建失败**: 首先检查 `src/content.config.ts` 是否有字段冲突，或 Slug 是否包含空格、大写字母。
- **脚本失效**: 检查是否因 View Transitions 导致脚本未重新执行。
- **样式逃逸**: 检查 `BaseLayout` 是否被覆盖，或是否有元素使用了 `width: 100vw` 而未考虑滚动条宽度。
- **音频加载**: 检查 `audio` URL 是否为有效链接且支持跨域。

---

## 7. 核心库与工具 (Tooling)

- **Astro 5**: 利用最新的 Content Layer API。
- **Tailwind 4**: 使用 Vite 插件集成的渲染引擎。
- **Pagefind**: 仅在静态产物生成后有效，开发环境下不可用。
- **Lyrics Parser**: `src/utils/lyrics-parser.ts` 负责将 Markdown 拆解为段落。

---

## 8. 协作契约 (The Contract)

1. **先读后写**: 修改核心架构 (如 `BaseLayout` 或 `global.css`) 前，必须调用 `Explore` 评估全站影响。
2. **文档同步**: 完成非琐碎的功能更新后，必须由 **Document Writer** 同步更新相关 MD 文档。
3. **视觉对齐**: 每一个 Custom Layout 都应包含封面英雄动画 (Hero Animation) 与响应式审计。
4. **代码简洁**: 优先使用 CSS 方案，减少对复杂 JS 逻辑的依赖。

---

*由 Sisyphus 代理体系维护 | 版本: 2.1.0 | 最后更新: 2026-01-17*
