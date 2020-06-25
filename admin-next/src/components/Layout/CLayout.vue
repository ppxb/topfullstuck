<template>
  <div class="c-layout">
    <div class="c-layout__content">
      <div class="c-layout__content-header"></div>
      <div class="c-layout__content-main">
        <router-view class="c-layout__content-view" />
        <div class="c-layout__content-info"></div>
      </div>
    </div>
    <div class="c-layout__admin">
      <div class="admin__action">
        <i class="bx bx-planet" style="margin-right:24px;"></i>
        <i class="bx bx-cog"></i>
        <i class="bx bx-exit" style="margin-left:auto"></i>
      </div>
      <div class="admin__info">
        <c-avatar size="large" src="https://vuesax.com/avatars/avatar-5.png" />
        <div class="admin__name">Tomy Cluse</div>
        <div class="admin__role">Administrator</div>
        <div class="admin__status">
          <div class="status-item">
            <i class="bx bxs-user user"></i>
            <div class="title">Current Users</div>
            <div class="desc">20K +</div>
          </div>
          <div class="status-item">
            <i class="bx bxs-meteor courses"></i>
            <div class="title">Setuped Courses</div>
            <div class="desc">42</div>
          </div>
        </div>
      </div>
      <div>trending</div>
      <div>events</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { CAvatar } from '../index'

export default defineComponent({
  name: 'CLayout',
  components: {
    CAvatar
  }
})
</script>