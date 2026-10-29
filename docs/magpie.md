# 🔌 装上 magpie：让 AI 编程不花钱

> **这篇解决一个很现实的问题：AI 编程要花钱吗？**
>
> 答案是：**不用。** 国内一线模型都有免费额度，配合 magpie 这个本地网关，
> 你可以**一分钱不花**，就让 Claude Code、Codex 这些 Agent 用上 MiniMax、DeepSeek、GLM、Kimi。
>
> 这一篇是**动手篇**，跟着做就行。全程大约 15 分钟。

---

## 先搞清楚：magpie 是干什么的

一句话：

> **magpie 是你电脑上的「模型中转站」。** 它自己不是一个 AI，
> 但它能让**你已有的所有 Agent**（Claude Code、Codex、Cursor……）
> 共用同一套模型配置，**并且免费模型也能用上。**

打个比方：

```
没有 magpie：  Agent A → Claude（要订阅）   Agent B → Codex（要订阅）
有 magpie：     Agent A ─┐
               Agent B ─┼→ magpie（本地网关）→ MiniMax / DeepSeek / GLM（免费额度）
               Agent C ─┘
```

**为什么这很重要？**

| | 痛点 | magpie 怎么解决 |
|---|---|---|
| 💸 | Claude Code、Codex 都要订阅，月费不便宜 | 换成免费模型的免费额度 |
| 🔁 | 每个 Agent 都要单独配一遍模型 | 配一次，所有 Agent 通用 |
| 🔑 | API Key 到处复制粘贴，容易泄露 | Key 只存在 magpie 一处 |
| 🛡️ | 请求直接发厂商，敏感信息裸奔 | 内置**本地脱敏**，请求先过网关 |

> 💡 **一句话判断你要不要装**：
> 你已经在用 AI 写代码，而且**不想花钱**——那就装。
> 你只用官方订阅、图省事——**其实用不上**，README 官方也是这么建议的。

---

## 全流程总览

我们分三个阶段走完：

```
阶段一  准备工作    网络代理 + 装 Agent        ← 先让 Agent 能跑起来
阶段二  装 magpie   一句话让 Agent 帮你装        ← 核心
阶段三  配置使用    隐私脱敏 → 挂 Agent → 挂模型  ← 开始白嫖
```

> 💡 **小白提示**：三个阶段是**有依赖的**，别跳。
> 阶段一没做完，阶段二会失败——因为 Agent 要能联网才能下载 magpie。

---

## 阶段一：准备工作

### 步骤 1：先让电脑能访问 GitHub（翻墙）

magpie 的下载地址在 GitHub 上，国内直连会很慢甚至打不开。

**下载 FlClash**（一个免费开源的代理工具）：
👉 <https://github.com/chen08209/FlClash>

> 💡 装好之后记得**保持它运行**。后面下载 magpie 需要它。

### 步骤 2：装一个 Agent

没有 Agent 的话，先装一个。这里用 **WorkBuddy** 举例：

👉 <https://www.workbuddy.cn>

> 💡 **其实装哪个都行**——Claude Code、Codex、Cursor、OpenCode 都行，
> magpie 支持主流的十几种。装你顺手的。

---

## 阶段二：装 magpie（最简单的一步）

### 步骤 3：跟你的 Agent 说一句话

在 WorkBuddy 的对话框里发送：

```
安装magpie：https://github.com/yetone/magpie
```

> ✅ **就这一句话，剩下的它自己干。**
>
> 这就是 vibe coding 的第一个用法：**让 Agent 帮你做安装**。
> 你不需要会命令、不需要查文档。

装完后确认一下：

- 桌面或程序坞里出现了 magpie 的图标
- 或者终端里输入 `magpie --version` 有版本号输出

---

## 阶段三：配置（三个开关）

现在 magpie 是个「空壳」——它能跑，但还没接模型、也没挂 Agent。
按下面顺序开三个东西，顺序别乱。

### 步骤 4：打开隐私模式（**先做这个**）

> 🛡️ **为什么先做这个？**
> 因为一旦你把 API Key 填进去，请求就会开始往外发。
> 先开脱敏，等于**先把门锁好再让人进来**。

**路径**：设置 → **脱敏**

打开这几个开关：

| 开关 | 建议 | 作用 |
|---|:---:|---|
| **要遮什么** → API Key / 私钥 / Token / 密码 | ✅ 必开 | 厂商看不到你的密钥原文 |
| **个人信息** → 邮箱、手机号、身份证、银行卡 | ✅ 建议开 | 顺手把个人隐私也遮了 |
| **自定义词** → 脱敏词 | ⭕ 按需 | 填项目代号、人名等不想外传的词 |

![magpie 脱敏设置：打开 API Key 与个人信息脱敏](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/masking-zh-light.webp)

> 💡 **原理是什么？**
> magpie 在**你的电脑上**（本地网关里）把密钥换成占位符，比如
> `{{API_KEY_es6eu6jk}}` 发给厂商，厂商返回后 magpie 再换回真值。
> **Agent 和你的文件里始终是真值，厂商只看到占位符。**
>
> **改动即时生效**，不用重启 magpie，Agent 那边也不用改。
>
> ❗ **注意**：脱敏**只覆盖经过 magpie 的请求**。
> 绕过 magpie 直接请求厂商的 Agent，不在保护范围内。

### 步骤 5：挂上你的 Agent

**路径**：Agent 页面 → 找到你正在用的那个 Agent → **把右侧开关打开**

