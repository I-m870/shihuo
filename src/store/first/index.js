import {
    getIndex
} from '../../utils/http.js'
export default {
    namespaced: true,
    state: {
        data: [],
        youhui: []
    },
    mutations: {
        getIndexMutations(state, params) {
            for (var i = 0; i < params.length; i++) {
                if (params[i].show_type == "single3") {
                    state.data.push(params[i]);
                }
            }
            // console.log(state.data)
            // console.log(state.data)
        },
        getIndexMutationsYouhui(state, params) {
            for (var i = 0; i < params.length; i++) {
                state.youhui.push(params[i]);
            }
            console.log(state.youhui)
        }
    },
    actions: {
        async getIndexActions({
            commit
        }) {
            var data = await getIndex();
            // console.log(data.data);
            commit("getIndexMutations", data.data);
            commit("getIndexMutationsYouhui", data.youhui);
        },

    },
}