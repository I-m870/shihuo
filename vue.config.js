module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://m.shihuo.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}