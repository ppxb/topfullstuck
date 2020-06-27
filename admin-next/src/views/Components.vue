<template>
  <div class="comp">
    <h1>Icons</h1>
    <close-icon />
    <h1>Button</h1>
    <c-button type="success" size="small" @click="say">hello world</c-button>
    <c-button type="primary">hello world</c-button>
    <c-button type="danger" size="large">Dark</c-button>
    <h1>Avatar</h1>
    <c-avatar src="https://vuesax.com/avatars/avatar-5.png" size="large"></c-avatar>
    <c-avatar size="large">Lily</c-avatar>
    <c-avatar>
      <i class="bx bxs-hot"></i>
    </c-avatar>
    <h1>Avatar</h1>
    <c-avatar src="https://vuesax.com/avatars/avatar-5.png" size="large"></c-avatar>
    <c-avatar size="large">Lily</c-avatar>
    <c-avatar>
      <i class="bx bxs-hot"></i>
    </c-avatar>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick } from 'vue'
import { CAvatar, CButton } from '../components'
import CloseIcon from '../components/Icons/close'

// const notificationConstructor = defineComponent({ extends: CAvatar })

// notificationConstructor.prototype.close = function() {
//   this.isVisiable = false
// }

// const instance = new notificationConstructor()
// instance.close()

export default defineComponent({
  name: 'Components',
  components: {
    CButton,
    CAvatar,
    CloseIcon
  },
  setup() {
    const name = inject('$vs')
    const say = () => console.log(name)

    return {
      say
    }
  }
})
</script>

<style scoped lang="less">
.comp {
  padding: 40px;
  background: #f1f1f1;
}
</style>
