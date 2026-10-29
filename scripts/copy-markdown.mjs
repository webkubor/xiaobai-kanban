/**
 * 把「原始 Markdown」复制进构建产物。
 *
 * 为什么需要：本站有两个读者。
 *   👤 真人看渲染后的页面（/AGENTS、/docs/what-is-agent …）；
 *   🤖 Agent 读原文更省 token、也没有 HTML 噪音。
 *
 * 所以构建时把仓库里的 .md 原样放进 dist，路径与仓库保持一致：
 *   /AGENTS.md                 → Agent 的操作手册（这是主入口）
 *   /README.md /catalog.md     → 人类入口的原文
 *   /docs/<name>.md            → 各篇教程原文
 *
 * 与 VitePress 的 cleanUrls 不冲突：页面是 /AGENTS（→ AGENTS.html），
 * 原文是 /AGENTS.md，两个文件在 dist 里并存。
 */
import { existsSync } from 'node:fs'
import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, '.vitepress', 'site-dist')

/** 仓库根下要一并复制的 Markdown。 */
const ROOT_FILES = ['README.md', 'catalog.md', 'AGENTS.md']

async function main() {
  // 1) 根目录三个入口
  for (const name of ROOT_FILES) {
    await cp(join(root, name), join(dist, name))
  }

  // 2) docs/ 整目录（含 docs/tools/ 子目录）
  await cp(join(root, 'docs'), join(dist, 'docs'), { recursive: true })

  // 3) 顺手把「原文清单」写进产物，Agent 可以据此发现全部可用文档
  const docsDir = join(root, 'docs')
  const docs = (await readdir(docsDir)).filter((f) => f.endsWith('.md')).sort()
  const toolsDir = join(docsDir, 'tools')
  const tools = existsSync(toolsDir)
    ? (await readdir(toolsDir)).filter((f) => f.endsWith('.md')).sort()
    : []

  const manifest = {
    site: 'https://xiaobai.webkubor.online',
    note: '本站的机器可读入口。渲染页去掉 .md 后缀即可（/AGENTS = /AGENTS.md 的网页版）。',
    agentEntry: '/AGENTS.md',
    humanEntry: '/README.md',
    index: '/catalog.md',
    documents: [
      ...ROOT_FILES.map((f) => `/${f}`),
      ...docs.map((f) => `/docs/${f}`),
      ...tools.map((f) => `/docs/tools/${f}`)
    ]
  }
  await mkdir(dist, { recursive: true })
  await writeFile(join(dist, 'documents.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8')

  console.log(
    `✓ 已复制 ${ROOT_FILES.length} 个根文档 + docs/ 下 ${docs.length} 篇 + tools/ 下 ${tools.length} 个工具页；生成 documents.json`
  )
}

await main()
