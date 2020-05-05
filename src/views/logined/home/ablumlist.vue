<template>
  <div style="overflow-x: hidden;" v-loading="isloading">
    <el-image-viewer
      v-if="showViewer"
      :on-close="closeViewer"
      :initial-index="prorindex"
      :url-list="srcList"
    />
    <el-row>
      <el-col :span="19" class="left">
        <el-carousel
          trigger="click"
          indicator-position="none"
          :initial-index="prorindex"
          :autoplay="false"
          height="800px"
          @change="changeimg"
          ref="wgcarousel"
        >
          <el-carousel-item v-for="(p,index) in picturslist" :key="index">
            <div class="imgdiv" @click="onPreview(index)">
              <img :src="p.url" alt="图片" />
            </div>
          </el-carousel-item>
        </el-carousel>

        <div class="imgdownlist">
          <ul class="alllist" ref="wgullist">
            <li
              @click="downchange(index)"
              v-for="(p,index) in picturslist"
              :key="index"
              :class="prorindex == index ? 'activeimg' : ''"
            >
              <img :src="p.url" alt="缩略图" />
            </li>
          </ul>
        </div>
        <div class="collectzhuanji" v-if="!token" style="color: #a99a9a;font-size: 14px;">登陆后可收录到专辑</div>
        <div class="collectzhuanji" v-if="token">
          <i class="el-icon-folder-add"></i>
          <el-popover width="200" trigger="click" placement="top-end" :visible-arrow="false">
            <div style=" width: 200px;cursor: pointer;font-size: 16px;">
              <div
                onmouseover="this.style.color='white';this.style.background='greenyellow'"
                onmouseout="this.style.color='greenyellow';this.style.background='white'"
                style="color: greenyellow;width: 200px; display: flex;position: relative;border-bottom: 1px solid #e4efe6;"
                @click="createnewzhuanji()"
              >
                <span>新增专辑</span>
                <span style="position: absolute;right: 0;">
                  <i class="el-icon-circle-plus-outline"></i>
                </span>
              </div>
              <div
                onmouseover="this.style.color='white';this.style.background='greenyellow'"
                onmouseout="this.style.color='black';this.style.background='white'"
                style="width: 200px;margin-top: 4px;color: black;"
                @click="collectthispicture(index)"
                v-for="(p,index) in GetMyZhuanJi"
                :key="index"
              >
                <span>{{p.title}}</span>
                <span style="position: absolute;right: 0;color: red;" v-show="includeid==p.id">
                  <i class="el-icon-check"></i>
                </span>
              </div>
            </div>
            <el-button class="collectbtn" type="text" slot="reference" v-if="!itisinclude">收录到专辑</el-button>
            <el-button class="collectbtn" type="text" slot="reference" v-if="itisinclude">已收录</el-button>
          </el-popover>
        </div>
      </el-col>
      <el-col :span="5" style="margin-top:10px">
        <div class="headandname" @click="showherinfo()">
          <div class="first">
            <img :src="GetAuthorHeadimg" alt="头像" />
          </div>
          <div class="second">{{GetAuthorName}}</div>
        </div>
        <div class="itdes">{{GetItdescribe}}</div>
        <div class="workid" @click="ShowThisWork()">查看完整作品</div>
      </el-col>
    </el-row>
    <albumcreatedialog
      ref="albumcreatedialog"
      v-if="albumcreate.visible"
      :visible.sync="albumcreate.visible"
    ></albumcreatedialog>
  </div>
