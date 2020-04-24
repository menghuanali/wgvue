import { getfollowlist,addfollowslist} from '@/api/allrequest'
const follows = {
    state: {
        list:[]
    },
    mutations:{
         SET_LIST:(state,list) =>{
             state.list = list;
         },
          SET_listadd:(state,o) =>{
              state.list.push(o);
          },
    },
    actions:{
        GetFollowsList({ commit },followinfo){
            return new Promise((resolve, reject) =>{
                getfollowlist(followinfo.myid,followinfo.start,followinfo.size).then((response) =>{
                    let data = response.data.list;
                   commit('SET_LIST', data);
                    resolve(response)
                }).catch((error) =>{ reject(error)})
            })
        },
        AddFollowList({commit},followinfo){
            return new Promise((resolve, reject) =>{
                addfollowslist(myid,start,size).then((response) =>{
                    let templist = response.date.list;
                    console.log("增加好友");
                    
                    console.log(templist);
                    
                    templist.forEach(element =>  commit(' SET_listadd',element));
                    resolve(response)
                }).catch((error) =>{ reject(error)})
            })
        }
    }

}
export default follows