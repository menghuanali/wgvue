import { getherinfo} from '@/api/allrequest'
const her = {
    state: {
      id:64753241,
      name: 'True',
      avatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
      backgroundurl:'https://static.runoob.com/images/demo/demo2.jpg',
      follows: 10,//关注数量
      followusers:[
        {
          id:1,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        },
        {
          id:2,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        },      {
          id:3,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        },
        {
          id:4,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        },
        {
          id:5,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        },
        {
          id:6,
          herheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          hername:"星星依米",
        }
      ],//关注人列表 可以装id
      fans: 57,//粉丝数量
      isguanzhu: false,//用户是否关注
      herdetails:{//用户详情
        integral:194,//积分
        grade:"摄影乐园二级",//等级
        place:"香港特别行政区香港岛",//居住地
        age:110,//年龄
        email:"1441471911@qq.com",
        phone:"保密",
        qq:"保密",
        equipment:{
          camera:"相机",
          mobilephone:"手机",
          downwaterequipment:"水下设备",
          aerialequipment:"航拍设备",
        },//装备
        personalstatement:"个人说明谁的青春不迷茫",
      },
      album:[
        {
          id:1,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          title:"默认专辑",
          describe:"这是专辑的描述！",
          picturesnumber:12,
        },
        {
          id:2,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",

          title:"哈哈哈",
          describe:"这是专辑的描述！",
          picturesnumber:12,
        },
        {
          id:3,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",

          title:"测试2",
          describe:"这是专辑的描述！",
          picturesnumber:12,
        }
        ],//专辑
      collectpictures:[//收藏的图片
        {
          id:1,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:1,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:2,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:3,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:3,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:3,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:4,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:3,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:5,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:3,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:6,
          // coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610492&di=83c160d89f06b81bdd9cea8f870cf6a3&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350",
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          authorid:3,
          authorheadurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
          authorname:"大卫Data",
          picturesnumber:39,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        }
      ],
      collectionarticles:[
        {
          id:1,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          content:"怎么才能登陆火星呢?",
          seenumber:123,
          collectnumber:456
        },
        {
          id:2,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          content:"怎么才能登陆火星呢?",
          seenumber:123,
          collectnumber:456
        },
        {
          id:3,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          content:"怎么才能登陆火星呢?",
          seenumber:123,
          collectnumber:456
        },
        {
          id:4,
          coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
          title:"我是标题kiss我爱您，真的，比珍珠还真的你相信我",
          content:"怎么才能登陆火星呢?",
          seenumber:123,
          collectnumber:456
        }
      ],//收藏的博文
      tars:['文字按钮1','文字按钮2','文字按钮3','文字按钮4','文字5','文字按钮6','文字按钮7'],//类别
      nians:['2020','2019','2018'],//年份
      works:[
        {
          id:1,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:2,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:4,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:5,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:6,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:7,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        }
      ],//作品
      allworks:[
        {
          id:1,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:2,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:3,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:true,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:4,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:5,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:6,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:7,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:false,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:8,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:true,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        }
      ],//作品加博文
      bowen:[
        {
          id:3,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:true,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        },
        {
          id:8,
          coverimgurl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          isbowen:true,
          time:"2020年4月1日",
          title:"我是标题kiss我爱您，真的，比珍珠还真",
          tars:["写真","美女","美食","我要上封面"],
          seenumber:123,
          writenumber:456,
          goodnumber:789
        }
      ]//博文
    },
    mutations: {
      // SET_userdetails:(state,userdetails) =>{
      //   state.userdetails = userdetails;
      // },
      // SET_id:(state,id) =>{
      //   state.id = id;
      // },
      // SET_albun:(state,album) =>{
      //   state.album = album;
      // },
      // SET_collectionarticles: (state,collectionarticles) =>{
      //   state.collectionarticles = collectionarticles;
      // },
      // SET_collectpictures: (state,collectpictures) =>{
      //   state.collectpictures = collectpictures;
      // },
      // SET_allworks: (state,allworks) =>{
      //   state.allworks = allworks;
      // },
      // SET_WORKS: (state,works) =>{
      //   state.works = works;
      // },
      // SET_BOWEN: (state,bowen) =>{
      //   state.bowen = bowen;
      // },
      // SET_FOLLOWUSERS: (state,followusers) =>{
      //   state.followusers = followusers;
      // },
      // SET_NAME: (state, name) => {
      //   console.log(name);
        
      //   state.name = name
      // },
      // SET_AVATAR: (state, avatar) => {
      //   state.avatar = avatar
      // },
      // SET_FOLLOWS: (state, follows) => {
      //   state.follows = follows
      // },
      // SET_FANS: (state, fans) => {
      //   state.fans = fans
      // },
      // SET_isguanzhu: (state, isguanzhu) =>{
      //   state.isguanzhu = isguanzhu
      // },
      // SET_RARS:(state,tars) =>{
      //   state.tars = tars;
      // },
      // SET_NIANS:(state,nians) =>{
      //   state.nians = nians;
      // }
    },
    actions: {
      GetHerInfo({commit},herid){
        return new Promise((resolve, reject) =>{
          getherinfo(herid).then((response) =>{
            console.log("查看别人的信息返回");
            
              console.log(response);
              //处理her.js
              resolve(response)
          }).catch((error) =>{
            reject(error)
          })
        })
      }
    }
  }
  
  export default her