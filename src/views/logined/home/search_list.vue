<template>
  <div>
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
        @click="handleMenuClickToSearch('作品')"
        :class="{'activetype':type=='作品'}"
      >作品</el-button>
      <el-button
        type="text"
        class="typebtn"
        @click="handleMenuClickToSearch('用户')"
        :class="{'activetype':type=='用户'}"
      >用户</el-button>
      <el-button
        type="text"
        class="typebtn"
        @click="handleMenuClickToSearch('文章')"
        :class="{'activetype':type=='文章'}"
      >文章</el-button>
    </div>
    <div class="searchcontent">
      <template v-if="type=='作品'">
        <div class="first">
          <el-row :gutter="10">
            <el-col :span="8" v-for="(p,index) in mysearch" :key="index" style="margin-top:30px">
              <div class="searchbox">
                <a :href="'/work?id='+p.id" target="_blank">
                  <div class="boxcontent">
                    <img :src="p.coverimgurl+'/text_wateryin'" alt="图片" />
                    <div class="boxauthorinfo">
                      <img :src="p.fromheadurl" alt="头像" @click.stop="showherinfo(p.fromid)" />
                      <span @click.stop="showherinfo(p.fromid)" style="vertical-align: top;">{{p.fromname}}</span>
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
                <a :href="'/work?id='+p.id" target="_blank" class="title">{{p.title}}</a>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
      <template v-if="type=='文章'">
        <div class="second">
            
        </div>
      </template>
      <template v-if="type=='用户'">
        <div class="third"></div>
      </template>
    </div>
    <div class="pagingblock">
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
      currentPage: 1,
      alltotal: 0,
      mysearch: []
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
    getData() {
      let searchinfo = {
        type: this.type,
        key: this.key,
        group: this.group
      };
      SearchFunction(searchinfo)
        .then(response => {
          console.log(response);
          this.mysearch = response.search;
        })
        .catch(error => {});
    },
    handleIconClickToSearch() {
      SearchFunction();
    },
    handleMenuClickToSearch(type) {
      this.type = type;
      this.handleIconClickToSearch();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
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