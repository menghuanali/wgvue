<template>
  <div style=" overflow: hidden;">
    <wgloginandblackheader></wgloginandblackheader>
    <div>
      <el-row :gutter="10" class="all">
        <el-col :span="19">
          <div class="left">
            <el-upload
              class="upload-aitu"
              action
              ref="upload"
              multiple
              :file-list="aitufileList"
              list-type="picture-card"
              :auto-upload="false"
              :limit="12"
              :http-request="myuploadFile"
              :before-upload="beforeAvatarUpload"
              :before-remove="beforeRemove"
              :on-exceed="handleExceed"
              :on-remove="handleRemove"
              :on-change="handleAdd"
            >
              <div
                class="el-upload__text"
                style="color: chartreuse;font-size:24px;position: relative;"
              >
                <i class="el-icon-plus" style="color: chartreuse;font-size:24px"></i>
                <span>添加图片</span>
                <span
                  style="font-size: 12px;color: rgb(108, 128, 89);position: absolute;height: 20px;width: 200px;top: 66px;left: 22px;"
                >只能上传jpg/png文件，且不超过5M</span>
              </div>

              <!-- 列出文件列表 -->
              <div slot="file" slot-scope="{file}">
                <img :src="file.url" alt style="width: 100%;height: 100%;object-fit: cover;" />
                <div
                  style="position: fixed;transform: translate(0, -10px);    z-index: 1;"
                  @keydown.delete.stop
                >
                  <el-input :ref="'des'+file.name" v-model=file.des :placeholder="'添加'+file.name+'的描述'" style="width: 300px;"></el-input>
                </div>
                <!-- 一系列的操作 -->
                <!-- 查看大图 -->
                <span class="el-upload-list__item-actions" style="font-size: 40px;">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <!-- 移除 -->
                  <span
                    style="font-size: 40px;"
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="right">
            <p class="title">
              标题
              <svg-icon icon-class="bixu"></svg-icon>
            </p>
            <el-input class="titleinput" placeholder v-model="workinfo.title" clearable></el-input>
            <p class="fenlei">
              作品分类
              <svg-icon icon-class="bixu"></svg-icon>
            </p>
            <el-select v-model="workinfo.optionsonevalues" placeholder="请选择" class="selectone">
              <el-option v-for="item in optionsone" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <p class="describe">描述</p>
            <el-input
              class="describeinput"
              type="textarea"
              :rows="10"
              placeholder="请输入作品描述"
              v-model="workinfo.describe"
            ></el-input>
            <p class="tips">标签</p>
            <div class="addtag">
              <el-input
                class="input-new-tag"
                v-if="inputVisibleTag"
                v-model="inputValueTag"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirmTag"
                @blur="handleInputConfirmTag"
              ></el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInputTag">+ New Tag</el-button>
            </div>
            <div class="defaulttag">
              <span @click="AddBtnTag">美食记录</span>
              <span @click="AddBtnTag">美景美人</span>
              <span @click="AddBtnTag">自然</span>
              <span @click="AddBtnTag">日月山河</span>
            </div>
            <div class="worktags">
              <el-tag
                :key="tag"
                v-for="tag in workinfo.dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleCloseTag(tag)"
              >{{tag}}</el-tag>
            </div>
            <p class="myzhuangbei">我的装备</p>
            <el-select v-model="workinfo.optionstwovalues" placeholder="请选择装备" class="selecttwo">
              <el-option v-for="item in optionstwo" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <div class="finish" @click="subPicForm">
              <span style="position: absolute;top: 11px;left: 45%;">发布</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import { ceshiping } from "@/api/allrequest";
