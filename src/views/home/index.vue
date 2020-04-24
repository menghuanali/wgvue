<template>
  <div>
      <div class="wg_aitu_head">
    <wgnologinandwhiteheader></wgnologinandwhiteheader>
    </div>
    <div class="wg_aitu_index_background"></div>
  </div>
</template>

<script>
import wgnologinandwhiteheader from '@/components/Htmlviews/wgnologinandwhiteheader.vue'
export default {
  name: "home",
  components:{ wgnologinandwhiteheader}
}
</script>

<style scoped lang="less">
.wg_aitu_index_background{
    background-image:url(../../assets/jpg/indexbackground.jpg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>