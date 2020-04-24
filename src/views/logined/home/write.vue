<template>
  <div style="overflow: hidden;">
    <wgloginandblackheader></wgloginandblackheader>
    <el-row style="min-width:1820px">
      <el-col :span="19">
        <el-row>
          <el-col :span="6" style="border-top: 1px solid #ccc;min-width: 300px;">
            <div class="listall" style="height: 810px;overflow-y: auto;" v-loading="loading">
              <div
                class="uptools_bar"
                style="font-size: 40px;height: 70px;display: flex;color:#abbfb8;justify-content: space-evenly;cursor: pointer;"
              >
                <div
                  title="增加一个文本段落"
                  class="text_bar"
                  style="padding-top: 10px;"
                  onmouseover="this.style.color='#16e61c'"
                  onmouseout="this.style.color='#abbfb8'"
                >
                  <i class="el-icon-document" @click.stop="AddUpDiv()"></i>
                </div>
                <div
                  title="增加一个图片段落"
                  class="img_bar"
                  style="padding-top: 10px;"
                  onmouseover="this.style.color='#16e61c'"
                  onmouseout="this.style.color='#abbfb8'"
                >
                  <el-upload
                    action="http://localhost:8090/uploadone"
                    :show-file-list="false"
                    :on-success="handleimgSuccessUP"
                    accept="image/png, image/jpeg, image/jpg, image/bmp"
                    name="file"
                    :headers="myHeaders"
                    :before-upload="beforeAvatarUpload"
                  >
                    <i class="el-icon-picture-outline"></i>
                  </el-upload>
                  <!-- <i class="el-icon-picture-outline" @click.stop="AddUpImg()"></i> -->
                </div>
              </div>
              <template v-for="(p,index) in imgandtextlist">
                <div :key="index">
                  <!-- 列出 -->
                  <!-- 文本 -->
                  <div v-if="p.divtype == 'text'" style="display: flex;margin-left: 10%;">
                    <div
                      @click.stop="CheckThisDiv(index)"
                      :class="{'greenborder':ischeck==index}"
                      class="whiteborder"
                      style="width: 270px;cursor: initial;height: 90px;color: rgb(171, 191, 184);display: flex;"
                    >
                      <div style="height: 90px;font-size: 90px;border-right: 1px solid #ccc;">
                        <i class="el-icon-right"></i>
                      </div>

                      <div v-if="p.textcontent ==''" style="margin: 10px;color:#ccc">点击后在右方编辑段落内容</div>
                      <div
                        v-else
                        style=" text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 4;line-clamp: 4;-webkit-box-orient: vertical; margin: 10px;color:black"
                      >{{p.textcontent}}</div>
                    </div>
                    <i
                      class="el-icon-delete"
                      style="font-size: 30px;color: #af98a9;cursor: pointer;margin: 15px;"
                      @click.self.stop="DeleteThisDiv(index)"
                    ></i>
                  </div>
                  <!-- 图片 -->
                  <div v-else style="display: flex;margin-left: 10%;">
                    <div
                      @click.stop="CheckThisDiv(index)"
                      :class="{'greenborder':ischeck==index}"
                      class="whiteborder"
                      style="width: 270px;cursor: initial;height: 90px;color: rgb(171, 191, 184);display: flex;"
                    >
                      <div
                        style="height: 90px;font-size: 90px;border-right: 1px solid #ccc;width: 100px;overflow: hidden;"
                      >
                        <img
                          :src="p.imgsrc"
                          alt="上传的图片"
                          style="height: 90px;width: 100px;object-fit: cover;"
                        />
                      </div>

                      <div v-if="p.textcontent ==''" style="margin: 10px;color:#ccc">点击后在右方编辑段落内容</div>
                      <div
                        v-else
                        style=" text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 4;line-clamp: 4;-webkit-box-orient: vertical; margin: 10px;color:black"
                      >{{p.textcontent}}</div>
                    </div>
                    <i
                      class="el-icon-delete"
                      @click.self.stop="DeleteThisDiv(index)"
                      style="font-size: 30px;color: #af98a9;cursor: pointer;margin: 15px;"
                    ></i>
                  </div>
                  <!-- 后面的操作 -->
                  
                  <div
                    class="downtools_bar"
                    style="font-size: 40px;height: 70px;display: flex;color:#abbfb8;justify-content: space-evenly;cursor: pointer;"
                  >
                    <div
                      title="在此处插入文本段落"
                      class="text_bar"
                      style="padding-top: 10px;"
                      onmouseover="this.style.color='#16e61c'"
                      onmouseout="this.style.color='#abbfb8'"
                    >
                      <i class="el-icon-document" @click.stop="AddDownDiv(index)"></i>
                    </div>
                    <div
                      title="在此处插入图片段落"
                      class="img_bar"
                      style="padding-top: 10px;"
                      onmouseover="this.style.color='#16e61c'"
                      onmouseout="this.style.color='#abbfb8'"
                    >
                      <el-upload
                        action="http://localhost:8090/uploadone"
                        :show-file-list="false"
                        :on-success="handleimgSuccessDOWN"
                        accept="image/png, image/jpeg, image/jpg, image/bmp"
                        name="file"
                        :headers="myHeaders"
                        :before-upload="beforeAvatarUpload"
                      >
                        <i class="el-icon-picture-outline" @click="ChangeIscheck(index)"></i>
                      </el-upload>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="myeditordiv">
              <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                enable="false"
                @focus="onEditorFocus($event)"
                @blur="onEditorBlur($event)"
                @change="onEditorChange($event)"
                style="height: 750px;padding-bottom: 40px;"
              ></quill-editor>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" style="border-top: 1px solid #ccc;">
        <div class="right">
          <p class="first">封面图<svg-icon icon-class="bixu"></svg-icon></p>
          <div class="second" @mouseover="genghuancover" @mouseleave="notgenghuancover">
            <div class="second1" v-show="isuped">
              <img :src="CoverUrl" alt="封面图" />
            </div>
            <div class="second2" v-show="!isuped" v-loading="coverloading">
              <el-upload
                action="http://localhost:8090/uploadone"
                :show-file-list="false"
                accept="image/png, image/jpeg, image/jpg, image/bmp"
                :on-success="handleimgSuccessCOVER"
                :before-upload="beforeAvatarUpload"
                :headers="myHeaders"
                @click.stop
              >
                <i class="el-icon-plus" @click="tupianjiazai()"></i>
                <div class="el-upload__text" style="font-size:18px" v-show="!iscover">添加一张封面图</div>
                <div class="el-upload__text" style="font-size:18px" v-show="iscover">更换一张封面图</div>
              </el-upload>
            </div>
          </div>
          <p class="title">
            标题
            <svg-icon icon-class="bixu"></svg-icon>
          </p>
          <el-input class="titleinput" placeholder v-model="boweninfo.title" clearable></el-input>
          <p class="fenlei">
            作品分类
            <svg-icon icon-class="bixu"></svg-icon>
          </p>
          <el-select v-model="boweninfo.optionsonevalues" placeholder="请选择" class="selectone">
            <el-option v-for="item in optionsone" :key="item" :label="item" :value="item"></el-option>
          </el-select>
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
              v-for="tag in boweninfo.dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleCloseTag(tag)"
            >{{tag}}</el-tag>
          </div>
          <p class="myzhuangbei">我的装备</p>
          <el-select v-model="boweninfo.optionstwovalues" placeholder="请选择装备" class="selecttwo">
            <el-option v-for="item in optionstwo" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <div style="display: flex;">
                      <div class="finish" @click="subFaBu">
            <span style="position: absolute;top: 11px;left: 35%;">发布</span>
          </div>
         <div class="finish" @click="subYuLan">
            <span style="position: absolute;top: 11px;left: 35%;">预览</span>
          </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import { getToken } from "@/utils/auth";
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
const toolbarOptions = [
  // ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
  ["bold", "italic", "underline"], // 加粗 斜体 下划线 删除线
  // ["blockquote", "code-block"], // 引用  代码块
  [{ header: 1 }, { header: 2 }], // 1、2 级标题
  // [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
  // [{ script: "sub" }, { script: "super" }], // 上标/下标
  // [{ indent: "-1" }, { indent: "+1" }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  //  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ color: [] }], // 字体颜色、字体背景颜色
  // [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ["clean"], // 清除文本格式
  // ["link", "image", "video"] // 链接、图片、视频
  // ["image"] // 链接、图片、视频
];
export default {
  components: { quillEditor, wgloginandblackheader },
  data() {
    return {
      content: "禁用状态！请在左边栏添加段落",
      ischeck: 1000,
      addindex: -2,
      isuped: false,
      iscover:false,
      boweninfo: {
        title: "",
        optionsonevalues: "",
        dynamicTags: [],
        optionstwovalues: "",
        coverurl: "",
        userid: this.$store.getters.my_id,
        paragraphs:[],
      },
      inputValueTag: "",
      inputVisibleTag: false,
      loading: false,
      coverloading: false,
      editorOption: {
        //  富文本编辑器配置
        modules: {
          toolbar: toolbarOptions
        },
        // theme: "snow",
        placeholder: "请输入正文"
      },
      imgandtextlist: [],
      myHeaders: {
        Aitutoken: getToken()
      },
      optionsone: [
        "基础理论",
        "实战技巧",
        "后期教程",
        "分享探讨",
        "心得点评",
        "摄影器材",
        "其他类别",
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
      ]
    };
  },
  computed: {
    //返回编辑器本身
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    CoverUrl() {
      return this.boweninfo.coverurl;
    }
  },
  watch: {
    imgandtextlist: {
      handler: function(newValue, oldValue) {
        this.imgandtextlist = newValue;
      }
    },
    deep: true
  },
  //  this.$refs.myQuillEditor.enable(false);
  mounted: function() {
    this.editor.enable(false);
  },
  methods: {
    onEditorBlur(quill) {
      //失去焦点事件
      if (this.ischeck === 1000) return;
      this.imgandtextlist[this.ischeck].mydelta = quill.getContents(); 
    },
    onEditorFocus(event) {
      //获得焦点事件
    },
    onEditorChange({ quill, html, text }) {
      //内容改变事件
      this.imgandtextlist[this.ischeck].textcontent = text;
      this.imgandtextlist[this.ischeck].htmlcontent = html; 
    },
    //选中
    CheckThisDiv(index) {
      this.ischeck = index;
      this.editor.enable(true);
      this.editor.setContents(this.imgandtextlist[index].mydelta);
    },
    //删除
    DeleteThisDiv(index) {
      if (this.ischeck == index) this.editor.setContents("");
      this.imgandtextlist.splice(index, 1);
      this.editor.enable(false);
    },
    //增加文本段落到队首
    AddUpDiv() {
      this.imgandtextlist.unshift({
        divtype: "text",
        imgsrc: "",
        textcontent: "",
        htmlcontent: "",
        mydelta: {}
      });
    },
    //在固定位置增加文本段落
    AddDownDiv(index) {
      this.imgandtextlist.splice(index + 1, 0, {
        divtype: "text",
        imgsrc: "",
        textcontent: "",
        htmlcontent: "",
        mydelta: {}
      });
    },

    // 增加图片段落到队首
    //图片上传成功的钩子
    handleimgSuccessUP(response) {
      this.imgandtextlist.unshift({
        divtype: "img",
        imgsrc: response.url,
        textcontent: "",
        htmlcontent: "",
        mydelta: {}
      });
      this.loading = false;
    },
    ChangeIscheck(index) {
      this.addindex = index;
      this.loading = true;
    },
    handleimgSuccessDOWN(response) {
      this.imgandtextlist.splice(this.addindex + 1, 0, {
        divtype: "img",
        imgsrc: response.url,
        textcontent: "",
        htmlcontent: "",
        mydelta: {}
      });
      this.loading = false;
    },
    beforeAvatarUpload(file) {
      //判断大小和类型
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 < 2;
      if (!isJPG && !isPNG) {
        this.$message.error("上传图片只能是 JPG/PNG/JPEG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    },
    //封面
    tupianjiazai() {
      this.coverloading = true;
    },
    genghuancover() {
      if(!this.iscover)return;
      this.isuped = false;
    },
    notgenghuancover() {
      if(!this.iscover)return;
      this.isuped = true;
    },
    handleimgSuccessCOVER(response) {
      this.boweninfo.coverurl = response.url;
      setTimeout(() => {
        this.isuped = true;
        this.iscover= true;
        this.coverloading = false;
      }, 1500);
    },
    //展开标签输入框
    showInputTag() {
      this.inputVisibleTag = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    //添加默认的标签
    AddBtnTag(e) {
      this.inputValueTag = e.toElement.innerText;
      for (let x in this.boweninfo.dynamicTags) {
        if (this.boweninfo.dynamicTags[x] == this.inputValueTag) {
          this.$message({
            message: "警告,重复添加!",
            type: "warning"
          });
          return;
        }
      }
            this.boweninfo.dynamicTags.push(this.inputValueTag);
      this.inputValueTag = "";
    },
        //确定添加标签方法
    handleInputConfirmTag() {
      let inputValueTag = this.inputValueTag;
      if (inputValueTag) {
        //判重
        for (let x in this.boweninfo.dynamicTags) {
          if (this.boweninfo.dynamicTags[x] == inputValueTag) {
            this.$message({
              message: "警告,重复添加!",
              type: "warning"
            });
            return;
          }
        }
        this.boweninfo.dynamicTags.push(inputValueTag);
      }
      this.inputVisibleTag = false;
      this.inputValueTag = "";
    },
    //清除标签
    handleCloseTag(tag) {
      this.boweninfo.dynamicTags.splice(
        this.boweninfo.dynamicTags.indexOf(tag),
        1
      );
    },
    //发布
    subFaBu() {
      let l = this.imgandtextlist.length;
      for(let i=0;i<l;i++){
        if(this.imgandtextlist[i].divtype == "text"){
          this.boweninfo.paragraphs.push(this.imgandtextlist[i].htmlcontent);
        }else{
          let tempstr = '<div style="text-align: center;"><img src="'+this.imgandtextlist[i].imgsrc+'" alt="图片" style="object-fit: cover;"></div>';
          tempstr+=this.imgandtextlist[i].htmlcontent;
          this.boweninfo.paragraphs.push(tempstr);
        }
      }
      console.log(this.boweninfo);
      
    },
    subYuLan(){
      this.boweninfo.paragraphs = [];
      let l = this.imgandtextlist.length;
      if(l==0||this.boweninfo.title.trim()==""||this.boweninfo.coverurl==""||this.boweninfo.optionsonevalues==""){
                this.$notify({
          title: '警告',
          message: '必填项为空或者未添加段落',
          type: 'warning'
        });
        return;
      }
      for(let i=0;i<l;i++){
        if(this.imgandtextlist[i].divtype == "text"){
          this.boweninfo.paragraphs.push(this.imgandtextlist[i].htmlcontent);
        }else{
          let tempstr = '<div style="text-align: center;"><img src="'+this.imgandtextlist[i].imgsrc+'" alt="图片" style="object-fit: cover;"></div>';
          tempstr+=this.imgandtextlist[i].htmlcontent;
          this.boweninfo.paragraphs.push(tempstr);
        }
      }
      this.$store.dispatch("LoadingPreview",this.boweninfo);
      let routeUrl = this.$router.resolve({
          path: "/preview",
     });
     window.open(routeUrl .href, '_blank');
    }
  }
};
</script>

<style lang="less" scoped>
.myeditordiv {
  width: 100%;
}
.listall {
  .whiteborder {
    //和下面的顺序不能变
    border: 1px solid white;
  }
  .greenborder {
    border: 1px solid chartreuse;
  }
}
.right {
  padding-left: 10px;
  padding-top: 27px;
  .first {
    margin-bottom: 10px;
    font-size: 14px;
    color: #111;
    max-width: 100%;
    
  }
  .second {
    .second1 {
      width: 320px;
      height: 210px;
      cursor: pointer;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      font-size: 80px;
      text-align: center;
      img {
        width: 320px;
        height: 210px;
        object-fit: cover;
      }
    }
    .second2 {
      width: 320px;
      height: 210px;
      cursor: pointer;
      box-sizing: border-box;
      overflow: hidden;
      font-size: 80px;
      text-align: center;
      color: #2ace2f;
    }
  }
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
    max-height: 120px;
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
    width: 30%;
    height: 40px;
    font-size: 18px;
    background-color: chartreuse;
    margin-top: 20px;
    color: #ffffff;
    border: 1px solid #ccc;
    position: relative;
    cursor: pointer;
    margin-left: 25px;
  }
}
</style>