<template>
  <div class="c-avatar" :class="avatarCls">
    <div class="c-avatar__content">
      <img v-if="props.src" :src="props.src" />
      <slot v-else></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CAvatar',
  props: {
    src: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const avatarCls = computed(() => {
      const classList = []
      if (props.size) classList.push(`c-avatar__${props.size}`)

      return classList.join(' ')
    })

    return {
      avatarCls,
      props
    }
  }
})
</script>
