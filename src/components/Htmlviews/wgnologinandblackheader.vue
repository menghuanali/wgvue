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
                    <a href="/bowenlist" class="wg_head_list_item">博文</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/photographer" class="wg_head_list_item">摄影师</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>

            <el-col :span="4" class="wg_item_head_1">
              <a href="#">
                <span class="wg_black_head_color">爱Tu认证</span>
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
              <div class="wg_search" style="cursor: pointer;" v-on:click="startsearch">
                <!-- <img src="@/assets/png/search.png" alt="搜索"> -->
                <svg-icon icon-class="search" style="fill:black;font-size:22px"></svg-icon>
              </div>
            </el-col>

            <el-col :span="1" style="padding-left:18px">
              <div class="wg_renzheng_icon">
                <a href="#" class="pp_icon">
                  <!-- <img src="@/assets/png/renzheng.png" alt="认证"> -->
                  <svg-icon icon-class="vip" style="fill:black;font-size:22px"></svg-icon>
                </a>
              </div>
            </el-col>

            <el-col :span="3" :offset="1">
              <a href="/register">
                <el-button>注册</el-button>
              </a>
            </el-col>
            <el-col :span="3" :pull="1">
              <a href="/login">
                <el-button type="primary">登陆</el-button>
              </a>
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
  border-bottom: 1px solid #e8e8e8;
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
  color: black;
}

</style>

<script>
export default {
  name: "wgnologinandblackheader",
  data() {
    return {
      restaurants: this.loadAllwork(),
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
      timeout: null
    };
  },
    methods: {
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
