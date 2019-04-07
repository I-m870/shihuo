import {getFind} from '../../utils/http.js'
export default{
    namespaced:true,
    state:{
        data:[],
        tit:['今日推荐','最新资讯','测评All Star','潮流风向','达人专栏','球鞋90秒','装备党','潮鞋志','3C新奇特','说鞋话']
    },
    mutations:{
        getFindMutation(state,params){
            state.data=params;
            console.log(state.data)
        }
    },
    actions:{
        async getFind({commit}){
            let data = await getFind();
            // console.log(data.data);
            commit("getFindMutation",data.data);
        }
    }
}