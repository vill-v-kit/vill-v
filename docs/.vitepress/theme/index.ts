import { h } from 'vue'
import Theme from 'vitepress/theme'

import './style/style.css'
import 'uno.css'
import TeamPage from './components/TeamPage.vue'
export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(TeamPage),
    })
  },
}
