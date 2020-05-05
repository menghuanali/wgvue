<template>
  <div class="myselfcontainer">
    <wgloginandblackheader v-if="token"></wgloginandblackheader>
    <wgnologinandblackheader v-if="!token"></wgnologinandblackheader>
    <!-- <img v-bind:src="getMyAvatar" alt="背景图" class="background"> -->
    <img :src="this.her.maininfo.background" alt="背景图" class="background" />
    <div class="myselfinfo">
      <img :src="this.her.maininfo.avatar" alt="头像" class="myselfhead" />
      <div class="right">
        <dir class="myselfname">
          {{this.her.maininfo.name}}
          <svg
            v-if="getMyvip"
            t="1585739551583"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2289"
            width="48"
            height="48"
          >
            <path
              d="M511.737522 980.347804c-62.223157 0-122.595152-12.190647-179.437765-36.233226-54.895261-23.217794-104.190991-56.45478-146.522098-98.783841-42.329061-42.330084-75.566046-91.626837-98.783841-146.523121C62.951239 641.965004 50.760592 581.593008 50.760592 519.368828c0-62.22418 12.190647-122.596176 36.233226-179.438789 23.217794-54.895261 56.45478-104.192014 98.783841-146.522098 42.330084-42.330084 91.626837-75.565023 146.522098-98.783841 56.842613-24.042579 117.214608-36.233226 179.437765-36.233226 62.225203 0 122.597199 12.190647 179.440835 36.233226 54.895261 23.218818 104.190991 56.453756 146.522098 98.783841 42.329061 42.330084 75.565023 91.626837 98.783841 146.522098 24.041556 56.842613 36.232203 117.214608 36.232203 179.438789 0 62.22418-12.190647 122.596176-36.232203 179.438789-23.218818 54.896284-56.45478 104.192014-98.783841 146.523121-42.330084 42.329061-91.626837 75.566046-146.522098 98.783841C634.333698 968.156134 573.961702 980.347804 511.737522 980.347804zM511.737522 93.183286c-234.998175 0-426.184519 191.186344-426.184519 426.185542S276.738323 945.555393 511.737522 945.555393c234.999199 0 426.185542-191.186344 426.185542-426.185542S746.736721 93.183286 511.737522 93.183286z"
              p-id="2290"
              fill="#d81e06"
            />
            <path
              d="M236.272703 692.269713l-8.019651-26.419719-52.874231-152.240333-41.606607-116.942409c19.614733 0.291642 37.069267 0.432859 52.356438 0.432859 9.372461 0 24.085558-0.14224 44.137243-0.432859 3.325745 12.857842 5.928013 22.60995 7.80885 29.256324 2.605338 8.66945 7.522324 24.346501 14.756075 47.02706l31.892361 102.502535c3.180436 10.692526 7.088442 24.63712 11.717879 41.826618l9.951653-24.921599 75.511811-165.56992c1.299599-3.032056 2.778276-6.500041 4.436032-10.401908 1.658779-3.897773 4.290723-10.472516 7.897877-19.720134 20.945031 0.291642 37.773302 0.432859 50.484811 0.432859 7.944949 0 23.689538-0.14224 47.236837-0.432859-14.719236 27.431769-31.383778 59.482743-49.997718 96.151897l-74.671677 148.126642c-7.214309 14.437827-15.294334 31.546483-24.241101 51.323922-24.258497-0.287549-41.586141-0.432859-51.980885-0.432859C281.394367 691.836855 263.129374 691.982164 236.272703 692.269713z"
              p-id="2291"
              fill="#d81e06"
            />
            <path
              d="M492.610906 692.269713c8.320503-115.930359 12.482289-205.152427 12.482289-267.666202l-0.216941-27.936259c25.28385 0.291642 42.188868 0.432859 50.716078 0.432859 3.897773 0 19.431561-0.14224 46.596248-0.432859-2.612501 32.483832-4.712325 63.235207-6.303566 92.254124-2.029216 40.424688-3.481288 78.214363-4.351098 113.369024-0.86981 35.156708-1.302669 65.149812-1.302669 89.980337l-44.373627-0.432859C537.198403 691.836855 519.450181 691.982164 492.610906 692.269713z"
              p-id="2292"
              fill="#d81e06"
            />
            <path
              d="M644.201439 692.269713l4.300956-55.43966 5.593392-108.279099 2.365884-76.662007c0.14224-8.229428 0.216941-16.457834 0.216941-24.687262 0-6.205329-0.074701-16.384156-0.216941-30.534434 19.064194 0.432859 34.371832 0.649799 45.928029 0.649799 11.118222 0 26.352181-0.324388 45.706995-0.975211 19.351744-0.649799 35.746132-0.974188 49.179073-0.974188 19.351744 0 33.685193 1.227967 43.00035 3.681856 9.312086 2.455935 17.723663 6.316869 25.235754 11.585873 7.512091 5.272074 13.72049 11.444657 18.631336 18.515702 4.909823 7.076162 8.591679 15.125489 11.047614 24.145933 2.455935 9.024537 3.684926 18.228153 3.684926 27.610848 0 19.348674-4.692882 37.031405-14.0766 53.057403-9.385764 16.024975-22.595624 28.010961-39.630602 35.948747-17.036002 7.941879-36.165688 11.911284-57.388035 11.911284-7.795547 0-16.821107-0.86674-27.069519-2.598174-1.157359-6.639211-3.322675-16.529465-6.496971-29.668717-3.177366-13.136182-5.776563-22.880103-7.79657-29.234835 6.351662 1.299599 12.993942 1.948375 19.923772 1.948375 14.58109 0 25.445532-3.498684 32.593326-10.503215 7.145747-7.001461 10.720156-15.555278 10.720156-25.662473 0-4.90573-0.795109-9.274224-2.382257-13.101389-1.591241-3.823072-4.114714-6.963599-7.579629-9.420557-3.464915-2.452865-7.29208-4.040013-11.477402-4.764514-4.189416-0.720408-8.953929-1.082658-14.293541-1.082658-5.197372 0-10.610662 0.146333-16.241916 0.432859l-18.190291 1.299599c-1.857301 27.864628-3.285836 58.832943-4.28663 92.903923-1.857301 62.08194-2.785439 99.329263-2.785439 111.744014l0 28.1532-43.132356-0.432859C683.212942 691.836855 668.186713 691.982164 644.201439 692.269713z"
              p-id="2293"
              fill="#d81e06"
            />
          </svg>
          <svg
            v-if="!getMyvip"
            t="1585739551583"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2289"
            width="48"
            height="48"
          >
            <path
              d="M511.737522 980.347804c-62.223157 0-122.595152-12.190647-179.437765-36.233226-54.895261-23.217794-104.190991-56.45478-146.522098-98.783841-42.329061-42.330084-75.566046-91.626837-98.783841-146.523121C62.951239 641.965004 50.760592 581.593008 50.760592 519.368828c0-62.22418 12.190647-122.596176 36.233226-179.438789 23.217794-54.895261 56.45478-104.192014 98.783841-146.522098 42.330084-42.330084 91.626837-75.565023 146.522098-98.783841 56.842613-24.042579 117.214608-36.233226 179.437765-36.233226 62.225203 0 122.597199 12.190647 179.440835 36.233226 54.895261 23.218818 104.190991 56.453756 146.522098 98.783841 42.329061 42.330084 75.565023 91.626837 98.783841 146.522098 24.041556 56.842613 36.232203 117.214608 36.232203 179.438789 0 62.22418-12.190647 122.596176-36.232203 179.438789-23.218818 54.896284-56.45478 104.192014-98.783841 146.523121-42.330084 42.329061-91.626837 75.566046-146.522098 98.783841C634.333698 968.156134 573.961702 980.347804 511.737522 980.347804zM511.737522 93.183286c-234.998175 0-426.184519 191.186344-426.184519 426.185542S276.738323 945.555393 511.737522 945.555393c234.999199 0 426.185542-191.186344 426.185542-426.185542S746.736721 93.183286 511.737522 93.183286z"
              p-id="2290"
              fill="#bfbfbf"
            />
            <path
              d="M236.272703 692.269713l-8.019651-26.419719-52.874231-152.240333-41.606607-116.942409c19.614733 0.291642 37.069267 0.432859 52.356438 0.432859 9.372461 0 24.085558-0.14224 44.137243-0.432859 3.325745 12.857842 5.928013 22.60995 7.80885 29.256324 2.605338 8.66945 7.522324 24.346501 14.756075 47.02706l31.892361 102.502535c3.180436 10.692526 7.088442 24.63712 11.717879 41.826618l9.951653-24.921599 75.511811-165.56992c1.299599-3.032056 2.778276-6.500041 4.436032-10.401908 1.658779-3.897773 4.290723-10.472516 7.897877-19.720134 20.945031 0.291642 37.773302 0.432859 50.484811 0.432859 7.944949 0 23.689538-0.14224 47.236837-0.432859-14.719236 27.431769-31.383778 59.482743-49.997718 96.151897l-74.671677 148.126642c-7.214309 14.437827-15.294334 31.546483-24.241101 51.323922-24.258497-0.287549-41.586141-0.432859-51.980885-0.432859C281.394367 691.836855 263.129374 691.982164 236.272703 692.269713z"
              p-id="2291"
              fill="#bfbfbf"
            />
            <path
              d="M492.610906 692.269713c8.320503-115.930359 12.482289-205.152427 12.482289-267.666202l-0.216941-27.936259c25.28385 0.291642 42.188868 0.432859 50.716078 0.432859 3.897773 0 19.431561-0.14224 46.596248-0.432859-2.612501 32.483832-4.712325 63.235207-6.303566 92.254124-2.029216 40.424688-3.481288 78.214363-4.351098 113.369024-0.86981 35.156708-1.302669 65.149812-1.302669 89.980337l-44.373627-0.432859C537.198403 691.836855 519.450181 691.982164 492.610906 692.269713z"
              p-id="2292"
              fill="#bfbfbf"
            />
            <path
              d="M644.201439 692.269713l4.300956-55.43966 5.593392-108.279099 2.365884-76.662007c0.14224-8.229428 0.216941-16.457834 0.216941-24.687262 0-6.205329-0.074701-16.384156-0.216941-30.534434 19.064194 0.432859 34.371832 0.649799 45.928029 0.649799 11.118222 0 26.352181-0.324388 45.706995-0.975211 19.351744-0.649799 35.746132-0.974188 49.179073-0.974188 19.351744 0 33.685193 1.227967 43.00035 3.681856 9.312086 2.455935 17.723663 6.316869 25.235754 11.585873 7.512091 5.272074 13.72049 11.444657 18.631336 18.515702 4.909823 7.076162 8.591679 15.125489 11.047614 24.145933 2.455935 9.024537 3.684926 18.228153 3.684926 27.610848 0 19.348674-4.692882 37.031405-14.0766 53.057403-9.385764 16.024975-22.595624 28.010961-39.630602 35.948747-17.036002 7.941879-36.165688 11.911284-57.388035 11.911284-7.795547 0-16.821107-0.86674-27.069519-2.598174-1.157359-6.639211-3.322675-16.529465-6.496971-29.668717-3.177366-13.136182-5.776563-22.880103-7.79657-29.234835 6.351662 1.299599 12.993942 1.948375 19.923772 1.948375 14.58109 0 25.445532-3.498684 32.593326-10.503215 7.145747-7.001461 10.720156-15.555278 10.720156-25.662473 0-4.90573-0.795109-9.274224-2.382257-13.101389-1.591241-3.823072-4.114714-6.963599-7.579629-9.420557-3.464915-2.452865-7.29208-4.040013-11.477402-4.764514-4.189416-0.720408-8.953929-1.082658-14.293541-1.082658-5.197372 0-10.610662 0.146333-16.241916 0.432859l-18.190291 1.299599c-1.857301 27.864628-3.285836 58.832943-4.28663 92.903923-1.857301 62.08194-2.785439 99.329263-2.785439 111.744014l0 28.1532-43.132356-0.432859C683.212942 691.836855 668.186713 691.982164 644.201439 692.269713z"
              p-id="2293"
              fill="#bfbfbf"
            />
          </svg>
        </dir>
        <div class="myfollowsandfans">
          关注 {{this.her.maininfo.follows}}
          <span style="margin:0 10px">|</span>
          粉丝 {{this.her.maininfo.fans}}
        </div>
      </div>
    </div>
    <div
      class="centercontroller"
      style="min-width:1260px"
      :class="navBarFixed==false?'':'navBarWrap'"
    >
      <el-row>
        <el-col :span="8">
          <div class="left">&#12288;</div>
        </el-col>
        <el-col :span="8">
          <div class="center">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="black"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1" style="font-size:20px">作品</el-menu-item>
              <el-menu-item index="2" style="font-size:20px">专辑</el-menu-item>
              <el-menu-item index="3" style="font-size:20px">收藏</el-menu-item>
              <el-menu-item index="4" style="font-size:20px">资料</el-menu-item>
              <el-menu-item index="5" style="font-size:20px">关注</el-menu-item>
            </el-menu>
          </div>
        </el-col>

        <el-col :span="8" :push="1" style=" min-height: 1px;">
          <div class="right">
            <el-dropdown v-if="activeIndex==1&&downactiveIndex1==1">
              <span class="el-dropdown-link" style="font-size:15px">
                <span ref="thecalss">全部类别</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" style="padding: 10px 10px">
                <div v-if="(getTars.size == 0)">还没有哦</div>
                <div v-if="getTars.size % 2 == 0">
                  <template v-for="(item,index) in getTars">
                    <div v-if="index%2 == 0" :key="item">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index]}}</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index+1]}}</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </template>
                </div>

                <div v-if="!(getTars.size % 2 == 0)">
                  <template v-for="(item,index) in getTars">
                    <div v-if="index%2 == 0" :key="item">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index]}}</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button type="text" @click="jiazaibykey">{{getTars[index+1]}}</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </template>
                  <div v-if="(getTars.size == 0)">
                    <el-button type="text" @click="jiazaibykey">{{getTars[getTars.size]}}</el-button>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown style="margin-left:100px" v-if="activeIndex==1&&downactiveIndex1==1">
              <span class="el-dropdown-link" style="font-size:15px">
                <span ref="thenian">全部年份</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" style="padding: 10px 10px">
                <div v-if="(getNians.size == 0)">还没有哦</div>
                <div v-for="(item) in getNians" :key="item">
                  <el-button type="text" @click="jiazaibykeynian">{{item}}</el-button>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="downcontroller">
      <el-row>
        <el-col :span="6" style="min-height: 1px"></el-col>
        <el-col :span="12" style="min-width: 950px">
          <template v-if="activeIndex==1">
            <div class="template1">
              <el-menu
                :default-active="downactiveIndex1"
                mode="horizontal"
                @select="downhandleSelect1"
                background-color="#e6eaef"
                active-text-color="#58d425"
                :collapse-transition="false"
              >
                <el-menu-item index="1">全部</el-menu-item>
                <el-menu-item index="2">图片</el-menu-item>
                <el-menu-item index="3">博文</el-menu-item>
              </el-menu>
              <!-- 全部 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==1)">
                <div class="nothing" v-if="(allworktemp.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col
                  :span="8"
                  v-for="(p,index) in allworktemp"
                  :key="index"
                  style="margin-bottom:20px"
                >
                  <div class="box-card">
                    <span class="type" v-if="p.isbowen">博文</span>
                    <a target="_blank" :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id">
                      <img :src="p.coverimgurl+'/text_wateryin'" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a
                        target="_blank"
                        :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id"
                      >{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="(o,index) in p.tars" :key="index">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 作品 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==2)">
                <div class="nothing" v-if="(worktemp.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col
                  :span="8"
                  v-for="(p,index) in worktemp"
                  :key="index"
                  style="margin-bottom:20px"
                >
                  <div class="box-card">
                    <a target="_blank" :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id">
                      <img :src="p.coverimgurl+'/text_wateryin'" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a
                        target="_blank"
                        :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id"
                      >{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="(o,index) in p.tars" :key="index">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 博文 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex1==3)">
                <div class="nothing" v-if="(bowentemp.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>
                <el-col
                  :span="8"
                  v-for="(p,index) in bowentemp"
                  :key="index"
                  style="margin-bottom:20px"
                >
                  <div class="box-card">
                    <span class="type">博文</span>
                    <a target="_blank" :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id">
                      <img :src="p.coverimgurl+'/text_wateryin'" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a
                        target="_blank"
                        :href="p.isbowen==true?'/bowen?id='+p.id:'/work?id='+p.id"
                      >{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="(o,index) in p.tars" :key="index">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="14">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
          <!-- 专辑 -->
          <template v-if="activeIndex==2">
            <div class="template2">
              <el-row :gutter="20">
                <el-col
                  :span="12"
                  v-for="(p,index) in this.her.album"
                  :key="index"
                  style="margin-bottom: 10px;"
                >
                  <div class="up">
                    <a target="_blank" :href="'/ablumlist?id='+p.id">
                      <img :src="p.coverimgurl" class="image" />
                    </a>
                  </div>
                  <div class="down">
                    <span style="color">{{p.title}}</span>
                    <div class="picnumber">{{p.imgnumber}}张图片</div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
          <template v-if="activeIndex==3">
            <div class="template3">
              <el-menu
                :default-active="downactiveIndex3"
                mode="horizontal"
                @select="downhandleSelect3"
                background-color="#e6eaef"
                active-text-color="#58d425"
                :collapse-transition="false"
              >
                <el-menu-item index="1">图片</el-menu-item>
                <el-menu-item index="2">博文</el-menu-item>
              </el-menu>

              <!-- 收藏图片 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex3==1)">
                <div class="nothing" v-if="(this.her.collectpictures.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>

                <el-col
                  :span="8"
                  v-for="(p,index) in this.her.collectpictures"
                  :key="index"
                  style="margin-bottom:20px"
                >
                  <div class="box-card">
                    <div class="authorinfo">
                      <div class="left" @click="showherinfo(p.id)">
                        <img :src="p.authorheadurl" alt="头像" />
                        <span>{{p.authorname}}</span>
                      </div>
                      <div class="right">
                        <span>{{p.picturesnumber}}</span>
                        <i class="el-icon-money"></i>
                      </div>
                    </div>
                    <a target="_blank" :href="'/work?id='+p.itid">
                      <img :src="p.coverimgurl+'/text_wateryin'" class="image" />
                    </a>
                    <div class="time">{{p.time}}</div>
                    <div class="title">
                      <a target="_blank" :href="'/work?id='+p.itid">{{p.title}}</a>
                    </div>
                    <div class="tars">
                      <span v-for="(o,index) in p.tars" :key="index">{{o}}</span>
                    </div>
                    <div class="info">
                      <el-row>
                        <el-col :span="5">
                          <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                          <span>{{p.seenumber}}</span>
                        </el-col>
                        <el-col :span="7">
                          <svg-icon icon-class="write" style="fill:#707070"></svg-icon>
                          <span>{{p.writenumber}}</span>
                        </el-col>
                        <el-col :span="7" style="min-height:1px"></el-col>
                        <el-col :span="5">
                          <svg-icon icon-class="good" style="fill:#707070"></svg-icon>
                          <span>{{p.goodnumber}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- 收藏博文 -->
              <el-row :gutter="20" style="margin-top:10px" v-if="(downactiveIndex3==2)">
                <div class="nothing" v-if="(this.her.collectionarticles.length==0)">
                  <i class="el-icon-document" style="font-size: 80px;"></i>
                  <div>暂无作品</div>
                </div>

                <el-col
                  :span="12"
                  v-for="(p,index) in this.her.collectionarticles"
                  :key="index"
                  style="margin-bottom:20px"
                >
                  <div class="box-cardbowen">
                    <div class="left">
                      <a target="_blank" :href="'/bowen?id='+p.itid">
                        <img :src="p.coverimgurl+'/text_wateryin'" class="image" />
                      </a>
                    </div>
                    <div class="right">
                      <div class="title">{{p.title}}</div>
                      <div class="content">{{p.content}}</div>
                      <div class="collectinfo">
                        <el-row>
                          <el-col :span="9">
                            <svg-icon icon-class="see" style="fill:#707070"></svg-icon>
                            <span>{{p.seenumber}}</span>
                          </el-col>
                          <el-col :span="8">
                            <svg-icon icon-class="star" style="fill:#707070"></svg-icon>
                            <span>{{p.collectnumber}}</span>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
          <template v-if="activeIndex==4">
            <div class="template4">
              <div class="title">等级头衔</div>
              <div class="item">
                <span class="left">摄影积分</span>
                <span class="right">{{this.her.maininfo.integral}}</span>
                <el-tooltip effect="dark" content="查看积分说明" placement="right">
                  <i
                    class="el-icon-info"
                    @click="integraldescription"
                    style="cursor: pointer;color:#ccc;outline: none;"
                  ></i>
                </el-tooltip>
              </div>
              <div class="item">
                <span class="left">等级</span>
                <span class="right">{{this.her.maininfo.grade}}</span>
                <el-tooltip effect="dark" content="查看等级说明" placement="right">
                  <i
                    class="el-icon-info"
                    @click="leveldescription"
                    style="cursor: pointer;color:#ccc;outline: none;"
                  ></i>
                </el-tooltip>
              </div>
              <div class="title">个人资料</div>
              <div class="item">
                <span class="left">ID</span>
                <span class="right">{{this.her.maininfo.exposeid}}</span>
              </div>
              <div class="item">
                <span class="left">居住地</span>
                <span class="right">{{this.her.maininfo.place}}</span>
              </div>
              <div class="item">
                <span class="left">年龄</span>
                <span class="right">{{this.her.maininfo.age}}</span>
              </div>
              <div class="item">
                <span class="left">联系邮箱</span>
                <span class="right">{{this.her.maininfo.email}}</span>
              </div>
              <div class="item">
                <span class="left">联系手机</span>
                <span class="right">{{this.her.maininfo.phone}}</span>
              </div>
              <div class="item">
                <span class="left">QQ</span>
                <span class="right">{{this.her.maininfo.qq}}</span>
              </div>
              <div class="item">
                <span class="left">我的装备</span>
                <span
                  class="right"
                  v-if="equipment.secrecy == '保密'"
                >{{equipment.secrecy}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="equipment.camera != ''"
                >相机：{{this.equipment.camera}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="equipment.mobilephone != ''"
                >手机：{{this.equipment.mobilephone}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="equipment.downwaterequipment != ''"
                >水下设备：{{this.equipment.downwaterequipment}}&#12288;&#12288;</span>
                <span
                  class="right"
                  v-if="equipment.aerialequipment != ''"
                >航拍设备：{{this.equipment.aerialequipment}}</span>
              </div>
              <div class="item">
                <span class="left">个人说明</span>
                <span class="right">{{this.her.maininfo.personalstatement}}</span>
              </div>
            </div>
          </template>
          <template v-if="activeIndex==5">
            <div class="template5">
              <el-row>
                <el-col
                  :span="6"
                  v-for="(p,index) in this.her.followusers"
                  :key="index"
                  style="margin-bottom: 60px;"
                >
                  <div class="hercontent">
                    <div
                      style="width: 140px;height: 140px;border: 1px solid #e2e2e2;cursor: pointer;"
                      @click="showherinfo(p.id)"
                    >
                      <img
                        :src="p.toheadurl"
                        alt="头像"
                        style="width: 140px;height: 140px; border-radius: 50%;"
                      />
                    </div>

                    <div
                      class="name"
                      style="cursor: pointer;"
                      @click="showherinfo(p.toid)"
                    >{{p.toname}}</div>
                    <div>
                      <button class="guanzhubutton">
                        <i class="el-icon-check"></i>
                        已关注
                      </button>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="wg_end">
                <img src="@/assets/png/end.png" alt="结尾" />
              </div>
            </div>
          </template>
        </el-col>
        <el-col :span="6" style="min-height: 1px"></el-col>
      </el-row>
    </div>
    <basefooter></basefooter>
  </div>
</template>
<script>
import wgloginandblackheader from "@/components/Htmlviews/wgloginandblackheader.vue";
import wgnologinandblackheader from "@/components/Htmlviews/wgnologinandblackheader.vue";
import { getToken } from "@/utils/auth";
import basefooter from "@/components/Htmlviews/basefooter.vue";
import albumsetdialog from "@/components/mydialog/albumsetdialog.vue";
import albumcreatedialog from "@/components/mydialog/albumcreatedialog.vue";
import {
  getherinfo,
  UserFans,
  GetOneClassWorks,
  GetOneNianWorks
} from "@/api/allrequest.js";
export default {
  components: {
    wgloginandblackheader,
    wgnologinandblackheader,
    basefooter,
    albumsetdialog,
    albumcreatedialog
  },
  data() {
    return {
      activeIndex: "1",
      downactiveIndex1: "1",
      downactiveIndex3: "1",
      downactiveIndex4: "1",
      navBarFixed: false,
      token: "",
      her: {
        maininfo: {
          background: "",
          avatar: "",
          name: "",
          herid: 0,
          isvip: 0,
          isfollow: false,
          follows: 0,
          fans: 0,
          integral: 0,
          grade: "",
          exposeid: "",
          place: "",
          age: 0,
          email: "",
          phone: "",
          qq: "",
          myequipment: "",
          personalstatement: "" //个人说明
        },
        tars: [
          "文字按钮1",
          "文字按钮2",
          "文字按钮3",
          "文字按钮4",
          "文字5",
          "文字按钮6",
          "文字按钮7"
        ], //类别
        nians: ["2020", "2019", "2018"], //年份
        followusers: [],
        album: [],
        collectpictures: [],
        collectionarticles: []
      },
      allworktemp: [],
      worktemp: [],
      bowentemp: [],
      equipment: {
        secrecy: "保密",
        camera: "1",
        mobilephone: "2",
        downwaterequipment: "3",
        aerialequipment: "4"
      }
    };
  },
  //计算属性不能直接呈现的需要用计算属性 如 src
  computed: {
    getTars() {
      return this.her.tars;
    },
    getNians() {
      return this.her.nians;
    },
    getMyvip() {
      return this.her.maininfo.isvip == 1 ? true : false;
    }
  },
  created() {
    this.token = getToken();
    if (this.token) {
      if (this.$route.query.id == this.$store.getters.my_id) {
        this.$router.replace({ path: "/myself" });
      }
    }

    getherinfo(this.$route.query.id==undefined?0:this.$route.query.id)
      .then(response => {
        this.her = response.her;
        this.her.tars.unshift("全部类别");
        this.her.nians.unshift("全部年份");
        this.allworktemp = this.her.works;
        for (let v of this.allworktemp) {
          if (v.isbowen == true) {
            this.bowentemp.push(v);
          } else {
            this.worktemp.push(v);
          }
        }
        let arrayeqs = [];
        arrayeqs = this.her.maininfo.myequipment.split(",");
        if (arrayeqs.length == 1) {
          this.her.equipment.secrecy = "保密";
        } else {
          this.equipment.secrecy = "";
          this.equipment.camera = arrayeqs[0];
          this.equipment.mobilephone = arrayeqs[1];
          this.equipment.downwaterequipment = arrayeqs[2];
          this.equipment.aerialequipment = arrayeqs[3];
        }
      })
      .catch(error => {});
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },

  methods: {
    //跳转到他人界面
    showherinfo(id) {
      this.$router.push({
        path: "/user",
        query: { id: id }
      });
      window.location.reload();
    },
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    downhandleSelect1(key, keyPath) {
      // console.log(key, keyPath);
      this.downactiveIndex1 = key;
    },
    downhandleSelect3(key, keyPath) {
      // console.log(key, keyPath);
      this.downactiveIndex3 = key;
    },
    //吸顶效果
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 516) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    //积分说明
    integraldescription() {
      this.$alert("积分说明", "积分说明", {
        confirmButtonText: "confirm",
        callback: action => {}
      });
    },
    leveldescription() {
      alert("等级说明");
    },

    jiazaibykey: function(e) {
      let classif = e.toElement.innerText;
      this.$refs.thenian.innerText = "全部年份";
      this.$refs.thecalss.innerText = classif;
      if (classif == "全部类别") {
        this.allworktemp = this.her.works;
        this.bowentemp = [];
            this.worktemp = [];
            for (let v of this.allworktemp) {
              if (v.isbowen == true) {
                this.bowentemp.push(v);
              } else {
                this.worktemp.push(v);
              }
            }
      } else {
        GetOneClassWorks(classif, this.$route.query.id)
          .then(response => {
            this.allworktemp = response.allworks;
            this.bowentemp = [];
            this.worktemp = [];
            for (let v of this.allworktemp) {
              if (v.isbowen == true) {
                this.bowentemp.push(v);
              } else {
                this.worktemp.push(v);
              }
            }
          })
          .catch(error => {});
      }
    },
    jiazaibykeynian: function(e) {
      let nian = e.toElement.innerText;
      this.$refs.thecalss.innerText = "全部类别";
      this.$refs.thenian.innerText = nian;
      if (nian == "全部年份") {
        this.allworktemp = this.her.works;
        this.bowentemp = [];
            this.worktemp = [];
            for (let v of this.allworktemp) {
              if (v.isbowen == true) {
                this.bowentemp.push(v);
              } else {
                this.worktemp.push(v);
              }
            }
      } else {
        GetOneNianWorks(nian, this.$route.query.id)
          .then(response => {
            this.allworktemp = response.allworks;
            this.bowentemp = [];
            this.worktemp = [];
            for (let v of this.allworktemp) {
              if (v.isbowen == true) {
                this.bowentemp.push(v);
              } else {
                this.worktemp.push(v);
              }
            }
          })
          .catch(error => {});
      }
    }
  }
};
</script>
<style lang="less" scoped>
.myselfcontainer {
  overflow-x: hidden;
  .background {
    height: 420px;
    position: absolute;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
  .myselfinfo {
    margin-top: 270px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .myselfhead {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    .right {
      margin-left: 20px;
      .myselfname {
        margin: 0;
        margin-bottom: 15px;
        font-size: 30px;
        color: white;
        padding: 0;
      }
      .myfollowsandfans {
        color: #cac3c3;
        font-size: 15px;
      }
    }
  }
  .centercontroller {
    height: 60px;
    background-color: white;
    position: relative;
    margin-top: 50px;

    .center {
      height: 61px;
      display: flex;
      justify-content: center;
    }
    .right {
      height: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .navBarWrap {
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    margin-top: 0;
  }
  .downcontroller {
    background: #e6eaef;
    .template1 {
      .nothing {
        text-align: center;
        font-size: 18px;
        color: #ccc;
      }
      position: relative;
      .box-card {
        margin: 0;
        padding: 0;
        min-height: 445px;
        background: white;
        position: relative;
        img {
          object-fit: cover;
        }
        .type {
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          padding: 0 10px;
          font-size: 14px;
          color: #fff;
          left: 15px;
          top: 15px;
          height: 28px;
          line-height: 28px;
        }
        a {
          display: inline-block;
          cursor: pointer;
          img {
            margin: 0;
            padding: 0;
            width: 303px;
            height: 300px;
          }
        }
        .time {
          margin: 5px 0 10px 10px;
          font-size: 0.12rem;
          color: #999;
        }
        .title {
          a {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
          }
        }
        .tars {
          height: 26px;
          line-height: 140%;
          margin-left: 10px;
          span {
            padding: 7px 10px;
            font-size: 14px;
            color: #999;
            line-height: 1;
            background: #f0f1f2;
            margin-right: 10px;
          }
        }
        .info {
          margin: 20px 0 0 10px;
          font-size: 14px;
          color: #ccc;
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template2 {
      margin-top: 20px;
      .up {
        position: relative;
        a {
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .down {
        text-align: center;

        span {
          font-size: 1rem;
          color: #444;
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        .picnumber {
          margin-top: 6px;
          width: 100%;
          font-size: 0.14rem;
          color: #ccc;
          line-height: 0;
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template3 {
      .nothing {
        text-align: center;
        font-size: 18px;
        color: #ccc;
      }
      position: relative;
      .box-card {
        margin: 0;
        padding: 0;
        min-height: 440px;
        background: white;
        position: relative;
        img {
          object-fit: cover;
        }
        .authorinfo {
          position: absolute;
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 256px 0 0 15px;
          cursor: pointer;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 25px;
              height: 25px;
              border-radius: 50%;
            }
            span {
              color: white;
              margin-left: 8px;
            }
          }
          .right {
            margin-right: 20px;
            color: white;
            font-size: 15px;
            background-color: rgba(13, 26, 43, 0.55);
            text-align: center;
            padding-bottom: 2px;
            height: 18px;
          }
        }
        a {
          display: inline-block;
          cursor: pointer;
          img {
            margin: 0;
            padding: 0;
            width: 303px;
            height: 300px;
          }
        }
        .time {
          margin: 5px 0 10px 10px;
          font-size: 0.12rem;
          color: #999;
        }
        .title {
          a {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
          }
        }
        .tars {
          margin-left: 10px;
          span {
            padding: 7px 10px;
            font-size: 14px;
            color: #999;
            line-height: 1;
            background: #f0f1f2;
            margin-right: 10px;
          }
        }
        .info {
          margin: 20px 0 0 10px;
          font-size: 14px;
          color: #ccc;
        }
      }
      .box-cardbowen {
        display: flex;
        .left {
          a {
            img {
              height: 160px;
              width: 240px;
              object-fit: cover;
            }
          }
        }
        .right {
          overflow: hidden;
          .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
            margin-bottom: 10px;
            margin-top: 30px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            color: #444;
            height: 30px;
          }
          .content {
            margin-top: 9px;
            font-size: 14px;
            color: #999;
            max-height: 42px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-left: 10px;
            overflow: hidden;
            height: 50px;
          }
          .collectinfo {
            color: #707070;
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
    .template4 {
      margin-bottom: 30px;
      .title {
        margin: 30px 0;
        font-size: 30px;
        color: #000;
      }
      .item {
        margin-top: 30px;
      }
      .left {
        display: inline-block;
        width: 155px;
        text-align: left;
        vertical-align: top;
        line-height: 30px;
        color: #000;
      }
      .right {
        color: #777;
        text-align: left;
        line-height: 30px;
        font-size: 14px;
      }
    }
    .template5 {
      margin-top: 20px;
      .hercontent {
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 201px;
          text-align: center;
          font-size: 16px;
          color: #333;
          margin-top: 15px;
          height: 25px;
          line-height: 25px;
        }

        .guanzhubutton {
          color: black;
          background: #fafafa;
          border-color: #ddd;
          transition-duration: 0.3s;
          width: 100px;
          height: 30px;
          line-height: 28px;
          border-width: 1px;
          border-style: solid;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          box-sizing: border-box;
          outline: none;
          &:hover {
            color: green;
          }
        }
      }
      .wg_end {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 30px;
        img {
          width: 170px;
          height: 16px;
        }
      }
    }
  }
}
</style>
