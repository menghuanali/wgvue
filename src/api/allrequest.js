import request from '@/utils/request'

// 得到其他人信息
export function getherinfo(herid) {
    return request({
      url: '/user?herid='+herid,
      method: 'get',
    })
}
//点赞作品
export function followher(itid,myid){
    return request({
      //后端验证token和提供的myid是否一致
      url: '/addgood?myid='+myid+"&itid="+itid,
      method:'get',
    })
  }
//上传作品
export function upzuoping(file){
    return request({
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        url: '/uploadz',
        method:'post',
        data:{
            "file":file,
            // workinfo
        },
       
        transformRequest: [function (data) {
            console.log(data);
            
            console.log(data[0]);
            console.log(data[1]);
            // var formData = new FormData();
            // formData.append('file',data.file);
            // formData.append('workinfo',data.workinfo);
            return formData;
          }],
    })
}

export function ceshiping(){
    return request({
        url: '/ceshi',
        method: 'post',
        
    })
}

    // axios.get("http://localhost:8090/ceshi",{headers:{'Aitutoken': getToken()}}).then( res => {
    //                 // console.log(res)
    //             }).catch( res => {
    //                 console.log(res)
    //             })
//加载一个博文 
export function GetOneBoWen(bowenid){
    return request({
        url: 'getonebowen',
        method:'post',
        data:{
            "bowenid":bowenid
        }
    })
}
//点赞
export function UserPointLike(type,itid){
    return request({
        url:'/goodlike/'+type+'/'+itid,
        method:'get'
    })
}
//收藏 
export function UserCollect(type,itid){
    return request({
        url:'/collect/'+type+'/'+itid,
        method:'get'
    })
}
//评论
export function UserComment(type,itid){
    return request({
        url:'/comment/'+type+'/'+itid,
        method:'get'
    })
}
//回复
export function UserReplay(itid){
    return request({
        url:'/replay/'+itid,
        method:'get'
    })
}
//关注
export function UserFans(itid){
    return request({
        url:'/fans/'+itid,
        method:'get'
    })
}
//私信
export function UserLetter(itid){
    return request({
        url:'/fans/'+itid,
        method:'get'
    })
}
//Message
export function GetMessagelike(){
    return request({
        url:'/message/like',
        method:'get'
    })
}
export function GetMessagecomment(){
    return request({
        url:'/message/comment',
        method:'get'
    })
}
export function GetMessagefans(){
    return request({
        url:'/message/fans',
        method:'get'
    })
}
export function GetMessagecollect(){
    return request({
        url:'/message/collect',
        method:'get'
    })
}
export function GetMessageletter(){
    return request({
        url:'/message/letter',
        method:'get'
    })
}
export function GetMessagelettercome(fromid){
    return request({
        url:'/message/lettercome?fromid='+fromid,
        method:'get',
    })
}