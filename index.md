---
layout: home

hero:
  name: 🧭 小白看板
  text: 让 Agent 帮你写代码
  tagline: 从免费工具和入门教程开始，学着指挥 Agent 做出、验收并发布自己的作品。
  actions:
    - theme: brand
      text: 👤 我是小白，从头开始
      link: /docs/what-is-agent
    - theme: alt
      text: 🎵 我会用 AI 写代码，想学 vibe coding
      link: /docs/vibe-coding-path
    - theme: alt
      text: 💰 从免费额度开始
      link: /docs/magpie
    - theme: alt
      text: 📑 先看目录
      link: /catalog

features:
  - icon: 👤
    title: 给真人（小白）
    details: 从「Agent 是什么」开始，跟着 01→13 的编号走。每篇 3~10 分钟，看完能自己指挥 Agent 做一个网页、把代码推上线。
    link: /README
    linkText: 从小白入口开始
  - icon: 💰
    title: 给不想花钱的人
    details: AI 编程可以先用可用的免费额度。了解 magpie 本地网关怎么配置，再根据用量和当前活动决定是否付费。
    link: /docs/magpie
    linkText: 看怎么不花钱
  - icon: 🎵
    title: 给会用 AI 写代码的人
    details: 四篇主线讲透 vibe coding：一轮该做多小、不会写代码怎么验收、跑偏了怎么拉回来、项目变大怎么不失控。
    link: /docs/vibe-coding-path
    linkText: 进 vibe coding 主线
  - icon: 🎨
    title: 出图与创作
    details: 第一次出图看 MUSE 手册；有批量与自动化需求再了解 museav-cli。按用途选择网页或终端入口。
    link: /docs/tools/museav-cli
    linkText: 找到出图入口
  - icon: 🧰
    title: 开源工具与 DSH 插件
    details: 38 个公开仓库按场景查找；DSH 模型管理、素材浏览、主题都有独立说明。
    link: /docs/tools/index
    linkText: 打开工具箱
  - icon: 📇
    title: 找命令行工具
    details: 记不住工具叫什么？SuperCLI 按用途和厂商搜 CLI，带 GitHub Stars 快照排名，社区通过 PR 贡献。
    link: https://supercli.site
    linkText: 打开 SuperCLI
  - icon: 📝
    title: 读我的博客
    details: 看 AI 创作、开发经验与项目复盘；教程之外的思路和踩坑记录集中在 webkubor 博客。
    link: https://webkubor.online/articles
    linkText: 打开博客
  - icon: 💬
    title: 卡住了能问人
    details: 出图、DSH 插件和本地网关选不出来？带上目标、步骤和截图扫码咨询。基础答疑免费。
    link: /docs/about
    linkText: 怎么找到我们
  - icon: 🤖
    title: 给 AI Agent
    details: AGENTS.md 是操作手册：先自检你是哪个框架（Hermes / OpenCLAW / Claude Code / Codex），再装密钥工具、跑前置自检、按平台推送代码。
    link: /AGENTS
    linkText: 读 AGENTS.md
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

<div class="xb-mission">
  <p class="xb-mission__kicker">关于我们</p>
  <p class="xb-mission__title">让每个小白从<em>便宜、免费的 AI 教程</em>起步，完成自己的作品闭环。</p>
  <p class="xb-mission__body">
    我们从「Agent 是什么」讲起，带你走过想法、需求、制作、验收和发布。
    教程与开源工具可以直接使用；遇到具体卡点，可以带着步骤和截图来问。
  </p>
  <a class="xb-mission__link" href="/docs/about">了解我们与服务方式 →</a>
</div>

## 下一步要做什么？按目标选入口

