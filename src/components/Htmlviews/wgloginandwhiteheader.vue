<template>
  <div class="wg_head">
    <!-- 控制背景颜色 -->
    <div class="wg_aitu_header wg_topic_white">
      <!-- login图片 -->
      <el-row type="flex" justify="center" :gutter="50">
        <el-col :span="12">
          <el-row>
            <el-col :span="4">
              <a href="/">
                <img src="@/assets/logo.png" class="wg_logo" />
              </a>
            </el-col>

            <el-col :span="2" class="wg_item_head_1">
              <a href="/" class="wg_aitu_to_index">
                <span class="wg_black_head_color">首页</span>
              </a>
            </el-col>

            <el-col :span="2" class="wg_item_head_1">
              <el-dropdown class="wg_aitu_to_find" placement="bottom">
                <span class="el-dropdown-link">
                  <a href="/worklist" style="font-size:20px" class="wg_black_head_color">发现</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a href="/worklist" class="wg_head_list_item">作品</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/bowenlist" class="wg_head_list_item" style="margin:15px 0 0 0">博文</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/photographer" class="wg_head_list_item" style="margin:15px 0 0 0">摄影师</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>

            <el-col :span="4" class="wg_item_head_1">
              <a href="#">
                <span class="wg_black_head_color">爱Tu认证</span>
              </a>
            </el-col>

            <el-col :span="4" class="wg_item_head_1">
              <a href="/follows">
                <span class="wg_black_head_color">好友动态</span>
              </a>
            </el-col>
          </el-row>
        </el-col>

        <!-- 左边 -->
        <el-col :span="12">
          <el-row type="flex" justify="end" style="margin-top:38px">
            <transition name="el-zoom-in-center">
              <el-col :span="3" style="padding-left: 35px;margin-right:5px" v-show="searchisshow">
                <el-select v-model="selectvalue">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </transition>

            <transition name="el-zoom-in-center">
              <el-col :span="5" v-show="searchisshow">
                <el-autocomplete
                  v-model="state"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="搜索您喜欢的"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-col>
            </transition>

            <el-col :span="1">
              <div
                class="wg_search"
                style="cursor: pointer;margin-top: 3px"
                v-on:click="startsearch"
              >
                <!-- <img src="@/assets/png/search.png" alt="搜索"> -->
                <svg-icon icon-class="search" style="fill:white;font-size:22px"></svg-icon>
              </div>
            </el-col>

            <el-col :span="1" style="padding-left:18px">
              <div class="wg_renzheng_icon">
                <a href="#" class="pp_icon">
                  <!-- <img src="@/assets/png/renzheng.png" alt="认证"> -->
                  <svg-icon icon-class="vip" style="fill:white;font-size:24px"></svg-icon>
                </a>
              </div>
            </el-col>
            <el-col :span="3" :push="1">
              <el-dropdown class="wg_aitu_to_user_head" placement="bottom">
                <span class="el-dropdown-link">
                  <el-badge :value="Allmsgnumber" class="item">
                    <i class="el-icon-bell" style="color: white;font-size: 28px;"></i>
                  </el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link
                      :to="{  name:'message', params: { type: 'like' } }"
                      class="wg_head_list_item"
                      style="margin:0"
                    >点赞&#12288;&#12288;&#12288;</router-link>
                    <el-badge class="mark" :value="likenumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link
                      :to="{  name:'message', params: { type: 'comment' } }"
                      class="wg_head_list_item"
                      style="margin:15px 0 0 0"
                    >评论&#12288;&#12288;&#12288;</router-link>
                    <el-badge class="mark" :value="commentnumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link
                      :to="{  name:'message', params: { type: 'fans' } }"
                      class="wg_head_list_item"
                      style="margin:15px 0 0 0"
                    >新粉丝&#12288;&#12288;</router-link>
                    <el-badge class="mark" :value="fansnumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link
                      :to="{  name:'message', params: { type: 'collect' } }"
                      class="wg_head_list_item"
                      style="margin:15px 0 0 0"
                    >收藏&#12288;&#12288;&#12288;</router-link>
                    <el-badge class="mark" :value="collectnumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link
                      :to="{  name:'message', params: { type: 'letter' } }"
                      class="wg_head_list_item"
                      style="margin:15px 0 0 0"
                    >私信&#12288;&#12288;&#12288;</router-link>
                    <el-badge class="mark" :value="letternumber" />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="3">
              <el-dropdown class="wg_aitu_to_user_head" placement="bottom">
                <span class="el-dropdown-link">
                  <el-avatar shape="circle" :size="30" fit="fill" :src="getMyAvatar"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a href="/myself" class="wg_head_list_item">个人中心</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href class="wg_head_list_item" style="margin:15px 0 0 0">认证中心</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/set" class="wg_head_list_item" style="margin:15px 0 0 0">设置</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a
                      @click="logoutadmin()"
                      class="wg_head_list_item"
                      style="margin:15px 0 0 0"
                    >退出登陆</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <!---->
            </el-col>
            <el-col :span="3" :pull="1">
              <el-dropdown class="wg_aitu_to_user_head" placement="bottom">
                <span class="el-dropdown-link">
                  <el-button round style="color:#09f909;border: 1px #09f909 solid;" medium>发布</el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a href="/work/create" class="wg_head_list_item">作品</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/write" class="wg_head_list_item" style="margin:15px 0 0 0">博文</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <!---->
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

/* 自定义css */
.wg_head {
  height: 70px;
  min-width: 1400px;
  padding-left: 120px;
  padding-bottom: 25px;
}

.wg_head {
  position: relative;
  z-index: 3;
}

.wg_logo {
  margin-top: 24px;
}

