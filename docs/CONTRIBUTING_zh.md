# 贡献指南

感谢你对 **偶像大师歌词档案馆 (iDOLM@STER Lyrics Archive)** 项目的关注！本指南将帮助你了解如何添加新歌词以及遵循项目的结构规范。

## 📁 歌词项目结构

所有歌词都以 Markdown 文件的形式存储在 `src/content/lyrics/` 目录下。它们按品牌组织：
```text
src/content/lyrics/
└── [brand-slug]/
    └── [song-slug].md
```

## 📝 添加新歌曲

要添加新歌曲，请在相应的品牌文件夹中创建一个 `.md` 文件。

### 1. Frontmatter 属性架构 (Schema)

每个歌曲文件顶部必须包含 YAML 格式的 Frontmatter 元数据：

```yaml
---
title: "歌曲标题"            # 歌曲的显示名称
brand: "Shiny Colors"      # 品牌名称（例如：Million Live, Shiny Colors）
team: "Alstroemeria"       # 组合或团体名称
themeColor: "#ff699e"      # 主题色（十六进制颜色代码）
cover: "https://url.to/img" # 封面图 URL
audio: "https://url.to/mp3" # 音频文件 URL
layoutType: "alstroemeria" # 使用的视觉模板类型
---
```

### 2. Markdown 正文结构

Markdown 文件的正文通过 `##` 二级标题解析为不同的区块。这允许为歌曲的不同部分提供特定的视觉处理。

可选的区块类型：
- `## intro`: 用于开场的、大号且纤细的衬线体文字。
- `## bridge-thin`: 用于间奏 (Bridge) 的花体/手写风格文字。
- `## chorus`: 粗体大号文字，带有背景大标题。
- `## chorus-alt`: 副歌布局的变体。
- `## split-view`: 两栏布局，用于重叠或对话式歌词。使用 `---` 分隔左栏和右栏。
- `## vertical-stack`: 大号堆叠文字，用于极具冲击力的歌词。

#### 示例：
```markdown
## intro
第一行开场白
第二行开场白

## chorus
副歌主句 1
副歌主句 2

## split-view
左侧歌词
---
右侧歌词
```

## 🎨 "layoutType" 概念

Frontmatter 中的 `layoutType` 决定了歌曲使用的视觉模板。
- 目前，`alstroemeria` 是主要的高端模板。
- 未来可以添加更多模板（例如 `straylight`, `noctchill`），只需创建新的组件并在 `[song].astro` 中进行映射即可。

## 🛠️ 开发工作流

1. **添加内容**：在 `src/content/lyrics/` 中创建你的 `.md` 文件。
2. **预览**：运行 `npm run dev` 以查看更改。
3. **关键词视觉特效 (VFX)**：关键词如 "夢"、"愛" 和 "笑顔" 会自动增强。你可以在 `src/pages/[brand]/[team]/[song].astro` 的 `keywords` 数组中添加更多关键词。
