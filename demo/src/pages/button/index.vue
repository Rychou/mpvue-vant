<template>
<view>
  <view title="按钮类型" padding>
    <view class="row">
      <van-button custom-class="demo-margin-right">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
    </view>
    <van-button type="warning" custom-class="demo-margin-right">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </view>

  <view title="朴素按钮" padding>
    <view class="row">
      <van-button plain custom-class="demo-margin-right">默认按钮</van-button>
      <van-button type="primary" plain>主要按钮</van-button>
    </view>
    <van-button type="warning" plain custom-class="demo-margin-right">警告按钮</van-button>
    <van-button type="danger" plain>危险按钮</van-button>
  </view>

  <view title="按钮尺寸" padding>
    <van-button size="large" block custom-class="demo-margin-bottom">大号按钮</van-button>
    <van-button class="demo-margin-right">普通按钮</van-button>
    <van-button size="small" class="demo-margin-right">小型按钮</van-button>
    <van-button size="mini">迷你按钮</van-button>
  </view>

  <view title="禁用状态" padding>
    <van-button disabled>禁用状态</van-button>
  </view>

  <view title="加载状态" padding>
    <van-button loading custom-class="demo-margin-right" loading-class="loading" />
    <van-button loading type="primary" loading-class="loading" />
  </view>
</view>
</template>

<script>
export default {}
</script>

<style lang="css">
.loading {
  margin: 0 18px;
}

.row {
  height: 44px;
  margin-bottom: 15px;
}

</style>
