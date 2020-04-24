<template>
  <div style="overflow-x: hidden;">
    <el-backtop></el-backtop>
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>
    <el-row style="min-width:1400px">
      <el-col :span="3" style="min-height: 1px"></el-col>
      <el-col :span="18">
        <div style="display: flex;justify-content: center;">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="menuSelect"
            active-text-color="#0ede1c"
          >
            <el-menu-item index="1" style="font-size:18px">站长推荐</el-menu-item>
            <el-submenu index="2" style="font-size:18px">
              <template slot="title">
                <span ref="renqibang" style="font-size:18px">今日人气榜</span>
              </template>
              <el-menu-item index="2-1" style="font-size:18px">今日人气榜</el-menu-item>
              <el-menu-item index="2-2" style="font-size:18px">7天人气榜</el-menu-item>
              <el-menu-item index="2-3" style="font-size:18px">30天人气榜</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" style="font-size:18px">最新</el-menu-item>
            <el-menu-item index="4" style="font-size:18px">图片广场</el-menu-item>
          </el-menu>
        </div>
        <div class="watarfallimages">
          <el-row :gutter="10" style="cursor: pointer;">
            <el-col
              :span="randomlengtharray[index%51]"
              v-for="(p,index) in imgsArr"
              :key="index"
              style="position: relative;"
              
            >
            <div @mouseover="ShowInfoIndex(index)"
                @mouseleave="CloseInfoIndex()">
              <div
                v-show="showindex == index"
                style="position: absolute;z-index: 1;right: 30px;top: 20px;"
              >
                <div
                  style="color:#ffffff;background: rgb(149, 150, 147);margin-right:20px;display: inline-block;padding: 10px;vertical-align:top;opacity: 0.7;"
                >
                  <span style="display: inline-block;vertical-align: middle;">{{p.imgnumber}}</span>
                  <svg-icon icon-class="images" style=""></svg-icon>
                </div>
                <div
                  style="color:#ffffff;background: rgb(149, 150, 147);display: inline-block;padding: 12px;opacity: 0.7;"
                >
                  {{p.seenumber}}浏览
                </div>
              </div>
              <div style="position: absolute;z-index: 1;height: 44px;left: 30px;bottom: 20px;" v-show="showindex == index">
                <div style="float: left;float: left;display: flex;align-items: center;" @click.self.stop="GoToHer(p.userid)">
                  <img
                    :src="p.userheadurl"
                    alt="头像"
                    style="width: 40xp;height: 40px;border-radius: 50%;"
                  />
                  <span style="padding-left:10px">{{p.username}}</span>
                </div>
                
              </div>
              <!-- v-show="showindex == index" -->
              <div style="position: absolute;z-index: 1;right: 30px;bottom: 10px;opacity: 0.5;padding: 10px;" v-show="showindex == index">
                <div
                  style="color:red;background: rgb(149, 150, 147);padding: 10px;"
                  v-show="p.islike"
                  @click.stop="SubGoodLike(index)"
                >
                  <svg-icon icon-class="good_red"></svg-icon>
                  {{p.likenumber}}
                </div>
                <div
                  style="color:#ffffff;background: rgb(149, 150, 147);padding: 10px;"
                  v-show="!p.islike"
                  @click.stop="AddGoodLike(index)"
                >
                  <svg-icon icon-class="good_grey"></svg-icon>
                  {{p.likenumber}}
                </div>
              </div>
              <img
                :src="p.src"
                alt="图片"
                html
                :style="{ height: randomheightarray[index%51] + 'px' }"
                style="width: 100%;object-fit: cover;"
                
                @click.self.stop="GoToThisWork(p.id)"
              />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="3" style="min-height: 1px">
        <div class="classifytip" @click.stop="OpenClassify()">
          <span>{{this.nowclasstype}}</span>

          <i class="el-icon-caret-top" v-show="isfenleiguanbi"></i>
          <i class="el-icon-caret-bottom" v-show="!isfenleiguanbi"></i>
          <div class="classifyall" v-show="!isfenleiguanbi">
            <p
              class="top"
              @click.stop="LoadThisClass('全部分类')"
              :class="{activeclass:this.nowclasstype == '全部分类'}"
            >全部分类</p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('人像')"
                :class="{activeclass:this.nowclasstype == '人像'}"
              >人像</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('风景')"
                :class="{activeclass:this.nowclasstype == '风景'}"
              >风景</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('生态')"
                :class="{activeclass:this.nowclasstype == '生态'}"
              >生态</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('纪实')"
                :class="{activeclass:this.nowclasstype == '纪实'}"
              >纪实</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('生活')"
                :class="{activeclass:this.nowclasstype == '生活'}"
              >生活</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('潜水')"
                :class="{activeclass:this.nowclasstype == '潜水'}"
              >潜水</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('航拍')"
                :class="{activeclass:this.nowclasstype == '航拍'}"
              >航拍</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('手机摄影')"
                :class="{activeclass:this.nowclasstype == '手机摄影'}"
              >手机摄影</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('运动')"
                :class="{activeclass:this.nowclasstype == '运动'}"
              >运动</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('夜景')"
                :class="{activeclass:this.nowclasstype == '夜景'}"
              >夜景</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('宠物')"
                :class="{activeclass:this.nowclasstype == '宠物'}"
              >宠物</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('汽车')"
                :class="{activeclass:this.nowclasstype == '汽车'}"
              >汽车</span>
            </p>
            <p>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('美食')"
                :class="{activeclass:this.nowclasstype == '美食'}"
              >美食</span>
              <span
                class="onelabel"
                @click.stop="LoadThisClass('其他')"
                :class="{activeclass:this.nowclasstype == '其他'}"
              >其他</span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import wgnologinandblackheader from "@/components/Htmlviews/wgnologinandblackheader.vue";
