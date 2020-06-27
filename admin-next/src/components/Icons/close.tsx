import { defineComponent, VNode, h } from 'vue'
import './index.less'

export default defineComponent({
  props: {
    hover: { type: String, default: 'less' }
  },
  setup(props) {
    const close: VNode = h('i', {
      class: ['c-icon-close', `c-icon-hover-${props.hover}`],
      ref: 'icon'
    })

    const button: VNode = h(
      'button',
      {
        onClick: () => console.log(123)
      },
      '关闭按钮'
    )

    return () => button
  }
})
