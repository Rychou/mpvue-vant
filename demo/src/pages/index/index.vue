<template>
  <div>
    <!-- 组件在main.json中引入 -->
    <!-- <van-button @click="onClick">按钮</van-button>
    <van-notify id="van-notify" />-->

    <van-button type="primary"
                @click="onClick">测试</van-button>
    <van-icon name="success" />
    <!-- <van-action-sheet :show="show"
                      :actions="actions"
                      @close="onClose"
    @select="onSelect" />-->
    <van-popup :show="show"
               :close-on-click-overlay="true"
               overlay-style="background:red"
               position="top"
               :overlay="true"
               @close="onClose">内容</van-popup>
  </div>
</template>

<script>
// 这个是唤起Notify的函数，参照[Vant 文档](https://youzan.github.io/vant-weapp/#/notify)
import Notify from '@/../static/vant/notify/notify'
import Toast from '@/../static/vant/toast/toast'
export default {
  data () {
    return {
      actions: [
        {
          name: '选项'
        },
        {
          name: '分享',
          subname: '描述信息',
          openType: 'share'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
      ],
      show: false
    }
  },
  methods: {
    onClick () {
      this.show = true
    },
    onClose () {
      this.show = false
    },

    onSelect (event) {
      console.log(event.detail)
    }
  }
}
</script>

<style>
</style>
