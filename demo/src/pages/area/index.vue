<template>
<div class="page-area">
  <van-cell-group>
    <van-field is-link required clearable label="地址" placeholder="请输入地址" @click="areaPopupShow" :value="address"/>
  </van-cell-group>
  <van-popup :show="areaShow" position="bottom" @close="clickOverlay">
    <van-area :area-list="areaList" @cancel="areaCancel"  @confirm="areaConfirm" v-if="areaList"  value="110105"/>
  </van-popup>
</div>
</template>

<script>
import AreaList from '@/utils/area';
export default {
  data() {
    return {
      areaShow:false,
      areaList: AreaList,
      areaCode:'110105',
      address:'北京市 北京市 朝阳区'
    }
  },
  methods: {
    areaPopupShow(){
      this.areaShow=true;
    },
    clickOverlay(){
      this.areaShow=false;
    },

    areaConfirm(event){
      let values=event.mp.detail.values;
      this.address=values.map(item=>{return item.name}).join(' ');
      this.areaCode=values[values.length-1].code;
      this.areaShow=false;
    },
    areaCancel(){
      this.areaShow=false;
    }
  }
}
</script>

<style lang="css">
</style>