import axios from "axios";
import { getToken } from "@/utils/auth";
export default {
  components: { wgloginandblackheader },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      imglength: 0,
      startlength: 0,
      aitufileList: [],
      optionsone: [
        "人像",
        "风景",
        "生态",
        "纪实",
        "生活",
        "潜水",
        "航拍",
        "手机摄影",
        "运动",
        "夜景",
        "宠物",
        "汽车",
        "美食",
        "其他"
      ],
      optionstwo: [
        "佳能",
        "尼康",
        "索尼",
        "大疆",
        "iPhone",
        "华为",
        "三星",
        "富士",
        "奥林巴斯",
        "宾得",
        "理光",
        "小米",
        "柯达",
        "徕卡",
        "松下",
        "哈苏",
        "卡西欧",
        "适马",
        "海鸥",
        "飞思",
        "凤凰",
        "京瓷(Kyocera)",
        "康泰时",
        "创新(CREATIVE)",
        "宝丽莱",
        "威达(Vivitar)",
        "明基(BENQ)",
        "联想(Lenovo)",
        "拍得丽(Premier)",
        "爱国者(aigo)",
        "徕司",
        "爱普泰克(AIPTEK)",
        "惠普(HP)",
        "美能达",
        "勃朗尼卡（bornica）",
        "沙慕尼（Chamonix）",
        "玛米亚",
        "阿尔帕（ALPA）",
        "启能（Chinon）",
        "雅西卡",
        "通用",
        "禄莱",
        "威刚(A-data)",
        "友基(UGEE)",
        "文曲星",
        "Digimaster",
        "麦格逊(Megxon)",
        "天时(TEKXON)",
        "TCL",
        "柯尼卡美能达",
        "爱普生(EPSON)",
        "东芝(TOSHIBA)",
        "三洋(SANYO)",
        "GoPro",
        "其他手机拍摄",
        "其他",
        "Plustek",
        "vivo",
        "OPPO",
        "Adobe Systems Inc",
        "Hipstamatic",
        "nubia",
        "OnePlus",
        "Meizu",
        "Smartisan",
        "Tencent Pitu",
        "HMD Global",
        "google",
        "SEMC",
        "GIONEE",
        "Insta360",
        "Diwand",
        "ZUK",
        "InterPhoto",
        "SyntekTPE",
        "SHARP",
        "Fuji Velvia 50",
        "Hisense",
        "ZTE"
      ],
      inputVisibleTag: false,
      inputValueTag: "",
      workinfo: {
        title: "",
        optionsonevalues: "",
        optionstwovalues: "",
        describe: "",
        dynamicTags: [],
        introduce:{}
      },
      formData: new FormData() // 用来上传的表单
    };
  },
  //创建前
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "overflow: hidden;");
  },
  //销毁前清除
  beforeDestroy() {
    document
      .querySelector("body")
      .removeAttribute("style", "overflow: hidden;");
  },
  methods: {
    handleRemove(file) {
      //手动删除
      this.aitufileList.splice(this.aitufileList.indexOf(file), 1);
      // console.log(this.aitufileList);
    },
    handlePictureCardPreview(file) {
      //查看大图
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      //判断大小和类型
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isGIF = file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 < 2;
      if (!isJPG && !isPNG && !isGIF) {
        this.$message.error("上传图片只能是 JPG/PNG/GIF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return (isJPG || isGIF || isPNG) && isLt2M;
    },
    //键盘删除之前的提醒
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    //超过文件限制的提示
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 12 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    //通过 on-change 钩子函数来对列表进行控制
    handleAdd(file, fileList) {
      this.aitufileList = fileList;
    },
    //上传成功的钩子
    handleAvatarSuccess(response, file, fileList) {},
    //清除标签
    handleCloseTag(tag) {
      this.workinfo.dynamicTags.splice(
        this.workinfo.dynamicTags.indexOf(tag),
        1
      );
    },
    //展开标签输入框
    showInputTag() {
      this.inputVisibleTag = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    //确定添加标签方法
    handleInputConfirmTag() {
      let inputValueTag = this.inputValueTag;
      if (inputValueTag) {
        //判重
        for (let x in this.workinfo.dynamicTags) {
          if (this.workinfo.dynamicTags[x] == inputValueTag) {
            this.$message({
              message: "警告,重复添加!",
              type: "warning"
            });
            return;
          }
        }
        this.workinfo.dynamicTags.push(inputValueTag);
      }
      this.inputVisibleTag = false;
      this.inputValueTag = "";
    },
    //添加默认的标签
    AddBtnTag(e) {
      this.inputValueTag = e.toElement.innerText;
      for (let x in this.workinfo.dynamicTags) {
        if (this.workinfo.dynamicTags[x] == this.inputValueTag) {
          this.$message({
            message: "警告,重复添加!",
            type: "warning"
          });
          return;
        }
      }
      this.workinfo.dynamicTags.push(this.inputValueTag);
      this.inputValueTag = "";
    },
    //文件上传
    myuploadFile(file) {
      this.formData.append("file", file.file);
    },
    subPicForm() {
      let l = this.aitufileList.length;
      if (
        l == 0 ||
        this.workinfo.title.trim() == "" ||
        this.workinfo.optionsonevalues == ""
      ) {
        this.$notify({
          title: "警告",
          message: "必填项为空或者未添加图片",
          type: "warning"
        });
        return;
      }
      this.$refs.upload.submit();
      let config = {
        headers: {
          Aitutoken: getToken()
        }
      };
      let myfile = this.formData.getAll("file");
      for(let p = 0;p<myfile.length;p++){
        let f = "des" + myfile[p].name; //得到ref字符串了
        this.workinfo.introduce[myfile[p].name]=this.$refs[f].value==undefined?"":this.$refs[f].value;
      }
      // console.log("打印");
      // console.log(this.workinfo);
      var myformData = new FormData();
      for (var i = 0; i < myfile.length; i++) {
        myformData.append("file", myfile[i]);
      }

      myformData.append("workinfo", JSON.stringify(this.workinfo));
      // console.log("------");
      // console.log(myformData.getAll("file"));
      axios
        .post("http://localhost:8090/uploadz", myformData, config)
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.all {
  .left {
    height: 870px;
    .upload-aitu {
      /deep/ .el-upload--picture-card {
        width: 240px;
        height: 240px;
        border: 1px chartreuse dotted;
      }
      /deep/ .el-upload-list__item {
        width: 300px;
        height: 240px;
        display: inline-flex;
        margin-bottom: 40px;
      }
    }
  }
  .right {
    .title {
      margin-bottom: 10px;
      font-size: 14px;
      color: #111;
    }
    .titleinput {
      border: 1px solid #ccc;
      width: 80%;
      /deep/ .el-input__inner {
        border-radius: 0;
        height: 40px;
      }
    }
    .fenlei {
      margin-bottom: 10px;
      font-size: 14px;
      color: #111;
    }
    .selectone {
      width: 80%;
      border: 1px solid #ccc;
      /deep/ .el-input__inner {
        border-radius: 0;
        height: 40px;
      }
    }
    .describe {
      margin-bottom: 10px;
      font-size: 14px;
      color: #111;
    }
    .describeinput {
      width: 80%;
      border: 1px solid #ccc;
    }
    .tips {
      margin-bottom: 10px;
      font-size: 14px;
      color: #111;
    }
    .addtag {
      .input-new-tag {
        width: 80%;
        height: 40px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
        border: 1px solid #ccc;
        /deep/ .el-input__inner {
          border-radius: 0;
          height: 40px;
        }
      }

      .button-new-tag {
        height: 40px;
        line-height: 30px;
        font-size: 18px;
        padding-top: 0;
        padding-bottom: 0;
        width: 80%;
        color: #66b199;
        border: 1px solid #ccc;
      }
    }
    .defaulttag {
      margin: 10px 5px;
      span {
        color: #999;
        margin-right: 10px;
        cursor: pointer;
        font-size: 14px;
      }
    }
    .worktags {
      width: 80%;
      max-height: 160px;
      overflow: hidden;
      .el-tag + .el-tag {
        margin-left: 10px;
      }
    }
    .myzhuangbei {
      margin-bottom: 10px;
      font-size: 14px;
      color: #111;
    }
    .selecttwo {
      width: 80%;
      border: 1px solid #ccc;
      /deep/ .el-input__inner {
        border-radius: 0;
        height: 40px;
      }
    }
    .finish {
      text-align: center;
      width: 80%;
      height: 40px;
      font-size: 18px;
      background-color: chartreuse;
      margin-top: 20px;
      color: #ffffff;
      border: 1px solid #ccc;
      position: relative;
      cursor: pointer;
    }
  }
}
</style>