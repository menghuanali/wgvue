<template>
  <div>


<div class="ql-snow">
    <div class="ql-editor" v-html="description">
    </div>
</div>


        <!-- <div v-html="description"></div> -->
     
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      description:"",
    };
  },
  created:function(){

  }
};
</script>
<style lang="less" scoped>
</style>