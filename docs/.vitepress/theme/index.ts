import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import './style/style.css'
import 'uno.css'
import '@shikijs/vitepress-twoslash/style.css'
import TeamPage from './components/TeamPage.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(TeamPage),
    })
  },
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
}
