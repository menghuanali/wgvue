<template>
  <div style=" overflow-x: hidden;">
    <wgloginandwhiteheader v-if="token"></wgloginandwhiteheader>
    <wgnologinandwhiteheader v-if="!token"></wgnologinandwhiteheader>
    <div class="wg_aitu_index_background" @click="GoToWork()"></div>
    <div style="position: relative;margin-top: 650px;margin-bottom: 50px;">
      <div class="third">
        <el-row>
          <el-col :span="3" style="min-height: 1px;"></el-col>
          <el-col :span="18" style="min-height: 1px;">
            <div style="text-align: center;">
              <img src="@/assets/jpg/bowen2.jpg" @click="GoToBowen()" />
              <p class="third1">
                <i class="el-icon-medal" style="color:#46d233"></i> 首页推荐
                <i class="el-icon-medal" style="color:#46d233"></i>
              </p>
            </div>
            <div class="third2">
              <el-row :gutter="10">
                <el-col :span="6" v-for="(p,index) in GetHomeData.homerecommend" :key="index">
                  <div class="box" @click="GoToTheWork(p.id)">
                    <img :src="p.coverimgurl+'/text_wateryin'" alt="封面图片" />
                    <p class="third21">{{p.classification}}</p>
                    <div class="authorinfo">
                      <div class="third22" @click.stop="showherinfo(p.authorid)">
                        <img :src="p.authorheadurl" alt="头像" />
                      </div>
                      <div class="third23" @click.stop="showherinfo(p.authorid)">{{p.authorname}}</div>
                      <div class="third24" @click.stop="UserLike1(index,p.authorid,p.id,p.title)">
                        <svg-icon icon-class="good_grey" v-show="!p.isgood"></svg-icon>
                        <svg-icon icon-class="good_red" v-show="p.isgood"></svg-icon>
                        {{p.goodnumber}}
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="third3">
              <a href="/worklist?classtype=人像">人像</a>
              <a href="/worklist?classtype=风景">风景</a>
              <a href="/worklist?classtype=生态">生态</a>
              <a href="/worklist?classtype=纪实">纪实</a>
              <a href="/worklist?classtype=生活">生活</a>
              <a href="/worklist?classtype=潜水">潜水</a>
              <a href="/worklist?classtype=航拍">航拍</a>
              <a href="/worklist?classtype=手机摄影">手机摄影</a>
              <a href="/worklist">查看更多</a>
            </div>
            <div class="third4">
              <i class="el-icon-medal" style="color:#46d233"></i> 摄影技巧
              <i class="el-icon-medal" style="color:#46d233"></i>
            </div>
            <div class="third5">
              <el-row :gutter="10">
                <el-col :span="12" v-for="(p,index) in GetHomeData.homebowen" :key="index">
                  <el-row :gutter="10" style="margin-bottom: 20px;">
                    <el-col :span="11">
                      <div style="width: 100%;height: 100%;cursor: pointer;">
                        <img :src="p.coverimgurl+'/text_wateryin'" @click.stop="GoToTheBowen(p.id)" />
                      </div>
                    </el-col>
                    <el-col :span="13">
                      <p class="title" @click.stop="GoToTheBowen(p.id)">{{p.title}}</p>
                      <p class="smalldec">{{p.smallintroduction}}</p>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="third6">
              <a href="/bowenlist">
                <span>查看更多</span>
              </a>
            </div>
            <div class="third7">
              <i class="el-icon-medal" style="color:#46d233"></i> 热门摄影师
              <i class="el-icon-medal" style="color:#46d233"></i>
            </div>
            <div class="third8">
              <el-row :gutter="20">
                <el-col :span="6" v-for="(p,index) in GetHomeData.photographer" :key="index">
                  <div class="aphotoer" @click="showherinfo(p.id)">
                    <div class="imgbox">
                      <img :src="p.coverimgurl" alt="背景" />
                    </div>
                    <img :src="p.headurl" alt="头像" class="headimg" />
                    <p class="name">{{p.username}}</p>
                    <div class="introduction">{{p.userintroduction}}</div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="third2">
              <el-row :gutter="10">
                <el-col :span="6" v-for="(p,index) in GetHomeData.photographerwork" :key="index">
                  <div class="box" @click="GoToTheWork(p.id)">
                    <img :src="p.coverimgurl+'/text_wateryin'" alt="封面图片" />
                    <p class="third21">{{p.classification}}</p>
                    <div class="authorinfo">
                      <div class="third22" @click.stop="showherinfo(p.authorid)">
                        <img :src="p.authorheadurl" alt="头像" />
                      </div>
                      <div class="third23" @click.stop="showherinfo(p.authorid)">{{p.authorname}}</div>
                      <div class="third24" @click.stop="UserLike2(index,p.authorid,p.id,p.title)">
                        <svg-icon icon-class="good_grey" v-show="!p.isgood"></svg-icon>
                        <svg-icon icon-class="good_red" v-show="p.isgood"></svg-icon>
                        {{p.goodnumber}}
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="3" style="min-height: 1px;"></el-col>
        </el-row>
      </div>
    </div>
    <basefooter></basefooter>
  </div>
