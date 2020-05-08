<template>
  <div class="container">
    <!-- 添加文章的评论区 -->
    <div class="add-new-comment">
      <img class="avatar" :src="this.$store.getters.my_avatar" width="36" height="36" />
      <div class="input-wrapper">
        <el-input
          v-model="AddNewComment"
          type="textarea"
          :rows="5"
          placeholder="写下你的评论"
          @input="changenewbtn"
        ></el-input>
        <div class="btn-control">
          <span class="cancel" @click="cancelnewcomment">取消</span>
          <el-button
            class="btn"
            type="success"
            round
            @click="commitnewComment"
            :disabled="newConfirm"
          >确定</el-button>
        </div>
      </div>
    </div>
    <!-- 评论详情头 -->
    <div class="commenthead">
      <div class="left">
        <div class="line"></div>
        <div class="all">所有评论</div>
        <div class="allnumber">{{ComMents.length}}</div>
        <el-button
          size="mini"
          round
          :loading="onlywatchautor"
          @click="onlyloadautor"
          style="margin-left:10px;height:25px"
        >只看作者</el-button>
      </div>
      <div class="right">
        <div
          :class="[isActive?'active':'disActive']"
          @click="timenegative"
          style="margin-right: 10px;"
        >按时间倒序</div>
        <div :class="[isActive?'disActive':'active']" @click="timepositive">按时间正序</div>
      </div>
    </div>
    <div class="comment" v-for="item in ComMents" :key="item.id">
      <div class="info">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36" @click.stop="showherinfo(item.fromId)" style="cursor: pointer;"/>
        <div class="right">
          <div class="name" @click.stop="showherinfo(item.fromId)" style="cursor: pointer;">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <!-- <span class="like" :class="{active: item.islike}" @click="likeClick(item)">

          <span>{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>-->
        <span class="comment-reply" @click="showCommentInput(item)">
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="(reply,index) in item.replyModelList" :key="index">
          <div class="reply-content">
            <span class="from-name" @click.stop="showherinfo(reply.fromId)" style="cursor: pointer;">{{reply.fromName}}</span>
            <span>:</span>
            <span class="to-name" @click.stop="showherinfo(reply.toId)" style="cursor: pointer;">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <span>回复</span>
            </span>
          </div>
        </div>
        <div
          class="write-reply"
          v-if="item.replyModelList.length > 0"
          @click="showCommentInput(item)"
        >
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新回复</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input
              v-model="inputComment"
              type="textarea"
              :rows="5"
              autofocus
              placeholder="写下你的回复"
              @input="smallcommentchange"
            ></el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button
                class="btn"
                type="success"
                round
                @click="commitComment"
                :disabled="commentConfirm"
              >确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { Message } from "element-ui";
import { UserComment, UserReplay } from "@/api/allrequest";
export default {
  props: {
    commentszheng: {
      type: Array,
      required: true
    },
    commentsdao: {
      type: Array,
      required: true
    },
    commentszuo: {
      type: Array,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: [],
      inputComment: "",
      showItemId: "",
      AddNewComment: "",
      newConfirm: true,
      commentConfirm: true,
      onlywatchautor: false,
      isActive: false,
      replayinfo: {}
    };
  },
  computed: {
    ComMents() {
      return this.comments;
    },
    token() {
      return getToken();
    }
  },
  created() {
    this.comments = this.commentszheng;
    // console.log(this.comments);
  },
  methods: {
    /**
     * 点赞
     */
    // likeClick(item) {
    //   console.log(item);
    //   if (item.islike) {
    //     item.likeNum--;
    //   } else {
    //     item.likeNum++;
    //   }
    //   item.islike = !item.islike;
    // },

    /**
     * 点击取消按钮
     */
     //跳转到他人界面
    showherinfo(id) {
      this.$router.push({
        path: "/user",
        query: { id: id }
      });
    },
    cancel() {
      this.showItemId = "";
    },
    /**
     * 点击取消新评论的按钮
     */
    cancelnewcomment() {
      this.AddNewComment = "";
    },
    /**
     * 提交回复 只有两种情况 是回复评论还是回复回复
     */
    commitComment() {
      if (
        this.token == "undefined" ||
        !this.token ||
        !/[^\s]/.test(this.token)
      ) {
        this.$message.error("请先登陆哦");
        return;
      }
      this.replayinfo.content = this.inputComment;
      this.replayinfo.ownerId = this.info.itid;//作品或者文章的id
       this.replayinfo.ownertype = this.info.type;//作品或者文章
      console.log(this.inputComment);
      UserReplay(this.replayinfo)
        .then(response => {
          Message.success({
            message: response.message,
            center: true
          });
          let newreplay = {};
          newreplay.id = response.replaytid;
          newreplay.commentId = this.showItemId;
          newreplay.fromId = this.$store.getters.my_id;
          newreplay.fromName = this.$store.getters.my_name;
          newreplay.fromAvatar = this.$store.getters.my_avatar;
          newreplay.toId = this.replayinfo.toid;
          newreplay.toName = this.replayinfo.toname;
          newreplay.content = this.replayinfo.content;
          newreplay.date = new Date().Format("yyyy-MM-dd HH:mm:ss");
          console.log(newreplay);
          console.log(this.comments);
          for (let i = 0; i < this.commentszheng.length; i++) {
            if (this.commentszheng[i].id == this.showItemId) {
              this.commentszheng[i].replyModelList.push(newreplay);
            }
          }
          console.log(this.comments);
          i = 0;
          // let i = 0;不起作用的 注意坑
          for (let i = 0; i < this.commentsdao.length; i++) {
            if (this.commentsdao[i].id == this.showItemId) {
              this.commentsdao[i].replyModelList.push(newreplay);
            }
          }
          console.log(this.comments);
          i = 0;
          for (let i = 0; i < this.commentszuo.length; i++) {
            if (this.commentszuo[i].id == this.showItemId) {
              this.commentszuo[i].replyModelList.push(newreplay);
            }
          }
          console.log(this.comments);
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * 提交新的大评论
     */
    commitnewComment() {
      if (
        this.token == "undefined" ||
        !this.token ||
        !/[^\s]/.test(this.token)
      ) {
        this.$message.error("请先登陆哦");
        return;
      }
      this.info.content = this.AddNewComment;
      console.log(this.AddNewComment);
      UserComment(this.info)
        .then(response => {
          Message.success({
            message: response.message,
            center: true
          });
          let newcomment = {};
          newcomment.id = response.commentid;
          newcomment.ownerId = this.info.itid;
          newcomment.fromId = this.$store.getters.my_id;
          newcomment.fromName = this.$store.getters.my_name;
          newcomment.fromAvatar = this.$store.getters.my_avatar;

          newcomment.date = new Date().Format("yyyy-MM-dd HH:mm:ss");
          newcomment.content = this.AddNewComment;
          newcomment.replyModelList = [];

          this.commentszheng.push(newcomment);
          this.commentsdao.unshift(newcomment);
          if (this.info.itid == this.$store.getters.my_id) {
            this.commentszuo.push(newcomment);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      this.replayinfo = {};
      if (reply == "undefined" || !reply) {
        //回复的是评论
        this.replayinfo.toid = item.fromId;
        this.replayinfo.itid = item.id; 
        this.replayinfo.type = 1;
        this.replayinfo.title = this.info.title;
        this.replayinfo.toname = item.fromName;
      } else {
        //回复的是回复
        this.replayinfo.toid = reply.fromId;
        this.replayinfo.itid = reply.id;
        this.replayinfo.type = 2;
        this.replayinfo.title = this.info.title;
        this.replayinfo.toname = reply.fromName;
      }
      if (reply) {
        this.inputComment = "@" + reply.fromName + " ";
      } else {
        this.inputComment = "";
      }
      this.showItemId = item.id; //可以看作评论的id
    },
    // 改变提交按钮状态
    changenewbtn() {
      if (this.AddNewComment == "") {
        this.newConfirm = true;
      } else {
        this.newConfirm = false;
      }
    },
    smallcommentchange() {
      if (this.inputComment == "") {
        this.commentConfirm = true;
      } else {
        this.commentConfirm = false;
      }
    },
    // 只看作者
    onlyloadautor() {
      this.onlywatchautor = !this.onlywatchautor;
      this.comments = this.commentszuo;
      this.onlywatchautor = !this.onlywatchautor;
    },
    // 时间正序
    timepositive() {
      this.isActive = !this.isActive;
      this.comments = this.commentszheng;
    },
    // 时间倒叙
    timenegative() {
      this.isActive = !this.isActive;
      this.comments = this.commentsdao;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 10px;
  box-sizing: border-box;
  width: 82%;
  margin-left: 9%;
  .add-new-comment {
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 40px 0;
    .avatar {
      border-radius: 50%;
    }
    .input-wrapper {
      width: 100%;
      padding-left: 10px;
      .btn-control {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 10px;
        .cancel {
          font-size: 16px;
          color: #606266;
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #333;
          }
        }
        .confirm {
          font-size: 16px;
        }
      }
    }
  }
  .commenthead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 25px;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      .line {
        width: 5px;
        height: 100%;
        min-height: 20px;
        background-color: rgb(233, 67, 67);
        margin-left: 10px;
      }
      .all {
        margin-left: 10px;
        font-size: 20px;
      }
      .allnumber {
        margin-left: 10px;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      .active {
        color: #e27121;
      }
      .disactive {
        color: black;
      }
    }
  }
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #f2f6fc;
    .info {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: #303133;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 12px;
          color: #909399;
        }
      }
    }
    .content {
      font-size: 16px;
      color: #303133;
      line-height: 20px;
      padding: 10px 0;
    }
    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #909399;
      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          color: #e20341;
        }
      }
      .active {
        color: #e20341;
      }
      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: #333;
        }
      }
    }
    .reply {
      margin: 10px 0;
      border-left: 2px solid #dcdfe6;
      .item {
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px dashed #ebeef5;
        .reply-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #303133;
          .from-name {
            color: #409eff;
          }
          .to-name {
            color: #409eff;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 12px;
          color: #909399;
          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .write-reply {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #909399;
        padding: 10px;
        cursor: pointer;
        &:hover {
          color: #303133;
        }
        .el-icon-edit {
          margin-right: 5px;
        }
      }
      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .input-wrapper {
        padding: 10px;
        .btn-control {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 10px;
          .cancel {
            font-size: 16px;
            color: #606266;
            margin-right: 20px;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
          .confirm {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
