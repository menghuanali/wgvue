<template>
  <div style="overflow-x: hidden;">
    <el-backtop></el-backtop>
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>
    <el-row >
      <el-col :span="4" style="min-height: 1px"></el-col>
      <el-col :span="16">
        <el-row :gutter="30">
          <el-col :span="6" v-for="(p,index) in imgsArr" :key="index">
            <div @click.stop="GoToHer(p.id)" class="first">
              <img :src="p.headurl" alt="头像" />
            </div>
            <p class="second">{{p.username}}</p>
            <p class="third">{{p.introduce}}</p>
            <div class="fourth">
              <el-row :gutter="20" type="flex" justify="center">
                  <el-col :span="4" style="min-height: 1px"></el-col>
                <el-col :span="8" style="text-align: center;">{{p.worknumber}}作品</el-col>
                <el-col :span="8" style="text-align: center;">{{p.fannumber}}粉丝</el-col>
                <el-col :span="4" style="min-height: 1px"></el-col>
              </el-row>
            </div>
            <div class="fivth">
              <el-row :gutter="5">
                <el-col :span="8">
                  <router-link class="fivth1" :to="{ path: '/work', query: { id: p.workid[0] }}">
                    <img :src="p.workurl[0]" alt />
                  </router-link>
                </el-col>
                <el-col :span="8">
                  <router-link class="fivth1" :to="{ path: '/work', query: { id: p.workid[1] }}">
                    <img :src="p.workurl[1]" alt />
                  </router-link>
                </el-col>
                <el-col :span="8">
                  <router-link class="fivth1" :to="{ path: '/work', query: { id: p.workid[2] }}">
                    <img :src="p.workurl[2]" alt />
                  </router-link>
                </el-col>
              </el-row>
            </div>
            <div class="sixth">
              <span v-show="!p.isguanzhu" class="sixth1" @click.stop="FollowHer(p.id)">
                <i class="el-icon-plus"></i>关注
              </span>
              <span v-show="p.isguanzhu" class="sixth2"  @click.stop="NotFollowHer(p.id)">
                <i class="el-icon-check"></i>已关注
              </span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" style="min-height: 1px"></el-col>
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
  data(){
  return{
   imgsArr: [],
      group: 0,
      islogin:0,
  }
  },
  computed:{
   token() {
      return getToken();
    }
  },
  created: function(){
         this.getData();
  },
    mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods:{
        getData() {
             let config = {
        headers: {
          Aitutoken: getToken()
        }
      };
      axios
        .get("http://localhost:8090/userlist/"+this.group,config)
        .then(res => {
          console.log(res.data);
          this.group++;
          if (this.group === 5) {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.imgsArr = this.imgsArr.concat(res.data.userlist);
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
     GoToHer(id){
        alert(id)
    },
    FollowHer(id){
        if(this.getToken){
            this.$router.push({path:'/login'});
        }
        alert(id);
    },
    NotFollowHer(id){
        alert(id);
    }
  }
  }
</script>
<style scoped lang="less">
.first {
    height: 64px;
    text-align: center;
    margin-bottom: 12px;
    text-align: center;
    cursor: pointer;
    img{
        width: 64px;
    height: 64px;
    border-radius: 50%;
    }
}
.second {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    height: 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.third {
    width: 75%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 12px;
}
.fourth {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-bottom: 12px;
}
.fivth {
    height: 80px;
    width: 100%;
   margin: 20px 0;
  .fivth1 {
      img{
          height: 80px;
          width: 100%;
          object-fit: cover;
      }
  }
}
.sixth {
  display: table;
    width: 100%;
    height: 40px;
    text-align: center;
   cursor: pointer;
    padding: -20px;
    margin-bottom: 30px;
  .sixth1 {
 display: table-cell;
    vertical-align: middle;
    border: chartreuse 1px solid;
   color: chartreuse;

  }
  .sixth2 {
       display: table-cell;
    vertical-align: middle;
    border: rgb(175, 179, 172) 1px solid;
   color: #000;
  }
}
</style>
