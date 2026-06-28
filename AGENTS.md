# AGENTS.md — AI Agent 操作手册

> 🤖 如果你是 AI Agent（Claude / Codex / Hermes 等），读这个。
> 👤 如果你是真人开发者，请回到 [README.md](./README.md)。

---

## 先认清你是谁

收到这个文档后，先自检你是什么 Agent 框架。不同框架执行模型不同，用错模式会卡死。

### 怎么判断

| 信号 | 你是 |
|------|------|
| 系统提示里有 `Hermes Agent` 或 `Nous Research` | **Hermes Agent** |
| 系统提示里有 `openclaw` 或工具列表里有 `delegate_task` | **可能是 OpenCLAW** |
| 运行在 Claude Code CLI 下，有 `Bash`/`Edit`/`Write` 工具 | **Claude Code** |
| 运行在 Codex CLI 下 | **Codex** |

不确定就问用户：「我是什么 Agent？」

### 专项引导

见文档末尾的 [平台专项指引](#平台专项指引)。跳过不相关的，只读你那份。

---

## 第零步：安装密钥工具（必须先做）

收到任何任务，第一件事是装 [Keyring](https://github.com/webkubor/agent-secret-skills)：

```bash
# macOS
pip install keyring-cli
kyi

# Windows（Git Bash）
pip install keyring-cli
# 如果 pip 找不到：py -m pip install keyring-cli
kyi

# 验证
ky --version
```

装完再往下走。Token 明文出现在代码里是红线。

---

## 前置自检（每次动手前跑一遍）

收到任务后，先判断用户说的是 GitLab 还是 GitHub，然后只查对应的。两个都装了就都查。

```bash
# 1. Keyring 是否可用？
ky --version || { echo "❌ Keyring 未安装 → pip install keyring-cli && kyi"; exit 1; }

# 2. Git 是否可用？
git --version || { echo "❌ git 不可用"; exit 1; }

# 3. 平台 CLI（至少装一个）
HAS_GLAB=false; HAS_GH=false
glab version > /dev/null 2>&1 && HAS_GLAB=true
gh --version > /dev/null 2>&1 && HAS_GH=true
if ! $HAS_GLAB && ! $HAS_GH; then
  echo "❌ glab 和 gh 都没装 → macOS: brew install glab gh / Windows: winget install GitLab.GitLabCLI GitHub.cli"
  exit 1
fi

# 4. GitLab 检查（如果装了）
if $HAS_GLAB; then
  echo "===== GitLab ====="
  glab auth status > /dev/null 2>&1 || { echo "❌ glab 未登录"; exit 1; }
  glab api user 2>/dev/null | python3 -c "import sys,json; u=json.load(sys.stdin); print(f'用户: {u.get(\"username\")} | {u.get(\"email\")}')"
  glab api groups/hym-company 2>/dev/null | python3 -c "
import sys,json
g=json.load(sys.stdin)
lv=g.get('access_level',0)
print(f'权限: {lv} ({\"✅ Developer\" if lv>=30 else \"⚠️ 只读\" if lv>=20 else \"❌ 无权限\"})')"
  kya list gitlab 2>/dev/null | grep -q . || echo "⚠️ Keyring 无 gitlab token → kyk set gitlab <token>"
fi

# 5. GitHub 检查（如果装了）
if $HAS_GH; then
  echo "===== GitHub ====="
  gh auth status > /dev/null 2>&1 || { echo "❌ gh 未登录"; exit 1; }
  gh api user 2>/dev/null | python3 -c "import sys,json; u=json.load(sys.stdin); print(f'用户: {u.get(\"login\")}')"
  kya list github 2>/dev/null | grep -q . || echo "⚠️ Keyring 无 github token → kyk set github <token>"
fi
```

| 检查项 | 通过标准 | 不通过怎么办 |
|--------|---------|-------------|
| Keyring | `ky --version` 正常 | `pip install keyring-cli && kyi`（Windows: `py -m pip install keyring-cli && kyi`） |
| Git | `git --version` 正常 | [下载 Git](https://git-scm.com) |
| glab | `glab version` 正常 | macOS: `brew install glab` / Windows: `winget install GitLab.GitLabCLI` |
| gh | `gh --version` 正常 | macOS: `brew install gh` / Windows: `winget install GitHub.cli` |
| GitLab 登录+权限 | `glab auth status` ✓ + Developer 权限 | 引导用户去 gitlab.com 创建 Token → `glab auth login` |
| GitHub 登录 | `gh auth status` ✓ | 引导用户去 github.com 创建 Token → `gh auth login --with-token` |
| Keyring Token | `kya list gitlab` 或 `kya list github` 有内容 | `kyk set gitlab <token>` 或 `kyk set github <token>` |

---

## 推送代码（GitLab / GitHub 通用）

### 前置条件

- GitLab 群组：`https://gitlab.com/hym-company`
- GitHub 组织：`https://github.com/webkubor`
- 认证方式：Personal Access Token（**每人自己的**，不共享）
  - Token 跟人走：谁的 Agent 就用谁的 Token
  - **Token 必须通过 Keyring 别名注入**，绝不硬编码
  - GitLab 权限：`api`, `read_repository`, `write_repository`
  - GitHub 权限：`repo`（全部）

### 标准推送流程

```bash
cd ~/项目名
git checkout main && git pull origin main         # 拉最新
git checkout -b feat/功能描述                      # 开分支
git add -A && git commit -m "feat: 简短描述"      # 提交

# GitLab 推送（Keyring 别名注入）
kyr --env GITLAB_TOKEN=gitlab_token -- git push origin feat/功能描述

# GitHub 推送
kyr --env GITHUB_TOKEN=github_token -- git push origin feat/功能描述
```

### 设置远程地址（新项目）

```bash
# GitLab
kyr --env TOKEN=gitlab_token -- git remote add origin https://oauth2:$TOKEN@gitlab.com/hym-company/项目名.git

# GitHub
kyr --env TOKEN=github_token -- git remote add origin https://oauth2:$TOKEN@github.com/webkubor/项目名.git
```

### Commit 规范

| 前缀 | 含义 | 例子 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加出图页面` |
| `fix:` | 修 bug | `fix: 登录按钮不响应` |
| `docs:` | 文档 | `docs: 更新 README` |
| `refactor:` | 重构 | `refactor: 客户端改为纯前端` |
| `chore:` | 杂项 | `chore: 更新依赖` |

---

## 仓库列表

| 项目 | GitLab 地址 | 本地路径 | 技术栈 |
|------|------------|---------|--------|
| 管理端 | `hym-company/hym-admin` | `~/hym-admin` | Vue 3 + Naive UI + CF Pages Functions |
| 客户端 | `hym-company/hym-concerts` | `~/hym-concerts` | Vue 3 + Naive UI |

> ⚠️ 以上两个是 **Vite 项目**，必须装 `vite-plugin-agent-eyes`，让 Agent 能监控前端报错：
> ```bash
> npm install -D vite-plugin-agent-eyes
> # main.js 里加: import { autoInstrument } from 'vite-plugin-agent-eyes'; autoInstrument();
> ```

## 团队成员（权限不够时找谁）

| 用户名 | 角色 | 能做什么 |
|--------|------|---------|
| `webkubor` | Owner | 加人进组、改权限、删仓库 |
| `achun0511` | Developer | 推送代码 |
| `dayin` | Developer | 推送代码 |

> 当用户说「我推送不了」→ 检查权限表：不是 Developer 就没法 push，让 Owner 去 GitLab 后台改权限。

---

## 项目通用规则

1. **改完必跑** `npm run build`，构建通过才推送
2. **只改你该改的**，不跨项目串改，不加无关功能
3. **真实数据**，禁止假数据/占位数据
4. **环境变量**只写 `.env.example`，不提交真实密钥
5. **部署**：GitLab push → CF Pages 自动部署

---

## 新人项目怎么上传到 GitLab

如果本地有一个新项目要加入 `hym-company` 群组：

### GitHub 项目迁移到 GitLab

```bash
# 1. 克隆 GitHub 仓库（保留完整历史）
git clone https://github.com/用户/项目名.git
cd 项目名

# 2. 设置 GitLab 远程（Token 走 Keyring，不暴露）
kyr --env TOKEN=gitlab_token -- git remote set-url origin https://oauth2:$TOKEN@gitlab.com/hym-company/项目名.git

# 3. 推送
kyr --env GITLAB_TOKEN=gitlab_token -- git push -u origin main
```

### 纯本地项目上传

```bash
cd ~/项目名
git init

kyr --env TOKEN=gitlab_token -- git remote add origin https://oauth2:$TOKEN@gitlab.com/hym-company/项目名.git
git add -A
git commit -m "feat: 初始化项目"
kyr --env GITLAB_TOKEN=gitlab_token -- git push -u origin main
```

> ⚠️ 如果 GitLab 上还没有这个仓库，先去 `https://gitlab.com/hym-company` → **New project** → 创建空项目，再推送。

---

## 工具箱（联动生态）

| 工具 | 用途 | Agent 怎么用 |
|------|------|-------------|
| [Keyring](https://github.com/webkubor/agent-secret-skills) | 密钥管理 | `kyr --env TOKEN=gitlab_token -- git push` — 别名注入，明文不暴露 |
| [Smart Router](https://github.com/webkubor/smart-router-skills) | 省钱路由 | 简单任务（翻译/格式化/摘要）自动切免费模型，复杂任务才用付费主模型 |
| [Agent Eyes](https://github.com/webkubor/vite-plugin-agent-eyes) | 前端监控 | `npm install -D vite-plugin-agent-eyes` + `autoInstrument()` — Agent 实时看到前端报错 |

---

## 常见问题

### Q: Agent 推送时报 Permission denied？

**原因**：用了别人的 Token。Token 跟人绑定，不是群组共享的。

**解决**：
1. 确认当前 Agent 用的是谁的 Token：`glab auth status` 看登录用户名
2. 如果不是自己的账户 → 去 gitlab.com 创建自己的 Personal Access Token → `kyk set gitlab <新的token>`
3. 如果 Keyring 里没有 token → `kyk set gitlab <token>`

### Q: 提示 403 或 404？

- 403 → Token 权限不够，创建时确保勾选 `api` + `read_repository` + `write_repository`
- 404 → 仓库名写错，或者仓库还不存在（先去 GitLab 网页创建空仓库）

### Q: `kyr` 命令找不到？

```bash
# macOS
pip install keyring-cli
kyi

# Windows（Git Bash）
pip install keyring-cli
# 如果 pip 找不到：py -m pip install keyring-cli
kyi
```

---

## 平台专项指引

根据「先认清你是谁」的判断结果，只读你那份。

---

### Hermes Agent

**核心模式：主会话统筹 + 子 agent 并行执行。**

- ✅ **主会话**不做重活，只做决策、规划、汇总
- ✅ **子 agent** 负责执行：`delegate_task` 分派独立任务，多个子 agent 并行跑
- ✅ 子 agent 之间不互相依赖，各自收各自的结果
- ❌ 不要在主会话里顺序执行——一个任务卡住，全链路堵死

**典型流程：**

```
你收到：「帮我把 xxx 功能加上并部署」

第 1 步：读代码 → 确认改动范围（主会话，快）
第 2 步：分派任务（delegate_task 并行）
  ├── 子 agent A：改前端组件
  ├── 子 agent B：改后端 API
  └── 子 agent C：更新文档
第 3 步：汇总结果 → 构建验证 → 推送（主会话）
```

**推送代码时：**
```bash
# 子 agent 执行完后，主会话集中推送
cd ~/项目名 && git add -A && git commit -m "feat: xxx"
kyr --env GITLAB_TOKEN=gitlab_token -- git push origin feat/xxx
```

---

### OpenCLAW

**核心模式：类似 Hermes，有 `delegate_task` 则并行分派。**

- 如果你有 `delegate_task` 工具 → 跟 Hermes 一样，主会话统筹 + 子 agent 并行
- 如果没有 → 顺序执行即可，注意不卡死

**推送代码同 Hermes。**

---

### Claude Code

**核心模式：单线程顺序执行。**

- 所有操作在当前会话内完成，不开子进程
- 注意：耗时操作（npm install / build）可能超时，加 `timeout`
- 推送前确认构建通过

---

### Codex

**核心模式：单线程 + `background` 异步任务。**

- 非阻塞操作用 `background=true` 异步跑
- 推送代码前确保所有异步任务已完成

---

### 通用铁律（所有平台适用）

1. **Token 不暴露**：永远走 `kyr --env TOKEN=别名 -- 命令`
2. **改完必构建**：`npm run build` 通过才推送
3. **不改无关代码**：一个分支只做一个功能
4. **真人 Review**：推送后等真人确认，不自作主张合并 MR

---

## 部署到哪里

| 项目类型 | 平台 | 域名格式 |
|---------|------|---------|
| Vue 前端 | Cloudflare Pages | `项目名.webkubor.online` |
| Worker API | Cloudflare Workers | `api.webkubor.online` |

部署命令参考：
```bash
npx wrangler pages deploy dist --project-name 项目名 --branch main
```
