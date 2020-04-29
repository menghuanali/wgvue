const preview = {
    state:{
        title: "",
        optionsonevalues: "",
        dynamicTags: [],
        optionstwovalues: "",
        coverurl: "",
        userid: "",
        paragraphs:"",
    },
    mutations:{
        SET_userid:(state,userid) =>{
            state.userid = userid;
        },
        SET_title:(state,title) =>{
            state.title = title;
        },
        SET_optionsonevalues:(state,optionsonevalues) =>{
            state.optionsonevalues = optionsonevalues;
        },
        SET_optionstwovalues:(state,optionstwovalues) =>{
            state.optionstwovalues = optionstwovalues;
        },
        SET_dynamicTags:(state,dynamicTags) =>{
           state.dynamicTags = dynamicTags.slice();
        },
        SET_coverurl:(state,coverurl) =>{
            state.coverurl = coverurl;
        },
        SET_paragraphs:(state,paragraphs) =>{
            state.paragraphs = paragraphs;
        }
    },
    actions:{
        LoadingPreview({commit},boweninfo){
            commit('SET_userid',boweninfo.userid);
            commit('SET_title',boweninfo.title);
            commit('SET_optionsonevalues',boweninfo.optionsonevalues);
            commit('SET_optionstwovalues',boweninfo.optionstwovalues);
            commit('SET_dynamicTags',boweninfo.dynamicTags);
            commit('SET_coverurl',boweninfo.coverurl);
            let l = boweninfo.paragraphs.length;
            let res ="";
            for(let i=0;i<l;i++){
                res+=boweninfo.paragraphs[i];
            }
            commit('SET_paragraphs',res);
        }
    }
}
export default preview