![magpie Agent 页面：打开你的 Agent 开关](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/agents-zh-light.webp)

> 💡 **这一步在干什么？**
> magpie 会**自动改写**那个 Agent 自己的配置文件，把请求地址指向本地网关
> （`http://127.0.0.1:3425`）。
>
> **好消息**：magpie 是**原子化修改**——会保留你原文件里的注释、顺序和格式，
> 不会把你的配置搞乱。
>
> ⚠️ **如果以后卸载 magpie**：一定要去 Agent 页面**把这些 Agent 关掉**，
> 否则它们的配置还指向已经不存在的网关，会连不上。

### 步骤 6：添加供应商（**省钱的关键**）

**路径**：左下角 **「+ 添加供应商」** → 在弹窗里选一个你想要的供应商

![magpie 添加供应商：选择要添加的供应商](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/add-zh-light.webp)

**支持的主流供应商**（部分）：

| 供应商 | 说明 |
|---|---|
| **MiniMax** | 国产一线，中文强，**有免费额度** |
| **DeepSeek** | 性价比之王，**新用户有赠送额度** |
| **Kimi** | 月之暗面，长文本强 |
| **Zhipu GLM** | 智谱，**Coding Plan 有免费档** |
| **StepFun / Qwen** | 阶跃星辰 / 阿里通义 |
| **Anthropic / OpenAI / Gemini** | 海外官方（有订阅或按量付费） |

> 💡 **怎么选？**
> - 想要**完全免费** → 优先看 MiniMax、DeepSeek、GLM
> - 想要**写代码最强** → GLM Coding、MiniMax
> - **新手别纠结** → 选一个免费的就够用了，不够再加第二个

注册流程：

1. 点进供应商，会跳转到官网
2. 注册账号
3. 拿到 API Key，复制
4. 粘贴回 magpie，保存

> ⚠️ **Key 只存在 magpie 这一处**，别的 Agent 都不用再单独配了。
> 这也是 magpie 的核心价值之一。

---

## 💰 然后：看你的账单（这才是重点）

装完之后，去 magpie 的**用量页面**看看实际花了多少。

![magpie 用量页面：Free plan 额度充足](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/magpie-free-plan.webp)

**看到没？`Free plan` —— 一分钱没花。**

对比一下**不用 magpie、纯自费**的情况：

![自费 MiniMax 用量：一个月花了 ¥1756](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/usage-minimax.webp)

![自费 DeepSeek 用量：一个月花了 ¥2162](https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/magpie/usage-deepseek.webp)

> 💸 **一个月 ¥1756、¥2162……** 这就是纯按量付费的代价。
>
> 而同样的模型，**走 magpie 的免费额度，这两笔支出可以是 0。**
>
> 这不是「省钱技巧」，这是**用错了模型**。
> 国内一线模型现在的能力已经足够写代码了，没必要为海外订阅付费。

---

## 🧭 一张表：常见问题速查

| 问题 | 答案 |
|---|---|
| **必须翻墙吗？** | 下载 GitHub 上的需要。magpie 本身装好后可以正常用国内模型 |
| **必须买 Claude 订阅吗？** | **不用。** 有免费额度就够了 |
| **一定要开脱敏吗？** | 强烈建议。API Key 裸奔给厂商不是好习惯 |
| **会影响我原来的 Agent 吗？** | 不会。magpie 原子化改配置，保留注释和格式，可一键关掉还原 |
| **能同时用多个模型吗？** | 能。这就是 magpie 的本意——配额满了还能自动切下一个 |
| **magpie 收费吗？** | 软件本身开源免费（MIT），它只是转发你的请求 |

---

## 🆘 卡住了？

**遇到问题，先找这里：**

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/xiaobai-kanban/support-qr.webp" alt="客服二维码" width="180" />

**扫码加客服，有问题直接问**
</div>

> 💡 **为什么要加这个？**
>
> 这一篇里有几个**天然容易卡住**的点：
>
> - **阶段一没做完就往下走** → Agent 装不上 magpie
> - **翻墙工具没开** → GitHub 下载失败
> - **脱敏开关没开** → 请求直接裸奔给厂商
> - **Agent 开关忘了开** → 装完没效果，以为是 magpie 坏了
> - **免费额度用完了** → 不知道该加哪个供应商
>
> 这些问题**看文字容易反复试错**，有人看一眼截图就能定位。
> 所以我们把客服放在这里——**卡住了就问，比自己瞎试快。**
>
> 另外，关于**「哪些模型免费、免费额度多少」**这类信息会变，
> 客服那边给的答案比文档更及时。

---

## 下一步

magpie 装好了，模型也挂上了。现在你缺的是**怎么指挥它把活干好**：

| | 章节 | 你会学到 |
|:--:|---|---|
| V1 | [什么是 vibe coding](./vibe-coding-what.md) | 它跟「让 AI 写代码」的根本区别 |
| V2 | [一轮该做多小](./vibe-coding-loop.md) | 粒度、什么时候打断、每轮必问的三句话 |
| V3 | [不会写代码，怎么验收](./vibe-coding-review.md) ⭐ | 三个信号、红线信号表、纠偏三招 |
| V4 | [人机分工与长期不失控](./vibe-coding-boundary.md) | 分工表、三条红线、上下文管理 |

> 👉 回到 [主线地图](./vibe-coding-path.md) · 回到 [首页](../README.md)
