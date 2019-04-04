module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.shihuo.cn",//代理的是域名
                changeOrigin:true,//是否允许跨域（是否允许改变自己本地的域名）
                pathRewrite:{
                    "^/api":"",//是否替换域名的标志，有这个标志的路径就表示这个路径需要替换
                }
            }
        }
    }
}

//中间件：http-proxy-middleware
//http://m.shihuo.cn/zhuangbei/getHomeNews识货