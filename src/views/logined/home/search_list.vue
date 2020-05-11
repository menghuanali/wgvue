<template>
  <div style=" overflow-x: hidden;">
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>
    <div class="searchhead">
      <el-input
        type="text"
        placeholder="请输入搜索的关键字"
        v-model="searchtext"
        maxlength="20"
        show-word-limit
        class="mysearchiput"
      >
        <i
          class="el-icon-search"
          slot="suffix"
          @click="handleIconClickToSearch"
          style=" cursor: pointer;font-size: 25px;padding-top: 8px;"
        ></i>
      </el-input>
    </div>
    <div class="searchtype">
      <el-button
        type="text"
        class="typebtn"
        @click="handleMenuClickToSearch('作品',9)"
        :class="{'activetype':type=='作品'}"
      >作品</el-button>
      <el-button
        type="text"
        class="typebtn"
        @click="handleMenuClickToSearch('用户',10)"
        :class="{'activetype':type=='用户'}"
      >用户</el-button>
      <el-button
        type="text"
        class="typebtn"
        @click="handleMenuClickToSearch('文章',9)"
        :class="{'activetype':type=='文章'}"
      >文章</el-button>
    </div>
    <div class="searchcontent" v-loading="loading">
      <template v-if="type=='作品'">
        <div class="first">
          <el-row :gutter="10">
            <el-col :span="8" v-for="(p,index) in mysearch" :key="index" style="margin-top:30px">
              <div class="searchbox">
                <a :href="'/work?id='+p.itid" target="_blank">
                  <div class="boxcontent">
                    <img :src="p.coverimgurl+'/text_wateryin'" alt="图片" />
                    <div class="boxauthorinfo">
                      <img :src="p.fromheadurl" alt="头像" @click.stop="showherinfo(p.fromid)" />
                      <span
                        @click.stop="showherinfo(p.fromid)"
                        style="vertical-align: top;"
                      >{{p.fromname}}</span>
                    </div>
                    <div
                      style="color: rgb(255, 255, 255);background: rgb(149, 150, 147);display: inline-block;padding: 10px;opacity: 0.7;position: relative;bottom: 60px;float: right;right: 20px;"
                    >
                      <span style="display: inline-block;vertical-align: middle;">{{p.imgnumber}}</span>
                      <svg-icon icon-class="images" style></svg-icon>
                    </div>
                  </div>
                </a>
                <p class="time">{{p.time}}</p>
                <a :href="'/work?id='+p.id" target="_blank" class="title" v-html="p.title"></a>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
      <template v-if="type=='用户'">
        <div class="second">
          <div class="searchbox" v-for="(p,index) in mysearch" :key="index" style="margin-top:30px">
            <img :src="p.fromheadurl" alt="头像" @click.stop="showherinfo(p.fromid)" />
            <p @click.stop="showherinfo(p.fromid)">{{p.fromname}}</p>
          </div>
        </div>
      </template>
      <template v-if="type=='文章'">
        <div class="third">
          <div class="searchbox" v-for="(p,index) in mysearch" :key="index" style="margin-top:20px">
            <div class="left">
              <a :href="'/bowen?id='+p.itid" target="_blank">
                <img :src="p.coverimgurl+'/text_wateryin'" alt="封面" />
              </a>
            </div>
            <div class="right">
              <a :href="'/bowen?id='+p.itid" target="_blank" class="title" v-html="p.title"></a>
              <p class="introdution" v-html="p.introdution"></p>
              <div class="authorinfo">
                <img :src="p.fromheadurl" alt="头像" @click.stop="showherinfo(p.fromid)" />
                <span
                  style="font-size: 14px;font-weight: 200;"
                  @click.stop="showherinfo(p.fromid)"
                >{{p.fromname}}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <h2 style="text-align: center;" v-if="mysearch.length == 0">没有搜索到该内容</h2>
    </div>

        <div class="pagingblock" v-if="type=='用户'&&mysearch.length>0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="alltotal"
      ></el-pagination>
    </div>
        <div class="pagingblock" v-if="type!='用户'&&mysearch.length>0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[9, 18, 27, 36]"
        :page-size="9"
        layout="total, sizes, prev, pager, next, jumper"
        :total="alltotal"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import wgnologinandblackheader from "@/components/Htmlviews/wgnologinandblackheader.vue";
