// 国际化

import { createI18n, I18n } from 'vue-i18n'

// element-plus国际化
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

function shiponI18n(prefix = 'zh-CN') {
  return Object.fromEntries(
    Object.entries(import.meta.glob('../../locales/*.js', { eager: true })).map(
      ([key, value]: any) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1]
        return [matched, value.default]
      }
    )
  )[prefix]
}

const localesConfigs = {
  zh: {
    ...shiponI18n('zh-CN'),
    ...zhLocale,
  },
  en: {
    ...shiponI18n('en'),
    ...enLocale,
  },
}

export const i18n: I18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: localesConfigs,
})
