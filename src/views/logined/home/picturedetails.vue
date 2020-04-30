<template>
  <div style="overflow-x: hidden;" v-loading="isloading">
    <el-backtop></el-backtop>
    <wgloginandblackheader></wgloginandblackheader>
    <el-image-viewer
      v-if="showViewer"
      :on-close="closeViewer"
      :initial-index="prorindex"
      :url-list="srcList"
    />
    <div class="workdetails">
      <div class="pictures">
        <el-row style="border-top:1px solid #e1e3e6">
          <el-col :span="19" class="left">
            <el-carousel
              trigger="click"
              indicator-position="none"
              :initial-index="prorindex"
              :autoplay="false"
              height="660px"
              @change="changeimg"
              ref="wgcarousel"
            >
              <el-carousel-item v-for="(p,index) in GetItPictures.picturslist" :key="index">
                <div class="imgdiv" @click="onPreview(index)">
                  <img :src="p.url+'/text_wateryin'" alt="图片" />
                </div>
              </el-carousel-item>
            </el-carousel>
            <div class="imgdownlist">
              <div
                class="downimgdiv"
                @click="downchange(index)"
                v-for="(p,index) in GetItPictures.picturslist"
                :key="index"
              >
                <img
                  :src="p.url+'/text_wateryin'"
                  alt="缩略图"
                  :class="prorindex == index ? 'activeimg' : ''"
                />
              </div>
            </div>
            <div class="collectzhuanji">
              <i class="el-icon-folder-add"></i>
              <el-popover width="200" trigger="click" placement="top-end" :visible-arrow="false">
                <div style=" width: 200px;cursor: pointer;font-size: 16px;">
                  <div
                    onmouseover="this.style.color='white';this.style.background='greenyellow'"
                    onmouseout="this.style.color='greenyellow';this.style.background='white'"
                    style="color: greenyellow;width: 200px; display: flex;position: relative;border-bottom: 1px solid #e4efe6;"
                    @click="createnewzhuanji()"
                    @mouseover="changebg()"
                  >
                    <span>新增专辑</span>
                    <span style="position: absolute;right: 0;">
                      <i class="el-icon-circle-plus-outline"></i>
                    </span>
                  </div>
                  <div
                    onmouseover="this.style.color='white';this.style.background='greenyellow'"
                    onmouseout="this.style.color='black';this.style.background='white'"
                    style="width: 200px;margin-top: 4px;color: black;"
                    @click="collectthispicture(index)"
                    v-for="(p,index) in GetMyZhuanJi"
                    :key="index"
                  >
                    <span>{{p.title}}</span>
                  </div>
                </div>
                <el-button class="collectbtn" type="text" slot="reference">收录到专辑</el-button>
              </el-popover>
            </div>
          </el-col>
          <el-col :span="5" class="right">
            <div class="pcup">
              <el-row type="flex" class="row-bg">
                <el-col :span="5" style>
                  <el-avatar :size="50" :src="GetItPictures.authorheadurl"></el-avatar>
                </el-col>
                <el-col :span="12" style="text-align: left;">
                  <p>{{GetItPictures.authorname}}</p>
                  <span
                    style="color: #251e1e;font-weight: 100;font-size: 10px;"
                  >{{GetItPictures.authorlevel}}</span>
                  <el-tooltip effect="dark" content="查看等级说明" placement="right">
                    <i
                      class="el-icon-info"
                      @click="leveldescription"
                      style="cursor: pointer;color:#ccc;outline: none;"
                    ></i>
                  </el-tooltip>
                </el-col>
                <el-col :span="7">
                  <div class="guanzhubtn" @click="guanzhuzuthor()">
                    <div v-if="!GetItPictures.authorisguanzhu">
                      <i class="el-icon-plus"></i>
                      关注
                    </div>
                    <div v-if="GetItPictures.authorisguanzhu">已关注</div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="pccenter">
              <div style="margin: 5px;font-weight: 500;">图片描述</div>
              <div style=" color: #bfbfbf;font-size: 15px;margin: 5px;">{{this.GetDesMiaoSu}}</div>
              <div style="color: #bfbfbf;margin: 5px;">
                <el-row style="cursor: pointer;">
                  <el-col :span="5">
                    <svg-icon icon-class="see"></svg-icon>
                    <span>{{GetItPictures.seenumber}}</span>
                  </el-col>
                  <el-col :span="5">
                    <div @click.stop="goAnchor()">
                      <svg-icon icon-class="write"></svg-icon>
                      <span>{{GetItPictures.writenumber}}</span>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div @click="getitgood(GetItPictures.id)">
                      <svg-icon icon-class="good" v-show="!GetItPictures.islike"></svg-icon>
                      <svg-icon icon-class="good_red" v-show="GetItPictures.islike"></svg-icon>
                      <span>{{GetItPictures.likenumber}}</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="pcdown">
              <div class="downbtn" @click="getitgood(GetItPictures.id)">
                <span
                  v-show="!GetItPictures.islike"
                  style="background: chartreuse; color: white;"
                >投票支持!</span>
                <span
                  v-show="GetItPictures.islike"
                  style="background: white; color: chartreuse;"
                >感谢您的支持!</span>
              </div>
              <div class="downbtn" @click.stop="goAnchor()">
                <span>写评论</span>
              </div>
              <div class="downbtn" @click="icollectit()">
                <span v-show="!GetItPictures.iscollect">收藏作品</span>
                <span v-show="GetItPictures.iscollect">已收藏作品</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="pictureinfo">
        <el-row>
          <el-col :span="5" style="min-height: 1px"></el-col>
          <el-col :span="14">
            <p class="first">{{GetItPictures.title}}</p>
            <div class="second">
              <el-row>
                <el-col :span="21">
                  <span class="second1">发布:</span>
                  <span class="second2">{{GetItPictures.time}}</span>
                  <span class="second1">分类:</span>
                  <span class="second2">{{GetItPictures.classification}}</span>
                  <span class="second1">我的装备:</span>
                  <span class="second2">{{GetItPictures.authorequipment}}</span>
                </el-col>
                <el-col :span="3">
                  <span class="second2">{{GetItPictures.seenumber}}浏览</span>
                </el-col>
              </el-row>
            </div>
            <div class="third">{{GetItPictures.content}}</div>
            <div class="fourth">
              <div class="fourth1" v-for="p in this.labels" :key="p">{{p}}</div>
            </div>
            <div class="fifth" id="writemycomment">
              <img :src="this.bowen1" alt="博文" />
            </div>
            <div class="sixth">
              <comment
                :commentszheng="this.Bowencommentszheng"
                :commentsdao="this.Bowencommentsdao"
                :commentszuo="this.Bowencommentszuo"
                :info="this.info"
                v-if="!isloading"
              ></comment>
            </div>
          </el-col>
          <el-col :span="5" style="min-height: 1px"></el-col>
        </el-row>
      </div>
    </div>
    <albumcreatedialog
      ref="albumcreatedialog"
      v-if="albumcreate.visible"
      :visible.sync="albumcreate.visible"
    ></albumcreatedialog>
  </div>
