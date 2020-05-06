<template>
  <div>
    <el-backtop target=".infinite-list-wrapper" :right="200" :bottom="60"></el-backtop>
    <wgloginandblackheader></wgloginandblackheader>
    <div class="infinite-list-wrapper" style="overflow-x:hidden;">
      <div class="myinfo">
        <el-avatar
          :src="this.$store.getters.my_avatar"
          :size="80"
          shape="circle"
          style=" margin-top: 20px;"
        ></el-avatar>
        <p class="name">{{this.$store.getters.my_name}}</p>
        <el-row style="border-top: 1px #eee solid;">
          <el-col :span="8">
            <p class="tip">作品</p>
            <p>{{this.$store.getters.my_worknumber}}</p>
          </el-col>
          <el-col :span="8" style="border-left:1px #eee solid;border-right:1px #eee solid;">
            <p class="tip">关注</p>
            <p>{{this.$store.getters.my_follows}}</p>
          </el-col>
          <el-col :span="8">
            <p class="tip">粉丝</p>
            <p>{{this.$store.getters.my_fans}}</p>
          </el-col>
        </el-row>
      </div>
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(i,index) in this.GetList" class="list-item" :key="index">
          <div class="itimg" @click="showthisdynamic(i.id,i.isbowen)">
            <div class="imgdiv">
              <img :src="i.coverimgurl+'/text_wateryin'" alt="图片" />
            </div>
          </div>
          <div class="herinfo">
            <div
              @click="showthisdynamic(i.id,i.isbowen)"
              class="moreimages"
              v-if="(i.isbowen==false)&&(i.imgnumber>0)"
            >
              {{i.imgnumber}}
              <svg-icon icon-class="images_red"></svg-icon>
            </div>
            <div
              @click="showthisdynamic(i.id,i.isbowen)"
              class="moreimages"
              v-if="(i.isbowen==true)"
              style="opacity: 0.5;"
            >
              博文
            </div>
            <div class="double">
              <div class="left">
                <el-avatar :src="i.headurl" :size="40" shape="circle" style=" margin-left: 20px;"></el-avatar>
                <div class="nameandtime">
                  <p class="name" @click="showherinfo(i.userid)">{{i.name}}</p>
                  <span class="time">{{i.time}}</span>
                </div>
              </div>
              <div class="right">
                <div class="acontain">
                  <svg-icon icon-class="see" style="fill:#ccc"></svg-icon>
                  <span>{{i.seenumber}}</span>
                </div>
                <div class="acontain">
                  <svg-icon icon-class="write" style="fill:#ccc"></svg-icon>
                  <span>{{i.writenumber}}</span>
                </div>
                <div class="acontain">
                  <svg-icon icon-class="good" style="fill:#ccc"></svg-icon>
                  <span>{{i.goodnumber}}</span>
                </div>
              </div>
            </div>
            <div class="title" @click="showthisdynamic(i.id,i.isbowen)">{{ i.title }}</div>
            <div class="content">{{i.content}}</div>
          </div>
        </li>
      </ul>

      <p v-if="loading" class="jiazai">加载中...</p>
      <p v-if="noMore" class="nomorecontent">没有更多了</p>
    </div>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import request from "@/utils/request";
import { getDynamic } from "@/api/allrequest.js";

export default {
  components: { wgloginandblackheader },
  data() {
    return {
      navBarFixed: false, //吸顶效果
      count: 0, //起始页数值为0
      loading: false,
      totalPages: 5, //取后端返回内容的总页数
      list: [] //后端返回的数组
    };
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    GetList(){
      return this.list;
    }
  },
  created() {
    // this.getMessage();
  },
  mounted() {},
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
    load() {
      //滑到底部时进行加载
      this.loading = true;
      this.getMessage(); //调用接口，此时页数+1，查询下一页数据
    },
    getMessage() {
      let pageNumber = this.count;
      this.count += 1; //页数+1
      getDynamic(pageNumber).then((response) =>{
        console.log(response);

        this.list = this.list.concat(response.list);
        this.totalPages = response.totalPages;
        this.loading = false;
      }).catch((error) =>{ 
        console.log(err);
      })
    },
    //跳转到他人界面
    showherinfo(id) {
      this.$router.push({
        path: "/user",
        query: { id: id }
      });
    },
    //展示这条动态
    showthisdynamic(id, isbowen) {
      if(isbowen==false){
            this.$router.push({
              path:"/work",
              query:{
                id:id
              }
            })
      }else{
            this.$router.push({
              path:"/bowen",
              query:{
                id:id
              }
            })
      }
    }
  }
};
</script>
<style scoped lang="less">
.infinite-list-wrapper {
  height: 90vh;
  background-color: #d0d0d0;
  .myinfo {
    position: absolute;

    width: 20%;
    left: 66%;
    background-color: white;
    margin-top: 16px;
    text-align: center;
    .name {
      font-size: 18px;
      color: #444;
      font-weight: 700;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .tip {
      color: #ccc;
      font-size: 14px;
    }
  }

  .list {
    width: 50%;
    list-style: none;
    margin-left: 13%;
    padding: 0;
    .list-item {
      min-height: 600px;
      background: #fafafa;
      margin-bottom: 20px;
      .itimg {
        text-align: center;
        cursor: pointer;
        .imgdiv {
          width: 100%;
          height: 443px;
          vertical-align: middle;
          text-align: center;
          border: none;
        }

        .imgdiv > img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .herinfo {
        background-color: #ffffff;
        min-height: 155px;
        padding-bottom: 30px;
        position: relative;
        .moreimages {
          cursor: pointer;
          position: absolute;
          right: 0;
          margin: -60px 50px;
          font-size: 22px;
          color: #ff0000;
          letter-spacing: -3px;
        }
        .double {
          display: flex;
          display: -webkit-flex; /* Safari */
          justify-content: space-between;
          align-items: center;
          padding: 17px;
          border-bottom: 1px solid #eee;
          .left {
            cursor: pointer;
            display: flex;
            display: -webkit-flex; /* Safari */
            flex-direction: row;
            align-items: center;
            .nameandtime {
              display: flex;
              display: -webkit-flex; /* Safari */
              flex-direction: column;
              .name {
                vertical-align: middle;
                font-size: 14px;
                padding-right: 6px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 170px;
                margin: 10px 0 0 10px;
                &:hover {
                  color: chartreuse;
                }
              }
              .time {
                font-size: 12px;

                color: #999;
                padding: 0;
                margin: 5px 0 0 10px;
                list-style-type: none;
                list-style-position: outside;
                
              }
            }
          }
          .right {
            color: #ccc;
            width: 240px;
            .acontain {
              width: 75px;
              max-width: 75px;
              display: inline-block;
            }
          }
        }
      }
      .title {
        width: 100%;
        font-size: 24px;
        height: 28px;
        line-height: 28px;
        font-weight: 700;
        padding: 25px 0 0 37px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .content {
        color: #999;
        font-size: 16px;
        line-height: 28px;
        overflow: hidden;
        text-align: justify;
        padding: 15px 37px 0 37px;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .jiazai {
    text-align: center;
    color: chocolate;
    width: 50%;
    list-style: none;
    margin-left: 13%;
  }
  .nomorecontent {
    text-align: center;
    color: #ca2b2b;
    width: 50%;
    list-style: none;
    margin-left: 13%;
  }
}
</style>
