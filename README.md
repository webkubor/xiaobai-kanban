# 🚀 HYM 团队开发入门指南

> 👤 **真人新手请看下面** — 从零学会用 GitLab + AI 做开发协作
> 🤖 **AI Agent 请读 [AGENTS.md](./AGENTS.md)** — 如何推送代码到 GitLab

---

## 第零步：自检（先跑这个，30 秒搞定）

打开终端，复制粘贴下面整段：

```bash
echo "===== 检查环境 ====="

# 1. Git
if git --version > /dev/null 2>&1; then
  echo "✅ Git 已安装: $(git --version)"
else
  echo "❌ Git 未安装 → 去 https://git-scm.com 下载"
fi

# 2. GitLab CLI
if glab version > /dev/null 2>&1; then
  echo "✅ glab 已安装: $(glab version 2>&1 | head -1)"
else
  echo "❌ glab 未安装 → 看下面「第一步」"
fi

# 3. 登录状态
if glab auth status > /dev/null 2>&1; then
  echo "✅ glab 已登录"
else
  echo "❌ glab 未登录 → 看下面「第二步」"
fi

# 4. Node.js（前端项目需要）
if node --version > /dev/null 2>&1; then
  echo "✅ Node.js: $(node --version)"
else
  echo "⚠️  Node.js 未安装 → https://nodejs.org (LTS 版)"
fi
```

根据输出结果，缺哪个补哪个：

| 检查项 | ✅ 结果 | ❌ 结果 |
|--------|---------|---------|
| Git | 跳过 | [安装 Git](https://git-scm.com) |
| glab | 跳过 | 看第一步 ↓ |
| 登录 | 跳过 | 看第二步 ↓ |
| Node.js | 跳过 | [安装 Node.js LTS](https://nodejs.org) |

---

## 第一步：安装 GitLab CLI

> 💡 第零步显示 `✅ glab` 就跳过这里。

```bash
# macOS
brew install glab

# Windows  
winget install GitLab.GitLabCLI

# 验证
glab version
```

---

## 第二步：登录 GitLab

> 💡 第零步显示 `✅ glab 已登录` 就跳过这里。

### 2.1 申请 Token

1. 打开 https://gitlab.com/-/user_settings/personal_access_tokens
2. Token name: `HYM-Dev`
3. 勾选权限: `api`, `read_repository`, `write_repository`
4. 点 Create personal access token
5. ⚠️ **立刻复制 token**（关掉页面就看不到了）

### 2.2 登录

```bash
glab auth login --hostname gitlab.com
# 粘贴你刚才复制的 token
```

### 2.3 验证

```bash
glab auth status
# 输出类似: ✓ Logged in to gitlab.com as webkubor
```

不显示 `✓` 就是没登成功，重做 2.1。

---

## 第三步：克隆项目

```bash
# 客户端（前端）
git clone https://gitlab.com/hym-company/hym-concerts.git

# 管理端（后台）
git clone https://gitlab.com/hym-company/hym-admin.git

# 进目录装依赖
cd hym-concerts
npm install
npm run dev    # 启动本地开发
```

## 第四步：GitFlow 工作流

```
main ──────────────────────────── 线上生产环境
  └── feat/xxx ────────────────── 你从这里开始
```

### 每天做事的流程

```bash
# 1. 拉最新代码
git checkout main
git pull origin main

# 2. 从 main 开新分支（关键！不要在 main 上直接改）
git checkout -b feat/我的功能名

# 3. 写代码...

# 4. 提交
git add -A
git commit -m "feat: 简短描述做了什么"

# 5. 推送到 GitLab
git push origin feat/我的功能名
```

然后去 GitLab 网页 → Merge Requests → New MR，源分支选你的 `feat/xxx`，目标 `main`，提交审核。

### Commit 信息规范

| 前缀 | 含义 | 例子 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加出图页面` |
| `fix:` | 修bug | `fix: 登录按钮不响应` |
| `docs:` | 文档 | `docs: 更新 README` |
| `style:` | UI调整 | `style: 改按钮颜色` |

## 第五步：用 AI 写代码

你不需要亲自写每一行代码，流程是：

```
你说需求 → AI 写代码 → 你 Review → 跑起来看 → 有问题让 AI 改
```

### 怎么跟 AI 说

```
"帮我在客户端加一个订单列表页面，显示用户名、图片缩略图和下单时间"
```

```
"这个页面的按钮点不动，帮我排查一下"
```

```
"帮我把这个组件拆成两个，一个负责列表一个负责弹窗"
```

### 原则
1. 说清楚要什么，不用写代码
2. AI 交出来你先看一遍
3. `npm run dev` 跑起来验证
4. 不行就让 AI 接着改

## 常用 GitLab 命令速查

```bash
glab repo list          # 看项目列表
glab mr list            # 看 MR 列表  
glab mr create ...      # 创建 MR
glab issue list         # 看 Issue
```

## 我们的项目

| 项目 | 地址 |
|------|------|
| 客户端 | https://gitlab.com/hym-company/hym-concerts |
| 管理端 | https://gitlab.com/hym-company/hym-admin |

### 线上地址

| 项目 | 域名 |
|------|------|
| 客户端 | https://hym.webkubor.online |
| 管理端 | https://hym-admin.webkubor.online |

## 第六步：把本地项目推到公司群组

如果你已经在本地写好了代码，想推到 `hym-company` 群组：

```bash
# 1. 进入你的项目目录
cd 你的项目

# 2. 初始化 git（如果还没有）
git init

# 3. 添加远程仓库
git remote add origin https://gitlab.com/hym-company/你的项目名.git

# 4. 提交所有代码
git add -A
git commit -m "feat: 初始化项目"

# 5. 推送到 GitLab
git push -u origin main
```

如果仓库还不存在，先去 https://gitlab.com/hym-company → New project 创建空项目，再执行上面步骤。

## 第七步：遇到 Bug 怎么提

不要私聊说"出问题了"，去 GitLab 提 Issue，方便追踪：

```bash
# 用 CLI 快速创建 Issue
glab issue create \
  --title "fix: 登录页验证码收不到" \
  --description "## 复现步骤
1. 打开 hym-admin.webkubor.online
2. 输入邮箱点发送验证码
3. 等了 5 分钟没收到

## 期望
应该 30 秒内收到邮件

## 截图
（拖到输入框自动上传）"
```

或者去网页：
- 客户端 Issue → https://gitlab.com/hym-company/hym-concerts/-/issues
- 管理端 Issue → https://gitlab.com/hym-company/hym-admin/-/issues

### Issue 标题规范

| 前缀 | 用途 | 例子 |
|------|------|------|
| `fix:` | 报 Bug | `fix: 登录按钮点不了` |
| `feat:` | 提需求 | `feat: 素材库加导出功能` |
| `ask:` | 提问 | `ask: 怎么在本地跑起来` |

---

## 第八步：配套工具

HYM 生态还有这些工具，开箱即用：

| 工具 | 用途 | 地址 |
|------|------|------|
| **Keyring** | 安全管理密码/Token，不让 AI 看到明文 | [agent-secret-skills](https://github.com/webkubor/agent-secret-skills) |
| **Smart Router** | Agent 自动省钱，简单任务走免费模型 | [smart-router-skills](https://github.com/webkubor/smart-router-skills) |

---

> 不会就问，不要憋着。
