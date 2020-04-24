<template>
  <div style="overflow-x: hidden;">
    <wgloginandblackheader></wgloginandblackheader>
    <el-row :gutter="10" style="min-width:1400px;height: 723px;margin-top:20px">
      <el-col :span="4" style="min-height: 1px"></el-col>
      <el-col :span="4">
        <el-menu
          :default-active="type"
          mode="vertical"
          @select="menuSelect"
          active-text-color="#000"
          text-color="#999"
        >
          <el-menu-item
            index="like"
            style="font-size:18px;padding-left: 30px;"
            :class="{activeclasstype:type=='like'}"
          >点赞</el-menu-item>
          <el-menu-item
            index="comment"
            style="font-size:18px;padding-left: 30px;"
            :class="{activeclasstype:type=='comment'}"
          >评论</el-menu-item>
          <el-menu-item
            index="fans"
            style="font-size:18px;padding-left: 30px;"
            :class="{activeclasstype:type=='fans'}"
          >新粉丝</el-menu-item>
          <el-menu-item
            index="collect"
            style="font-size:18px;padding-left: 30px;"
            :class="{activeclasstype:type=='collect'}"
          >收藏</el-menu-item>
          <el-menu-item
            index="letter"
            style="font-size:18px;padding-left: 30px;"
            :class="{activeclasstype:type=='letter'}"
          >私信</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <!-- //点赞 -->
        <div class="first" v-if="type=='like'">
          <div class="first1" v-for="(p,index) in aitulikes" :key="index">
            <el-row :gutter="10">
              <el-col :span="2" style="min-width:64px;text-align: center;">
                <router-link :to="{path:'/user',query: { id: p.fromid }}" class="first11">
                  <img :src="p.fromheadurl" alt />
                </router-link>
              </el-col>
              <el-col :span="22">
                <p class="first12">
                  <router-link
                    :to="{path:'/user',query: { id: p.fromid }}"
                    class="first121"
                  >{{p.fromname}}</router-link>
                  <span style="vertical-align: top;">点赞了你的作品</span>
                  <router-link
                    :to="{path:'/work',query: { id: p.itid }}"
                    class="first122"
                  >{{p.itname}}</router-link>
                </p>
                <p class="first13">{{p.time}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- //评论 -->
        <div class="second" v-if="type=='comment'">
          <div class="second1" v-for="(p,index) in aitucomments" :key="index">
            <el-row :gutter="10">
              <el-col :span="2" style="min-width:64px;text-align: center;">
                <router-link :to="{path:'/user',query: { id: p.fromid }}" class="second11">
                  <img :src="p.headurl" alt />
                </router-link>
              </el-col>
              <el-col :span="22">
                <p class="second12">
                  <router-link
                    :to="{path:'/user',query: { id: p.fromid }}"
                    class="second121"
                  >{{p.fromname}}</router-link>
                  <span style="vertical-align: top;" v-if="p.corr == '1'">评论了你的作品</span>
                  <span style="vertical-align: top;" v-if="p.corr == '2'">评论了你的博文</span>
                  <span style="vertical-align: top;" v-if="p.corr == '3'">回复了你的评论</span>
                  <span style="vertical-align: top;" v-if="p.corr == '4'">再次回复了你&#8195;</span>
                  <router-link
                    v-if="p.type == '1'"
                    :to="{path:'/work',query: { id: p.itid }}"
                    class="second122"
                  >{{p.ittitle}}</router-link>
                  <router-link
                    v-if="p.type == '2'"
                    :to="{path:'/bowen',query: { id: p.itid }}"
                    class="second122"
                  >{{p.ittitle}}</router-link>
                </p>
                <p class="second14">{{p.content}}</p>
                <p class="second13">{{p.date}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- //粉丝 -->
        <div class="third" v-if="type=='fans'">
          <div class="third1" v-for="(p,index) in aitufans" :key="index">
            <el-row :gutter="10">
              <el-col :span="2" style="min-width:64px;text-align: center;">
                <router-link :to="{path:'/user',query: { id: p.fromid }}" class="third11">
                  <img :src="p.fromheadurl" alt />
                </router-link>
              </el-col>
              <el-col :span="22">
                <p class="third12">
                  <router-link
                    :to="{path:'/user',query: { id: p.fromid }}"
                    class="third121"
                  >{{p.fromname}}</router-link>
                  <span style="vertical-align: top;">关注了你</span>
                </p>
                <p class="third13">{{p.time}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- //收藏 -->
        <div class="fourth" v-if="type=='collect'">
          <div class="fourth1" v-for="(p,index) in aitucollects" :key="index">
            <el-row :gutter="10">
              <el-col :span="2" style="min-width:64px;text-align: center;">
                <router-link :to="{path:'/user',query: { id: p.fromid }}" class="fourth11">
                  <img :src="p.fromheadurl" alt />
                </router-link>
              </el-col>
              <el-col :span="22">
                <p class="fourth12">
                  <router-link
                    :to="{path:'/user',query: { id: p.fromid }}"
                    class="fourth121"
                  >{{p.fromname}}</router-link>
                  <span style="vertical-align: top;" v-if="p.type == '1'">收藏了你的作品</span>
                  <span style="vertical-align: top;" v-if="p.type == '2'">收藏了你的博文</span>
                  <router-link
                    v-if="p.type == '1'"
                    :to="{path:'/work',query: { id: p.itid }}"
                    class="fourth122"
                  >{{p.ittitle}}</router-link>
                  <router-link
                    v-if="p.type == '2'"
                    :to="{path:'/bowen',query: { id: p.itid }}"
                    class="fourth122"
                  >{{p.ittitle}}</router-link>
                </p>
                <p class="fourth13">{{p.time}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- //私信 -->
        <div class="fifth" v-if="type=='letter'">
          <div class="fifth1" v-for="(p,index) in aituletters" :key="index">
            <el-row :gutter="10">
              <el-col :span="2" style="min-width:64px;text-align: center;">
                <router-link :to="{path:'/user',query: { id: p.fromid }}" class="fifth11">
                  <img :src="p.fromheadurl" alt />
                </router-link>
              </el-col>
              <el-col :span="22">
                <p class="fifth12">
                  <router-link
                    :to="{path:'/user',query: { id: p.fromid }}"
                    class="fifth121"
                  >{{p.fromname}}</router-link>
                  <span style="vertical-align: top;">给你发了私信:</span>
                </p>
                <p class="fifth14" @click.stop="LetterCome(p.fromid,p.fromname)">{{p.content}}</p>
                <p class="fifth13">{{p.time}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 私信详情 -->
        <div class="sixth" v-if="type=='lettercome'">
          <div
            style="color:chartreuse;font-size: 16px;cursor: pointer;"
            @click.stop="GoBackLetterList()"
          >
            <i class="el-icon-arrow-left"></i> 返回私信列表
          </div>
          <div class="hername">{{this.hername}}</div>
          <div class="lettercomes">
            <div class="sixth1" v-for="(p,index) in lettercome" :key="index">
              <p class="sixth11">{{p.time}}</p>
              <div class="sixth12" v-if="p.type==2">
                <div>
                  <router-link :to="{path:'/user',query: { id: p.fromid }}" class="sixth121">
                    <img :src="p.fromheadurl" alt="ta的头像" />
                  </router-link>
                </div>
                <div>{{p.content}}</div>
              </div>
              <div class="sixth13" v-else>
                <div class="sixth131">{{p.content}}</div>
                <div class="sixth132">
                  <img :src="p.myheadurl" alt="我的头像" />
                </div>
              </div>
            </div>
          </div>
          <div class="sixth2">
            <el-input :placeholder="replayhername" v-model="replayinput" clearable style="width: 90%;"></el-input>
          </div>
          <div class="sixth3"><el-button type="primary" round @click.stop="ReplayHerLetter()">发送</el-button></div>
        </div>
      </el-col>
    </el-row>
    <div>
      <basefooter></basefooter>
    </div>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import axios from "axios";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import {
  GetMessagelike,
  GetMessagecomment,
  GetMessagefans,
  GetMessagecollect,
  GetMessageletter,
  GetMessagelettercome
} from "@/api/allrequest";
export default {
  components: { wgloginandblackheader, basefooter },
  data() {
    return {
      type: "like",
      aitulikes: [],
      aitucomments: [],
      aitufans: [],
      aitucollects: [],
      aituletters: [],
      lettercome: [],
      hername: "",
      herid:"",
      replayhername: "请输入内容",
      replayinput: "",//发送的内容
    };
  },
  computed: {},
  created: function() {
    this.type = this.$route.params.type;
    this.getData();
  },
  methods: {
    getData() {
      //点赞
      GetMessagelike()
        .then(response => {
          this.aitulikes = response.likelist;
        })
        .catch(error => {
          console.log(error);
        });
      //评论
      GetMessagecomment()
        .then(response => {
          this.aitucomments = response.commentlist;
        })
        .catch(error => {
          console.log(error);
        });
      //粉丝
      GetMessagefans()
        .then(response => {
          this.aitufans = response.fanslist;
        })
        .catch(error => {
          console.log(error);
        });
      //收藏
      GetMessagecollect()
        .then(response => {
          this.aitucollects = response.collectlist;
        })
        .catch(error => {
          console.log(error);
        });
      //私信
      GetMessageletter()
        .then(response => {
          this.aituletters = response.letterlist;
        })
        .catch(error => {
          console.log(error);
        });
    },
    menuSelect(key, keyPath) {
      this.type = key;
    },
    LetterCome(fromid, fromname) {
      this.herid = fromid;
      this.hername = fromname;
      this.replayhername = "回复:" + fromname;
      GetMessagelettercome(fromid)
        .then(response => {
          this.type = "lettercome";
          this.lettercome = response.lettercomelist;
          // console.log(this.lettercome);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //返回私信列表
    GoBackLetterList() {
      this.type = "letter";
    },
    //回复私信
    ReplayHerLetter(){
      alert(this.herid+this.hername)
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "/message/like") {
        this.type = this.$route.params.type;
        console.log("观察到了like");
        this.getData();
      } else if (to.path == "/message/comment") {
        this.type = this.$route.params.type;
        console.log("观察到了comment");
        this.getData();
      } else if (to.path == "/message/fans") {
        this.type = this.$route.params.type;
        console.log("观察到了fans");
        this.getData();
      } else if (to.path == "/message/letter") {
        this.type = this.$route.params.type;
        console.log("观察到了letter");
        this.getData();
      } else if (to.path == "/message/collect") {
        this.type = this.$route.params.type;
        console.log("观察到了collect");
        this.getData();
      }
    }
  }
};
</script>
<style scoped lang="less">
.activeclasstype {
  border-left: 2px #1cce53 solid;
  color: #000 !important;
}
//点赞
.first {
  overflow-y: scroll;
  height: 700px;
  overflow-x: hidden;
  .first1 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    .first11 {
      img {
        margin-top: -4px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
    .first12 {
      color: #999;
      margin: 0;
      padding: 0;
      .first121 {
        font-weight: 700;
        color: #000;
        display: inline-block;
        width: 130px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        &:hover {
          color: chartreuse;
        }
      }
      .first122 {
        display: inline-block;
        margin-left: 20px;
        width: 800px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        color: #000;
        &:hover {
          color: chartreuse;
        }
      }
    }
    .first13 {
      color: #999;
    }
  }
}
//评论
.second {
  overflow-y: scroll;
  height: 700px;
  overflow-x: hidden;
  .second1 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    .second11 {
      img {
        margin-top: -4px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
    .second12 {
      color: #999;
      margin: 0;
      padding: 0;
      .second121 {
        font-weight: 700;
        display: inline-block;
        width: 130px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        color: #000;
        &:hover {
          color: chartreuse;
        }
      }
      .second122 {
        display: inline-block;
        margin-left: 20px;
        width: 800px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        color: #000;
        &:hover {
          color: chartreuse;
        }
      }
    }
    .second13 {
      color: #999;
      margin-top: 8px;
    }
    .second14 {
      color: #999;
      width: 1100px;
      font-size: 14px;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
}
//粉丝
.third {
  overflow-y: scroll;
  height: 700px;
  overflow-x: hidden;
  .third1 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    .third11 {
      img {
        margin-top: -4px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
    .third12 {
      color: #999;
      margin: 0;
      padding: 0;
      .third121 {
        font-weight: 700;
        color: #000;
        display: inline-block;
        width: 130px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        &:hover {
          color: chartreuse;
        }
      }
    }
    .third13 {
      color: #999;
    }
  }
}
//收藏
.fourth {
  overflow-y: scroll;
  height: 700px;
  overflow-x: hidden;
  .fourth1 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    .fourth11 {
      img {
        margin-top: -4px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
    .fourth12 {
      color: #999;
      margin: 0;
      padding: 0;
      .fourth121 {
        font-weight: 700;
        color: #000;
        display: inline-block;
        width: 130px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        &:hover {
          color: chartreuse;
        }
      }
      .fourth122 {
        display: inline-block;
        margin-left: 20px;
        width: 800px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        color: #000;
        &:hover {
          color: chartreuse;
        }
      }
    }
    .fourth13 {
      color: #999;
    }
  }
}
//私信
.fifth {
  overflow-y: scroll;
  height: 700px;
  overflow-x: hidden;
  .fifth1 {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    .fifth11 {
      img {
        margin-top: -4px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
      }
    }
    .fifth12 {
      color: #999;
      margin: 0;
      padding: 0;
      .fifth121 {
        font-weight: 700;
        color: #000;
        display: inline-block;
        width: 130px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        &:hover {
          color: chartreuse;
        }
      }
    }
    .fifth13 {
      color: #999;
    }
    .fifth14 {
      cursor: pointer;
      margin: 0;
      margin-bottom: 15px;
      width: 1000px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #999;
      &:hover {
        color: chartreuse;
      }
    }
  }
}
//私信来往
.sixth {
  width: 75%;
  .hername {
    text-align: center;
    font-weight: bold;
    display: block;
    font-size: 18px;
    color: #000;
    line-height: 60px;
    height: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .lettercomes {
    overflow-y: scroll;
    height: 500px;
    overflow-x: hidden;

    .sixth1 {
      margin-bottom: 30px;
      .sixth11 {
        text-align: center;
        margin: 0;
        padding: 0;
        color: #999;
        font-size: 14px;
      }
      .sixth12 {
        display: flex;
        align-items: center;
        .sixth121 {
          margin-right: 20px;
          cursor: pointer;
          img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
      }
      .sixth13 {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .sixth132 {
          img {
            margin: 0 20px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
      }
    }
    
  }
  .sixth2{
      margin-top: 10px;
      text-align: center;
    }
    .sixth3{
      margin: 20px;
    text-align: center;
    }
}
</style>
