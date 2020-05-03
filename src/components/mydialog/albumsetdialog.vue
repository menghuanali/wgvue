<template>
  <div>
    <el-dialog
      title="编辑专辑"
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
        <el-input v-model="name" :placeholder="albumname"></el-input>
        <div style="font-size: 18px;font-weight: bold;margin-top: 25px;">描述</div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8}"
          :placeholder="albumdescribe"
          v-model="describe"
        ></el-input>
        <div style="font-size: 18px;font-weight: bold;margin-top: 25px;">隐私</div>
      <el-radio-group  v-model="isprivate" style="margin: 33px 0;">
        <el-radio :label=false>公开</el-radio>
  <el-radio :label="true">仅自己可见</el-radio>
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
import { SetAblum } from "@/api/allrequest";
export default {
  name: "albumsetdialog",
  data() {
    return {
      loading: true,
      isprivate:false,
      name:this.albumname,
      describe:this.albumdescribe,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    albumname: {
      type: String,
      default: ""
    },
    albumdescribe: {
      type: String,
      default: ""
    },
    albumprivate: {
      type: Number,
      default: 0
    },
    albumid: {
      type: Number,
      default: 0
    },
    albumindex: {
      type: Number,
      default: 0
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
     SetAblum(this.albumid,this.name,this.describe,this.isprivate).then((response) =>{
        let abluminfo = {};
        abluminfo.index = this.albumindex;
        abluminfo.newablum = response.abluminfo;
          this.$store.dispatch("CHANGEMyAlbum",abluminfo);
          this.$message({
          showClose: true,
          message: '修改成功'
        });
      }).catch((error) =>{ 
        console.log(error);
      })
      this.$emit("update:visible", false);
    },
  },
  mounted() {
    this.loading = false;
    this.isprivate = this.albumprivate==1?true:false;
  }
};
</script>
<style scoped lang="less">
</style>