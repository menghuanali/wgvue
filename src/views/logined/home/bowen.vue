<template>
  <div style="overflow-x: hidden;" v-loading="isloading">
    <el-backtop></el-backtop>
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>

    <el-row style="margin-bottom: 50px;">
      <el-col :span="4" style="min-height: 1px;"></el-col>
      <el-col :span="16" class="content">
        <div class="cover">
          <img :src="bowen.coverimgurl+'/text_wateryin'" alt="封面图" />
          <div class="time">{{this.bowen.time}}</div>
          <div class="title">{{this.bowen.title}}</div>
          <div class="smallinfo">
            <span>作者:{{this.bowen.authorname}}</span>
            <span>分类:{{this.bowen.classification}}</span>
            <span v-if="Myzhuangbei">我的装备:{{this.bowen.myzhuangbei}}</span>
            <div class="seenumber">{{this.bowen.seenumber}}浏览</div>
          </div>
        </div>
        <div class="paragraphs">
          <div class="ql-snow">
            <div class="ql-editor" v-html="this.bowen.paragraphs" style="overflow-y: hidden;"></div>
          </div>
        </div>

        <div class="DynamicTags">
          <span
            v-for="(p,index) in DYnamicTags"
            :key="index"
            style="height: 28px;line-height: 28px;padding-right: 20px;"
          >{{p}}</span>
        </div>
        <div class="collect" @click.stop="CollectThisBowen()">
          <p v-if="this.bowen.iscollect">
            <i class="el-icon-star-on" style="color:yellow"></i>已收藏
          </p>
          <p v-if="!this.bowen.iscollect">
            <i class="el-icon-star-on" style="color: #ccc;"></i>收藏
          </p>
        </div>
        <comment :commentszheng="this.Bowencommentszheng" :commentsdao="this.Bowencommentsdao" :commentszuo="this.Bowencommentszuo" :info="this.info" v-if="!isloading"></comment>
      </el-col>
      <el-col :span="4" style="min-height: 1px;"></el-col>
    </el-row>

    <basefooter></basefooter>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import wgnologinandblackheader from "@/components/Htmlviews/wgnologinandblackheader.vue";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import comment from '@/components/Htmlviews/comment.vue'
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { getToken } from "@/utils/auth";
import { GetOneBoWen,UserCollect} from "@/api/allrequest";
export default {
  components: { wgnologinandblackheader, wgloginandblackheader, basefooter,comment },
  data() {
    return {
      isloading:true,
      bowen: {},
      Bowencommentszheng:[],
      Bowencommentsdao:[],
      Bowencommentszuo:[],
      info:{},
    };
  },
  created: function() {
    GetOneBoWen(this.$route.query.id)
      .then(response => {
        this.bowen = response.bowen;
        console.log(this.bowen);
        this.Bowencommentszheng = this.bowen.commentModelListZheng;
        this.Bowencommentsdao = this.bowen.commentModelListDao;
        this.Bowencommentszuo = this.bowen.commentModelListZuo;
        this.info.toid = this.bowen.authorid;
        this.info.itid = this.bowen.id;
        this.info.title = this.bowen.title;
        this.info.type = 2;
        this.isloading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    PreviewData() {
      return this.$store.getters.preview_data;
    },
    token() {
      return getToken();
    },
    DYnamicTags() {
      return this.dynamicTags;
    },
    Myzhuangbei() {
      if (this.bowen.myzhuangbei == "") return false;
      else return true;
    },
  },
  methods:{
    //收藏
    CollectThisBowen(){
      if(this.token==""){
        this.$message.error('请先登陆哦');
        return;
      }
      let collectModel = {
        toid:this.bowen.authorid,
        itid:this.bowen.id,
        title:this.bowen.title,
        type:2,
      }
     UserCollect(collectModel).then(response =>{ 
       this.$message(response.message);
              if(response.message == "请先登陆"){

       }else{
this.bowen.iscollect = !this.bowen.iscollect;
       }
     }).catch(error =>{console.log(error);});
    },
    getMethod(){
      alert("点赞")
    }
  }
};
</script>
<style scoped lang="less">
.content {
  .cover {
    width: 100%;
    height: 270px;
    position: relative;
    color: #fff;
    img {
      position: absolute;
      width: 100%;
      height: 270px;
      object-fit: cover;
      z-index: -1;
    }
    .time {
      padding: 30px 0 0 60px;
    }
    .title {
      padding: 30px 0 0 60px;
      font-size: 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    .smallinfo {
      padding: 100px 0 0 60px;
      span {
        margin-right: 50px;
      }
      .seenumber {
        float: right;
        margin-right: 40px;
      }
    }
  }
  .paragraphs {
        padding: 20px;
  }
  .DynamicTags {
    margin: 60px 0 75px 0;
    color: #999;
    font-size: 14px;
  }
  .collect {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>


