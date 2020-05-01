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
                  <a href style="font-size:20px" class="wg_black_head_color">发现</a>
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
                <span class="wg_black_head_color"  @click.stop="CeShi(321)">爱Tu认证</span>
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
              <div class="wg_search" style="cursor: pointer;margin-top: 3px" v-on:click="startsearch">
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
            <el-col :span="3" :push=1>
              <el-dropdown class="wg_aitu_to_user_head" placement="bottom">
                <span class="el-dropdown-link">
                  <el-badge :value="Allmsgnumber" class="item">
                  <i class="el-icon-bell" style="color: white;font-size: 28px;"></i>
                  </el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                   
                    <router-link :to="{  name:'message', params: { type: 'like' } }" class="wg_head_list_item" style="margin:0" >点赞&#12288;&#12288;&#12288;</router-link><el-badge class="mark" :value="likenumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                   
                    <router-link :to="{  name:'message', params: { type: 'comment' } }" class="wg_head_list_item" style="margin:15px 0 0 0" >评论&#12288;&#12288;&#12288;</router-link><el-badge class="mark" :value="commentnumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    
                    <router-link :to="{  name:'message', params: { type: 'fans' } }" class="wg_head_list_item" style="margin:15px 0 0 0" >新粉丝&#12288;&#12288;</router-link><el-badge class="mark" :value="fansnumber" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    
                    <router-link :to="{  name:'message', params: { type: 'collect' } }" class="wg_head_list_item" style="margin:15px 0 0 0">收藏&#12288;&#12288;&#12288;</router-link><el-badge class="mark" :value="collectnumber" />
                  </el-dropdown-item>
                   <el-dropdown-item>
                    
                    <router-link :to="{  name:'message', params: { type: 'letter' } }" class="wg_head_list_item" style="margin:15px 0 0 0" >私信&#12288;&#12288;&#12288;</router-link><el-badge class="mark" :value="letternumber" />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="3">
              <el-dropdown class="wg_aitu_to_user_head" placement="bottom">
                <span class="el-dropdown-link">
                  <el-avatar shape="circle" :size="30" fit="fill" :src="userheadurl"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a href="/myself" class="wg_head_list_item">个人中心</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href class="wg_head_list_item" style="margin:15px 0 0 0">认证中心</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href class="wg_head_list_item" style="margin:15px 0 0 0">设置</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="logoutadmin()" class="wg_head_list_item" style="margin:15px 0 0 0">退出登陆</a>
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
      restaurants: [],//预搜索的内容
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
      userheadurl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
  created:function(){
    this.$store.dispatch("GetMyInfo");
  },
    computed:{
      Allmsgnumber(){
        let allnumber = Number(this.$store.getters.my_msgnumber.like)+Number(this.$store.getters.my_msgnumber.comment)+Number(this.$store.getters.my_msgnumber.collect)+Number(this.$store.getters.my_msgnumber.fans)+Number(this.$store.getters.my_msgnumber.letter);
          return parseInt(allnumber)>parseInt(99)?"99+":allnumber;
      },
      likenumber(){
        return this.$store.getters.my_msgnumber.like;
      },
      commentnumber(){
        return this.$store.getters.my_msgnumber.comment;
      }
      ,
      collectnumber(){
        return this.$store.getters.my_msgnumber.collect;
      }
      ,
      fansnumber(){
        return this.$store.getters.my_msgnumber.fans;
      }
      ,
      letternumber(){
        return this.$store.getters.my_msgnumber.letter;
      }
  },
  methods: {
    startsearch: function(event) {
      if (this.searchisshow == true) {
        alert("类型 " + this.selectvalue + "搜索内容" + this.state);
      } else {
        this.searchisshow = true;
      }
      // `this` 在方法里指向当前 Vue 实例
      // `event` 是原生 DOM 事件
    },
    logoutadmin(){
          this.$store.dispatch("LogOut").then((response)=> {
              let code = response.code;
              if (code == 200) {
                this.$router.go(0);
              } else {
                this.$router.push({
                  path: "/404"
                });
              }
            })
    },
    loadAll() {
      return [
        {
          value: "三全鲜食（北新泾店）",
          address: "长宁区新渔路144号"
        },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          value: "泷千家(天山西路店)",
          address: "天山西路438号"
        },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        {
          value: "贡茶",
          address: "上海市长宁区金钟路633号"
        },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        {
          value: "十二泷町",
          address: "上海市北翟路1444弄81号B幢-107"
        },
        {
          value: "星移浓缩咖啡",
          address: "上海市嘉定区新郁路817号"
        },
        {
          value: "阿姨奶茶/豪大大",
          address: "嘉定区曹安路1611号"
        },
        {
          value: "新麦甜四季甜品炸鸡",
          address: "嘉定区曹安公路2383弄55号"
        },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        {
          value: "NONO JUICE  鲜榨果汁",
          address: "上海市长宁区天山西路119号"
        },
        {
          value: "CoCo都可(北新泾店）",
          address: "上海市长宁区仙霞西路"
        },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        {
          value: "枪会山",
          address: "上海市普陀区棕榈路"
        },
        {
          value: "纵食",
          address: "元丰天山花园(东门) 双流路267号"
        },
        {
          value: "钱记",
          address: "上海市长宁区天山西路"
        },
        {
          value: "壹杯加",
          address: "上海市长宁区通协路"
        },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        {
          value: "爱茜茜里(西郊百联)",
          address: "长宁区仙霞西路88号1305室"
        },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        {
          value: "超级鸡车（丰庄路店）",
          address: "上海市嘉定区丰庄路240号"
        },
        {
          value: "妙生活果园（北新泾店）",
          address: "长宁区新渔路144号"
        },
        {
          value: "香宜度麻辣香锅",
          address: "长宁区淞虹路148号"
        },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        {
          value: "港式小铺",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          value: "蜀香源麻辣香锅（剑河路店）",
          address: "剑河路443-1"
        },
        {
          value: "北京饺子馆",
          address: "长宁区北新泾街道天山西路490-1号"
        },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        {
          value: "动力鸡车",
          address: "长宁区仙霞西路299弄3号101B"
        },
        {
          value: "浏阳蒸菜",
          address: "天山西路430号"
        },
        {
          value: "四海游龙（天山西路店）",
          address: "上海市长宁区天山西路"
        },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          value: "壹分米客家传统调制米粉(天山店)",
          address: "天山西路428号"
        },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        {
          value: "红辣椒麻辣烫",
          address: "上海市长宁区天山西路492号"
        },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        {
          value: "阳阳麻辣烫",
          address: "天山西路389号"
        },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    CeShi(id){
      this.$router.push({path:'/bowen',query:{id:id}})
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
