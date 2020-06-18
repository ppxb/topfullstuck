<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
