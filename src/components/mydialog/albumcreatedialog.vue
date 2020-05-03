<template>
  <div>
    <el-dialog
      title="新建专辑"
      v-loading="loading"
      :visible.sync="visible"
      width="600px"
      :show-close="false"
      :before-close="modalClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      center
    >
      <div style="padding: 0 60px;">
        <div style="font-size: 18px;font-weight: bold;">名称</div>
        <el-input v-model="name" placeholder="请填写名称"></el-input>
        <div style="font-size: 18px;font-weight: bold;margin-top: 25px;">描述</div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8}"
          placeholder="请填写描述"
          v-model="describe"
        ></el-input>
        <div style="font-size: 18px;font-weight: bold;margin-top: 25px;">隐私</div>
      <el-radio-group  v-model="isprivate" style="margin: 33px 0;">
        <el-radio :label=false>公开</el-radio>
  <el-radio  :label="true">仅自己可见</el-radio>
</el-radio-group>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelalbum">取 消</el-button>
        <el-button type="primary" @click="sureresive">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { CreateAblum } from "@/api/allrequest";
export default {
  name: "albumcreatedialog",
  data() {
    return {
      loading: true,
      isprivate:false,
      name:"",
      describe:"",
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    modalClose() {
      this.$emit("update:visible", false);
    },
    cancelalbum() {
      this.$emit("update:visible", false);
    },
    sureresive() {
      CreateAblum(this.name,this.describe,this.isprivate).then((response) =>{
        this.$store.dispatch("ADDMyAlbum",response.abluminfo);
      }).catch((error) =>{ 
        console.log(error);
      })
      this.$emit("update:visible", false);
    },

  },
  mounted() {
    this.loading = false;
  }
};
</script>
<style scoped lang="less">
</style>