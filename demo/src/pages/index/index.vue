<template>
  <div>
    <!-- 组件在main.json中引入 -->
    <!-- <van-button @click="onClick">按钮</van-button>
    <van-notify id="van-notify" /> -->
    <van-button type="primary">
      测试
    </van-button>
    <van-tabs color="#d5b069"
              :active="activeTab"
              :line-width="48"
              @change="onTabChange">
      <van-tab title="待付款">待付款</van-tab>
      <van-tab title="待发货">待发货</van-tab>
      <van-tab title="已完成">已完成</van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 这个是唤起Notify的函数，参照[Vant 文档](https://youzan.github.io/vant-weapp/#/notify)
import Notify from '@/../static/vant/notify/notify'

export default {
  data () {
    return {
      activeTab: 1
    }
  },
  methods: {
    onTabChange (e) {
      console.log(e)
    },
    onClick () {
      Notify("通知消息！")
    }
  }
}
</script>

<style>
</style>