import { getToken } from "@/utils/auth";
import axios from "axios";
export default {
  components: {
    wgnologinandblackheader,
    wgloginandblackheader,
  },
  data() {
    return {
      activeIndex: "1",
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
      showindex: -1,
      isfenleiguanbi: true,
      nowclasstype: "全部分类",
      randomlengtharray: [
        12,
        12,
        9,
        15,
        6,
        8,
        10,
        7,
        7,
        10,
        12,
        12,
        9,
        15,
        14,
        10,
        6,
        6,
        6,
        6,
        8,
        10,
        6,
        9,
        15,
        6,
        6,
        5,
        7,
        5,
        4,
        5,
        5,
        5,
        8,
        6,
        10,
        4,
        4,
        8,
        4,
        4,
        7,
        8,
        9,
        8,
        7,
        9,
        9,
        8,
        7
      ],
      randomheightarray: [
        400,
        400,
        600,
        600,
        350,
        350,
        350,
        350,
        350,
        350,
        400,
        400,
        380,
        380,
        400,
        400,
        250,
        250,
        250,
        250,
        320,
        320,
        320,
        505,
        505,
        310,
        310,
        310,
        310,
        280,
        280,
        280,
        280,
        280,
        460,
        460,
        460,
        270,
        270,
        270,
        270,
        270,
        360,
        360,
        360,
        360,
        360,
        360,
        360,
        360,
        360
      ],
      activewidth: 0
    };
  },
  computed: {
    token() {
      return getToken();
    }
  },
  created: function() {
    this.getData();
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods: {
    getData() {
      let postData = {
        nowclasstype: this.nowclasstype,
        activeIndex: this.activeIndex,
        group: this.group
      };
      axios
        .post("http://localhost:8090/waterfall", postData)
        .then(res => {
          console.log(res.data);
          this.group++;
          if (this.group === 5) {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.imgsArr = this.imgsArr.concat(res.data.imgarr);
          console.log(this.imgsArr);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //你想做的事情
        this.getData();
      }
    },
    ShowInfoIndex(index) {
      this.showindex = index;
    },
    CloseInfoIndex() {
      this.showindex = -1;
    },
    GoToThisWork(id) {
      alert(id);
    },
    AddGoodLike(index) {
      //添加后台代码判断返回
      alert("点赞");
      this.imgsArr[index].islike = true;
      this.imgsArr[index].likenumber = this.imgsArr[index].likenumber + 1;
    },
    SubGoodLike(index) {
      //添加后台代码判断返回
      alert("取消点赞");
      this.imgsArr[index].islike = false;
      this.imgsArr[index].likenumber = this.imgsArr[index].likenumber - 1;
    },
    GoToHer(id){
        alert(id)
    },
    menuSelect(key, keyPath) {
      this.activeIndex = key;
      if (key == "2-1") {
        this.$refs.renqibang.innerHTML = "今日人气榜";
      } else if (key == "2-2") {
        this.$refs.renqibang.innerHTML = "7天人气榜&ensp;";
      } else if (key == "2-3") {
        this.$refs.renqibang.innerHTML = "30天人气榜";
      }
    },
    //展开关闭分类
    OpenClassify() {
      this.isfenleiguanbi = !this.isfenleiguanbi;
    },
    LoadThisClass(classtype) {
      console.log(classtype);
      this.group = 0;
      let postData = {
        nowclasstype: this.nowclasstype,
        activeIndex: this.activeIndex,
        group: this.group
      };
      axios
        .post("http://localhost:8090/waterfall", postData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped lang="less">
.classifytip {
  position: relative;
  cursor: pointer;
  left: 80px;
  margin: 20px 0;
  .classifyall {
    position: absolute;

    left: -22px;
    top: 30px;
    cursor: pointer;
    font-size: 14px;
    color: #4e4e4e;
    .top {
      text-align: center;
    }
    .onelabel {
      margin-left: 22px;
    }
    .activeclass {
      color: chartreuse;
    }
  }
}
.watarfallimages {
  margin-top: 30px;
}
</style>
