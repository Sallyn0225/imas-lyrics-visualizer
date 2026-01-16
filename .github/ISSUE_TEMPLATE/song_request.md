name: 🎵 Song Request | 新歌请求
description: Suggest a new song to be added to the archive.
title: "[Song Request]: "
labels: ["song-request"]
body:
  - type: input
    id: song_title
    attributes:
      label: Song Title | 歌曲名称
      placeholder: e.g. Anniversary
    validations:
      required: true
  - type: input
    id: brand
    attributes:
      label: Brand | 品牌项目
      placeholder: e.g. Shiny Colors
    validations:
      required: true
  - type: input
    id: team
    attributes:
      label: Team/Unit | 组合名称
      placeholder: e.g. Alstroemeria
  - type: textarea
    id: lyrics
    attributes:
      label: Lyrics | 歌词内容
      placeholder: Paste the lyrics here...
    validations:
      required: true
  - type: textarea
    id: style_description
    attributes:
      label: Style Description | 风格建议
      placeholder: Describe the visual style, colors, or theme for this song.
