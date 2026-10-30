---
title: 开源工具箱 · webkubor 全部项目
description: webkubor 公开仓库索引：免费图床、密钥管理、终端诊断、AI 状态球、流式接收、浏览器自动化等，按使用场景组织，含中文名与关键词，方便搜索。
head:
  - - meta
    - name: keywords
      content: 开源工具,免费图床,GitHub 图床,图片托管,密钥管理,终端诊断,AI 编程工具,免费工具,webkubor,工具箱
---

# 🧰 开源工具箱

> 收录 webkubor 的 38 个公开仓库。先按问题找工具，再到仓库查看完整说明和具体使用条件。
>
> 每个仓库都有单独的介绍页；站内可搜索「免费图床」「密钥管理」「前端报错定位」等词。

---

## 看 Skill 的真实作品

[品牌设计 Skill 实战](/docs/brand-design)：这个站的标识如何从品牌色、概念到四款候选，再到深浅 SVG 和小尺寸检查。可直接看成果，也可 [安装开源 Skill](https://github.com/webkubor/logo-brand-designer)。

## 先选方向：出图、DSH、本地网关

| 你想做什么 | 推荐阅读顺序 |
|---|---|
| 第一次做 AI 配图 / 封面 | [MUSE 出第一张图](https://docs.museav.top/start/first-image) → [MUSE AV 网页](https://museav.top)；要终端批量处理再看 [museav-cli](./museav-cli.md) |
| 用 DSH 管理模型 | [DSH 模型管理插件](./dsh-llm-hub.md)，需要素材与主题再看 [素材库](./dsh-museav-assets.md)、[Bloom 主题](./dsh-bloom-theme.md) |
| 找该装哪个命令行工具 | [SuperCLI 工具目录](https://supercli.site) —— 按用途和厂商搜，带 Stars 快照排名 |
| 用本地网关统一接模型 | [magpie 三阶段上手教程](/docs/magpie) → [magpie 社区插件](./plugins.md) |
| 先了解作者做过什么 | [webkubor 博客文章](https://webkubor.online/articles) → [关于我们与客服](/docs/about) |

想让人根据你的设备和目标推荐工具？[到关于我们页扫码咨询](/docs/about#卡住了-直接问)，备注「来自小白看板 + 你的用途」。**基础答疑免费；选择工具不要求先加客服。**

> 💡 **为什么工具目录也放客服入口？** 同叫“出图”，做一张封面和让 Agent 批量出图，合适的入口不同；DSH 插件也要按你已有的环境选。先自助看对应说明，遇到不确定的组合再带着问题咨询。

## 🔍 按你要解决的问题找

| 你遇到的问题 | 工具 | 一句话 |
|---|---|---|
| 图片想放网上，但不想买服务器 | [**免费图床 free-imgbed**](./free-imgbed.md) | 一个 GitHub 仓库就是一台图床，jsDelivr 自动做全球 CDN |
| 密码 / API Key 写在文件里不安全 | [**密钥库 kyvault**](./kyvault.md) | 加密存密钥，环境变量注入，Agent 碰不到明文 |
| 命令明明装了却报找不到 | [**PATH 诊断 path-guard**](./path-guard.md) | 查出实际跑的是哪个二进制、哪个旧版在挡路 |
| 想知道这个月 Claude 花了多少 | [**用量状态栏 claude-usage-statusline**](./claude-usage-statusline.md) | 终端实时显示 token 用量与花费 |
| AI 写的前端报错了，但页面一片空白 | [**前端自愈遥测 vite-plugin-agent-eyes**](./vite-plugin-agent-eyes.md) | 把错误时的 DOM 快照和截图攒给 Agent 读 |
| 想给自己的开源项目做体检 | [**体检报告 scorecard**](./scorecard.md) | 输出带证据的成熟度报告和整改清单 |
| 代码越写越臃肿，上下文不够用 | [**死代码清理 deadcode-reaper-skill**](./deadcode-reaper-skill.md) | 自动找出并清掉没人用的代码 |
| 配色看着不专业 / 对比度不过审 | [**配色护栏 frontend-contrast-guard**](./frontend-contrast-guard.md) | 检查对比度并提示该怎么调整 |
| 想做 AI 对话界面但流式输出总乱 | [**流式接收包 ai-sse-kit**](./ai-sse-kit.md) | SSE 分帧、协议适配、可取消的消息 patch |
| 记不住命令行工具叫什么 | [**CLI 工具目录 supercli**](./supercli.md) | 按用途搜 CLI，带社区 Stars 排名 |
| 要让 Agent 自己动手操作网页 | [**轻量浏览器 lite-browser**](./lite-browser.md) | CDP 操控真实浏览器，会话可交接给人 |
| 做视频 / 做图 / 做音乐 | [AI 音频工作台 voxflow](./voxflow.md)、[短视频合成 reel-kit](./reel-kit.md)、[配图生成](./museav-cli.md) | 一条产线的工具都齐了 |
| 写作 / 表情包 / 聊天图 / 壁纸 | [写作规范](./writing-standard-skills.md)、[表情包](./charmoji-sticker-skill.md)、[聊天图](./chat-mood-gen.md)、[壁纸](./wallpaper-generator.md) | 内容创作顺手工具 |

---

## 🗂️ 全部分类

### 🖼️ 内容与素材

| 工具 | 是什么 |
|---|---|
| [**free-imgbed** 免费图床](./free-imgbed.md) | GitHub 仓库当图床，jsDelivr 做全球 CDN，CI 卡住体积红线 |
| [**facet** Markdown 转 PDF](./facet.md) | 把长文转成排版讲究的 PDF / 长图 |
| [**museav-cli** 终端出图](./museav-cli.md) | 命令行生成配图与封面；网页端 [museav.top](https://museav.top)，手册 [docs.museav.top](https://docs.museav.top) |
| [**chat-mood-gen** 聊天效果图](./chat-mood-gen.md) | 生成微信聊天截图式配图 |
| [**charmoji-sticker-skill** 表情包](./charmoji-sticker-skill.md) | 把 IP 形象做成微信表情包 |
| [**wallpaper-generator** 壁纸编辑器](./wallpaper-generator.md) | 做桌面 / 手机壁纸，可加水印 |
| [**reel-kit** 短视频合成](./reel-kit.md) | 批量合成竖版短视频 |
| [**voxflow** AI 音频工作台](./voxflow.md) | 语音克隆、TTS、播客与 BGM |
| [**suno-publisher** 音乐发行](./suno-publisher.md) | 生成音乐的发行台账与上架管理 |
| [**logo-brand-designer** Logo 设计器](./logo-brand-designer.md) | 生成规范化 SVG 标识与设计 token |

### 🔐 安全与密钥

| 工具 | 是什么 |
|---|---|
| [**kyvault** 密钥库](./kyvault.md) | AES-256-GCM 加密存密钥，环境变量注入子进程 |
| [**device-passport** 设备身份护照](./device-passport.md) | 可复现的设备指纹，用于浏览器自动化与测试环境 |
| [**frontend-contrast-guard** 配色护栏](./frontend-contrast-guard.md) | 检查对比度、支持 OKLCH，并在 CI 中提示调整方案 |

### 🛠️ 开发与调试

| 工具 | 是什么 |
|---|---|
| [**path-guard** PATH 诊断](./path-guard.md) | 查清实际执行的二进制与版本冲突 |
| [**vite-plugin-agent-eyes** 前端自愈遥测](./vite-plugin-agent-eyes.md) | 错误日志 + DOM 快照 + 截图，交给 Agent 自己看 |
| [**vite-plugin-refresh-guard** 刷新检测](./vite-plugin-refresh-guard.md) | 部署后用户没更新？强制检测版本 |
| [**deadcode-reaper-skill** 死代码清理](./deadcode-reaper-skill.md) | 找出并移除没人引用的代码 |
| [**cs-mcp** 工具接入 MCP](./cs-mcp.md) | 把工具按能力分组后聚合暴露给 Agent |
| [**plugins** magpie 插件集](./plugins.md) | 网关中间件与 provider 扩展 |
| [**lite-browser** 浏览器自动化](./lite-browser.md) | 给 Agent 用的真实浏览器操控 CLI |
| [**ai-sse-kit** 流式接收](./ai-sse-kit.md) | SSE 分帧与消息 patch，前端直接用 |
| [**mlx-vlm-kit** 本地视觉模型](./mlx-vlm-kit.md) | 在 Apple Silicon 上离线跑视觉理解 |
| [**supercli** CLI 目录](./supercli.md) | 按用途搜命令行工具；站点 [supercli.site](https://supercli.site) |

### 🧩 Agent 与工作流

| 工具 | 是什么 |
|---|---|
| [**writing-standard-skills** 写作规范](./writing-standard-skills.md) | 让 AI 写出来的中文更像人写的 |
| [**pr-contributor-skill** PR 流程](./pr-contributor-skill.md) | 提 PR、开 MR 的标准动作 |
| [**release-sync-skill** 发版同步](./release-sync-skill.md) | 版本号与 changelog 同步 |
| [**dsh-llm-hub** 模型管理](./dsh-llm-hub.md) | 模型接入、额度查询与余额监控 |
| [**im-notify-kit** 飞书企微通知](./im-notify-kit.md) | 构建完成后推到飞书 / 企业微信 |
| [**ai-orb** AI 状态球](./ai-orb.md) | 会表态的状态指示组件，纯 SVG 零依赖 |
| [**dsh-museav-assets** 素材库插件](./dsh-museav-assets.md) | 把素材库接进 DSH 工作台 |
| [**dsh-bloom-theme** 终端主题](./dsh-bloom-theme.md) | DSH 终端配色主题 |
| [**typora-Bloom-theme** Typora Bloom 主题集](./typora-Bloom-theme.md) | 24 套明暗 Markdown 写作主题 |
| [**meridian** Mac Git 客户端](./meridian.md) | Tauri + Vue 的可视化 Git 客户端 |

### 📋 站点与评测

| 工具 | 是什么 |
|---|---|
| [**scorecard** 项目体检](./scorecard.md) | 开源项目成熟度体检报告 |
| [**webkubor** 个人工具总站](./webkubor.md) | 我所有项目的入口页 |
| [**xiaobai-kanban** 小白看板](./xiaobai-kanban.md) | 就是你正在看的这个站 |

### ⚠️ 已弃用

| 工具 | 说明 |
|---|---|
| [**dsh-env-inspector**](./dsh-env-inspector.md) | 已被 [`path-guard`](./path-guard.md) 取代，端口 / 环境自检请用后者 |

---

## 为什么做这些

不是为了凑数。每一个都对应一个真实卡住的时刻：

- 教程里写「把图片放到图床」，结果读者卡在「图床怎么建」→ 于是有了 `free-imgbed`
- 教程里写「配置 API Key」，结果读者把密钥写进了 `.env` 被 AI 读走 → 于是有了 `kyvault`
- 教程里说「装好了」，结果读者跑出来是旧版本 → 于是有了 `path-guard`

想了解教程、答疑与服务方式 → [关于我们](/docs/about)。各项目的使用条件以其仓库说明为准。

---

## 相关

- 📚 [回到小白看板目录](/catalog)
- 🧭 [小白入门教程](/docs/what-is-agent)
- 💬 [卡住了？联系我们](/docs/about#卡住了-直接问)
