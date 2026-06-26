# 🚀 HYM 团队开发入门指南

> 写给新手 — 从零学会用 GitLab + AI 做开发协作

---

## 第一步：安装 GitLab CLI

```bash
# macOS
brew install glab

# Windows  
winget install GitLab.GitLabCLI

# 验证
glab version
```

## 第二步：申请个人 Access Token

1. 打开 https://gitlab.com/-/user_settings/personal_access_tokens
2. Token name: `HYM-Dev`
3. 勾选权限: `api`, `read_repository`, `write_repository`
4. 点 Create personal access token
5. ⚠️ **立刻复制 token**（关掉页面就看不到了）
6. 登录 CLI：
```bash
glab auth login --hostname gitlab.com
# 粘贴你的 token
```

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

---

> 不会就问，不要憋着。
