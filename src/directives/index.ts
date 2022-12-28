// 自定义指令
// vue官方文档：https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
import { Directive, DirectiveBinding } from 'vue'

// 按钮权限
export const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    if (value) {
      // TODO 判断是否有权限
      el.parentNode?.removeChild(el)
    } else {
    }
  },
}
