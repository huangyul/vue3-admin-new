import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { i18n } from '@/plugins/i18n'

// 引入重置样式
import '@/styles/reset.scss'
// 引入全局公共样式
import '@/styles/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 全局注册指令
import * as directive from '@/directives'
Object.keys(directive).forEach((key) => {
  app.directive(key, (directive as { [key: string]: Directive })[key])
})

// 引入图片组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.use(i18n)
app.mount('#app')
