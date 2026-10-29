#!/usr/bin/env python3
"""生成 docs/tools/ 下的每个工具独立页面。

为什么要独立页面：38 个工具原本挤在 README 的一张表里，搜索引擎很难把
「免费图床」「密钥管理」这类关键词索引到具体工具上。拆成一页一个工具后，
每页有独立的 title / description / keywords，站内搜索和搜索引擎都能命中。
"""
import json
import os
import re
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "docs", "tools")

# 读取 README 里的工具表格，拿到「解决什么 / 怎么装」
readme = open(os.path.join(ROOT, "README.md"), encoding="utf8").read()
table = {}
for line in readme.splitlines():
    if line.startswith("| ") and "http" in line and "---" not in line:
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) == 4:
            m = re.search(r"\[([^\]]+)\]\((https://[^\)]+)\)", cells[1])
            if m:
                table[m.group(2)] = {
                    "label": m.group(1).strip("*"),
                    "solve": cells[2],
                    "install": cells[3].replace("<br>", " "),
                }

# 手工维护的元数据：中文名、别名关键词、所属分类
META = {
    "free-imgbed": ("免费图床", "图床,图片托管,免费图床,CDN,jsDelivr,markdown 图片,github 图床,图片上传", "🖼️"),
    "kyvault": ("本地密钥库", "密钥管理,API Key 管理,.env 加密,secrets,密码存储,环境变量注入", "🔐"),
    "path-guard": ("PATH 诊断", "PATH,环境变量,命令找不到,版本冲突,诊断,安装错版本", "🔍"),
    "claude-usage-statusline": ("Claude 用量状态栏", "Claude Code 花费,token 用量,限额预警,状态栏,上下文占用", "📊"),
    "scorecard": ("项目体检报告", "开源项目体检,项目成熟度,仓库审计,开源评分,readme 检查", "🩺"),
    "deadcode-reaper-skill": ("死代码清理", "死代码,代码清理,token 优化,上下文精简,重构", "🧹"),
    "logo-brand-designer": ("Logo 设计器", "logo 设计,品牌标识,SVG logo,项目图标,视觉设计", "🎨"),
    "facet": ("Markdown 转 PDF", "markdown 转 PDF,长图,演讲页,排版,导出 PDF,简历排版", "📄"),
    "museav-cli": ("终端出图 CLI", "终端出图,AI 绘图,命令行生图,配图生成,图片生成", "🖌️"),
    "chat-mood-gen": ("聊天效果图生成", "微信聊天截图,小红书配图,聊天记录做图,社交媒体配图", "💬"),
    "charmoji-sticker-skill": ("微信表情包生成", "表情包,微信表情,IP 形象,贴纸,表情制作", "😀"),
    "wallpaper-generator": ("壁纸编辑器", "壁纸,桌面壁纸,手机壁纸,壁纸制作,图片加水印", "🖼️"),
    "vite-plugin-agent-eyes": ("前端自愈遥测", "前端报错定位,截图,DOM 快照,vite 插件,调试 AI 写的代码", "👁️"),
    "contrast-guard": ("配色对比度检查", "对比度,可访问性,WCAG,配色检查,色盲友好", "🎨"),
    "frontend-contrast-guard": ("前端配色 CI 护栏", "配色 CI,设计系统,design token,OKLCH,无障碍检查", "🛡️"),
    "vite-plugin-refresh-guard": ("版本刷新检测", "强制更新,版本检测,缓存问题,部署后没更新", "🔄"),
    "ai-sse-kit": ("AI 流式接收包", "SSE,流式输出,打字机效果,打字机式回答,前端流式", "🌊"),
    "meridian": ("Mac Git 客户端", "git 图形客户端,macOS git,可视化 git,Tauri,Vue", "🌿"),
    "cs-mcp": ("工具接入 MCP", "MCP,工具接入,agent 工具,能力分组,工具聚合", "🔌"),
    "plugins": ("magpie 插件集", "magpie 插件,OpenCode provider,网关中间件,社区插件", "🧩"),
    "dsh-museav-assets": ("DSH 素材库插件", "DSH 插件,素材库,图片直链,素材管理", "📦"),
    "dsh-llm-hub": ("DSH 模型管理", "模型管理,LLM 网关,额度查询,余额监控,API 接入", "🧠"),
    "writing-standard-skills": ("写作规范 skill", "写作规范,AI 去味,技术写作,文风,沟通表达", "✍️"),
    "pr-contributor-skill": ("PR 提交流程", "提 PR,开源贡献,MR,code review,协作规范", "🤝"),
    "release-sync-skill": ("发版同步", "发版自动化,版本号同步,changelog,发布流程", "🏷️"),
    "im-notify-kit": ("飞书企微通知", "飞书通知,企业微信通知,webhook 通知,消息推送", "📨"),
    "typora-Bloom-theme": ("Typora Bloom 主题集", "Typora 主题,Bloom 主题,markdown 主题,写作主题,暗色主题,OKLCH", "🌸"),
    "dsh-bloom-theme": ("终端主题插件", "终端主题,终端配色,DSH 主题,莫兰迪配色", "🎨"),
    "reel-kit": ("短视频合成", "短视频,视频生成,批量视频,竖版视频,配音", "🎬"),
    "voxflow": ("AI 音频工作台", "语音克隆,TTS,播客生成,配音,BGM,音色设计", "🔊"),
    "suno-publisher": ("音乐发行管理", "音乐发行,Suno,上架台账,发行平台,歌曲上传", "🎵"),
    "device-passport": ("设备身份护照", "设备指纹,浏览器自动化,设备身份,测试环境,UA", "🪪"),
    "ai-orb": ("AI 状态球", "状态指示,加载动画,AI 助手状态,等待提示,状态球", "🔮"),
    "lite-browser": ("轻量浏览器自动化", "浏览器自动化,AI 操控浏览器,CDP,无头浏览器,网页操作", "🌐"),
    "mlx-vlm-kit": ("本地视觉模型", "本地视觉模型,图片理解,图像问答,离线模型,Apple Silicon", "👀"),
    "supercli": ("CLI 工具目录", "CLI 目录,命令行工具,工具搜索,命令行导航", "📇"),
    "webkubor": ("个人工具总站", "个人主页,AI 工具导航,GitHub 主页,项目合集", "🧭"),
    "xiaobai-kanban": ("小白看板", "AI 编程教程,小白学 AI,agent 入门,中文教程,vibe coding", "🧭"),
    "dsh-env-inspector": ("DSH 环境自检（已弃用）", "环境自检,端口占用,DSH 插件（已弃用）", "⚠️"),
}

