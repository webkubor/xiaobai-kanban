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
  description: '让 Agent 帮你写代码 —— 你只说话，Agent 搞定一切。不需要懂代码、不需要懂命令行。',

  // Cloudflare Pages 挂在子域根路径上
  base: '/',
  // 输出 /AGENTS 而不是 /AGENTS.html
  cleanUrls: true,
  // 这些目录不是站点内容，别当页面处理
  srcExclude: ['node_modules/**', 'scripts/**', 'README.en.md', '.github/**'],

  // ⚠️ 为什么目录页叫 catalog.md 而不是 INDEX.md：
  // macOS 的文件系统默认大小写不敏感，而首页必须是 index.md —— 于是
  // INDEX.md 编译出的 INDEX.html 会和 index.html 撞成同一个文件，两者互相覆盖
  // （实测：/INDEX 显示了首页内容、/ 反而 404，更糟的是写 index.md 会直接覆盖
  // INDEX.md 的源文件）。改名是唯一干净的解法：VitePress 的 rewrites 试过，
  // 会触发「Cannot find module .temp/catalog.md.js」的内部解析错误。

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '小白看板 —— 让 Agent 帮你写代码' }],
    ['meta', { property: 'og:description', content: '从零开始，跟着编号走，一步步学会用 Agent 写代码。' }]
  ],

  themeConfig: {
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    lastUpdated: { text: '最后更新于' },

    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👤 小白入口', link: '/README' },
      { text: '🤖 Agent 入口', link: '/AGENTS' },
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
        text: '🧑‍💼 角色指南',
        collapsed: false,
        items: [
          { text: '🏠 首页（我是哪一类？）', link: '/' },
          { text: '👤 小白用户 → README', link: '/README' },
          { text: '🤖 AI Agent → AGENTS.md', link: '/AGENTS' },
          { text: '📑 目录索引 → INDEX', link: '/catalog' }
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
      message: '以 MIT 协议开源 · 内容会随反馈持续更新',
      copyright: '小白看板 · xiaobai.webkubor.online'
    },

    search: { provider: 'local' },

    // Agent 想拿原文时，页脚给一条稳定的机器可读入口
    docFooterText: undefined
  }
})
