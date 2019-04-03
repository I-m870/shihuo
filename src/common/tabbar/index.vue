<template>
    <div id="footer">
        <ul>
            <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"tabbar",
    data() {
        return {
            tabbar:[
                {
                    title:"首页",
                    path:"/first",
                    icon:""
                },
                {
                    title:"优惠",
                    path:"/sale",
                    icon:""
                },
                {
                    title:"发现",
                    path:"/find",
                    icon:""
                },
                {
                    title:"装备",
                    path:"/equipment",
                    icon:""
                },
                {
                    title:"更多",
                    path:"/more",
                    icon:""
                }
            ]
        }
    },
}
</script>

<style scoped lang="scss">
    $color:#FF4338;
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>