</template>

<script>
import wgloginandwhiteheader from "@/components/Htmlviews/wgloginandwhiteheader.vue";
import wgnologinandwhiteheader from "@/components/Htmlviews/wgnologinandwhiteheader.vue";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import { getToken } from "@/utils/auth";
import comment from "@/components/Htmlviews/comment.vue";
import monicommentdata from "@/mock/commentdata.js";
import { UserLike, GetIndexData } from "@/api/allrequest";
export default {
  components: { wgloginandwhiteheader, wgnologinandwhiteheader, basefooter },
  data() {
    return {
      homedata: {
        homerecommend: [],
        homebowen: [],
        photographer: [],
        photographerwork: []
      }
    };
  },
  computed: {
    token() {
      return getToken();
    },
    GetHomeData() {
      return this.homedata;
    }
  },
  created() {
    GetIndexData()
      .then(response => {
        // console.log(response);
        this.homedata.homerecommend = response.homerecommend;
        this.homedata.homebowen = response.homebowen;
        this.homedata.photographer = response.photographer;
        this.homedata.photographerwork = response.photographerwork;
      })
      .catch(error => {});
  },
  methods: {
    GoToBowen() {
      this.$router.push({
        path: "/bowen",
        query: { id: 1 }
      });
    },
    GoToWork() {
      this.$router.push({
        path: "/work",
        query: { id: 208 }
      });
    },
    GoToTheWork(id) {
      //先请求数据 然后转到work
      this.$router.push({
        path: "/work",
        query: { id: id }
      });
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)"
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
    },
        GoToTheBowen(id) {
      //先请求数据 然后转到work
      this.$router.push({
        path: "/bowen",
        query: { id: id }
      });
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)"
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
    },
    showherinfo(id) {
      this.$router.push({
        path: "/user",
        query: { id: id }
      });
    },
    //点赞
    UserLike1(index, toid, itid, title) {
      if (this.getToken) {
        this.$router.push({ path: "/login" });
      }
      let likeModel = {
        toid: toid,
        itid: itid,
        title: title,
        type: 1
      };
      UserLike(likeModel)
        .then(response => {
          if (this.homedata.homerecommend[index].isgood == true) {
            this.homedata.homerecommend[index].goodnumber =
              this.homedata.homerecommend[index].goodnumber - 1;
          } else {
            this.homedata.homerecommend[index].goodnumber =
              this.homedata.homerecommend[index].goodnumber + 1;
          }
          this.homedata.homerecommend[index].isgood = !this.homedata
            .homerecommend[index].isgood;
        })
        .catch(error => {});
    },
    UserLike2(index, toid, itid, title) {
      if (this.getToken) {
        this.$router.push({ path: "/login" });
      }
      let likeModel = {
        toid: toid,
        itid: itid,
        title: title,
        type: 1
      };
      UserLike(likeModel)
        .then(response => {
          if (this.homedata.photographerwork[index].isgood == true) {
            this.homedata.photographerwork[index].goodnumber =
              this.homedata.photographerwork[index].goodnumber - 1;
          } else {
            this.homedata.photographerwork[index].goodnumber =
              this.homedata.photographerwork[index].goodnumber + 1;
          }
          this.homedata.photographerwork[index].isgood = !this.homedata
            .photographerwork[index].isgood;
        })
        .catch(error => {});
    }
  }
};
</script>

