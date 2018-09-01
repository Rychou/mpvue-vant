<template>
  <div>
    <!-- 组件在main.json中引入 -->
    <van-button @click="onClick">按钮</van-button>
    <van-notify id="van-notify" />
  </div>
</template>

<script>
// 这个是唤起Notify的函数，参照[Vant 文档](https://youzan.github.io/vant-weapp/#/notify)
import Notify from '@/../static/vant/notify/notify'

export default {
  methods: {
    onClick () {
      Notify("通知消息！")
    }
  }
}
</script>

<style>
</style>
