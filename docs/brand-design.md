---
title: 品牌设计 Skill 展示 · logo-brand-designer
description: logo-brand-designer 的实际产出：品牌色与概念锁定、同一理念四种风格对照、32px 深浅底真实渲染验收。小白看板的网站图标由它产出。
head:
  - - meta
    - name: keywords
      content: "logo 设计,品牌设计,设计 token,SVG logo,图标设计,32px 验收,logo-brand-designer,品牌评审"
---

# 🎨 品牌设计 Skill 展示

> 用 [logo-brand-designer](https://github.com/webkubor/logo-brand-designer) 做真实项目的品牌标识。
> 下面不是宣传图，是**这个站自己的 favicon 的完整生产过程**——包括被否掉的方案。

**Skill 仓库**：[github.com/webkubor/logo-brand-designer](https://github.com/webkubor/logo-brand-designer) · 开源 · MIT

---

## 它解决什么问题

设计标识最常见的翻车方式，是**画完就宣布完成**：

- 颜色凭感觉挑，和产品实际用的主题色对不上
- 造型在 200px 很精致，一缩到 32px 糊成一团
- 深色模式下几乎看不见，却没人去看
- 只有一个方案，没有对照，选不出更好的那个

这个 Skill 的做法是**先锁来源，再出方案，最后用真实尺寸验收**：

| 阶段 | 做什么 | 产出 |
|---|---|---|
| 溯源 | 读项目 README、生产主题 token、既有 SVG | 每个颜色的来源与性质标注 |
| 锁概念 | 明确这一版标识要表达什么 | 一句话理念 + 多个风格候选 |
| 出图 | 同一理念画 4 款，深浅两版 | 透明底 1:1 SVG |
| 验收 | 在 `#FFFFFF` 与 `#0D1117` 实际渲染 32px | 真实截图，糊就是糊 |

---

## 实战一：小白看板的网站图标

### 第一步 · 锁品牌色

站点现有主题 token 是品牌色来源；四款 SVG 的额外橙色明暗、琥珀色高光与暖白色对勾均是**本轮设计提案**，尚未锁定为品牌规范：

| 角色 | 色值 | 来源 |
|---|---|---|
| 主色 primary | `#F5821F` | `.vitepress/theme/custom.css` 的 `--xb-orange` |
| 强调 accent | `#FFA64D` | `--xb-orange-light` |
| 浅底前景 onLight | `#D9690B` | `--xb-orange-deep` |
| 深底前景 onDark | `#FFA64D` | `--xb-orange-light` |

> 💡 **关键约束**：图标颜色必须能在项目里指出出处。源码里的状态色、示例主题、第三方徽章色，都不能自动当成品牌主色。

### 第二步 · 锁概念

> **把想法逐步推进到完成。**

这句话是**本轮共同设计方向**，尚未获得你对正式品牌理念的确认。

第一轮做的是**同一风格里的四种造型**（对勾、盾牌、箭头、角色）。这个做法只解决了「选哪个图形」，没有回答「品牌该是什么气质」，因此按**四种不同的视觉体系与设计灵感**重做一轮：

| 方案 | 视觉体系 | 灵感来源 |
|---|---|---|
| A 极简 | 单色平涂、强负空间 | 瑞士平面设计 · Linear 的克制 |
| B 渐变 | 高饱和光感、锐角流线 | Vite 的能量方向 |
| C 质感 | 多面切割与阴影 | GitLab 的折面构造 |
| D 高级感 | 细线、单点、留白 | 奢侈品牌与精密仪器 |

**[打开矢量对比页 →](/brand-review/v3-styles.html)** — 四种体系 × 深浅底 × 32/64/128px，全部内嵌 SVG，缩放不重新采样。

第一轮的四款造型仍保留备查：

![四款候选标识](/brand-review/v2-comparison.png)

### 第三步 · 32px 真实验收

这一步是整个流程里最有用的一环。**放大 6 倍的图不是把 SVG 拉大，而是先渲染成 32px 位图再放大**——显示的是 librsvg 在指定尺寸渲染出的像素，用于模拟小尺寸效果；浏览器与屏幕像素密度不同，实际显示可能略有差别：

![32px 实际像素](/brand-review/v2-32px-zoom.png)

矢量放大不会失真，但 32px 是**只有 32 个像素格子可用**。差别就体现在这里：

![矢量与位图对比](/brand-review/vector-vs-raster.png)

- **B 看板完成块** —— 大色块 + 粗对勾，32px 下依然清楚 → **目前暂用**
- **A 折带完成标记** —— 折带的轮廓清楚，但缺少“看板”这一识别线索
- **C 前进路径** —— 小尺寸下箭头头部与路径接近，辨识需要加强
- **D 陪伴角色** —— SVG 矢量大图是清晰的狐头；32px 下五官容易合并，当前不适合直接用作 favicon

> ⚠️ **D 方案不是设计失败，是尺寸取舍。** 它的矢量版完全清晰，只是不适合 32px 标签页。这类"好看但用不了"的方案正是必须有真机验收的原因。

### 本轮暂用

![浅色底 B 看板完成块](/favicon.svg)　[查看完整透明底 SVG](/favicon.svg) · [深色版本](/favicon-dark.svg)

B 款由折面构成看板外轮廓，中央用完成标记表示验收。**网站目前采用 B 款作为浏览器图标和顶部 logo，四款仍保留供继续评审**。SVG 放大仍保持清晰；32px 真实渲染单独用作小尺寸可读性检查。

---

## 为什么这个 Skill 值得用

| 常见做法 | 这个 Skill |
|---|---|
| 凭感觉挑颜色 | 每个颜色标注来源与性质，区分「用户给定 / 项目既有 / 本次建议」 |
| 只出一版就定稿 | 同一理念强制多个风格候选，放在一起比 |
| 看大图觉得挺好 | 在 32px 的浅底和深底实际渲染后目视验收 |
| 交付一堆文件 | 一条命令生成离线评审页，别人不装依赖也能看 |

**离线评审页**是这个 Skill 的关键设计：交付物自带一个 HTML，把候选、token、来源、理念全放进去，评审人双击就能看，不需要装任何东西。

---

## 装到你的 Agent 上

```bash
# 生态标准工具，一步装到 20+ 种 Agent
npx skills add webkubor/logo-brand-designer
```

或者用仓库自带的安装脚本（默认软链，改源码即时生效）：

```bash
git clone git@github.com/webkubor/logo-brand-designer.git
cd logo-brand-designer && ./install.sh
```

| 选项 | 作用 |
|---|---|
| `./install.sh --list` | 只看会装到哪，不改文件 |
| `./install.sh --target claude` | 只装到指定运行时 |
| `./install.sh --copy` | 用拷贝代替软链 |
| `./install.sh --uninstall` | 卸载（只清理自己装的那份） |

---

## 相关

- 📚 [回到工具总目录](/docs/tools/index)
- 🎨 [Logo 设计器工具页](/docs/tools/logo-brand-designer)
- 🧭 [小白看板教程](/docs/what-is-agent)
- 💬 [卡住了？联系我们](/docs/about#卡住了-直接问)
