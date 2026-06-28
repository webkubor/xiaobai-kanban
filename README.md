# 🚀 HYM 团队开发入门指南

> 👤 **真人新手请看下面** — 从零学会用 GitLab + AI 做开发协作
> 🤖 **AI Agent 请读 [AGENTS.md](./AGENTS.md)** — 如何推送代码到 GitLab

---

## 第零步：自检（先跑这个，30 秒搞定）

> 💻 **macOS**：打开「终端」  
> 🪟 **Windows**：打开「Git Bash」（安装 Git 时自带，没有就去 https://git-scm.com 下载）

打开终端，复制粘贴下面整段：

> ⚠️ **Windows 注意**：下面的脚本在 Git Bash 里跑。如果报 `python3: command not found`，把脚本里的 `python3` 全部改成 `python`。

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

# 3. 登录状态 & 账户信息
if glab auth status > /dev/null 2>&1; then
  echo "✅ glab 已登录"
  echo ""
  echo "===== 账户信息 ====="
  glab api user 2>/dev/null | python3 -c "
import sys,json
u=json.load(sys.stdin)
print(f'  用户名: {u.get(\"username\",\"?\")}')
print(f'  邮箱:   {u.get(\"email\",\"?\")}')
print(f'  姓名:   {u.get(\"name\",\"?\")}')
"
  echo ""
  echo "===== 群组权限 ====="
  glab api groups/hym-company 2>/dev/null | python3 -c "
import sys,json
g=json.load(sys.stdin)
if g.get('message')=='401 Unauthorized' or g.get('message')=='404 Group Not Found':
  print('  ❌ 没有 hym-company 群组权限 → 联系管理员加你进组')
else:
  print(f'  ✅ 群组: {g.get(\"full_name\",\"?\")}')
  print(f'  权限:  {g.get(\"access_level\",\"?\")} (10=Guest 20=Reporter 30=Developer 40=Maintainer 50=Owner)')
" 2>&1 || echo "  ⚠️  网络异常，跳过权限检查"
else
  echo "❌ glab 未登录 → 看下面「第二步」"
fi

# 4. Node.js（前端项目需要）
if node --version > /dev/null 2>&1; then
  echo "✅ Node.js: $(node --version)"
else
  echo "⚠️  Node.js 未安装 → https://nodejs.org (LTS 版)"
fi

# 5. Keyring（密钥安全工具）
if ky --version > /dev/null 2>&1; then
  echo "✅ Keyring 已安装"
else
  echo "❌ Keyring 未安装 → pip install keyring-cli && kyi"
  echo "   Windows 如果找不到 pip: py -m pip install keyring-cli && kyi"
fi
```

根据输出结果，缺哪个补哪个：

| 检查项 | ✅ 结果 | ❌ 结果 |
|--------|---------|---------|
| Git | 跳过 | [安装 Git](https://git-scm.com) |
| glab | 跳过 | 看第一步 ↓ |
| 登录+权限 | 显示用户名和群组权限 | 看第二步 ↓ |
| Node.js | 跳过 | [安装 Node.js LTS](https://nodejs.org) |
| Keyring | 跳过 | `pip install keyring-cli && kyi` |

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

### 2.1 申请 Token（每人自己申请，不共享）

1. 打开 https://gitlab.com/-/user_settings/personal_access_tokens
2. Token name: `HYM-Dev`
3. 勾选权限: `api`, `read_repository`, `write_repository`
4. 点 Create personal access token
5. ⚠️ **立刻复制 token**（关掉页面就看不到了）
6. **告诉你的 Agent 把 token 存到** `secret://gitlab/personal-pat`

### 2.2 登录 + 存入 Keyring

```bash
# 登录 GitLab CLI
glab auth login --hostname gitlab.com
# 粘贴你刚才复制的 token

# 告诉 Agent 把 token 存到 Keyring
kyk set gitlab <你刚才复制的token>
```

### 2.3 验证

```bash
glab auth status
# 输出类似: ✓ Logged in to gitlab.com as webkubor
```

不显示 `✓` 就是没登成功，重做 2.1。

---

## 第三步：GitLab 项目管理入门

学会这四件事，你就能自己管理任何项目了。**你和你的 Agent 都要会。**

### 3.1 创建新项目

```bash
# 方式 A：命令行创建
glab repo create 项目名 --group hym-company --visibility private

# 方式 B：网页创建
# 打开 https://gitlab.com/hym-company → New project → Create blank project
```

### 3.2 把本地代码推上去

假设你电脑上已经有一个项目文件夹：

```bash
cd ~/我的项目

# 初始化 git（如果还没有）
git init

# 关联 GitLab 远程仓库
git remote add origin https://gitlab.com/hym-company/我的项目.git

# 提交并推送
git add -A
git commit -m "feat: 初始化项目"
git push -u origin main
```

> ⚠️ 如果 `origin` 已存在：`git remote set-url origin https://gitlab.com/hym-company/我的项目.git`

### 3.3 克隆已有项目

```bash
# 语法：git clone https://gitlab.com/群组名/项目名.git
git clone https://gitlab.com/hym-company/项目名.git
cd 项目名
```

### 3.4 装依赖跑起来

```bash
npm install        # 装依赖
npm run dev        # 启动本地开发服务器
# 浏览器打开 http://localhost:5173 就能看到效果
```

---

## 第四步：GitFlow 工作流（每天用的）

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

## 团队成员

> 💡 如果你的自检结果显示没有群组权限，联系 Owner 加你进组。

| 用户名 | 角色 | 权限 |
|--------|------|------|
| `webkubor` | Owner | 管理群组、成员、仓库 |
| `achun0511` | Developer | 推送代码、创建分支 |
| `dayin` | Developer | 推送代码、创建分支 |

> ⚠️ 邮箱在 GitLab 上默认不公开。需要联系谁，在飞书群「栖洲的 AI 团队」里 @ 对方。

## 我们的项目（参考）

> 📋 这是 HYM 现有的项目，新人接手时按「第三步」克隆即可。

| 项目 | 地址 |
|------|------|
| 客户端 | https://gitlab.com/hym-company/hym-concerts |
| 管理端 | https://gitlab.com/hym-company/hym-admin |

### 线上地址

| 项目 | 域名 |
|------|------|
| 客户端 | https://hym.webkubor.online |
| 管理端 | https://hym-admin.webkubor.online |

## 提 Bug / 反馈

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

## 配套工具

HYM 生态还有这些工具，开箱即用：

| 工具 | 用途 | 地址 |
|------|------|------|
| **Keyring** | 安全管理密码/Token，不让 AI 看到明文 | [agent-secret-skills](https://github.com/webkubor/agent-secret-skills) |
| **Smart Router** | Agent 自动省钱，简单任务走免费模型 | [smart-router-skills](https://github.com/webkubor/smart-router-skills) |

---

> 不会就问，不要憋着。
