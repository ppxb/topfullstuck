<template>
  <button class="c-button" :class="btnClass">
    <div class="c-button__content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (v: string) =>
        ['primary', 'success', 'danger', 'warn', 'dark'].includes(v)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (v: string) => ['small', 'normal', 'large'].includes(v)
    }
  },
  setup(props) {
    const btnClass = computed(() => {
      const classList = []
      if (props.type) classList.push(`c-button__${props.type}`)
      if (props.size) classList.push(`c-button__${props.size}`)
      return classList.join(' ')
    })

    return {
      btnClass
    }
  }
})
</script>
