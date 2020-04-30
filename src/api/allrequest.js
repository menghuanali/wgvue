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
//加载一个作品
export function GetOneWork(workid){
    return request({
        url: 'getonework',
        method:'post',
        data:{
            "workid":workid
        }
    })
}
//点赞
export function UserLike(likeModel){
    return request({
        url:'/goodlike',
        method:'post',
        data:{
            toid:likeModel.toid,
            itid:likeModel.itid,
            title:likeModel.title,
            type:likeModel.type
        },
    })
}
//收藏 
export function UserCollect(collectModel){
    return request({
        url:'/collect',
        method:'post',
        data:{
            toid:collectModel.toid,
            itid:collectModel.itid,
            title:collectModel.title,
            type:collectModel.type
        },
        headers : {"Content-Type" : "application/json;charset=utf-8"},
    })
}
//评论
export function UserComment(commentinfo){
    return request({
        url:'/comment',
        method:'post',
        data:{
            toid:commentinfo.toid,
            itid:commentinfo.itid,
            title:commentinfo.title,
            type:commentinfo.type,
            content:commentinfo.content
        },
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
        method:'get',
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