.wg_item_head_1 {
  margin-top: 44px;
  font-size: 20px;
  font-weight: 500;
}

.wg_head_list_item {
  font-size: 15px;
  margin-right: 15px;
  padding: 5px 0;
  color: #6b6969;
}

.wg_black_head_color {
  color: white;
}
</style>

<script>
export default {
  name: "wgloginandwhiteheader",
  data() {
    return {
      restaurants: this.loadAllwork(), //预搜索的内容
      searchisshow: false, //搜索是否展示
      state: "", //用户搜索的内容
      options: [
        {
          value: "作品",
          label: "作品"
        },
        {
          value: "用户",
          label: "用户"
        },
        {
          value: "文章",
          label: "文章"
        }
      ],
      selectvalue: "作品", //用户搜索的类型
      timeout: null,
    };
  },
  created: function() {
    this.$store.dispatch("GetMyInfo");
  },
  computed: {
    getMyAvatar() {
      return this.$store.getters.my_avatar;
    },
    Allmsgnumber() {
      let allnumber =
        Number(this.$store.getters.my_msgnumber.like) +
        Number(this.$store.getters.my_msgnumber.comment) +
        Number(this.$store.getters.my_msgnumber.collect) +
        Number(this.$store.getters.my_msgnumber.fans) +
        Number(this.$store.getters.my_msgnumber.letter);
      if (parseInt(allnumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(allnumber) ==  parseInt(0)) {
        return "";
      } else {
        return allnumber;
      }
    },
    likenumber() {
      let likenumber = this.$store.getters.my_msgnumber.like;
      if (parseInt(likenumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(likenumber) == parseInt(0)) {
        return "";
      } else {
        return likenumber;
      }
    },
    commentnumber() {
      let commentnumber = this.$store.getters.my_msgnumber.comment;
      if (parseInt(commentnumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(commentnumber) ==  parseInt(0)) {
        return "";
      } else {
        return commentnumber;
      }
    },
    collectnumber() {
      let collectnumber = this.$store.getters.my_msgnumber.collect;
      if (parseInt(collectnumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(collectnumber) ==  parseInt(0)) {
        return "";
      } else {
        return collectnumber;
      }
    },
    fansnumber() {
      let fansnumber = this.$store.getters.my_msgnumber.fans;
      if (parseInt(fansnumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(fansnumber) ==  parseInt(0)) {
        return "";
      } else {
        return fansnumber;
      }
    },
    letternumber() {
      let letternumber = this.$store.getters.my_msgnumber.letter;
      if (parseInt(letternumber) > parseInt(99)) {
        return "99+";
      } else if (parseInt(letternumber) ==  parseInt(0)) {
        return "";
      } else {
        return letternumber;
      }
    }
  },
  methods: {
    logoutadmin(){
          this.$store.dispatch("LogOut").then((response)=> {
              let code = response.code;
              console.log(response);
              
              if (code == 200) {
                this.$router.go(0);
              } else {
                this.$router.push({
                  path: "/404"
                });
              }
            })
    },
    startsearch: function(event) {
      if (this.searchisshow == true) {
        if(this.state.trim() == ""){
                        this.$notify({
          title: "警告",
          message: "查询内容为空",
          type: "warning"
        });
        return;
       }
         this.$router.push({path:"/searchlist",query:{type:this.selectvalue,key:this.state}})
      } else {
        this.searchisshow = true;
      }
      // `this` 在方法里指向当前 Vue 实例
      // `event` 是原生 DOM 事件
    },
    loadAllwork() {
      return [
        {
          value: "女兵",
        },
         {
          value: "企鹅 ~",
        },
         {
          value: "共舞",
        },
         {
          value: "有趣的灵魂",
        },
         {
          value: "柬埔寨·崩必烈",
        },
         {
          value: "珠江长堤",
        },
         {
          value: "汽车展",
        },
         {
          value: "云上云下大广州",
        },
        {
          value: "众志成城 共克时艰 成都现代工业港复工战疫",
        },
         {
          value: "乡愁系列 —— 田头的那些人，那些事",
        },
      ];
    },
    loadAllbowen(){
        return [        {
          value: "拍出中国风的意境",
        },
         {
          value: "儿童摄影的十个要点",
        },
         {
          value: "总结分析各种光线条件和利用这些光线条件时的注意要点",
        },
         {
          value: "简单易上手清新日系教程！",
        },
         {
          value: "显瘦显高凸显风格的服装搭配",
        },
         {
          value: "西瓜夏日少女草帽",
        },
         {
          value: "拍出具有“设计感”的相片",
        },
         {
          value: "分享色彩技巧",
        },
        {
          value: "色彩色彩色彩",
        },
         {
          value: "荷花的特性，从这个几个关键词说起，洁、幽、远、趣、残",
        },]
    },
    loadAlluser(){
        return [        {
          value: "土豆炒马铃薯",
        },
         {
          value: "满处兰",
        },
         {
          value: "兰莺满",
        },
         {
          value: "柠趋夜拂",
        },
         {
          value: "校樱折",
        },
         {
          value: "共英栊",
        },
         {
          value: "可悛蕊",
        },
         {
          value: "可可萸",
        },
        {
          value: "城花春校幹",
        },
         {
          value: "西花茉",
        },]
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      cb(results);
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      // console.log(item);
    },
  },
  watch:{
    selectvalue(newvalue,oldvalue){
     console.log(newvalue);
     if(newvalue=="作品"){
 this.restaurants = this.loadAllwork();
     }else if(newvalue=="文章"){
        this.restaurants = this.loadAllbowen();
     }else{
        this.restaurants = this.loadAlluser();
     }
    }
  }
};
</script>
