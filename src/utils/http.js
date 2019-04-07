import axios from "axios";
const http = axios.create({
    timeout:10000,
    withCredentials:true
})
http.interceptors.request.use((config)=>{
    if(config.method == "post"){
        
    }else if(config.method == "get"){
        config.params = {...config.data}
    }
    return config;
},(e)=>{
    Promise.reject(e)
})
http.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        return res.data;
    }
})
export const getNowMovie = function (){
   
    return http.get("/api/zhuangbei/getHomeNews")

}
export const getFind = function(){
    return http.get("api/find/mobileList?tag_id=283&param_str=")
}
export const getIndex = function(){
    return http.get("api/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")
}

 