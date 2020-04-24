import Mock from 'mockjs';// https://blog.csdn.net/caimaomaocai/article/details/83656464
//https://www.jianshu.com/p/8389c285115c
import Mydata from "./mydata.js"
import { removeToken } from '@/utils/auth'

    //登录
    Mock.mock('http://localhost:8090/admin/login','post',() => {
        // console.log(Mydata.data1);
        
        return Mydata.data1;
    });
    //退出登陆
    Mock.mock('http://localhost:8090/admin/logout','get',() =>{
      const outdata = {
        code:200,
            message : "退出成功"
      }
      return outdata;
    });
    //获取其他用户信息
    Mock.mock(/^http:\/\/localhost:8090\/user\?herid=\d+$/,'get',() => {
      let data = {
        code:200,
        message:"成功"
      }
      return data;
    });
    //注册
    Mock.mock("http://localhost:8090/admin/register",'post',() =>{
      let data = {
        code:200,
        message:"注册成功",
        token:"125478"
      }
      return data;
    });
//好友动态初始
    Mock.mock("http://localhost:8090/getfollowlist",'post',() =>{
      
      let data = {
        code:200,
        message:"成功",
        data:{
          list:[
            {
              id:1,
              coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
              userid:2,
              name:"依米",
              headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
              time:"2月7日",
              seenumber:123,
              writenumber:456,
              goodnumber:789,
              title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
              content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
              isbowen:true,
              imgnumber:0
            },
            {
              id:2,
              coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586272230934&di=612a45711bd399eccb1fc4d3e99f594e&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F86d6277f9e2f07085d8dbe9feb24b899a801f2a1.jpg",
              userid:2,
              name:"依米",
              headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
              time:"2月7日",
              seenumber:123,
              writenumber:456,
              goodnumber:789,
              title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
              content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
              isbowen:false,
              imgnumber:12
            },
            {
              id:3,
              coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
              userid:2,
              name:"依米",
              headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
              time:"2月7日",
              seenumber:123,
              writenumber:456,
              goodnumber:789,
              title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
              content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
              isbowen:false,
              imgnumber:20
            },
            {
              id:4,
              coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
              userid:2,
              name:"依米",
              headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
              time:"2月7日",
              seenumber:123,
              writenumber:456,
              goodnumber:789,
              title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
              content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
              isbowen:false,
              imgnumber:12
            },
            {
              id:5,
              coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
              userid:2,
              name:"依米",
              headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
              time:"2月7日",
              seenumber:123,
              writenumber:456,
              goodnumber:789,
              title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
              content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
              isbowen:true,
              imgnumber:0
            }
          ]
        }
      }
      return data;
    });
//增加好友动态
    Mock.mock("http://localhost:8090/addfollowlist",'post',() =>{
      console.log("捕获");
      let data = {
        code : 200,
        message:"成功",
        data:[
          {
            id:6,
            coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
            name:"依米",
            headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
            time:"2月7日",
            seenumber:123,
            writenumber:456,
            goodnumber:789,
            title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
            content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
            isbowen:false,
          },
          {
            id:7,
            coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
            name:"依米",
            headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
            time:"2月7日",
            seenumber:123,
            writenumber:456,
            goodnumber:789,
            title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
            content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
            isbowen:false,
          },
          {
            id:8,
            coverimgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585840610491&di=78aaa0ba16185710ab9cfe1547d1b475&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
            name:"依米",
            headurl:"https://image.riba2534.cn/18-12-13/34184894.jpg",
            time:"2月7日",
            seenumber:123,
            writenumber:456,
            goodnumber:789,
            title:"我爱您，可惜没有如果，那么多如果，只剩下结果",
            content:"莫斯科大学以师资雄厚、设备完善、高教学质量和高学术水准而享誉世界 ，截止2018年12月，莫斯科大学共有13人获得诺贝尔奖 。",
            isbowen:false,
          }
        ]

      }
      return data;
    });
    Mock.mock("http://localhost:8090/myinfo",'get',() =>{
      let data = {
        code : 200,
        data : {
          name:"改变值"
        }
      }
      return data;
    });


