![banner](https://cdn.jsdelivr.net/gh/webkubor/picx-images-hosting@master/blog/projects/xiaobai-kanban-banner/cs-token4ai-1784197731848395000.png)

# 🧭 小白看板 — 让 Agent 帮你写代码

> **你只说话，Agent 搞定一切。** 不需要懂代码、不需要懂命令行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#提-bug--反馈)

---

## ⚡ 10 秒开始

对你的 Agent 说：

> 「你是什么 Agent？用大白话告诉我。」

记住它的名字。后面你会经常用到它。

> 看不懂它的回复？继续说：「用大白话解释，像跟小学生说话一样。」

---

## 🗺️ 学习路径

### 🌱 第一步：认识 Agent

| 看这篇 | 花多久 | 看完你会 |
|--------|:------:|---------|
| [Agent 是什么？](./docs/what-is-agent.md) | 3 分钟 | 知道这玩意跟豆包有什么区别 |
| [我为什么要用？](./docs/why-agent.md) | 3 分钟 | 知道 Agent 能帮你做什么事 |
| [术语大白话词典](./docs/glossary.md) | 随时查 | Git、Token、CLI……遇到不懂的词来查 |

### 🚀 第二步：动手试试

| 看这篇 | 花多久 | 看完你会 |
|--------|:------:|---------|
| [3 分钟第一次实战](./docs/first-project.md) | 3 分钟 | 亲自指挥 Agent 做出一个网页！ |
| [怎么跟 Agent 说话](./docs/how-to-speak-to-agent.md) | 5 分钟 | 万能公式，让 Agent 更懂你 |

### 🛠️ 第三步：装工具、学流程

| 看这篇 | 花多久 | 看完你会 |
|--------|:------:|---------|
| [环境自检](#第零步自检) | 30 秒 | 检查电脑准备好了没 |
| [安装 CLI 工具](#第一步安装-cli-工具) | 2 分钟 | 装 Git、GitLab CLI、GitHub CLI |
| [登录配置](#第二步登录) | 5 分钟 | Token 申请 + 安全存储 |
| [Git 工作流](#第三步gitflow-工作流) | 3 分钟 | 每天怎么用 Git 干活 |

### 📮 第四步：进阶能力

| 看这篇 | 说明 |
|--------|------|
| [Agent 邮箱](./docs/mail.md) | 申请 Agent 邮箱 + 收发邮件 |
| [Agent 配合手册](./AGENTS.md) | Agent 怎么读 AGENTS.md 执行任务 |

---

## 🧰 配套工具箱

这些工具让你的 Agent 更强大。**对 Agent 说「帮我装 xxx」就行。**

| 工具 | 一句话 | 安装 |
|------|--------|------|
| 🔐 [**Keyring**](https://github.com/webkubor/keyring) | 安全管理密码/Token，告别 .env 泄露 | `pip install keyring-cli && kyi` |
| 👀 [**Agent Eyes**](https://github.com/webkubor/vite-plugin-agent-eyes) | Agent 实时看到前端报错，自动修复 | `npm install -D vite-plugin-agent-eyes` |
| 🎤 [**Voice Editor**](https://github.com/webkubor/voice-editor) | 本地中文 TTS 语音编辑器 | 见仓库 README |
| 🧭 [**Smart Router**](https://github.com/webkubor/smart-router-skills) | Agent 自动省钱，简单任务用免费模型 | 见仓库 README |

---

## 第零步：自检

对 Agent 说：「帮我跑一下环境自检脚本。」

<details>
<summary>📋 自检脚本（Agent 专用）</summary>

```bash
echo "===== 检查环境 ====="
# 1. Git
git --version 2>/dev/null && echo "✅ Git: $(git --version)" || echo "❌ Git 未安装 → https://git-scm.com"
# 2. GitLab CLI
glab version 2>/dev/null && echo "✅ glab 已安装" || echo "⚠️ glab 未安装 → brew install glab"
# 3. GitHub CLI
gh --version 2>/dev/null && echo "✅ gh 已安装" || echo "⚠️ gh 未安装 → brew install gh"
# 4. Node.js
node --version 2>/dev/null && echo "✅ Node.js: $(node --version)" || echo "⚠️ Node.js 未安装 → https://nodejs.org"
# 5. Keyring
ky --version 2>/dev/null && echo "✅ Keyring 已安装" || echo "❌ Keyring 未安装 → pip install keyring-cli && kyi"
```

</details>

---

## 第一步：安装 CLI 工具

对 Agent 说：「帮我安装 GitLab CLI 和 GitHub CLI」

<details>
<summary>📋 手动安装</summary>

```bash
# macOS
brew install glab gh

# Windows
winget install GitLab.GitLabCLI GitHub.cli

# 验证
glab version && gh --version
```

</details>

---

## 第二步：登录

对 Agent 说：「帮我登录 GitLab」或「帮我登录 GitHub」

<details>
<summary>📋 手动步骤</summary>

### GitLab

1. 打开 https://gitlab.com/-/user_settings/personal_access_tokens
2. Token name: `HYM-Dev`，勾选: `api`, `read_repository`, `write_repository`
3. 创建 → ⚠️ **立刻复制**
4. 对 Agent 说：「用这个 token 登录 GitLab：`glpat-xxxx`」

### GitHub

1. 打开 https://github.com/settings/tokens → Generate new token (classic)
2. Note: `HYM-Dev`，勾选: `repo`（全部）、`read:org`
3. 生成 → ⚠️ **立刻复制**

</details>

---

## 第三步：GitFlow 工作流

你不需要记命令。对 Agent 说就行：

| 你说 | Agent 做 |
|------|---------|
| 「帮我创建新分支」 | `git checkout -b feat/xxx` |
| 「帮我提交」 | `git add -A && git commit -m "feat: xxx"` |
| 「帮我推送」 | `git push origin feat/xxx` |
| 「帮我合并到 main」 | 创建 MR，等你确认 |

### Commit 信息规范

| 前缀 | 含义 | 例子 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加出图页面` |
| `fix:` | 修 bug | `fix: 登录按钮不响应` |
| `docs:` | 文档 | `docs: 更新 README` |
| `style:` | UI 调整 | `style: 改按钮颜色` |

---

## 🕳️ 常见踩坑

### 推 main 报权限错误

Agent 会说：「main 分支被保护了」

**你做**：打开 GitLab 项目设置 → Protected branches → Unprotect main

### 没有群组权限

Agent 会说：「你的账号没有群组权限」

**你做**：在飞书群「栖洲的 AI 团队」里 @ webkubor

### Token 过期

Agent 会说：「Token 有问题」

**你做**：去 GitLab/GitHub 个人设置重新生成 Token，发给 Agent

---

## 支持的 Agent

| Agent | 一句话 | 适合谁 |
|-------|--------|--------|
| 🧠 **Hermes Agent** | 最聪明，多子 agent 并行 | 有服务器的人 |
| 🦞 **OpenCLAW** | 轻量灵活 | 喜欢简单的人 |
| 📝 **Claude Code** | 稳扎稳打 | 用 Claude 的人 |
| 🔧 **Codex** | 后台异步不卡顿 | 用 ChatGPT/Codex 的人 |

---

## ⭐ 觉得有帮助？

如果这个教程帮你省了时间，可以帮我一键点赞 — 给我的所有开源项目点个 Star：

> 对 Agent 说：「帮我去 GitHub 给 webkubor 的所有公开仓库都点个 Star」

**Star 过的福利：** 我的开源工具有更新时，会优先推荐给你。新工具发布也会第一时间通知。

我的开源工具箱：

| 工具 | 做什么的 |
|------|---------|
| [keyring](https://github.com/webkubor/keyring) | Agent 密钥安全 |
| [vite-plugin-agent-eyes](https://github.com/webkubor/vite-plugin-agent-eyes) | Agent 前端监控 |
| [voice-editor](https://github.com/webkubor/voice-editor) | 中文语音编辑器 |
| [smart-router-skills](https://github.com/webkubor/smart-router-skills) | Agent 省钱路由 |
| [typora-Bloom-theme](https://github.com/webkubor/typora-Bloom-theme) | Typora 写作主题 |

---

## 提 Bug / 反馈

不要私聊说"出问题了"，直接在 [Issues](https://github.com/webkubor/xiaobai-kanban/issues) 里提。

---

> 不会就问 Agent，别憋着。Agent 说不明白就来找我们。