# 关键工具的详细说明（覆盖 README 表格里偏简略的一行）
DESC = {
    "free-imgbed": (
        "一个 GitHub 仓库就是一台图床。图片 push 进仓库，jsDelivr 自动做全球 CDN 分发，"
        "CI 负责把「图片 ≤2MB、视频 ≤10MB」的红线守住。你只需要 fork 一份、改个名字就能用，"
        "不用买服务器、不用备案、不用续费。"
    ),
    "kyvault": (
        "把 API Key、Token、密码从明文文件挪进 AES-256-GCM 加密的本机密钥库，"
        "让 Agent 只能用别名去取凭据，永远碰不到明文。解决「密钥写在 .env 里被 AI 读进上下文」这个经典事故。"
    ),
    "path-guard": (
        "命令行报「command not found」但你明明装过了？多半是 PATH 里有两个版本，"
        "真正执行的不是你以为的那个。这个 CLI 会告诉你实际跑的是哪个二进制、哪个旧版本在挡路、哪条软链已经悬空。"
    ),
    "vite-plugin-agent-eyes": (
        "AI 写完前端，页面报错了你却只能对着空白页猜。这个 Vite 插件把运行时日志、"
        "错误时的 DOM 快照和截图攒成结构化数据，交给 Agent 直接读——让 AI 能自己看到它写错了什么。"
    ),
    "scorecard": (
        "给自己的开源项目做一次体检：GitHub 仓库状态、npm 包、线上网页一起查，"
        "输出带证据的成熟度报告和整改清单。不是打分游戏，是告诉你「离能被别人放心用还差什么」。"
    ),
    "lite-browser": (
        "给 AI Agent 用的浏览器自动化 CLI：直接用 Chrome DevTools Protocol 操控真实浏览器，"
        "会话可复用、多 Agent 之间隔离、随时能交回给人接手。支持 MCP 接入。"
    ),
    "ai-sse-kit": (
        "做 AI 对话界面最难的不是后端，是把流式响应正确地拆帧、拼成消息、还能中途取消。"
        "这个包处理 SSE 分帧、OpenAI / Anthropic 协议适配和不可变消息 patch，前端直接用。"
    ),
    "supercli": (
        "命令行工具太多了，记不住名字就想不起来有这个功能。这个站按用途和厂商搜 CLI，"
        "配 GitHub Stars 快照排名，社区通过 PR 贡献——相当于给命令行工具装了一个应用商店。"
    ),
}


