# AGENTS.md — AI Agent 操作手册

> 🤖 如果你是 AI Agent（Claude / Codex / Hermes 等），读这个。
> 👤 如果你是真人开发者，请回到 [README.md](./README.md)。

---

## 你的任务是什么

你是 HYM 团队的 AI 开发助手。你的核心任务：

1. 接收需求 → 写代码 → 验证 → 推送到 GitLab
2. 写完代码不是你说了算，要推到 GitLab 让真人 Review

---

## 前置自检（每次动手前跑一遍）

收到任务后，先确认下面四项，缺一个就别往下走：

```bash
# 1. GitLab Token 是否存在？
#    从 secret://gitlab/personal-pat 读取，拿不到 → 停止，向用户要 Token

# 2. Git 是否可用？
git --version || { echo "❌ git 不可用"; exit 1; }

# 3. glab 是否安装？
glab version || { echo "❌ glab 未安装 → brew install glab"; exit 1; }

# 4. glab 是否登录？如果没有，停止并要求用户配置
glab auth status || { echo "❌ glab 未登录 → 需要引导用户执行 glab auth login"; exit 1; }

# 5. 查账户信息和群组权限
echo "===== 账户 ====="
glab api user 2>/dev/null | python3 -c "import sys,json; u=json.load(sys.stdin); print(f'{u.get(\"username\")} | {u.get(\"email\")}')"

echo "===== 权限 ====="
glab api groups/hym-company 2>/dev/null | python3 -c "
import sys,json
g=json.load(sys.stdin)
if g.get('access_level',0) >= 30:
    print(f'✅ Developer → 可以推送代码')
elif g.get('access_level',0) >= 20:
    print(f'⚠️  Reporter → 只读，不能推送，需要升级到 Developer')
else:
    print(f'❌ 无权限 → 联系管理员加你进 hym-company 群组')
"
```

| 检查项 | 通过标准 | 不通过怎么办 |
|--------|---------|-------------|
| Token | 能从 `secret://gitlab/personal-pat` 读到 | 向用户索要 Personal Access Token（权限：api + read_repository + write_repository） |
| Git | `git --version` 正常输出 | 安装 Git |
| glab | `glab version` 正常输出 | `brew install glab`（macOS）或 `winget install GitLab.GitLabCLI`（Windows） |
| 登录 | `glab auth status` 输出 `✓` | 引导用户去 gitlab.com 创建 Token → 粘贴登录 |
| 群组权限 | `glab api groups/hym-company` 返回 `access_level >= 30` | 联系管理员将用户加入 hym-company 群组并授予 Developer 权限 |

五项全绿才继续，缺一项就停下来先把环境补齐。

---

## 推送代码到 GitLab

### 前置条件

- GitLab 群组：`https://gitlab.com/hym-company`
- 认证方式：Personal Access Token（从 `secret://gitlab/personal-pat` 获取）
- Git 远程地址格式：`https://oauth2:TOKEN@gitlab.com/hym-company/项目名.git`
  - Token 可以是 Personal Access Token（权限：`api`, `read_repository`, `write_repository`）

### 标准推送流程

```bash
# 1. 进入项目目录
cd ~/项目名

# 2. 确保在 main 分支且最新
git checkout main
git pull origin main

# 3. 开新分支（不要在 main 上直接改）
git checkout -b feat/功能描述

# 4. 写代码...

# 5. 提交
git add -A
git commit -m "feat: 简短描述"

# 6. 推送到 GitLab
git push origin feat/功能描述
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

# 2. 添加 GitLab 远程
git remote set-url origin https://oauth2:TOKEN@gitlab.com/hym-company/项目名.git
# 或新建 remote：
git remote add gitlab https://oauth2:TOKEN@gitlab.com/hym-company/项目名.git

# 3. 推送
git push -u origin main
```

### 纯本地项目上传

```bash
# 1. 进入项目目录，确保已 git init
cd ~/项目名
git init  # 如果还没有

# 2. 添加远程
git remote add origin https://oauth2:TOKEN@gitlab.com/hym-company/项目名.git

# 3. 提交并推送
git add -A
git commit -m "feat: 初始化项目"
git push -u origin main
```

> ⚠️ 如果 GitLab 上还没有这个仓库，先去 `https://gitlab.com/hym-company` → **New project** → 创建空项目，再推送。

---

## 工具箱（联动生态）

写代码别裸奔，这些工具让你的 Agent 更安全、更省钱：

| 工具 | 用途 | Agent 怎么用 |
|------|------|-------------|
| [Keyring](https://github.com/webkubor/agent-secret-skills) | 密钥管理 | `keyring run --env TOKEN=gitlab_token -- git push` — 别名注入，明文不暴露 |
| [Smart Router](https://github.com/webkubor/smart-router-skills) | 省钱路由 | 简单任务（翻译/格式化/摘要）自动切免费模型，复杂任务才用付费主模型 |

> ⚠️ **绝对不要把 Token 写死在代码注释里。** 用 Keyring 别名，或者从 `secret://` 路径读取。

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
