---
layout: home

hero:
  name: 🧭 小白看板
  text: 让 Agent 帮你写代码
  tagline: 你只说话，Agent 搞定一切。不需要懂代码、不需要懂命令行。
  actions:
    - theme: brand
      text: 👤 我是小白，从头开始
      link: /docs/what-is-agent
    - theme: alt
      text: 🎵 我会用 AI 写代码，想学 vibe coding
      link: /docs/vibe-coding-path
    - theme: alt
      text: 🤖 我是 Agent，读操作手册
      link: /AGENTS
    - theme: alt
      text: 📑 先看目录
      link: /catalog

features:
  - icon: 👤
    title: 给真人（小白）
    details: 从「Agent 是什么」开始，跟着 01→13 的编号走。每篇 3~10 分钟，看完能自己指挥 Agent 做一个网页、把代码推上线。
    link: /README
    linkText: 从小白入口开始
  - icon: 🎵
    title: 给会用 AI 写代码的人
    details: 四篇主线讲透 vibe coding：一轮该做多小、不会写代码怎么验收、跑偏了怎么拉回来、项目变大怎么不失控。
    link: /docs/vibe-coding-path
    linkText: 进 vibe coding 主线
  - icon: 💰
    title: 给不想花钱的人
    details: AI 编程一定要订阅 Claude / Codex 吗？不用。国内一线模型都有免费额度，配合 magpie 本地网关，一分钱不花。
    link: /docs/magpie
    linkText: 看怎么不花钱
  - icon: 🤖
    title: 给 AI Agent
    details: AGENTS.md 是操作手册：先自检你是哪个框架（Hermes / OpenCLAW / Claude Code / Codex），再装密钥工具、跑前置自检、按平台推送代码。
    link: /AGENTS
    linkText: 读 AGENTS.md
  - icon: 🧰
    title: 配套工具
    details: kyvault 管密钥、Agent Eyes 盯前端报错、contrast-guard 做视觉护栏……完整工具箱与维护规则见 README。
    link: /README
    linkText: 打开工具箱
---

## 你是哪一类读者？

这个站点服务两类人，入口不同，内容也不一样。**先认领自己那一条**：

| 你是 | 从哪开始 | 说明 |
|------|---------|------|
| 👤 **不懂代码的人** | [小白入口 → README](/README) | 从头看，跟着步骤走。不用先学任何东西。 |
| 🎵 **会用 AI 写代码，但总感觉差点意思** | [vibe coding 主线](/docs/vibe-coding-path) | 你缺的不是工具，是节奏感。四篇主线把「一轮做多少、怎么验收、何时该停」讲透。 |
| 💰 **不想花钱用 AI 编程** | [装上 magpie](/docs/magpie) | 以为必须订阅 Claude / Codex？不用。国内一线模型有免费额度，一分钱不花。 |
| 🤖 **AI Agent** | [Agent 入口 → AGENTS.md](/AGENTS) | 收到任务先读这份，它会告诉你怎么自检、怎么干活。 |
| 🧑‍💻 **正在带一个不懂代码的用户** | 先读 [AGENTS.md](/AGENTS)，再按编号引导他 | Agent 自己读完操作手册，再去带人。 |

## 学习路径一览

跟着编号走，不跳步：

| 编号 | 章节 | 花多久 | 看完你会 |
|:--:|------|:--:|---------|
| 01 | [Agent 是什么？](/docs/what-is-agent) | 3 分钟 | 知道这玩意跟豆包有什么区别 |
| 02 | [我为什么要用？](/docs/why-agent) | 4 分钟 | 判断它值不值得学 |
| 03 | [3 分钟第一次实战](/docs/first-project) | 3 分钟 | 亲自指挥 Agent 做出一个网页 |
| 04 | [怎么跟 Agent 说话](/docs/how-to-speak-to-agent) | 6 分钟 | 掌握万能公式，它更懂你 |
| 05 | [术语大白话词典](/docs/glossary) | 查用 | Git、Token、CLI 不再懵 |
| 06 | [认识 CLI：AI 的手脚](/docs/about-cli) | 8 分钟 | 明白为什么 AI 离不开命令行 |
| 07-10 | [自检 / 安装 / 登录 / Git 工作流](/README) | 20 分钟 | 环境就绪，能自己提交代码 |
| 11 | [从零到上线](/docs/from-zero-to-shipped) | 15 分钟 | 走通一条完整心智链 |
| 12 | [怎么把需求讲清楚](/docs/how-to-write-requirements) ⭐ | 10 分钟 | 最重要的一课：说明书写得对，活就干得对 |
| 13 | [申请 Agent 邮箱](/docs/mail) | 5 分钟 | 让 Agent 能收发邮件 |

## 💰 不想花钱？先看这条

AI 编程一定要订阅 Claude Code / Codex 吗？**不用。** 国内一线模型都有免费额度，配合 magpie 这个本地网关，**一分钱不花**。

| | 章节 | 花多久 | 看完你会 |
|:--:|------|:--:|---------|
| M1 | [装上 magpie：不花钱用 AI 编程](/docs/magpie) | 15 分钟 | 装好 magpie、开脱敏隐私模式、挂上 Agent、用上免费模型 |

> 📌 纯按量付费的话，一个月花掉 ¥1756、¥2162 很常见——**不是模型贵，是用错了付费方式。**

👉 **[看 magpie 教程 →](/docs/magpie)**

## 🎵 vibe coding 主线（会用 AI 写代码的看这条）

上面 13 篇教你**入门**。这条主线教你**用好**——如果你已经能让 AI 写代码，但总觉得来回改很多轮还差点意思，你缺的是节奏感。

| | 章节 | 花多久 | 看完你会 |
|:--:|------|:--:|---------|
| V1 | [什么是 vibe coding](/docs/vibe-coding-what) | 8 分钟 | 它和「让 AI 写代码」的根本区别 |
| V2 | [一轮该做多小](/docs/vibe-coding-loop) | 10 分钟 | 粒度、什么时候打断、每轮必问的三句话 |
| V3 | [不会写代码，怎么验收](/docs/vibe-coding-review) ⭐ | 12 分钟 | 三个信号、红线信号表、纠偏三招 |
| V4 | [人机分工与长期不失控](/docs/vibe-coding-boundary) | 10 分钟 | 分工表、三条红线、上下文管理 |

👉 **[看主线地图 →](/docs/vibe-coding-path)**

## 给 Agent 的一句话指引

如果你是被用户指过来的 Agent，直接取 **`/AGENTS.md`**（纯 Markdown，没有网页包装）：

```
https://xiaobai.webkubor.online/AGENTS.md
```

本站在每个页面路径后加 `.md` 就是它的原文；全部机器可读入口见 [`/llms.txt`](/llms.txt) 与 [`/documents.json`](/documents.json)。
