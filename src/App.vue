<template>
  <div id="app">
<<<<<<< HEAD
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar v-if="this.$route.meta.tabBarflag"/>
  </div>
</template>

<script>
import Tabbar from "@/common/tabbar";
export default {
  name: "app",
  components: {
    Tabbar
  }
};
</script>
=======
    <!-- <Index/> -->
    <!-- <router-link to="/index">index</router-link>
    <router-link to="/more">more</router-link> -->
    <router-view/>
  </div>
</template>
 <script>
// import Router from './router/index.js'
export default {
}
</script>
<style lang="scss">
#app{
  
}
>>>>>>> douzi

<style lang="scss">
</style>