</template>
<script>
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
import { GetOneAblumList, AddAblumpicture} from "@/api/allrequest";
import albumcreatedialog from "@/components/mydialog/albumcreatedialog.vue";
import { getToken } from "@/utils/auth";
export default {
  components: { ElImageViewer, albumcreatedialog },
  data() {
    return {
      showViewer: false,
      srcList: [],
      prorindex: 0,
      isloading: true,
      picturslist: [
        {
          id: "",
          workid: "",
          describe: "",
          url: "",
          worksort: "",
          fromid: "",
          fromheadurl: "",
          fromname: "",
          fromworktitle:"",
        }
      ],
      albumcreate: {
        //创造专辑
        visible: false
      },
      includeid: 0,
      itisinclude: false,
      ablumidlist: []
    };
  },
  computed: {
    GetMyZhuanJi() {
      return this.$store.getters.my_album;
    },
    token() {
      return getToken();
    },
    GetAuthorHeadimg() {
      return this.picturslist[this.prorindex].fromheadurl;
    },
    GetAuthorName() {
      return this.picturslist[this.prorindex].fromname;
    },
    GetAuthorID() {
      return this.picturslist[this.prorindex].fromid;
    },
    GetItdescribe() {
      return this.picturslist[this.prorindex].describe;
    },
    GetItWorkid() {
      return this.picturslist[this.prorindex].workid;
    },
    GetIWorksort() {
      return this.picturslist[this.prorindex].worksort;
    },
    GetIWorkTitle(){
      return this.picturslist[this.prorindex].fromworktitle;
    }
  },
  created: function() {
    GetOneAblumList(this.$route.query.id)
      .then(response => {
        console.log(response);
        this.picturslist = response.picturslist;
        for (let v of this.picturslist) {
          this.srcList.push(v.url);
        }
        console.log(response.albumidlist);
            this.ablumidlist = response.albumidlist;
            this.includeid = this.ablumidlist[0];
            if(this.includeid!=0){
              this.itisinclude=true;
            }
        this.isloading = false;
      })
      .catch(error => {
       console.log(error);
      });
            if(this.token){

          this.$store.dispatch("GETMyAlbum");
      }
  },
  methods: {
    ShowThisWork(){
      this.$router.push({path:"/work",query:{id:this.GetItWorkid}})
    },
    showherinfo(){
      this.$router.push({path:"/user",query:{id:this.GetAuthorID}})
    },
    closeViewer() {
      this.showViewer = false;
    },
    changeimg(v, p) {
      this.prorindex = v;
    },
    downchange(v) {
      this.$refs.wgcarousel.setActiveItem(v);
      let w = v * 110;
      this.$refs.wgullist.style.transform =
        "translate3d(-" + w + "px, 0px, 0px)";
    },
    onPreview(index) {
      this.prorindex = index;
      this.showViewer = true;
    },
    //创建新专辑
    createnewzhuanji() {
      this.albumcreate.visible = true;
    },
    //收录专辑
    collectthispicture(index) {
      let Ablumpictureinfo = {};
      Ablumpictureinfo.fromalbumid = this.$store.getters.my_album[index].id;
      Ablumpictureinfo.pictureurl = this.srcList[this.prorindex];
        Ablumpictureinfo.fromid = this.GetAuthorID;
        Ablumpictureinfo.fromworkid = this.GetItWorkid;
        Ablumpictureinfo.picturesort = this.GetIWorksort;
         Ablumpictureinfo.fromworktitle = this.GetIWorkTitle;
      Ablumpictureinfo.type =
        this.$store.getters.my_album[index].id == this.includeid ? 0 : 1;
      // console.log(Ablumpictureinfo);
      AddAblumpicture(Ablumpictureinfo)
        .then(response => {
          console.log(response.message);
          this.ablumidlist[this.prorindex] = this.$store.getters.my_album[
            index
          ].id;
          this.includeid = this.$store.getters.my_album[index].id;
          if (response.message == "取消成功") {
            this.ablumidlist[this.prorindex] = 0;
            this.includeid = false;
          }
        })
        .catch(error => {});
      // alert(index);
    }
  }
};
</script>
<style scoped lang="less">
.left {
  .imgdiv {
    width: 100%;
    height: 800px;
    vertical-align: middle;
    text-align: center;
    border: none;
  }
  .imgdiv > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 10px;
  }
  /deep/ .el-carousel__arrow {
    width: 70px;
    height: 70px;
  }
  .collectzhuanji {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #ffffff;

    .collectbtn {
      color: #999;
      vertical-align: middle;
      font-size: 14px;
      &:hover {
        color: green;
      }
    }
  }
  .imgdownlist {
    position: relative;
    white-space: nowrap;
    bottom: 0;
    z-index: 2;
    height: 70px;
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    .alllist {
      transition: all 0.3s linear 0s;
      padding: 0;
      margin: 0;
      list-style-type: none;
      list-style-position: outside;
      position: absolute;
      left: 50%;
      height: 60px;
      top: 10px;
      margin-left: -45px;
      li {
        display: inline-block;
        background: #e7eaee;
        margin-right: 20px;
        width: 90px;
        height: 60px;
        opacity: 0.4;
        cursor: pointer;
        position: relative;
        font-size: 0;
        img {
          display: inline-block;
          max-height: 100%;
          max-width: 100%;
          width: auto;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      }
      .activeimg {
        opacity: 1;
      }
    }
  }
}
.headandname {
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;

  .first {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .second {
    display: inline-block;
    max-width: 165px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #444;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 0;
    height: 30px;
  }
}
.itdes {
  padding: 15px 20px 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #444;
  font-weight: 700;
  margin-bottom: 2px;
  line-height: 20px;
}
.workid {
  padding: 20px;
  background: #46d233;
  color: #fff;
  border: 0;
  font-size: 15px;
  margin: 0;
  outline: 0;
  text-align: center;
  width: 75%;
  cursor: pointer;
  &:hover {
    background: #125f08;
  }
}
</style>
