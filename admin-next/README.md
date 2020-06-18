# admin-next

## tips

请安装最新的 beta 版本，包括 vue、vuex、vue-router

## export 'default' (imported as 'Vue') was not found in 'vue'

修改项目中的 <code>shims-vue.d.ts </code>文件如下：

```
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
```

## 定义组件

请使用新的 <code>Composition Api</code>。

```
# src/components/HelloWorld.vue

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Helloworld',
  props: {
    msg: { type: String, default: 'hello world' }
  }
})
</script>

```

## vue-router 类型定义

请使用 <code>RouteRecordRaw</code> 代替 <code>RouteConfig</code> 。

## vuex 类型定义

请使用 <code>createStore </code> 创建 <code>store </code>实例 。

```
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      count: 1
    }
  }
})
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
