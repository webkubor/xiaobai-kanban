# 📑 小白指导手册 — 目录索引

> 从零开始，跟着编号走，一步步学会用 Agent 写代码。

---

## 🧭 新手入口（从这里开始）

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| 01 | [Agent 是什么？](./docs/what-is-agent.md) | Agent 跟豆包有什么区别（类比+例子） |
| 02 | [我为什么要用？](./docs/why-agent.md) | Agent 能帮我做什么事？值不值得学？ |
| 03 | [3 分钟第一次实战](./docs/first-project.md) | 亲自指挥 Agent 做一个网页！ |
| 04 | [怎么跟 Agent 说话](./docs/how-to-speak-to-agent.md) | 万能公式，让 Agent 更懂你 |
| 05 | [术语大白话词典](./docs/glossary.md) | Git、Token、CLI... 遇到不懂来查 |

## 🚀 快速上手（装工具 + 学流程）

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| 06 | [环境自检](./README.md#第零步自检) | 30 秒检查你的电脑准备好了没 |
| 07 | [安装工具](./README.md#第一步安装-cli-工具) | 装 Git、GitLab CLI、GitHub CLI |
| 08 | [登录配置](./README.md#第二步登录) | Token 申请 + 安全存储 |
| 09 | [Git 工作流](./README.md#第三步gitflow-工作流) | 每天怎么用 Git 干活 |

## 🛠️ 进阶技能

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| 10 | [从零到上线：一条完整心智链](./docs/from-zero-to-shipped.md) | GitLab/GitHub 区别 · 提交代码 · 认识代码 · 开发循环 · 写需求 · 说命令 |
| 11 | [Agent 邮箱](./docs/mail.md) | 申请 Agent 邮箱 + 收发邮件 |
| 12 | [Agent 配合手册](./AGENTS.md) | Agent 怎么读 AGENTS.md 执行任务 |
| 13 | 自动化部署 | 代码推上去自动上线 | 📝 待写 |

## 🧰 配套工具

| 工具 | 用途 | 地址 |
|------|------|------|
| **kyvault** | 安全管理密码 / Token | [webkubor/kyvault](https://github.com/webkubor/kyvault) |
| **Agent Eyes** | Agent 实时监控前端报错 | [webkubor/vite-plugin-agent-eyes](https://github.com/webkubor/vite-plugin-agent-eyes) |
| **contrast-guard** | 配色对比度 + 视觉质量护栏 | [webkubor/contrast-guard](https://github.com/webkubor/contrast-guard) |
| **VoxFlow** | AI 声音到 AI 音乐 | [webkubor/voxflow](https://github.com/webkubor/voxflow) |
| **scorecard** | 开源项目八维度质检 | [scorecard.webkubor.online](https://scorecard.webkubor.online) |

> 完整工具箱与「把这些仓库当上游」的维护规则见 [README](./README.md#-给-agent把这些仓库当成上游)。

## 🧑‍💼 角色指南

| 角色 | 入口 | 说明 |
|------|------|------|
| 👤 小白用户 | [README.md](./README.md) | 从头开始看，跟着步骤走 |
| 🤖 AI Agent | [AGENTS.md](./AGENTS.md) | Agent 读这个，知道怎么干活 |

## 📁 仓库结构

```
xiaobai-kanban/
├── README.md          👤 小白入口（学习路径 + 工具箱 + 安装步骤）
├── AGENTS.md          🤖 Agent 入口（操作手册 + 平台指引）
├── INDEX.md           📑 本文件（目录索引）
├── LICENSE            📄 MIT 开源协议
└── docs/              📝 教程文档
    ├── what-is-agent.md         Agent 是什么（跟豆包的区别）
    ├── why-agent.md             我为什么要用 Agent
    ├── first-project.md         3 分钟第一次实战
    ├── how-to-speak-to-agent.md 怎么跟 Agent 说话
    ├── from-zero-to-shipped.md  从零到上线（GitLab/GitHub 区别、提交、读代码、开发、写需求、说命令）
    ├── glossary.md              术语大白话词典
    └── mail.md                  邮件能力配置指南
```

---

> 💡 想加新章节？直接对 Agent 说「帮我在小白看板加一篇 xxx 的教程」。
