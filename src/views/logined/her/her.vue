<template>
  <div class="myselfcontainer">
        <wgloginandblackheader v-if='token'></wgloginandblackheader>
    <wgnologinandblackheader v-if='!token'></wgnologinandblackheader>
    <!-- <img v-bind:src="getMyAvatar" alt="背景图" class="background"> -->
    <img :src="getBackgroundurl" alt="背景图" class="background" />
    <div class="myselfinfo">
      <img :src="getMyAvatar" alt="头像" class="myselfhead" />
      <div class="right">
        <dir class="myselfname">
          {{this.$store.getters.her_name}}
        </dir>
        <div class="myfollowsandfans">
          关注 {{this.$store.getters.her_follows}}
          <span style="margin:0 10px">|</span>
          粉丝 {{this.$store.getters.her_fans}}
        </div>
      </div>
    </div>
    <div
      class="centercontroller"
      style="min-width:1260px"
      :class="navBarFixed==false?'':'navBarWrap'"
    >
      <el-row>
        <el-col :span="8">
          <div class="left">&#12288;</div>
        </el-col>
        <el-col :span="8">
          <div class="center">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="black"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1" style="font-size:20px">作品</el-menu-item>
              <el-menu-item index="2" style="font-size:20px">专辑</el-menu-item>
              <el-menu-item index="3" style="font-size:20px">收藏</el-menu-item>
              <el-menu-item index="4" style="font-size:20px">资料</el-menu-item>
              <el-menu-item index="5" style="font-size:20px">关注</el-menu-item>
            </el-menu>
          </div>
        </el-col>
       
        <el-col :span="8" :push="1" style=" min-height: 1px;">
          <div class="right">
            <el-dropdown  v-if="activeIndex==1&&downactiveIndex1==1">
              <span class="el-dropdown-link" style="font-size:15px">
                全部类别
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" style="padding: 10px 10px">
                <div v-if="(getTars.size == 0)">还没有哦</div>
                <div v-if="getTars.size % 2 == 0">
                  <template v-for="(item,index) in getTars">
                    <div v-if="index%2 == 0" :key="item">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index]}}</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index+1]}}</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </template>
                </div>

                <div v-if="!(getTars.size % 2 == 0)">
                  <template v-for="(item,index) in getTars">
                    <div v-if="index%2 == 0" :key="item">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index]}}</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index+1]}}</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </template>
                  <div v-if="(getTars.size == 0)">
                    <el-button type="text" @click="jiazaibykey">{{getTars[getTars.size]}}</el-button>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown style="margin-left:100px"  v-if="activeIndex==1&&downactiveIndex1==1">
              <span class="el-dropdown-link" style="font-size:15px">
                全部年份
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" style="padding: 10px 10px">
                <div v-if="(getNians.size == 0)">还没有哦</div>
                <div v-for="(item) in getNians" :key="item">
                  <el-button type="text" @click="jiazaibykey">{{item}}</el-button>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="downcontroller">
      <el-row>
        <el-col :span="6" style="min-height: 1px"></el-col>
        <el-col :span="12" style="min-width: 950px">
          <template v-if="activeIndex==1">
            <div class="template1">
              <el-menu
                :default-active="downactiveIndex1"
                mode="horizontal"
                @select="downhandleSelect1"
                background-color="#e6eaef"
                active-text-color="#58d425"
                :collapse-transition="false"
              >
                <el-menu-item index="1">全部</el-menu-item>
                <el-menu-item index="2">图片</el-menu-item>
                <el-menu-item index="3">博文</el-menu-item>
              </el-menu>
              <!-- 全部 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==1)">
                <div class="nothing" v-if="(getAllworks.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col :span="8" v-for="(p) in getAllworks" :key="p.id" style="margin-bottom:20px">
                  <div class="box-card">
                    <span class="type" v-if="p.isbowen">博文</span>
                    <a target="_blank" href>
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a href>{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="o in p.tars" :key="o">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 作品 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==2)">
                <div class="nothing" v-if="(getWorks.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col :span="8" v-for="(p) in getWorks" :key="p.id" style="margin-bottom:20px">
                  <div class="box-card">
                    <span class="type" v-if="p.isbowen">博文</span>
                    <a target="_blank" href>
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a href>{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="o in p.tars" :key="o">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 博文 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==3)">
                <div class="nothing" v-if="(getBowen.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col :span="8" v-for="(p) in getBowen" :key="p.id" style="margin-bottom:20px">
                  <div class="box-card">
                    <span class="type" v-if="p.isbowen">博文</span>
                    <a target="_blank" href>
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a href>{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="o in p.tars" :key="o">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
          <!-- 专辑 -->
          <template v-if="activeIndex==2">
            <div class="template2">
              <el-row :gutter="20">
                <el-col
                  :span="12"
                  v-for="(p) in getalbum"
                  :key="p.id"
                  style="margin-bottom: 10px;"
                >
                  <div class="up">
                    <a target="_blank" href>
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                  </div>
                  <div class="down">
                    <span style="color">{{p.title}}</span>
                    <div class="picnumber">{{p.picturesnumber}}张图片</div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>

          </template>
          <template v-if="activeIndex==3">
            <div class="template3">
              <el-menu
                :default-active="downactiveIndex3"
                mode="horizontal"
                @select="downhandleSelect3"
                background-color="#e6eaef"
                active-text-color="#58d425"
                :collapse-transition="false"
              >
                <el-menu-item index="1">图片</el-menu-item>
                <el-menu-item index="2">博文</el-menu-item>
              </el-menu>

              <!-- 收藏图片 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex3==1)">
                <div class="nothing" v-if="(getCollectpictures.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>

                <el-col
                  :span="8"
                  v-for="(p) in getCollectpictures"
                  :key="p.id"
                  style="margin-bottom:20px"
                >
                  <div class="box-card">
                    <div class="authorinfo">
                      <div class="left" @click="showherinfo(p.id)">
                        <img :src="p.authorheadurl" alt="头像" />
                        <span>{{p.authorname}}</span>
                      </div>
                      <div class="right">
                        <span>{{p.picturesnumber}}</span>
                        <i class="el-icon-money"></i>
                      </div>
                    </div>
                    <a target="_blank" href>
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a href>{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="o in p.tars" :key="o">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="7">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="7" style="min-height:1px">
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 收藏博文 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex3==2)">
                <div class="nothing" v-if="(getCollectionarticles.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>

                <el-col
                  :span="12"
                  v-for="(p) in getCollectionarticles"
                  :key="p.id"
                  style="margin-bottom:20px"
                >
                  <div
                    class="box-cardbowen"
                  >
                    <div class="left">
                      <a target="_blank" href>
                        <img :src="p.coverimgurl" class="image" />
                      </a>
                    </div>
                    <div class="right">
                      <div class="title">{{p.title}}</div>
                      <div class="content">{{p.content}}</div>
                      <div class="collectinfo">
                        <el-row>
                          <el-col :span="9">
                            <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                            <span>{{p.seenumber}}</span>
                          </el-col>
                          <el-col :span="8">
                            <svg-icon icon-class="star" style="fill:#707070"></svg-icon>
                            <span>{{p.collectnumber}}</span>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
          <template v-if="activeIndex==4">
            <div class="template4">
              <div class="title">等级头衔</div>
              <div class="item">
                <span class="left">摄影积分</span>
                <span class="right">{{getherdetails.integral}}</span>
                <el-tooltip effect="dark" content="查看积分说明" placement="right">
                  <i
                    class="el-icon-info"
                    @click="integraldescription"
                    style="cursor: pointer;color:#ccc;outline: none;"
                  ></i>
                </el-tooltip>
              </div>
              <div class="item">
                <span class="left">等级</span>
                <span class="right">{{getherdetails.grade}}</span>
                <el-tooltip effect="dark" content="查看等级说明" placement="right">
                  <i
                    class="el-icon-info"
                    @click="leveldescription"
                    style="cursor: pointer;color:#ccc;outline: none;"
                  ></i>
                </el-tooltip>
              </div>
              <div class="title">个人资料</div>
              <div class="item">
                <span class="left">ID</span>
                <span class="right">{{getId}}</span>
              </div>
              <div class="item">
                <span class="left">居住地</span>
                <span class="right">{{getherdetails.place}}</span>
              </div>
              <div class="item">
                <span class="left">年龄</span>
                <span class="right">{{getherdetails.age}}</span>
              </div>
              <div class="item">
                <span class="left">联系邮箱</span>
                <span class="right">{{getherdetails.email}}</span>
              </div>
              <div class="item">
                <span class="left">联系手机</span>
                <span class="right">{{getherdetails.phone}}</span>
              </div>
              <div class="item">
                <span class="left">QQ</span>
                <span class="right">{{getherdetails.qq}}</span>
              </div>
              <div class="item">
                <span class="left">我的装备</span>
                <span
                  class="right"
                  v-if="getherdetails.equipment.camera != ''"
                >相机：{{getherdetails.equipment.camera}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="getherdetails.equipment.mobilephone != ''"
                >手机：{{getherdetails.equipment.mobilephone}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="getherdetails.equipment.downwaterequipment != ''"
                >水下设备：{{getherdetails.equipment.downwaterequipment}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="getherdetails.equipment.aerialequipment != ''"
                >航拍设备：{{getherdetails.equipment.aerialequipment}}</span>
              </div>
              <div class="item">
                <span class="left">个人说明</span>
                <span class="right">{{getherdetails.personalstatement}}</span>
              </div>
            </div>
          </template>
          <template v-if="activeIndex==5">
            <div class="template5">
              <el-row>
                <el-col
                  :span="6"
                  v-for="(p) in getFollowusers"
                  :key="p.id"
                  style="margin-bottom: 60px;"
                >
                  <div class="hercontent">
                    <div style="width: 140px;height: 140px;border: 1px solid #e2e2e2;cursor: pointer;" @click="showherinfo(p.id)">
                      <img
                        :src="p.herheadurl"
                        alt="头像"
                        style="width: 140px;height: 140px; border-radius: 50%;"
                      />
                    </div>

                    <div class="name" style="cursor: pointer;" @click="showherinfo(p.id)">{{p.hername}}</div>
                    <div>
                      <button
                        class="guanzhubutton"
                      >
                        <i class="el-icon-check"></i>
                        已关注
                      </button>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
        </el-col>
        <el-col :span="6" style="min-height: 1px">
        </el-col>
      </el-row>
    </div>
    <basefooter></basefooter>
  </div>
</template>
<script>
import wgloginandblackheader from '@/components/Htmlviews/wgloginandblackheader.vue'
import wgnologinandblackheader from '@/components/Htmlviews/wgnologinandblackheader.vue'
import { getToken } from '@/utils/auth'
import basefooter from "@/components/Htmlviews/basefooter.vue";
import albumsetdialog from "@/components/mydialog/albumsetdialog.vue";
import albumcreatedialog from "@/components/mydialog/albumcreatedialog.vue";
export default {
  components: { wgloginandblackheader, wgnologinandblackheader,basefooter, albumsetdialog, albumcreatedialog },
  data() {
    return {
      activeIndex: "1",
      downactiveIndex1: "1",
      downactiveIndex3: "1",
      downactiveIndex4: "1",
      navBarFixed: false,
      token:"",
    };
  },
  //计算属性不能直接呈现的需要用计算属性 如 src
  computed: {
    getMyAvatar() {
      return this.$store.getters.her_avatar;
    },
    getBackgroundurl(){
        return this.$store.getters.her_backgroundurl;
    },
    getTars() {
      return this.$store.getters.her_tars;
    },
    getNians() {
      return this.$store.getters.her_nians;
    },
    getAllworks() {
      return this.$store.getters.her_allworks;
    },
    getWorks() {
      return this.$store.getters.her_works;
    },
    getBowen() {
      return this.$store.getters.her_bowen;
    },
    getCollectpictures() {
      return this.$store.getters.her_collectpictures;
    },
    getCollectionarticles() {
      return this.$store.getters.her_collectionarticles;
    },
    getalbum() {
      return this.$store.getters.her_album;
    },
    getId() {
      return this.$store.getters.her_id;
    },
    getherdetails() {
      return this.$store.getters.her_herdetails;
    },
    getFollowusers() {
      return this.$store.getters.her_followusers;
    }
  },
  created() {
     this.token = getToken();
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },

  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex = key;
    },
    downhandleSelect1(key, keyPath) {
      // console.log(key, keyPath);
      this.downactiveIndex1 = key;
    },
    downhandleSelect3(key, keyPath) {
      // console.log(key, keyPath);
      this.downactiveIndex3 = key;
    },
    jiazaibykey: function(e) {
      console.log(e.toElement.innerText);
    },
    //吸顶效果
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 516) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    //积分说明
    integraldescription() {
      this.$alert("积分说明", "积分说明", {
        confirmButtonText: "confirm",
        callback: action => {}
      });
    },
    leveldescription() {
      alert("等级说明");
    },
        //跳转到他人界面
    showherinfo(id){
      this.$store.dispatch("GetHerInfo",id).then((response)=>{
              // console.log(response);
              let code = response.code;
              // console.log(code);
              if (code == 200) {
                this.$router.push({
                  path: "/user"
                });
              } else {
                this.$router.push({
                  path: "/404"
                });
              }
      }).catch((e) => {

      });
    },
  }
};
</script>
<style lang="less" scoped>
.myselfcontainer {
  overflow-x: hidden;
  .background {
    height: 420px;
    position: absolute;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
  .myselfinfo {
    margin-top: 270px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .myselfhead {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    .right {
      margin-left: 20px;
      .myselfname {
        margin: 0;
        margin-bottom: 15px;
        font-size: 30px;
        color: white;
        padding: 0;
      }
      .myfollowsandfans {
        color: white;
        font-size: 15px;
      }
    }
  }
  .centercontroller {
    height: 60px;
    background-color: white;
    position: relative;
    margin-top: 50px;

    .center {
      height: 61px;
      display: flex;
      justify-content: center;
    }
    .right {
      height: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .navBarWrap {
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    margin-top: 0;
  }
  .downcontroller {
    background: #e6eaef;
    .template1 {
      .nothing {
        text-align: center;
        font-size: 18px;
        color: #ccc;
      }
      position: relative;
      .box-card {
        margin: 0;
        padding: 0;
        min-height: 440px;
        background: white;
        position: relative;
        img {
          object-fit: cover;
        }
        .type {
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          padding: 0 10px;
          font-size: 14px;
          color: #fff;
          left: 15px;
          top: 15px;
          height: 28px;
          line-height: 28px;
        }
        a {
          display: inline-block;
          cursor: pointer;
          img {
            margin: 0;
            padding: 0;
            width: 303px;
            height: 300px;
          }
        }
        .time {
          margin: 5px 0 10px 10px;
          font-size: 0.12rem;
          color: #999;
        }
        .title {
          a {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
          }
        }
        .tars {
          margin-left: 10px;
          span {
            padding: 7px 10px;
            font-size: 14px;
            color: #999;
            line-height: 1;
            background: #f0f1f2;
            margin-right: 10px;
          }
        }
        .info {
          margin: 20px 0 0 10px;
          font-size: 14px;
          color: #ccc;
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template2 {
      margin-top: 20px;
      .up {
        position: relative;
        a {
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .down {
        text-align: center;

        span {
          font-size: 1rem;
          color: #444;
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        .picnumber {
          margin-top: 6px;
          width: 100%;
          font-size: 0.14rem;
          color: #ccc;
          line-height: 0;
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template3 {
      .nothing {
        text-align: center;
        font-size: 18px;
        color: #ccc;
      }
      position: relative;
      .box-card {
        margin: 0;
        padding: 0;
        min-height: 440px;
        background: white;
        position: relative;
        img {
          object-fit: cover;
        }
        .authorinfo {
          position: absolute;
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 256px 0 0 15px;
          cursor: pointer;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 25px;
              height: 25px;
              border-radius: 50%;
            }
            span {
              color: white;
              margin-left: 8px;
            }
          }
          .right {
            margin-right: 20px;
            color: white;
            font-size: 15px;
            background-color: rgba(13, 26, 43, 0.55);
            text-align: center;
            padding-bottom: 2px;
            height: 18px;
          }
        }
        a {
          display: inline-block;
          cursor: pointer;
          img {
            margin: 0;
            padding: 0;
            width: 303px;
            height: 300px;
          }
        }
        .time {
          margin: 5px 0 10px 10px;
          font-size: 0.12rem;
          color: #999;
        }
        .title {
          a {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
          }
        }
        .tars {
          margin-left: 10px;
          span {
            padding: 7px 10px;
            font-size: 14px;
            color: #999;
            line-height: 1;
            background: #f0f1f2;
            margin-right: 10px;
          }
        }
        .info {
          margin: 20px 0 0 10px;
          font-size: 14px;
          color: #ccc;
        }
      }
      .box-cardbowen {
        display: flex;
        .left {
          a {
            img {
              height: 160px;
              width: 240px;
              object-fit: cover;
            }
          }
        }
        .right {
          overflow: hidden;
          .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            margin-top: 30px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
            height: 30px;
          }
          .content {
            margin-top: 9px;
            font-size: 14px;
            color: #999;
            max-height: 42px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-left: 10px;
            overflow: hidden;
            height: 50px;
           
          }
          .collectinfo {
            color: #707070;
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template4 {
      margin-bottom: 30px;
      .title {
        margin: 30px 0;
        font-size: 30px;
        color: #000;
      }
      .item {
        margin-top: 30px;
      }
      .left {
        display: inline-block;
        width: 155px;
        text-align: left;
        vertical-align: top;
        line-height: 30px;
        color: #000;
      }
      .right {
        color: #777;
        text-align: left;
        line-height: 30px;
        font-size: 14px;
      }
    }
    .template5 {
      margin-top: 20px;
      .hercontent {
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 201px;
          text-align: center;
          font-size: 16px;
          color: #333;
          margin-top: 15px;
          height: 25px;
          line-height: 25px;
        }

        .guanzhubutton {
          color: black;
          background: #fafafa;
          border-color: #ddd;
          transition-duration: 0.3s;
          width: 100px;
          height: 30px;
          line-height: 28px;
          border-width: 1px;
          border-style: solid;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          box-sizing: border-box;
          outline: none;
          &:hover {
            color: green;
          }
        }
      }
            .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
  }
}
</style>
