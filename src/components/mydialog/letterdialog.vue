<template>
  <div>
    <el-dialog
      :title="'发送私信给:'+toname"
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
        <div
          style="font-size: 18px;font-weight: bold;margin-top: 25px;text-align: center;margin-bottom: 20px;"
        >内容</div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 8}"
          placeholder="写下你的悄悄话"
          v-model="content"
        ></el-input>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelalbum">取 消</el-button>
        <el-button type="primary" @click="sureresive">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { UserLetter } from "@/api/allrequest";
export default {
  components: {},
  data() {
    return {
      loading: true,
      content: ""
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    toname: {
      type: String,
      default: ""
    },
    toid: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  created: function() {},
  methods: {
    modalClose() {
      this.$emit("update:visible", false);
    },
    cancelalbum() {
      this.$emit("update:visible", false);
    },
    sureresive() {
      if (this.content.trim() == "") {
        this.$notify({
          title: "警告",
          message: "内容为空",
          type: "warning"
        });
        return;
      } else {
        let letterinfo = {
          content: this.content,
          toid: this.toid
        };
        UserLetter(letterinfo).then((response) =>{
            this.$message(response.msg);
            this.$emit("update:visible", false);
        }).catch((error) =>{
            
        })
      }
    }
  },
  mounted() {
    this.loading = false;
  }
};
</script>
<style scoped lang="less">
</style>
