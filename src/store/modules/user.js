import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  login,
  logout,
  getmyinfo,
  createAdmin,//注册
  getdetailedinfo,
  getmyalbum,
} from '@/api/login'
const user = {
  state: {
    id: 9999,
    // token: getToken(),
    name: '初始值',
    avatar: 'https://image.riba2534.cn/18-12-13/34184894.jpg',
    worknumber:0,
    fans: 0, //粉丝数量
    isrenzheng: false,
    backgroundimgurl:"",
    messagenumber:{
      like:0,
      comment:0,
      collect:0,
      fans:0,
      letter:0,
    },
    follows: 0, //关注数量
    followusers: [
    ], //关注人列表
    userdetails: { //用户详情
    },
    album: [
    ], //专辑
    collectpictures: [ //收藏的图片

    ],
    collectionarticles: [
    ], //收藏的博文
    tars: [], //类别
    nians: [], //年份
    roles: [], //权限
    works: [
    ], //作品
    allworks: [
    ], //作品加博文
    bowen: [
    ] //博文
  },
  mutations: {
    SET_backgroundimgurl:(state,backgroundimgurl) =>{
      state.backgroundimgurl = backgroundimgurl;
    },
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
    SET_album: (state, album) => {
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
    },
    ADD_ablum:(state,abluminfo) =>{
      state.album.push(abluminfo);
    },
    DEL_ablum:(state,index) =>{
      state.album.splice(index,1);
    },
    DEL_collectpictures:(state,index) =>{
      state.collectpictures.splice(index,1);
    },
    DEL_collectionarticles:(state,index) =>{
      state.collectionarticles.splice(index,1);
    },
    DEL_followusers:(state,index) =>{
      state.followusers.splice(index,1);
      state.follows = state.follows-1;
    },
    DEL_messagenumber:(state,type) =>{
      if(type==1){
        console.log(state.messagenumber.like);
        state.messagenumber.like = state.messagenumber.like-1;
        console.log(state.messagenumber.like);
        
      }else if(type==2){
        state.messagenumber.comment--;
      }else if(type==3){
        state.messagenumber.collect--;
      }else if(type==4){
        state.messagenumber.fans--;
      }
    },
    CHANGE_ablum:(state,abluminfo) =>{
      state.album.splice(abluminfo.index,1,abluminfo.newablum);
    },
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
    GetDetailedInfo({commit}){
        return new Promise((resolve, reject) => {
          getdetailedinfo().then(response => {
            let my = response.my;
            let equipment = {};
            let arrayeqs = [];
            // console.log(my.userdetails.myequipment);
            if(my.userdetails.age==10000){
              my.userdetails.age = "保密"
            }
            arrayeqs = my.userdetails.myequipment.split(",");
            // console.log(arrayeqs);
            
            if(arrayeqs.length == 1){
              equipment.secrecy = "保密";
            }else{
              equipment.secrecy = "";
              equipment.camera = arrayeqs[0];
              equipment.mobilephone = arrayeqs[1];
              equipment.downwaterequipment = arrayeqs[2];
              equipment.aerialequipment = arrayeqs[3];
            }
            my.userdetails.equipment = equipment;
            my.category.unshift("全部类别");
            my.nians.unshift("全部年份");
            commit('SET_userdetails',my.userdetails);
            commit('SET_FOLLOWUSERS', my.followusers);
            commit('SET_album', my.album);
            commit('SET_collectpictures', my.collectpictures);
            commit('SET_collectionarticles', my.collectionarticles);
            commit('SET_NIANS', my.nians);
            commit('SET_RARS', my.category);
            commit('SET_allworks', my.works);
            commit('SET_backgroundimgurl',my.user.backgroundimgurl);
            resolve(response);
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
    //增加专辑
    ADDMyAlbum({commit},abluminfo){
      commit('ADD_ablum', abluminfo);
    },
    //删除专辑
    DeleteMyAlbum({commit},index){
        commit('DEL_ablum', index);
    },
    //修改专辑
    CHANGEMyAlbum({commit},abluminfo){
      commit('CHANGE_ablum', abluminfo);
    },
    //从数据库得到专辑
    GETMyAlbum({commit}){
      return new Promise((resolve, reject) => {
        getmyalbum().then((response) => {
          commit('SET_album', response.album);
        }).catch(error => {
          reject(error)
        })
      })
    },
    //删除收藏图片
    DeleteMyCollectPictute({commit},index){
      commit('DEL_collectpictures', index);
    },
    //删除收藏博文
    DeleteMyCollectBowen({commit},index){
      commit('DEL_collectionarticles', index);
    },
    //删除关注
    DeleteMyfollow({commit},index){
      commit('DEL_followusers', index);
    },
    //删除消息Messahe 除开私信
    DeleteMyMessahe({commit},type){
      commit('DEL_messagenumber', type);
    },
  }
}

export default user
