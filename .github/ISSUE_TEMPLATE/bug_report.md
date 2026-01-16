name: 🐛 Bug Report | 错误报告
description: Create a report to help us improve.
title: "[Bug]: "
labels: ["bug"]
body:
  - type: textarea
    id: bug_description
    attributes:
      label: Bug Description | 错误描述
      placeholder: A clear and concise description of what the bug is.
    validations:
      required: true
  - type: textarea
    id: reproduction_steps
    attributes:
      label: Steps to Reproduce | 复现步骤
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true
  - type: input
    id: browser_info
    attributes:
      label: Browser Info | 浏览器信息
      placeholder: e.g. Chrome 120 / iPhone 15 Safari
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots | 截图
      description: Drag and drop or paste screenshots here.
