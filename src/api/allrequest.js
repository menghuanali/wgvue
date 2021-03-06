import request from '@/utils/request'

// 得到其他人信息
export function getherinfo(herid) {
    return request({
      url: '/user?herid='+herid,
      method: 'get',
    })
}
export function ceshiping(){
    return request({
        url: '/ceshi',
        method: 'post',
        
    })
}
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
//根据id删除收藏
export function DelCollectByID(id,itid,type){
    return request({
        url:'/delcollectbyid/'+id+"/"+itid+"/"+type,
        method:'get',
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
export function UserReplay(replayinfo){
    return request({
        url:'/replay',
        method:'post',
        data:{
            content:replayinfo.content,
            toid:replayinfo.toid,
            itid:replayinfo.itid,
            type:replayinfo.type,
            title:replayinfo.title,
            toname:replayinfo.toname,
            ownerId:replayinfo.ownerId,
            ownertype:replayinfo.ownertype,
        }
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
export function UserLetter(letterinfo){
    return request({
        url:'/letter',
        method:'post',
        data:{
            content:letterinfo.content,
            toid:letterinfo.toid,
        }
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
//加载一个私信详情
export function GetMessagelettercome(fromid){
    return request({
        url:'/message/lettercome?fromid='+fromid,
        method:'get',
    })
}
//新建专辑
export function CreateAblum(name,describe,isprivate){
    return request({
        url:'/createablum',
        method:'post',
        data:{
            name:name,
            describe:describe,
            isprivate:isprivate,
        }
    })
}
//设置专辑
export function SetAblum(id,name,describe,isprivate){
    return request({
        url:'/setablum',
        method:'post',
        data:{
            id:id,
            name:name,
            describe:describe,
            isprivate:isprivate,
        }
    })
}
//删除专辑
export function DeleteAblum(id){
    return request({
        url:'/deleteablum/'+id,
        method:'get',
    })
}
//收录到专辑
export function AddAblumpicture(Ablumpictureinfo){
    return request({
        url:'/addablumpicture',
        method:'post',
        data:{
            fromalbumid:Ablumpictureinfo.fromalbumid,
            pictureurl:Ablumpictureinfo.pictureurl,
            fromid:Ablumpictureinfo.fromid,
            fromworkid:Ablumpictureinfo.fromworkid,
            picturesort:Ablumpictureinfo.picturesort,
            type:Ablumpictureinfo.type,
            fromworktitle:Ablumpictureinfo.fromworktitle,
        }
    })
}
//判断是否收录
export function IsInclude(id){
    return request({
        url:'/isablumpicture',
        method:'post',
        data:{
            fromworkid:id,
        }
    })
}
//加载一个专辑里面的内容
export function GetOneAblumList(id){
    return request({
        url:'/getoneablumlist/'+id,
        method:'get',
    })
}
//加载一个类别的作品
export function GetOneClassWorks(classif,id){
    return request({
        url:'/getoneclassworks',
        method:'post',
        data:{
            classif:classif,
            id:id,
        }
    })
}
//加载一个年份的作品
export function GetOneNianWorks(nian,id){
    return request({
        url:'/getonenianworks',
        method:'post',
        data:{
            nian:nian,
            id:id,
        }
    })
}
//加载好友动态
export function getDynamic(pageNumber){
    return request({
        url: "/getfollowlist",
        method: "post",
        data: {
        pageNumber: pageNumber,
        // pageSize: 6 //每页查询条数 
        }
    })
}
//加载首页
export function GetIndexData(){
    return request({
        url: "/index/getindex",
        method: "get",
    })
}
//删除一条消息Delete
export function DeleteMsgByid(id){
    return request({
        url: "/message/deletemsg/"+id,
        method: "get",
    })
}
//删除所有关注
export function DeleteMsgFans(id){
    return request({
        url: "/message/deletefansmsg/",
        method: "get",
    })
}
//搜索功能
export function SearchFunction(searchinfo){
    return request({
        url: "/getsearch",
        method: "post",
        data:{
            type:searchinfo.type,
            key:searchinfo.key,
            group:searchinfo.group,
            size:searchinfo.size,
        }
    })
}
//验证昵称是否占用
export function CheckNameFunction(name){
    return request({
        url: "/check/name",
        method: "post",
        data:{
            name:name,
        }
    })
}
//验证旧密码是否正确
export function CheckPasswordFunction(password){
    return request({
        url: "/check/password",
        method: "post",
        data:{
            password:password,
        }
    })
}
//保存更改个人信息
export function ChangeMySelfInfo(myselfinfo){
    return request({
        url: "/changemyinfo",
        method: "post",
        data:{
            name:myselfinfo.name,
            headurl:myselfinfo.headurl,
            qianming:myselfinfo.qianming,
            age:myselfinfo.age,
            email:myselfinfo.email,
            phone:myselfinfo.phone,
            qq:myselfinfo.qq,
        }
    })
}
//修改密码
export function ChangeMyPassword(password){
    return request({
        url: "/changemypass",
        method: "post",
        data:{
            password:password,
        }
    })
}