<style scoped lang="less">
.wg_aitu_index_background {
  background-image: url(../../../assets/jpg/index1.jpg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.third {
  min-width: 1810px;
  .third1 {
    text-align: center;
    margin-top: 45px;
    font-size: 32px;
    color: #444;
    letter-spacing: 4px;
  }
  .third2 {
    .box {
      cursor: pointer;
      overflow: hidden;
      height: 320px;
      width: 320px;
      padding-bottom: 20px;
      position: relative;
      .third21 {
        position: absolute;
        left: 15px;
        top: 0;
        background-color: #e1e6de;
        color: #632f2f;
        font-size: 18px;
        text-align: center;
        padding: 5px 10px;
        opacity: 0.5;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: none;
      }
      .authorinfo {
        position: absolute;
        bottom: 20px;
        width: 100%;
        background: url(../../../assets/png/authorbg.png) repeat-x;
        left: 0;
        height: 152px;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
        .third22 {
          float: left;
          width: 40px;
          height: 40px;
          margin-top: 80px;
          margin-left: 17px;
          img {
            width: 100%;
            border-radius: 50%;
            height: 100%;
            object-fit: fill;
          }
        }
        .third23 {
          max-width: 138px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 16px;
          color: #fff;
          margin: 3px 0 0 12px;
          float: left;
          margin-top: 90px;
        }
        .third24 {
          padding: 0 12px 0 10px;
          background: rgba(225, 225, 225, 0.9);
          height: 30px;
          overflow: hidden;
          color: #707070;
          cursor: pointer;
          line-height: 30px;
          float: right;
          margin-top: 85px;
          margin-right: 15px;
        }
      }
    }
  }
  .third3 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 20px;
    a {
      height: 15px;
      font-weight: 400;
      color: black;
      line-height: 34px;
      font-size: 18px;
      margin-right: 20px;
      padding: 0 10px;
      &:hover {
        color: chartreuse;
      }
    }
  }
  .third4 {
    text-align: center;
    margin-top: 45px;
    font-size: 32px;
    color: #444;
    letter-spacing: 4px;
  }
  .third5 {
    margin: 25px 0;
    .title {
      font-size: 20px;
      color: #000;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
      cursor: pointer;
      &:hover {
        color: chartreuse;
      }
    }
    .smalldec {
      font-size: 14px;
      color: #999;
      max-height: 64px;
      overflow: hidden;
      padding-top: 5px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .third6 {
    text-align: center;
    a {
      display: inline-block;
      line-height: 40px;
      width: 200px;
      color: #333;
      font-size: 14px;
      border: 1px solid #ddd;
      &:hover {
        border: 1px solid chartreuse;
        color: chartreuse;
      }
    }
  }
  .third7 {
    text-align: center;
    margin-top: 45px;
    font-size: 32px;
    color: #444;
    letter-spacing: 4px;
  }
  .third8 {
    margin: 40px 0;
    .aphotoer {
      position: relative;
      .imgbox {
        width: 100%;
        height: 150px;
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
      }
      .headimg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        top: 130px;
        left: 50%;
        left: 50%;
        -webkit-transform: translate(50%, 0);
        transform: translate(-50%, 0);
      }
      .name {
        padding-top: 25px;
        color: #000;
        font-size: 18px;
        line-height: 20px;
        height: 20px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        &:hover {
          color: greenyellow;
        }
      }
      .introduction {
        top: 50%;
        left: 0;
        font-size: 14px;
        color: #666;
        text-align: center;
        max-height: 60px;
        line-height: 20px;
        width: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>



