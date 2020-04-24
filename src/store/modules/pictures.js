import {} from '@/api/allrequest'
const pictures = {
  state: {
    id: 1,
    authorid: 3,
    authorname: "依米",
    authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
    authorlevel: "摄影乐园一级",
    authorisguanzhu: false,
    authorequipment: "华为 TAS-AL00", //我的装备
    picturslist: [{
        id: 1,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586354782870&di=7815f521e68acb86155f3b60138bb5ba&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908130732_kVXzh.jpeg",
        describe: "这是一张图片的描述1",
        userid: 3,
        workid: 1
      },
      {
        id: 2,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586354782870&di=7815f521e68acb86155f3b60138bb5ba&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908130732_kVXzh.jpeg",
        describe: "这是一张图片的描述2",
        userid: 3,
        workid: 1
      },
      {
        id: 3,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586354782870&di=7815f521e68acb86155f3b60138bb5ba&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908130732_kVXzh.jpeg",
        describe: "这是一张图片的描述3",
        userid: 3,
        workid: 1
      },
      {
        id: 4,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586354782870&di=7815f521e68acb86155f3b60138bb5ba&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908130732_kVXzh.jpeg",
        describe: "这是一张图片的描述4",
        userid: 3,
        workid: 1
      },
      {
        id: 5,
        url: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        describe: "这是一张图片的描述5",
        userid: 3,
        workid: 1
      },
    ],
    title: "我爱您，可惜没有如果，那么多如果，只剩下结果",
    content: "莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
    time: "2月7日",
    classification: "风景", //分类
    seenumber: 123,
    writenumber: 456,
    goodnumber: 789,
    imgnumber: 20,
    isgood: false,
    iscollect: false,
    label: "自然,和谐,民族,Love",
    commentstime1: [ //时间正序
      {
        id: '1', //主键id
        date: '2018-07-05 08:30', //评论时间
        ownerId: 'talents100020', //文章的id
        fromId: 'errhefe232213', //评论者id
        fromName: '犀利的评论家', //评论者昵称
        fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
        likeNum: 3, //点赞人数
        content: '非常靠谱的程序员', //评论内容
        reply: [ //回复，或子评论
          {
            id: '345231244545', //主键id
            commentId: 'comment0001', //父评论id，即父亲的id
            fromId: 'observer223432', //评论者id
            fromName: '夕阳红', //评论者昵称
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
            toId: 'errhefe232213', //被评论者id
            toName: '犀利的评论家', //被评论者昵称
            toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //被评论者头像
            content: '赞同，很靠谱，水平很高', //评论内容
            date: '2018-07-05 08:35' //评论时间
          },
          {
            id: '2',
            commentId: 'comment0001',
            fromId: 'observer567422',
            fromName: '清晨一缕阳光',
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
            toId: 'observer223432',
            toName: '夕阳红',
            toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
            content: '大神一个！',
            date: '2018-07-05 08:50'
          }
        ]
      },
      {
        id: '2',
        date: '2018-07-05 08:30',
        ownerId: 'talents100020',
        fromId: 'errhefe232213',
        fromName: '毒蛇郭德纲',
        fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
        likeNum: 0,
        content: '从没见过这么优秀的人',
        reply: []
      }
    ],
    commentstime2: [ //时间倒叙
      {
        id: '1', //主键id
        date: '2018-07-05 08:30', //评论时间
        ownerId: 'talents100020', //文章的id
        fromId: 'errhefe232213', //评论者id
        fromName: '时间倒叙', //评论者昵称
        fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
        likeNum: 3, //点赞人数
        content: '非常靠谱的程序员', //评论内容
        reply: [ //回复，或子评论
          {
            id: '345231244545', //主键id
            commentId: 'comment0001', //父评论id，即父亲的id
            fromId: 'observer223432', //评论者id
            fromName: '时间倒叙', //评论者昵称
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
            toId: 'errhefe232213', //被评论者id
            toName: '时间倒叙', //被评论者昵称
            toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //被评论者头像
            content: '赞同，很靠谱，水平很高', //评论内容
            date: '2018-07-05 08:35' //评论时间
          },
          {
            id: '2',
            commentId: 'comment0001',
            fromId: 'observer567422',
            fromName: '时间倒叙',
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
            toId: 'observer223432',
            toName: '夕阳红',
            toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
            content: '大神一个！',
            date: '2018-07-05 08:50'
          }
        ]
      },
      {
        id: '2',
        date: '2018-07-05 08:30',
        ownerId: 'talents100020',
        fromId: 'errhefe232213',
        fromName: '时间倒叙',
        fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
        likeNum: 0,
        content: '从没见过这么优秀的人',
        reply: []
      }
    ],
    commentsonlyzuthor:[
        {
            id: '1', //主键id
            date: '2018-07-05 08:30', //评论时间
            ownerId: 'talents100020', //文章的id
            fromId: 'errhefe232213', //评论者id
            fromName: '只有作者', //评论者昵称
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
            likeNum: 3, //点赞人数
            content: '非常靠谱的程序员', //评论内容
            reply: [ //回复，或子评论
              {
                id: '345231244545', //主键id
                commentId: 'comment0001', //父评论id，即父亲的id
                fromId: 'observer223432', //评论者id
                fromName: '只有作者', //评论者昵称
                fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
                toId: 'errhefe232213', //被评论者id
                toName: '犀利的评论家', //被评论者昵称
                toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //被评论者头像
                content: '赞同，很靠谱，水平很高', //评论内容
                date: '2018-07-05 08:35' //评论时间
              },
              {
                id: '2',
                commentId: 'comment0001',
                fromId: 'observer567422',
                fromName: '清晨一缕阳光',
                fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
                toId: 'observer223432',
                toName: '夕阳红',
                toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
                content: '大神一个！',
                date: '2018-07-05 08:50'
              }
            ]
          },
          {
            id: '2',
            date: '2018-07-05 08:30',
            ownerId: 'talents100020',
            fromId: 'errhefe232213',
            fromName: '只有作者',
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
            likeNum: 0,
            content: '从没见过这么优秀的人',
            reply: []
          }
    ]
  },
  mutations: {
    SET_authorisguanzhu: (state, authorheadurl) => {
      state.authorisguanzhu = authorheadurl;
    },
    SET_isgood: (state, isgood) => {
      state.isgood = isgood;
    },
    SET_iscollect: (state, iscollect) => {
      state.iscollect = iscollect;
    },
    SET_goodnumber: (state, goodnumber) => {
      state.goodnumber = goodnumber;
    }
  },
  actions: {
    Setauthorisguanzhu({
      commit
    }, authorheadurl) {
      commit('SET_authorisguanzhu', authorheadurl);
    },
    Setisgood({
      commit,
      state
    }, isgood) {
      commit('SET_isgood', isgood);
      if (isgood) {
        commit('SET_goodnumber', state.goodnumber + 1);
      } else {
        commit('SET_goodnumber', state.goodnumber - 1);
      }
    },
    Setiscollectzuoping({
      commit
    }, iscollect) {
      commit('SET_iscollect', iscollect);
    }

  }

}
export default pictures
