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
| 06 | [认识 CLI：AI 的手脚](./docs/about-cli.md) | CLI 是什么、为什么 AI 离不了它、GitLab/GitHub/飞书三个 CLI 各管什么 |
| 07 | [环境自检](./README.md#第零步自检) | 30 秒检查你的电脑准备好了没 |
| 08 | [安装工具](./README.md#第一步安装-cli-工具) | 装 Git、GitLab CLI、GitHub CLI |
| 09 | [登录配置](./README.md#第二步登录) | Token 申请 + 安全存储 |
| 10 | [Git 工作流](./README.md#第三步gitflow-工作流) | 每天怎么用 Git 干活 |

## 🎵 vibe coding 主线（会用 AI 写代码的看这条）

> 前面的 01~15 教你**入门**。这条主线教你**用好**——
> 已经能让 AI 写代码，但总觉得来回改很多轮还差点意思，你缺的是节奏感。

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| 🗺️ | [vibe coding 主线地图](./docs/vibe-coding-path.md) | 这条线讲什么、怎么走、只读一篇该读哪篇 |
| V1 | [什么是 vibe coding](./docs/vibe-coding-what.md) | 它和「让 AI 写代码」的根本区别；三种失控 |
| V2 | [一轮该做多小](./docs/vibe-coding-loop.md) | 粒度参照表、每轮四步、每轮必问的三句话 |
| V3 | [不会写代码，怎么验收](./docs/vibe-coding-review.md) | ⭐ 三个信号、红线信号表、纠偏三招 |
| V4 | [人机分工与长期不失控](./docs/vibe-coding-boundary.md) | 分工表、三条红线、上下文管理四招 |

## 💰 省钱与配置（不想花钱的看这条）

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| M1 | [装上 magpie：不花钱用 AI 编程](./docs/magpie.md) | 三阶段装好 magpie、开脱敏隐私模式、挂 Agent、用免费模型额度 |

> 💡 为什么单独列一条线：**「AI 编程要花多少钱」是小白第一个会问、也最容易误解的问题。**
> 很多人以为必须订阅 Claude Code / Codex（每月十几二十美元），还没开始就劝退了。
> 实际上国内一线模型都有免费额度，配合 magpie 本地网关，**一分钱不用花**。

## 🛠️ 进阶技能

| 编号 | 章节 | 你能学到什么 |
|:--:|------|-------------|
| 11 | [从零到上线：一条完整心智链](./docs/from-zero-to-shipped.md) | Agent 是什么 · GitLab/GitHub 区别 · 提交代码 · 认识代码 · Web/代码工程 · 开发循环 · 说命令 |
| 12 | [怎么把需求讲清楚](./docs/how-to-write-requirements.md) | ⭐ 最重要：背景+目标+范围+验收，填空模板 + 自检清单 |
| 13 | [Agent 邮箱](./docs/mail.md) | 申请 Agent 邮箱 + 收发邮件 |
| 14 | [Agent 配合手册](./AGENTS.md) | Agent 怎么读 AGENTS.md 执行任务 |
| 15 | 自动化部署 | 代码推上去自动上线 | 📝 待写 |

## 🧰 配套工具：遇到这个场景就装这个

全部 38 个公开仓库、中文关键词和单独介绍页见 [开源工具箱](./docs/tools/index.md)。
想找图片托管？直接看 [免费图床 free-imgbed](./docs/tools/free-imgbed.md)。

| 接下来想做 | 推荐入口 |
|---|---|
| 第一次做 AI 配图或封面 | [MUSE 新手手册](https://docs.museav.top/start/first-image) → [网页出图](https://museav.top)；批量出图再看 [museav-cli](./docs/tools/museav-cli.md) |
| 给 DSH 选模型、素材或主题插件 | [模型管理](./docs/tools/dsh-llm-hub.md) · [素材库](./docs/tools/dsh-museav-assets.md) · [主题](./docs/tools/dsh-bloom-theme.md) |
| 不知道该装哪个命令行工具 | [SuperCLI 工具目录](https://supercli.site) —— 按用途和厂商搜 |
| 配置本地模型网关 | [magpie 三阶段教程](./docs/magpie.md) |
| 看经验与项目复盘 | [webkubor 博客文章](https://webkubor.online/articles) |

> 💡 不确定该选哪个？到[关于我们页](./docs/about.md#卡住了-直接问)扫码，备注「小白看板 + 用途 + 卡点」。这里放客服是为了让工具推荐能结合你实际用的 Agent、模型和设备；教程与开源工具仍可直接使用。

> 完整清单（含安装命令）见 [README 的工具箱](./README.md#🔧-我做的工具-按你会遇到的场景挑)。

| 你遇到 | 用这个 | 直接打开 / 安装 |
|------|------|------|
| Token、密码不知道该放哪 | **kyvault** | [官网](https://webkubor.github.io/kyvault/) · `cargo install kyvault` |
| 不知道项目还有哪些要补 | **scorecard** | [网页直接用](https://scorecard.webkubor.online)，不用装 |
| 要出封面 / 配图 / 表情包 | **MUSE AV** | [museav.top](https://museav.top) 注册即用 |
| 想把微信聊天做成效果图 | **chat-mood-gen** | [wechat.webkubor.online](https://wechat.webkubor.online) |
| Agent 改完代码看不出对不对 | **Agent Eyes** | `npm i -D vite-plugin-agent-eyes` |
| 配色对比度总被说看不清 | **contrast-guard** | `npm i -g contrast-guard` |
| 发新版后用户还在用旧页面 | **refresh-guard** | `npm i -D vite-plugin-refresh-guard` |
| 想批量做竖版短视频 | **reel-kit** | `npm i -g @kubor/reel-kit` |
| 想在 Mac 上做语音 / 播客 / BGM | **VoxFlow** | [仓库](https://github.com/webkubor/voxflow) |
| 写长文嫌 Typora 默认主题累 | **Bloom** | [bloom.webkubor.online](https://bloom.webkubor.online/) |

> 看不懂 `npm i` / `cargo install`？先看 [认识 CLI：AI 的手脚](./docs/about-cli.md)。
> 或者直接把命令丢给你的 Agent：「帮我装这个」。

## 🧑‍💼 角色指南

| 角色 | 入口 | 说明 |
|------|------|------|
| 👤 小白用户 | [README.md](./README.md) | 从头开始看，跟着步骤走 |
| 🎵 会用 AI 写代码的人 | [vibe coding 主线](./docs/vibe-coding-path.md) | 已经能写代码，想学怎么写得又快又准 |
| 🤖 AI Agent | [AGENTS.md](./AGENTS.md) | Agent 读这个，知道怎么干活 |
| 💬 卡住想找人问 | [关于我们 / 加客服](./docs/about.md) | 答疑免费，不绑定任何工具 |

## 💬 关于我们

| 想知道 | 去哪看 |
|--------|--------|
| 这个站是谁做的、为什么免费 | [关于我们](./docs/about.md) |
| 我们靠什么活着（哪些收费、哪些永远免费） | [关于我们 · 收入来源](./docs/about.md#这些内容为什么免费) |
| 装不上 / 报错看不懂，想找人看 | [加客服答疑](./docs/about.md#卡住了-直接问) |

## 📁 仓库结构

```
xiaobai-kanban/
├── index.md           🏠 站点首页（两条入口：小白 / Agent）
├── README.md          👤 小白入口（学习路径 + 工具箱 + 安装步骤）
├── AGENTS.md          🤖 Agent 入口（操作手册 + 平台指引）
├── catalog.md         📑 本文件（目录索引）
├── LICENSE            📄 MIT 开源协议
├── .vitepress/        ⚙️ 站点配置（VitePress）
│   ├── config.mts     导航 / 侧边栏 / SEO
│   └── theme/         自定义主题（配色、排版、悬浮客服入口）
├── public/llms.txt    🤖 给 LLM 的站点索引
├── scripts/           🔧 构建辅助（把原文复制进产物）
└── docs/              📝 教程文档
    ├── what-is-agent.md         Agent 是什么（跟豆包的区别）
    ├── why-agent.md             我为什么要用 Agent
    ├── first-project.md         3 分钟第一次实战
    ├── how-to-speak-to-agent.md 怎么跟 Agent 说话
    ├── about-cli.md            认识 CLI：AI 的手脚（CLI vs MCP、GitLab/GitHub/飞书三个 CLI）
    ├── from-zero-to-shipped.md  从零到上线（Agent 是什么、GitLab/GitHub 区别、提交、读代码、Web/代码工程、开发、说命令）
    ├── how-to-write-requirements.md 怎么把需求讲清楚（最重要的一课）
    ├── glossary.md              术语大白话词典
    ├── mail.md                  邮件能力配置指南
    ├── magpie.md               💰 装上 magpie：不花钱用 AI 编程
    │
    └── 🎵 vibe coding 主线（进阶）
        ├── vibe-coding-path.md      主线地图（先读这篇）
        ├── vibe-coding-what.md      V1 什么是 vibe coding
        ├── vibe-coding-loop.md      V2 一轮该做多小（迭代节奏）
        ├── vibe-coding-review.md    V3 怎么验收与纠偏（红线信号表）
        └── vibe-coding-boundary.md  V4 人机分工与长期不失控
```

---

> 💡 想加新章节？直接对 Agent 说「帮我在小白看板加一篇 xxx 的教程」。
