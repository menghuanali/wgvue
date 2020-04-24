<template>
  <div style="overflow-x: hidden;">
    <el-backtop></el-backtop>
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>
    <el-row style="min-width:1400px;margin-top:20px">
      <el-col :span="3" style="min-height: 1px"></el-col>
      <el-col :span="13">
        <div style>
          <el-carousel trigger="click" height="360px">
            <el-carousel-item v-for="(p,index) in ridinlanternbowens" :key="index">
              <div @click.self.stop="GoToThisBowen(p.id)">
                <img :src="p.coverimgurl" alt="图片" style="object-fit: cover;" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="menuSelect"
            active-text-color="#0ede1c"
          >
            <el-menu-item index="1" style="font-size:14px">全部分类</el-menu-item>
            <el-menu-item index="2" style="font-size:14px">基础理论</el-menu-item>
            <el-menu-item index="3" style="font-size:14px">实战技巧</el-menu-item>
            <el-menu-item index="4" style="font-size:14px">后期教程</el-menu-item>
            <el-menu-item index="5" style="font-size:14px">分享探讨</el-menu-item>
            <el-menu-item index="6" style="font-size:14px">心得点评</el-menu-item>
            <el-menu-item index="7" style="font-size:14px">摄影器材</el-menu-item>
            <el-menu-item index="8" style="font-size:14px">其他类别</el-menu-item>
          </el-menu>
        </div>
        <div style="margin-top:20px">
          <div style="height:180px;width:100%" v-for="(p,index) in imgsArr" :key="index">
            <el-row :gutter="20" style="height:180px;width:100%">
              <el-col :span="7" style="min-height:1px">
                <img
                  style="object-fit: cover;height:100%;width:100%;cursor: pointer;"
                  :src="p.coverimgurl"
                  alt="封面图"
                  @click.self.stop="GoToThisBowen(p.id)"
                />
              </el-col>
              <el-col :span="17">
                <p
                  @click.self.stop="GoToThisBowen(p.id)"
                  style="cursor: pointer;"
                  class="title"
                >{{p.title}}</p>
                <p class="smallcontent">{{p.smallcontent}}</p>
                <div style="color:#bfbfbf">
                  <el-row :gutter="20">
                    <el-col :span="5">
                      <svg-icon icon-class="see"></svg-icon>
                      {{p.seenumber}}
                    </el-col>
                    <el-col :span="5">
                      <i class="el-icon-star-on"></i>
                      {{p.collectnumber}}
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="8" style="min-height: 1px">
        <div style="padding: 30px;" class="hotinfo" :class="{hotflex:isflexhot}">
          <div
            style="display: inline-block;background: chartreuse;height: 20px;width: 3px;vertical-align: middle;margin-right:10px"
          ></div>
          <p style="font-size:14px;font-weight: bold;display:inline">一周热文</p>
          <router-link
            class="hottitle"
            :to="{ path: '/bowen', query: { id: hotweekbowen.id }}"
          >{{this.hotweekbowen.title}}</router-link>
          <div style="margin-top: 20px;">
            <img
              :src="this.hotweekbowen.coverimgurl"
              alt="图片"
              class="hotimg"
              @click.stop="GoToThisBowen(hotweekbowen.id)"
            />
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
    wgloginandblackheader
  },
  data() {
    return {
      nowclasstype: "全部分类",
      imgsArr: [],
      activeIndex: "1",
      group: 0, // 当前加载的加载图片的次数
      hotweekbowen: {},
      ridinlanternbowens: [],
      isflexhot: false
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
      this.group = 0;
      let postData = {
        nowclasstype: this.nowclasstype,
        activeIndex: this.activeIndex,
        group: this.group
      };
      axios
        .post("http://localhost:8090/bowenlist", postData)
        .then(res => {
          console.log(res.data);
          this.group++;
          if (res.data.message === "nodata") {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.hotweekbowen = res.data.bowen.hotweekbowen;
          this.ridinlanternbowens = res.data.bowen.ridinlanternbowens;
          this.imgsArr = this.imgsArr.concat(res.data.bowen.allbowenlist);
          //   console.log(this.imgsArr);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addData() {
      let postData = {
        nowclasstype: this.nowclasstype,
        activeIndex: this.activeIndex,
        group: this.group
      };

      axios
        .post("http://localhost:8090/addbowenlist", postData)
        .then(res => {
          console.log(res.data);
          this.group++;
          if (res.data.message === "nodata") {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.imgsArr = this.imgsArr.concat(res.data.bowen.allbowenlist);
          //   console.log(this.imgsArr);
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
      //吸顶效果
      var scrollTop2 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop2);

      //  当滚动超过 516 时，实现吸顶效果
      if (scrollTop2 > 140) {
        this.isflexhot = true;
      } else {
        this.isflexhot = false;
      }
      if (scrollTop + windowHeight == scrollHeight) {
        //你想做的事情
        this.addData();
      }
    },
    GoToThisBowen(bowenid) {
      alert(bowenid);
    },
    menuSelect(key, keyPath) {
      this.activeIndex = key;
    }
  }
};
</script>
<style scoped lang="less">
.title {
  font-size: 24px;
  color: #111;
  padding-top: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: chartreuse;
  }
}
.smallcontent {
  font-size: 14px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 控制多行的行数
  -webkit-box-orient: vertical;
  height: 40px;
}
.hotinfo {
  .hottitle {
    font-size: 14px;
    color: #999;
    display: block;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 43%;
    &:hover {
      color: chartreuse;
    }
  }
  .hotimg {
    object-fit: cover;
    height: 120px;
    width: 43%;
    cursor: pointer;
  }
}
.hotflex {
  position: fixed;
  top: -10px;
}
</style>