</template>
<script>
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import albumcreatedialog from "@/components/mydialog/albumcreatedialog.vue";
import bowen1 from "@/assets/jpg/bowen1.jpg";
import { getToken } from "@/utils/auth";
import comment from "@/components/Htmlviews/comment.vue";
import { GetOneWork, UserCollect, UserFans, UserLike } from "@/api/allrequest";
export default {
  components: {
    wgloginandblackheader,
    basefooter,
    ElImageViewer,
    comment,
    albumcreatedialog
  },
  data() {
    return {
      showViewer: false,
      prorindex: 0, //第几张图片的描述
      albumcreate: {
        //创造专辑
        visible: false,
        albumname: "",
        albumdescribe: "",
        albumprivate: false,
        albumindex: 0
      },
      srcList: [],
      desList: [],
      labels: [],
      Bowencommentszheng: [],
      Bowencommentsdao: [],
      Bowencommentszuo: [],
      isloading: true,
      bowen1: bowen1, //广告博文
      work: {},
      info:{},
    };
  },
  computed: {
    GetMyZhuanJi() {
      return this.$store.getters.my_album;
    },
    GetDesMiaoSu() {
      if (
        this.desList[this.prorindex] == "undefined" ||
        !this.desList[this.prorindex] ||
        !/[^\s]/.test(this.desList[this.prorindex])
      ) {
        return "暂无图片描述";
      }
      return this.desList[this.prorindex];
    },
    GetItPictures() {
      return this.work;
    },
    token() {
      return getToken();
    }
  },
  created: function() {
    GetOneWork(this.$route.query.id)
      .then(response => {
        console.log(response.work);
        this.work = response.work;
        this.labels = this.work.dynamicTags; //得到标签
        this.Bowencommentszheng = this.work.commentModelListZheng;
        this.Bowencommentsdao = this.work.commentModelListDao;
        this.Bowencommentszuo = this.work.commentModelListZuo;
        let plist = this.work.picturslist;
        for (let i = 0; i < plist.length; i++) {
          this.srcList.push(plist[i].url + "/text_wateryin");
          this.desList.push(plist[i].describe);
        }
        this.info.toid = this.work.authorid;
        this.info.itid = this.work.id;
        this.info.title = this.work.title;
        this.info.type = 1;
        this.isloading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    onPreview(index) {
      this.prorindex = index;
      this.showViewer = true;
    },
    closeViewer() {
      this.showViewer = false;
    },
    changeimg(v, p) {
      this.prorindex = v;
    },
    downchange(v) {
      this.$refs.wgcarousel.setActiveItem(v);
    },
    //收录专辑
    collectthispicture() {
      alert(index);
    },
    //创建新专辑
    createnewzhuanji() {
      this.albumcreate.visible = true;
    },
    //关注此作者
    guanzhuzuthor() {
      if (
        this.token == "undefined" ||
        !this.token ||
        !/[^\s]/.test(this.token)
      ) {
        this.$message.error("请先登陆哦");
        return;
      }
      ///后台数据库修改成功返回后
      UserFans(this.work.authorid)
        .then(response => {
          this.$message(response, message);
          this.work.authorisguanzhu = !this.work.authorisguanzhu;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //积分说明
    leveldescription() {
      alert("等级说明");
    },
    //点赞
    getitgood(itid) {
      if (
        this.token == "undefined" ||
        !this.token ||
        !/[^\s]/.test(this.token)
      ) {
        this.$message.error("请先登陆哦");
        return;
      }
      let likeModel = {
        toid: this.work.authorid,
        itid: this.work.id,
        title: this.work.title,
        type: 1
      };
      UserLike(likeModel)
        .then(response => {
          this.$message(response.message);
          this.work.islike = !this.work.islike;
          if (response.message == "谢谢您的投票") {
            this.work.likenumber = this.work.likenumber + 1;
          } else {
            this.work.likenumber = this.work.likenumber - 1;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //收藏作品
    icollectit() {
      if (
        this.token == "undefined" ||
        !this.token ||
        !/[^\s]/.test(this.token)
      ) {
        this.$message.error("请先登陆哦");
        return;
      }
      let collectModel = {
        toid: this.work.authorid,
        itid: this.work.id,
        title: this.work.title,
        type: 1
      };
      UserCollect(collectModel)
        .then(response => {
          this.$message(response.message);
          if (response.message == "请先登陆") {
          } else {
            this.work.iscollect = !this.work.iscollect;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //瞄点
    goAnchor() {
      this.$el.querySelector("#writemycomment").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.workdetails {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: white;
  z-index: 1;
  .pictures {
    border-bottom: 1px solid #d0d1d2;
    .left {
      border-right: 1px solid #d0d1d2;
      .imgdiv {
        width: 100%;
        height: 660px;
        vertical-align: middle;
        text-align: center;
        border: none;
      }
      .imgdiv > img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        padding: 10px;
      }
      .imgdownlist {
        cursor: pointer;
        height: 110px;
        width: 100%;
        margin-top: 10px;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        .downimgdiv {
          width: 90px;
          height: 90px;
          position: relative;
          border: none;
          margin: 0 10px;
          .activeimg {
            opacity: 1;
            filter: alpha(opacity=100);
            border: 1px #5a9a1f solid;
          }
        }

        .downimgdiv > img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0.4;
          filter: alpha(opacity=40);
          transform: translate(-50%, -50%);
        }
      }
      /deep/ .el-carousel__arrow {
        width: 70px;
        height: 70px;
      }
      .collectzhuanji {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #ffffff;

        .collectbtn {
          color: #999;
          vertical-align: middle;
          font-size: 14px;
          &:hover {
            color: green;
          }
        }
      }
    }
    .right {
      .pcup {
        border-bottom: 1px solid #d0d1d2;
        .row-bg {
          padding: 10px;
          .el-col {
            margin: auto;
            text-align: center;
            p {
              margin: 0;
              padding: 0;
              font-size: 18px;
              font-weight: 700;
            }
          }
        }
        .guanzhubtn {
          cursor: pointer;
          color: white;
          background: rgb(84, 201, 7);
          width: 75px;
          height: 26px;
          vertical-align: middle;
          display: table-cell;
          &:hover {
            background: rgb(188, 192, 196);
          }
        }
      }
      .pccenter {
        border-bottom: 1px solid #d0d1d2;
      }
      .pcdown {
        cursor: pointer;
        .downbtn {
          text-align: center;
          border: 1px solid #d0d1d2;
          margin: 5px;
          height: 50px;
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          display: table;

          span {
            display: table-cell;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .pictureinfo {
    .first {
      color: #111;
      font-size: 28px;
      font-weight: 700;
      word-break: break-all;
      padding-left: 10px;
      word-wrap: break-word;
    }
    .second {
      padding-left: 10px;
      .second1 {
        color: #999;
        padding: 0;
        margin: 0;
        list-style-type: none;
        list-style-position: outside;
        font-size: 14px;
      }
      .second2 {
        font-size: 14px;
        padding: 0;
        margin: 0;
        list-style-type: none;
        list-style-position: outside;
        margin-right: 20px;
      }
    }
    .third {
      font-size: 18px;
      line-height: 36px;
      padding-bottom: 26px;
      word-break: break-all;
      padding: 20px 0 10px 10px;
      word-wrap: break-word;
    }
    .fourth {
      display: flex;
      flex-direction: row;
      .fourth1 {
        background: #f0f1f2;
        height: 28px;
        line-height: 28px;
        padding: 0 10px;
        font-size: 14px;
        color: #999;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
    .fifth {
      height: 160px;
      width: 100%;
      overflow: hidden;
      margin-top: 40px;
      display: table;
      img {
        height: auto;
        width: 80%;
        margin-left: 10%;
      }
    }
    .sixth {
      margin-bottom: 70px;
    }
  }
}
</style>

