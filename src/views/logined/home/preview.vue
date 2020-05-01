<template>
  <div>
    <div class="yulanheader">
      <span class="son">【温馨提示】这是预览模式!关闭这个窗口即可.</span>
    </div>

    <el-row>
      <el-col :span="4" style="min-height: 1px;"></el-col>
      <el-col :span="16">
        <div class="title">{{PreviewData.title}}</div>
        <div class="smallinfo">
          <span class="left">发布</span>
          <span class="right">刚刚</span>
          <span class="left">分类:</span>
          <span class="right">{{PreviewData.optionsonevalues}}</span>
          <span class="left">我的装备:</span>
          <span class="right">{{PreviewData.optionstwovalues}}</span>
        </div>
        <div class="ql-snow">
          <div class="ql-editor" v-html="PreviewData.paragraphs"></div>
        </div>
        <div class="biaoqian">
          <span v-for="(wp,index) in PreviewData.dynamicTags" :key="index">{{wp}}</span>
        </div>
      </el-col>
      <el-col :span="4" style="min-height: 1px;"></el-col>
    </el-row>
    <basefooter></basefooter>
  </div>
</template>

<script>
import basefooter from "@/components/Htmlviews/basefooter.vue";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
export default {
  components: { basefooter },
  data() {
    return {
      
    };
  },
  created: function() {
console.log(this.PreviewData);

    },
  computed: {
    PreviewData() {
      return this.$store.getters.preview_data;
    }
  }
};
</script>
<style scoped lang="less">
.yulanheader {
  display: table;
  width: 100%;
  height: 100px;
  text-align: center;
  .son {
    display: table-cell;
    vertical-align: middle;
    color: #384ace;
  }
}
.title {
  color: #111;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 29px;
  padding-left: 12px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.smallinfo {
  padding-left: 12px;
  margin: 10px 0 50px 0;
  .left {
    color: #999;
    font-size: 14px;
  }
  .right {
    font-size: 14px;
    margin-right: 26px;
  }
}
.biaoqian {
  padding-left: 12px;
  margin: 50px 0 75px 0;
  span {
    height: 28px;
    line-height: 28px;
    padding-right: 10px;
    font-size: 14px;
    color: #999;
    margin-right: 10px;
  }
}
</style>