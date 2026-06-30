# 📮 申请 Agent 邮箱

> 让你的 AI Agent 拥有自己的邮箱，能收发邮件、整理收件箱。

---

## 什么是 Agent 邮箱

Agent 邮箱是腾讯 QQ 邮箱推出的 **Agent 原生邮箱**（agent.qq.com）。它不是普通邮箱，而是专门给 AI Agent 用的：

- ✅ Agent 可以直接通过命令行收发邮件
- ✅ 不需要人手动操作邮箱界面
- ✅ 每个 Agent 一个独立邮箱，互不干扰
- ✅ 免费使用

## 第一步：创建邮箱

1. 打开 **[agent.qq.com](https://agent.qq.com)**
2. 用你的 QQ 邮箱或微信登录
3. 点击 **「创建邮箱」**
4. 输入你想要的邮箱名（例如：`lunove`）
5. 创建完成后你会得到一个地址：`lunove@agent.qq.com`

## 第二步：让 Agent 接入

### 情况 A：Agent 就在你面前（当前对话）

把下面这段话**复制发给你的 Agent**：

```
请阅读 https://agent.qq.com/doc/cli-setup.md 文档，按照步骤为我安装并配置 Agent Mail CLI。
```

### 情况 B：给远程 Agent 配置（比如南烛）

远程 Agent 通过命令行触发，提示词必须自包含。**先在网页创建好邮箱，再用对应渠道发指令：**

**Hermes Agent（远程机器）：**

```bash
# 给南烛发任务
cs hermes run "你还没有自己的邮箱。我已经在 agent.qq.com 为你创建了邮箱。
请阅读 https://agent.qq.com/doc/cli-setup.md 文档，按照步骤安装并配置 Agent Mail CLI。
配置完成后用 agently-cli +me 验证，把结果告诉我。" --target nanzhu
```

**OpenClaw / ClawX（桌面 Agent）：**

直接在对话窗口发：

```
你还没有自己的邮箱。我已经在 agent.qq.com 为你创建了邮箱。
请阅读 https://agent.qq.com/doc/cli-setup.md 文档，按照步骤安装并配置 Agent Mail CLI。
配置完成后用 agently-cli +me 验证，把结果告诉我。
```

> ⚠️ **关键一步**：Agent 会给你发一个授权链接（`https://agent.qq.com/page/oauth?...`）。你必须用**刚创建的邮箱账号**登录并点确认。Agent 在等你，授权完它会自动继续。

## 第三步：验证

Agent 会自动验证。如果你想让 Agent 验证，对它说：

```
帮我查一下当前绑定的邮箱
```

Agent 会执行 `agently-cli +me`，返回类似：

```json
{
  "email": "lunove@agent.qq.com",
  "name": "lunove"
}
```

看到你的邮箱地址就说明成功了。

---

## 使用方法

邮箱配好之后，你可以直接对 Agent 说：

### 发邮件

```
帮我发一封邮件给 xxx@example.com，标题是"项目进度"，内容是"这周完成了首页开发"
```

### 查收邮件

```
我最近收到了哪些邮件？
```

### 搜索邮件

```
帮我搜一下包含"发票"的邮件
```

### 回复邮件

```
帮我回复最近那封邮件，说"收到，明天处理"
```

### 整理收件箱

```
帮我整理一下最近收到的邮件，按重要程度分类
```

---

## 额度说明

| 项目 | 额度 |
|------|------|
| 每日发信上限 | 50 封 |
| 每小时请求 | 200 次 |
| 每分钟请求 | 10 次 |
| 单封附件上限 | 20 MB |
| 单封附件数量 | 50 个 |

---

## 常见问题

### Q: 授权链接打不开？

重新对 Agent 说：「重新授权邮箱」，它会生成一个新的链接。

### Q: Agent 提示「认证失败」？

1. 检查你在浏览器里登录的是不是刚创建的邮箱账号
2. 如果之前的授权过期了，对 Agent 说「重新登录邮箱」

### Q: 切换邮箱怎么办？

```
先退出：agently-cli auth logout
再登录：agently-cli auth login
```

新链接用新邮箱授权即可。

### Q: 多个 Agent 怎么办？

每个 Agent 在自己的机器上各跑一次 `agently-cli auth login`，用各自的邮箱授权。互不干扰。

---

> 💡 有问题直接问你的 Agent，它能自己排查。
