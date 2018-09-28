<template>

  <view class="container">
    <view class="title">
      <image class="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" />
      <view class="title-text">mpvue vant</view>
    </view>
    <view class="desc">mpvue中无缝接入的小程序 UI 组件库</view>

    <block v-for="(group,index) in list"  :key="group.title">
      <view class="mobile-nav">
        <view class="mobile-nav__title">{{ group.groupName }}</view>
        <van-cell-group>
          <van-cell v-for="(item,groupIndex) in group.list" :url="'/pages'+item.path+'/main'" :key="item.title" is-link  :title="item.title"></van-cell>
        </van-cell-group>
      </view>
    </block>
  </view>

</template>

<script>
export default {
  data() {
    return {
      list: [{
        groupName: '基础组件',
        list: [{
          path: '/button',
          title: 'Button 按钮'
        }]
      }, {
        groupName: '业务组件',
        list: [{
          path: '/area',
          title: 'Area 省市区选择'
        }]
      }]
    }
  }
}
</script>

<style lang="css">
.container {
  padding: 45px 15px 0;
}

.title {
  margin: 0 0 15px;
  text-align: center;
  user-select: none;
}

.logo,
.title-text {
  display: inline-block;
  vertical-align: middle;
}

.title-text {
  font-size: 32px;
  margin-left: 15px;
  font-weight: 400;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

.logo {
  width: 36px;
  height: 36px;
}

.desc {
  font-size: 14px;
  color: #455a64;
  margin: 0 0 60px;
  text-align: center;
}

.mobile-nav {
  margin-bottom: 20px;
}

.mobile-nav__title {
  font-size: 16px;
  background-color: #fff;
  padding: 17px 15px;
}

</style>