def repo_url(name):
    return f"https://github.com/webkubor/{name}"


def fetch_repos():
    """每次运行都从 GitHub 拉取公开仓，避免依赖机器上的临时清单。"""
    result = subprocess.run(
        ["gh", "repo", "list", "webkubor", "--limit", "100", "--json",
         "name,description,url,isPrivate,repositoryTopics"],
        check=True, capture_output=True, text=True,
    )
    return sorted(
        (repo for repo in json.loads(result.stdout) if not repo["isPrivate"]),
        key=lambda repo: repo["name"].lower(),
    )


def main():
    repos = fetch_repos()
    os.makedirs(OUT, exist_ok=True)
    written = []

    for r in repos:
        name = r["name"]
        slug = name
        zh, keywords, icon = META.get(name, (name, "", "🧰"))
        entry = table.get(repo_url(name))
        # README 场景表描述的是场景，不一定是仓库能力；正文以仓库官方简介为准。
        solve = DESC.get(name) or (r["description"] or (entry["solve"] if entry else "查看仓库说明"))
        # 安装命令以仓库当前 README 为准，避免场景表里的旧命令误导。
        install = "安装与使用方法请以仓库 README 为准。"

        topics = [topic["name"] for topic in (r["repositoryTopics"] or [])][:8]
        kw = [k for k in keywords.split(",") if k]
        if topics:
            kw += topics
        kw += [name, zh]
        # 去重保序
        seen, kws = set(), []
        for k in kw:
            if k and k.lower() not in seen:
                seen.add(k.lower())
                kws.append(k)

        # GitHub 简介有时中英双语；摘要只取中文段，避免首屏截断到一半英文。
        summary = re.split(r"\s[/·—]\s(?=[A-Za-z])", solve, maxsplit=1)[0]
        desc_short = summary if len(summary) <= 90 else summary[:88] + "…"
        title = f"{zh} · {name}"

        md = []
        md.append("---")
        md.append(f"title: {json.dumps(title, ensure_ascii=False)}")
        md.append(f"description: {json.dumps(f'{zh}：{desc_short}。webkubor 开源项目。', ensure_ascii=False)}")
        md.append("head:")
        md.append("  - - meta")
        md.append("    - name: keywords")
        md.append(f"      content: {json.dumps(','.join(kws[:20]), ensure_ascii=False)}")
        md.append("---")
        md.append("")
        md.append(f"# {icon} {zh}")
        md.append("")
        md.append(f"> {desc_short}")
        md.append("")
        md.append(f"**仓库**：[github.com/webkubor/{name}](https://github.com/webkubor/{name})"
                  " · 开源项目")
        md.append("")
        md.append("---")
        md.append("")
        md.append("## 它解决什么问题")
        md.append("")
        md.append(solve)
        md.append("")
        md.append("## 相关搜索词")
        md.append("")
        md.append(" · ".join(kws[:8]))
        md.append("")
        md.append("## 怎么用")
        md.append("")
        md.append(install)
        md.append("")
        md.append(f"👉 **查看完整说明**：[github.com/webkubor/{name}](https://github.com/webkubor/{name})")
        md.append("")
        md.append("---")
        md.append("")
        md.append("## 相关")
        md.append("")
        md.append("- 📚 [回到工具总目录](/docs/tools/index)")
        md.append("- 🧭 [小白看板教程](/docs/what-is-agent)")
        md.append("- 💬 [卡住了？联系我们](/docs/about#卡住了-直接问)")
        md.append("")
        path = os.path.join(OUT, f"{slug}.md")
        with open(path, "w", encoding="utf8") as f:
            f.write("\n".join(md))
        written.append((slug, zh, len(kws)))

    print(json.dumps({"written": len(written)}, ensure_ascii=False))
    for w in written:
        print(w[0], "|", w[1], "| kw:", w[2])


if __name__ == "__main__":
    main()