import { getToken } from "@/utils/auth";
import { SearchFunction } from "@/api/allrequest";
export default {
  components: { wgnologinandblackheader, wgloginandblackheader },
  data() {
    return {
      type: "",
      key: "",
      searchtext: "",
      group: 0,
      size: 9,
      currentPage: 1,
      alltotal: 100,
      mysearch: [],
      loading: true
    };
  },
  computed: {
    token() {
      return getToken();
    }
  },
  created: function() {
    if (
      this.$route.query.type != undefined &&
      this.$route.query.key != undefined
    ) {
      this.type = this.$route.query.type;
      this.key = this.$route.query.key;
      this.getData();
    } else {
      this.$router.replace({ path: "/" });
    }
  },
  methods: {
    showherinfo(id){
      this.$router.push({
        path: "/user",
        query: { id: id }
      });
    },
    getData() {
      let searchinfo = {
        type: this.type,
        key: this.key,
        group: this.group,
        size: this.size
      };
      if(this.key.trim() == ""){
                this.$notify({
          title: "警告",
          message: "查询内容为空",
          type: "warning"
        });
        return;
      }
      this.loading = true;
      SearchFunction(searchinfo)
        .then(response => {
          console.log(response);
          this.mysearch = response.search;
          this.alltotal = response.size;
          this.loading = false;
        })
        .catch(error => {});
    },
    handleIconClickToSearch() {
      this.group = 0;
      this.key = this.searchtext;
            if(this.key.trim() == ""){
                this.$notify({
          title: "警告",
          message: "查询内容为空",
          type: "warning"
        });
        return;
      }
      this.getData();
    },
    handleMenuClickToSearch(type,size) {
      console.log(type);
      this.type = type;
      this.size = size;
      this.mysearch = [];
      this.alltotal = 0;
      this.handleIconClickToSearch();
    },
    handleSizeChange(val) {
      this.size = val;
      this.getData();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.group = val-1;
       this.getData();
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped lang="less">
.searchhead {
  width: 400px;
  margin: 0 auto;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 4px;
  .mysearchiput {
    border-radius: 4px;
    height: 45px;
    /deep/ input {
      height: 45px;
    }
  }
}
.searchtype {
  margin: 0 auto;
  height: 45px;
  width: 160px;
  .typebtn {
    width: 50px;
    border: none;
    margin: 0;
    padding: 0;
    color: #040404;
    font-size: 16px;
    padding: 18px 0;
  }
  .activetype {
    border-bottom: 3px solid #409eff;
    color: #409eff;
  }
}
.searchcontent {
  width: 1500px;
  margin: 0 auto;
  overflow: hidden;
  .first {
    .searchbox {
      width: 500px;
      .boxcontent {
        vertical-align: middle;

        width: 470px;
        height: 370px;
        overflow: hidden;
        position: relative;
        .boxauthorinfo {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: aliceblue;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      }
      .boxcontent > img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        min-height: 370px;
        min-width: 470px;
      }
      .time {
        font-size: 12px;
        color: #999;
      }
      .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 95%;
        font-size: 18px;
        color: #333;
        font-weight: 700;
      }
    }
  }
  .second {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    .searchbox {
      width: 240px;
      text-align: center;
      cursor: pointer;
      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }
      p {
        font-weight: 700;
      }
    }
  }
  .third {
    width: 1200px;
    margin: 0 auto;
    .searchbox {
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-wrap: wrap;
      width: 1200px;
      .left {
        width: 240px;
        height: 160px;
        overflow: hidden;
        img {
          height: auto;
          width: 100%;
        }
      }
      .right {
        width: 940px;
        padding-left: 20px;

        .title {
          margin: 0;
          outline: none;
          display: block;
          padding: 0;
          font-size: 24px;
          color: #000;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;
          &:hover {
            color: #46d233;
          }
        }
        .introdution {
          margin: 0;
          outline: none;

          padding: 0;
          margin-top: 9px;
          font-size: 14px;
          color: #999;
          max-height: 42px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .authorinfo {
          display: flex;
          margin-top: 50px;
          cursor: pointer;
          align-items: center;
          img {
            margin-right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
.pagingblock {
  width: 400px;
  margin: 20px auto;
}
</style>

// id: null
// fromid: 1
// fromname: "
// fromheadurl: 
// title: 
// introdution:
// time: "20
// imgnumber: 12
// coverimgurl: