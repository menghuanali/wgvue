//模拟评论数据
const monicommentdata = {
    status: "成功",
    code: 200,
    data: [
      {
        id: '1', //主键id
        date: '2018-07-05 08:30',  //评论时间
        ownerId: 'talents100020', //文章的id
        fromId: 'errhefe232213',  //评论者id
        fromName: '犀利的评论家',   //评论者昵称
        fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
        likeNum: 3, //点赞人数
        content: '非常靠谱的程序员',  //评论内容
        reply: [  //回复，或子评论
          {
            id: '345231244545',  //主键id
            commentId: 'comment0001',  //父评论id，即父亲的id
            fromId: 'observer223432',  //评论者id
            fromName: '夕阳红',  //评论者昵称
            fromAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg', //评论者头像
            toId: 'errhefe232213',  //被评论者id
            toName: '犀利的评论家',  //被评论者昵称
            toAvatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',  //被评论者头像
            content: '赞同，很靠谱，水平很高',  //评论内容
            date: '2018-07-05 08:35'   //评论时间
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
    ]
  };
  
  export default monicommentdata
