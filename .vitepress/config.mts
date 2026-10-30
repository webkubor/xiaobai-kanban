import { defineConfig } from 'vitepress'

/**
 * 小白看板 —— 双入口文档站。
 *
 * 设计要点（对应仓库里本来就存在的两种角色）：
 *   👤 真人（小白）：/ 起步 → /INDEX 目录 → /docs/* 教程
 *   🤖 Agent      ：/AGENTS.md —— 纯 Markdown，不经 HTML 包装，Agent 直接读
 *
 * 所以本站对同一份内容提供两种取用方式：
 *   1. 渲染后的页面（人类可读）
 *   2. 构建时复制到 dist 的原始 .md（Agent 可读，路径与仓库一致）
 *   外加 /llms.txt 作为「给 LLM 的站点索引」。
 */
export default defineConfig({
  lang: 'zh-CN',
  title: '小白看板',
  description: '从低成本的 AI 上手教程和开源工具开始，学会做出、验收并发布自己的作品。',

  // Cloudflare Pages 挂在子域根路径上
  base: '/',
  // 输出 /AGENTS 而不是 /AGENTS.html
  cleanUrls: true,
  // 使用专用构建目录，避免清理旧 dist 时被批量删除保护拦截。
  outDir: '.vitepress/site-dist',
  // 这些目录不是站点内容，别当页面处理
  srcExclude: ['node_modules/**', 'scripts/**', 'README.en.md', '.github/**'],

  // 让搜索引擎发现教程与 38 个公开仓库的独立介绍页。
  sitemap: { hostname: 'https://xiaobai.webkubor.online' },

  // ⚠️ 为什么目录页叫 catalog.md 而不是 INDEX.md：
  // macOS 的文件系统默认大小写不敏感，而首页必须是 index.md —— 于是
  // INDEX.md 编译出的 INDEX.html 会和 index.html 撞成同一个文件，两者互相覆盖
  // （实测：/INDEX 显示了首页内容、/ 反而 404，更糟的是写 index.md 会直接覆盖
  // INDEX.md 的源文件）。改名是唯一干净的解法：VitePress 的 rewrites 试过，
  // 会触发「Cannot find module .temp/catalog.md.js」的内部解析错误。

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', media: '(prefers-color-scheme: light)' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#f5821f' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '小白看板 —— 让 Agent 帮你写代码' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          '从免费的 AI 教程与开源工具起步，学着把自己的想法做成、验收并发布。'
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'AI 编程教程,Agent 教程,vibe coding,免费 AI 编程,magpie,小白学 AI'
      }
    ]
  ],

  themeConfig: {
    logo: { light: '/favicon.svg', dark: '/favicon-dark.svg' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    lastUpdated: { text: '最后更新于' },

    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👤 小白入口', link: '/README' },
      { text: '🎵 vibe coding', link: '/docs/vibe-coding-path' },
      { text: '💰 不花钱', link: '/docs/magpie' },
      { text: '💬 关于我们', link: '/docs/about' },
      { text: '🧰 工具箱', link: '/docs/tools/index' },
      { text: '📝 博客', link: 'https://webkubor.online/articles' },
      { text: '📑 目录', link: '/catalog' }
    ],

    sidebar: [
      {
        text: '🧭 新手入口（从这里开始）',
        collapsed: false,
        items: [
          { text: '01 · Agent 是什么？', link: '/docs/what-is-agent' },
          { text: '02 · 我为什么要用？', link: '/docs/why-agent' },
          { text: '03 · 3 分钟第一次实战', link: '/docs/first-project' },
          { text: '04 · 怎么跟 Agent 说话', link: '/docs/how-to-speak-to-agent' },
          { text: '05 · 术语大白话词典', link: '/docs/glossary' }
        ]
      },
      {
        text: '🚀 快速上手（装工具 + 学流程）',
        collapsed: false,
        items: [
          { text: '06 · 认识 CLI：AI 的手脚', link: '/docs/about-cli' },
          { text: '07-10 · 自检 / 安装 / 登录 / Git 工作流', link: '/README' }
        ]
      },
      {
        text: '🛠️ 进阶技能',
        collapsed: false,
        items: [
          { text: '11 · 从零到上线：完整心智链', link: '/docs/from-zero-to-shipped' },
          { text: '12 · 怎么把需求讲清楚 ⭐', link: '/docs/how-to-write-requirements' },
          { text: '13 · 申请 Agent 邮箱', link: '/docs/mail' }
        ]
      },
      {
        text: '🎵 vibe coding 主线（会用 AI 写代码的看这条）',
        collapsed: false,
        items: [
          { text: '🗺️ 主线地图', link: '/docs/vibe-coding-path' },
          { text: 'V1 · 什么是 vibe coding', link: '/docs/vibe-coding-what' },
          { text: 'V2 · 一轮该做多小', link: '/docs/vibe-coding-loop' },
          { text: 'V3 · 怎么验收与纠偏 ⭐', link: '/docs/vibe-coding-review' },
          { text: 'V4 · 分工与长期不失控', link: '/docs/vibe-coding-boundary' }
        ]
      },
      {
        text: '💰 省钱与配置（不想花钱的看这条）',
        collapsed: false,
        items: [
          { text: '🔌 装上 magpie：不花钱用 AI 编程', link: '/docs/magpie' }
        ]
      },
      {
        text: '🧰 开源工具箱（38 个项目）',
        collapsed: false,
        items: [
          { text: '📦 工具总目录', link: '/docs/tools/index' },
          { text: '🎨 出图：MUSE AV 与 CLI', link: '/docs/tools/museav-cli' },
          { text: '🔌 DSH 模型管理插件', link: '/docs/tools/dsh-llm-hub' },
          { text: '🖼️ 免费图床', link: '/docs/tools/free-imgbed' },
          { text: '🔐 密钥库 kyvault', link: '/docs/tools/kyvault' },
          { text: '🔍 PATH 诊断', link: '/docs/tools/path-guard' },
          { text: '👁️ 前端自愈遥测', link: '/docs/tools/vite-plugin-agent-eyes' },
          { text: '🩺 项目体检', link: '/docs/tools/scorecard' },
          { text: '🌐 浏览器自动化', link: '/docs/tools/lite-browser' },
          { text: '📇 CLI 工具目录', link: '/docs/tools/supercli' }
        ]
      },
      {
        text: '🧑‍💼 角色指南',
        collapsed: false,
        items: [
          { text: '🏠 首页（我是哪一类？）', link: '/' },
          { text: '👤 小白用户 → README', link: '/README' },
          { text: '🤖 AI Agent → AGENTS.md', link: '/AGENTS' },
          { text: '📑 目录索引 → catalog', link: '/catalog' }
        ]
      },
      {
        text: '💬 关于我们 / 答疑',
        collapsed: false,
        items: [
          { text: '我们是谁、靠什么活着', link: '/docs/about' },
          { text: '卡住了？加客服（答疑免费）', link: '/docs/about#卡住了-直接问' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/webkubor' }],

    // 仓库在 GitHub，每页给一个「在 GitHub 编辑」入口
    editLink: {
      pattern: 'https://github.com/webkubor/xiaobai-kanban/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message:
        '以 MIT 协议开源 · 让每个人都能便宜甚至免费用上 AI · <a href="/docs/about">关于我们</a>',
      copyright: '小白看板 · xiaobai.webkubor.online'
    },

    search: { provider: 'local' },

    // Agent 想拿原文时，页脚给一条稳定的机器可读入口
    docFooterText: undefined
  }
})