| 你现在想做的事 | 从这里开始 | 需要人帮忙时 |
|---|---|---|
| 做封面、配图，第一次用 AI 出图 | [MUSE 第一次出图手册](https://docs.museav.top/start/first-image) → [MUSE AV 网页出图](https://museav.top)；想让 Agent 从终端出图，再看 [museav-cli](/docs/tools/museav-cli) | [带上用途和示例图咨询](/docs/about#卡住了-直接问) |
| 给 DeepSeek Harness（DSH）选插件 | [DSH 模型管理](/docs/tools/dsh-llm-hub)、[DSH 素材库](/docs/tools/dsh-museav-assets)、[DSH 主题](/docs/tools/dsh-bloom-theme)；按自己的卡点选 | [带上环境与报错咨询](/docs/about#卡住了-直接问) |
| 想用本地网关统一配置模型 | [先看 magpie 上手教程](/docs/magpie)；需要扩展再看 [社区插件集](/docs/tools/plugins) | [带上目前用的 Agent 和模型咨询](/docs/about#卡住了-直接问) |
| 不知道该装哪个命令行工具 | [SuperCLI 工具目录](https://supercli.site) → 按用途搜 CLI；装完再回来看 [CLI 认知](/docs/about-cli) | [说下你要做的事，我们帮你找命令](/docs/about#卡住了-直接问) |
| 想看经验、复盘和更多项目 | [阅读 webkubor 博客](https://webkubor.online/articles) → [按问题查 38 个开源项目](/docs/tools/index) | [遇到具体问题再联系我们](/docs/about#卡住了-直接问) |

> 💡 这里推荐的是可直接阅读的教程、公开仓库和现有产品。先照教程试；需要结合你的环境判断时，再扫码找人。持续陪跑或定制服务会先沟通范围与费用。

<div class="xb-cta">
  <img class="xb-cta__qr" src="https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/xiaobai-kanban/support-qr.webp" alt="小白看板客服二维码：扫码咨询具体问题" />
  <div>
    <p class="xb-cta__title">选不出来？带着目标来问</p>
    <p class="xb-cta__desc">扫码加客服，备注「小白看板 + 出图 / DSH / 本地网关 + 你想解决的问题」。先说目标和当前环境，我们才好推荐合适的入口。</p>
    <p class="xb-cta__note">基础答疑免费；教程与开源工具无需加好友即可使用。需要持续陪跑时先确认服务范围与费用。</p>
  </div>
</div>

> 💡 **为什么在这里放客服？** 出图要选网页还是 CLI、DSH 要装哪个插件、本地网关怎么接 Agent，都取决于你正在做的事和已有环境。把目标与卡点说清楚，比盲装一排工具更省事。

## 想找免费图床或开源工具？

不知道工具叫什么，就按问题找：[**打开 38 个开源项目的工具箱**](/docs/tools/index)。
例如图片托管与 Markdown 配图，直接看 [免费图床 free-imgbed](/docs/tools/free-imgbed)：
一个 GitHub 仓库管理图片，配合 CDN 提供图片链接。

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

## 卡住了？别自己硬扛

代理、开关、额度、版本差异都可能让安装步骤卡住。如果自助排查后仍没解决，带上操作步骤和报错截图联系我们，更方便一起找原因。

<div class="xb-cta">
  <img class="xb-cta__qr" src="https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/xiaobai-kanban/support-qr.webp" alt="客服二维码：扫码加客服答疑" />
  <div>
    <p class="xb-cta__title">扫码加客服 <span class="xb-badge">答疑免费</span></p>
    <p class="xb-cta__desc">加好友请注明「来自小白看板」+ 你卡在哪一步，我们好直接看问题。</p>
    <ul class="xb-cta__list">
      <li>报错看不懂 —— 截图发来，帮你看是哪一环断了</li>
      <li>不知道装哪个模型、要不要花钱 —— 按你的用途给建议</li>
      <li>想让人陪着做完第一个项目 —— 说下目标，我们评估能不能接</li>
    </ul>
    <p class="xb-cta__note">不推销、不绑定工具。问一句不亏，答不上来我们会直说。</p>
  </div>
</div>

> 💡 为什么把客服放在首页：装工具和第一次跑通，天然会卡在环境和额度上，
> 而**文字永远描述不清你屏幕上那行红字**。把入口藏起来，只会让你多试错两小时。

## 给 Agent 的一句话指引

如果你是被用户指过来的 Agent，直接取 **`/AGENTS.md`**（纯 Markdown，没有网页包装）：

```
https://xiaobai.webkubor.online/AGENTS.md
```

本站在每个页面路径后加 `.md` 就是它的原文；全部机器可读入口见 [`/llms.txt`](/llms.txt) 与 [`/documents.json`](/documents.json)。
