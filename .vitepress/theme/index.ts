/**
 * 小白看板 —— 自定义主题入口。
 *
 * 在默认主题之上做三件事：
 *   1. 换掉视觉：品牌色、字体、卡片、表格（见 custom.css）
 *   2. 全站挂一个客服悬浮入口，让读者在任何教程页都能找到帮助
 *   3. 在首页使用项目已有的橙色品牌横幅，保持视觉一致
 */
import DefaultTheme from 'vitepress/theme'
import { h, ref, onMounted, onUnmounted } from 'vue'
import type { Theme } from 'vitepress'
import './custom.css'

const QR = 'https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/xiaobai-kanban/support-qr.webp'
const BANNER =
  'https://cdn.jsdelivr.net/gh/webkubor/free-imgbed@main/blog/projects/xiaobai-kanban-banner/banner.webp'

/**
 * 首页首屏插图：直接用项目已有的橙色品牌横幅。
 *
 * 为什么不用默认的 hero.image：默认主题把图片塞进一个 320×320 的圆形容器里，
 * 横向 banner 会被裁掉大半。这里改用插槽自己渲染，保持横幅原比例。
 */
const HeroBanner = {
  name: 'HeroBanner',
  render() {
    return h('img', {
      class: 'xb-hero-banner',
      src: BANNER,
      alt: '小白看板 · 让学习与任务管理更简单高效',
      loading: 'eager',
      decoding: 'sync'
    })
  }
}

/**
 * 悬浮客服。默认收起，点一下展开二维码面板。
 * 收起态只占右下角一个小胶囊，不挡正文；移动端宽度收窄。
 */
const SupportFab = {
  name: 'SupportFab',
  setup() {
    const open = ref(false)
    const close = () => (open.value = false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    onMounted(() => window.addEventListener('keydown', onKey))
    onUnmounted(() => window.removeEventListener('keydown', onKey))

    return () =>
      h('div', { class: ['xb-fab', open.value ? 'is-open' : ''] }, [
        open.value
          ? h('div', { class: 'xb-fab__panel', role: 'dialog', 'aria-label': '加客服' }, [
              h('button', { class: 'xb-fab__close', 'aria-label': '关闭', onClick: close }, '×'),
              h('img', { src: QR, alt: '客服二维码', class: 'xb-fab__qr', loading: 'lazy' }),
              h('p', { class: 'xb-fab__title' }, '扫码加客服'),
              h('p', { class: 'xb-fab__desc' }, '出图、DSH、本地网关或安装卡住？带着目标和截图来问。'),
              h('p', { class: 'xb-fab__hint' }, '备注：小白看板 + 用途 + 具体问题；基础答疑免费')
            ])
          : null,
        h(
          'button',
          {
            class: 'xb-fab__btn',
            'aria-label': '加客服答疑',
            onClick: () => (open.value = !open.value)
          },
          [h('span', { class: 'xb-fab__dot' }), h('span', null, '卡住了？问客服')]
        )
      ])
  }
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(SupportFab),
      'home-hero-image': () => h(HeroBanner)
    })
  }
} satisfies Theme
