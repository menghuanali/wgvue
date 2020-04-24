<template>
    <div>
        <el-row>
            <el-col :span="6" style="min-height:1px"></el-col>
            <el-col :span="18" style="min-width: 950px" class="footercontainer">
                <el-button type="text" @click="aboutaitu">关于我们</el-button>
                <span style="margin:0 10px;color:#eee">|</span>
                <el-button type="text" @click="aituhelp">帮助中心</el-button>
                <span style="margin:0 10px;color:#eee">|</span>
                <el-button type="text" @click="makemessage">留言反馈</el-button>
                <span style="margin:0 10px;color:#eee">|</span>
                <el-button type="text" @click="joinus">商务合作</el-button>
                <div style="color:rgb(70, 61, 61);font-size:12px;margin-top: -10px;">
                    <span>备案号:</span><el-button type="text" style="color:#999">地球-19972117号-1</el-button>
                    <span>&#12288;ICP证号:</span><el-button type="text" style="color:#999">地球-19972117</el-button>
                    <span>&#12288;Copyright © 2023-2089 </span>
                    <img src="@/assets/jpg/logo_gongan.jpg" alt="" style="width:18px;">
                    <img src="@/assets/jpg/login_gongan2.png" alt="" style="width:16px;heigth:18px">
                    <span style="color:#999">地球公安备案:1878161722928-2</span>
                    <div class="tubiao1" @mouseover="checkpingguotrue" @mouseout="checkpingguofalse">
                    <img src="@/assets/png/pingguo_black.png" alt="" v-show="!getpingguoshow">
                    <img src="@/assets/png/pingguo_blue.png" alt="" v-show="getpingguoshow">
                    </div>

                                        <div class="tubiao2" @mouseover="checkanzhuotrue" @mouseout="checkanzhuofalse">
                    <img src="@/assets/png/anzhuo_black.png" alt="" v-show="!getanzhuoshow">
                    <img src="@/assets/png/anzhuo_green.png" alt="" v-show="getanzhuoshow">
                    </div>

                                        <div class="tubiao3" @mouseover="checkweibotrue" @mouseout="checkweibofalse">
                    <img src="@/assets/png/weibo_black.png" alt="" v-show="!getweiboshow">
                    <img src="@/assets/png/weibo_red.png" alt="" v-show="getweiboshow">
                    </div>

                                        <div class="tubiao4" @mouseover="checkweixintrue" @mouseout="checkweixinfalse">
                    <img src="@/assets/png/weixin_black.png" alt="" v-show="!getweixinshow">
                    <img src="@/assets/png/weixin_darkblue.png" alt="" v-show="getweixinshow">
                    </div>
                </div>
                <div>
                    <span style="color:rgb(70, 61, 61);font-size:12px">POCO网违法和不良信息举报电话：020-12343212 举报邮箱：1441471911@qq.com</span>
                    <el-button type="text" style="color:#999">不良信息举报中心</el-button>
                </div>
            </el-col>
           
        </el-row>
    </div>
</template>
<script>
export default {
    name: "basefooter",
    data(){
        return{
            pingguoshow:false,
            anzhuoshow:false,
            weiboshow:false,
            weixinshow:false
        }
    },
    computed:{
        getpingguoshow(){
            return this.pingguoshow;
        },
        getanzhuoshow(){
            return this.anzhuoshow;
        },
        getweiboshow(){
            return this.weiboshow;
        },
        getweixinshow(){
            return this.weixinshow;
        },
    },
    methods:{
        aboutaitu(){

        },
        //帮助中心
        aituhelp(){

        },
        makemessage(){

        },
        joinus(){
            
        },
        checkpingguotrue(){
            this.pingguoshow=true;
        },
        checkpingguofalse(){
            this.pingguoshow=false;
        },
        checkanzhuotrue(){
            this.anzhuoshow=true;
        },
        checkanzhuofalse(){
            this.anzhuoshow=false;
        },
        checkweibotrue(){
            this.weiboshow=true;
        },
        checkweibofalse(){
            this.weiboshow=false;
        },
        checkweixintrue(){
            this.weixinshow=true;
        },
        checkweixinfalse(){
            this.weixinshow=false;
        },
    }
}
</script>
<style lang="less" scoped>
.footercontainer{
    .el-button{
        color: #000;
    }
    .el-button:hover{
            color: green;
        
    }
    .tubiao1{
        cursor: pointer;
        display: inline;
        margin-left: 240px;
        img{
            width: 33px;
        }
    }
     .tubiao2{
        cursor: pointer;
        display: inline;
        margin-left: 20px;
        img{
            width: 33px;
        }
    }
     .tubiao3{
        cursor: pointer;
        display: inline;
        margin-left: 20px;
        img{
            width: 33px;
        }
    }
     .tubiao4{
        cursor: pointer;
        display: inline;
        margin-left: 20px;
        img{
            width: 33px;
        }
    }
}
</style>