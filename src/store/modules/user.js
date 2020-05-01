import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  login,
  logout,
  getmyinfo,
  createAdmin
} from '@/api/login'
import {
  ceshiping
} from "@/api/allrequest";
const user = {
  state: {
    id: 64753241,
    // token: getToken(),
    name: '初始值',
    avatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
    worknumber:0,
    messagenumber:{
      like:0,
      comment:0,
      collect:0,
      fans:0,
      letter:0,
    },
    follows: 10, //关注数量
    followusers: [{
        id: 1,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      },
      {
        id: 2,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      }, {
        id: 3,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      },
      {
        id: 4,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      },
      {
        id: 5,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      },
      {
        id: 6,
        herheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        hername: "星星依米",
      }
    ], //关注人列表 可以装id
    fans: 0, //粉丝数量
    isrenzheng: false,
    userdetails: { //用户详情
      integral: 194, //积分
      grade: "摄影乐园二级", //等级
      place: "香港特别行政区香港岛", //居住地
      age: 110, //年龄
      email: "1441471911@qq.com",
      phone: "15881614775",
      qq: "45145214",
      equipment: {
        camera: "相机",
        mobilephone: "手机",
        downwaterequipment: "水下设备",
        aerialequipment: "航拍设备",
      }, //装备
      personalstatement: "个人说明谁的青春不迷茫",
    },
    album: [{
        id: 1,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        isdefault: true,
        iskeyed: true,
        title: "默认专辑",
        describe: "这是专辑的描述！",
        picturesnumber: 12,
      },
      {
        id: 2,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        isdefault: false,
        iskeyed: true,
        title: "哈哈哈",
        describe: "这是专辑的描述！",
        picturesnumber: 12,
      },
      {
        id: 3,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        isdefault: false,
        iskeyed: false,
        title: "测试2",
        describe: "这是专辑的描述！",
        picturesnumber: 12,
      }
    ], //专辑
    collectpictures: [ //收藏的图片
      {
        id: 1,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 1,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 2,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 3,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 3,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 3,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 4,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 3,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 5,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 3,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 6,
        // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        authorid: 3,
        authorheadurl: "https://image.riba2534.cn/18-12-13/34184894.jpg",
        authorname: "大卫Data",
        picturesnumber: 39,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      }
    ],
    collectionarticles: [{
        id: 1,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        content: "怎么才能登陆火星呢?", //这是简介
        seenumber: 123,
        collectnumber: 456
      },
      {
        id: 2,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        content: "怎么才能登陆火星呢?", //这是简介
        seenumber: 123,
        collectnumber: 456
      },
      {
        id: 3,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        content: "怎么才能登陆火星呢?", //这是简介
        seenumber: 123,
        collectnumber: 456
      },
      {
        id: 4,
        coverimgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
        title: "我是标题kiss我爱您，真的，比珍珠还真的你相信我",
        content: "怎么才能登陆火星呢?", //这是简介
        seenumber: 123,
        collectnumber: 456
      }
    ], //收藏的博文
    tars: ['文字按钮1', '文字按钮2', '文字按钮3', '文字按钮4', '文字5', '文字按钮6', '文字按钮7'], //类别
    nians: ['2020', '2019', '2018'], //年份
    roles: [], //权限
    works: [{
        id: 1,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 2,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 4,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 5,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 6,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 7,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      }
    ], //作品
    allworks: [{
        id: 1,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 2,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 3,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: true,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 4,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 5,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 6,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 7,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: false,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 8,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: true,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      }
    ], //作品加博文
    bowen: [{
        id: 3,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: true,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      },
      {
        id: 8,
        coverimgurl: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        isbowen: true,
        time: "2020年4月1日",
        title: "我是标题kiss我爱您，真的，比珍珠还真",
        tars: ["写真", "美女", "美食", "我要上封面"],
        seenumber: 123,
        writenumber: 456,
        goodnumber: 789
      }
    ] //博文
  },
  mutations: {
    SET_worknumber:(state,worknumber) =>{
        state.worknumber = worknumber;
    },
    SET_messagenumber:(state,messagenumber) =>{
      state.messagenumber.like = messagenumber.like;
      state.messagenumber.comment = messagenumber.comment;
      state.messagenumber.collect = messagenumber.collect;
      state.messagenumber.fans = messagenumber.fans;
      state.messagenumber.letter = messagenumber.letter;
    },
    SET_userdetails: (state, userdetails) => {
      state.userdetails = userdetails;
    },
    SET_id: (state, id) => {
      state.id = id;
    },
    SET_albun: (state, album) => {
      state.album = album;
    },
    SET_collectionarticles: (state, collectionarticles) => {
      state.collectionarticles = collectionarticles;
    },
    SET_collectpictures: (state, collectpictures) => {
      state.collectpictures = collectpictures;
    },
    SET_allworks: (state, allworks) => {
      state.allworks = allworks;
    },
    SET_WORKS: (state, works) => {
      state.works = works;
    },
    SET_BOWEN: (state, bowen) => {
      state.bowen = bowen;
    },
    SET_FOLLOWUSERS: (state, followusers) => {
      state.followusers = followusers;
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_FOLLOWS: (state, follows) => {
      state.follows = follows
    },
    SET_FANS: (state, fans) => {
      state.fans = fans
    },
    SET_ISRENZHENG: (state, isrenzheng) => {
      state.isrenzheng = isrenzheng
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_RARS: (state, tars) => {
      state.tars = tars;
    },
    SET_NIANS: (state, nians) => {
      state.nians = nians;
    }
  },
  actions: {
    // 登录   commit是一个与store具有相同方法属性 的对象默认的
    Login({
      commit
    }, userInfo) {
      const username = userInfo.username.trim()
      //https://www.jianshu.com/p/3023a9372e5f Promise学习
      /*
      resolve代表成功 reject失败 都是一个函数
      下面那个小写开头的login是@/api/login里面的函数
      then中有2个参数，第一个参数是状态变为成功后应该执行的回调函数，第二个参数是状态变为失败后应该执行的回调函数。
      */
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const tokenStr = response.token;
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr) //SET_TOKEN 是mutations中的函数名字
          resolve(response)
        }).catch(error => {
          console.log("use.js报错");
          reject(error)
        })
      })
    },
    //注册
    Register({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        createAdmin(userInfo).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    // 获取用户信息 state是上面的user的信息 内部使用
    GetMyInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getmyinfo().then(response => {
          let msg = {};
          msg.like = response.likenumber;
          msg.comment = response.commentnumber;
          msg.collect = response.collectnumber;
          msg.fans = response.fansnumber;
          msg.letter = response.letternumber;
          commit('SET_messagenumber',msg);
          commit('SET_NAME', response.name)
          commit('SET_FOLLOWS', response.follows)
          commit('SET_ISRENZHENG', response.isrenzheng)
          commit('SET_AVATAR', response.avatar)
          commit('SET_FANS', response.fans)
          commit('SET_id', response.id)
          commit('SET_worknumber', response.worknumber)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then((response) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
  }
}

export default user
