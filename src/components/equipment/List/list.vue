<template>
  <div class="equipmentList">
    <h2 class="new">最新推荐</h2>
    <li class="equipmentListCon" v-for="(items,index) in infoList">
      <a href="javascript:;" class="equipmentListConA">
        <img :src="items.data.img">
        <div class="info">
          <span class="listTitle">{{items.data.title}}</span>
          <div class="ListIntro">
            <h3>
              <img
                
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-1_5297253.png"
              >{{items.data.intro}}<img
                
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/quote_right_711acf3.png"
              >
            </h3>
          </div>
          <div class="listBot">
            <div class="botLeft">
              <em class="merchant">{{items.data.merchant}}</em>
              <em class="price">¥{{items.data.price}}</em>
            </div>
            <div class="botRight">
              <img
                class="look"
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png"
              >
              <span class="lookTime">{{items.data.hits}}</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...Vuex.mapState({
      infoList: state => state.Equipment.infoList
    })
  },
  created() {
    // console.log(this.infoList);
    this.$store.dispatch("Equipment/getInfo");
  }
};
</script>
<style lang="scss">
.equipmentList {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
.new {
  margin-left: 0.55rem;
  margin-top: 0.2rem;
}
.equipmentListCon {
  display: flex;
  height: 3rem;
  padding: 0.2rem 0 0.2rem 0;
  margin-left: 0.3rem;
  margin-top: 0.16rem;
  /* width: 7.30rem; */
  /* height: 2.5rem; */
  border-bottom: 1px solid #e6e6e6;
  /* background: pink; */
}
.equipmentListConA {
  /* width: 100%; */
  height: 2.1rem;
  font-size: 0.26rem;
  color: #444;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.equipmentListConA > img {
  width: 2.4998rem;
  height: 2.4998rem;
}
.equipmentListConA > .info {
  height: 2.4998rem;
  /* flex: 1; */
  /* width:100%; */
  margin-left: 0.26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-right: 0.15rem; */
}
.listTitle {
  display: block;
  /* width:4.5rem; */
  height: 0.9398rem;
  /* line-height: 0.5498rem; */
  margin-top: 0.2rem;
}
.ListIntro {
  width: 4.242rem;
  height: 5.55rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.4rem;
  /* margin-bottom: 0.5rem; */
  overflow: hidden;
  h3 {
    color: #666;
    font-size: 12px;
    img {
      display: inline-block;
      margin: 0 0.10005rem;
      width: 0.18rem;
      height: 0.18rem;
    }
  }
}

.listBot {
  width: 100%;
  display: flex;
  margin-top: 0.28rem;
  justify-content: space-between;
}
.botRight {
  display: flex;
  justify-content: center;
  font-size: 0.2rem;
}
.look {
  width: 0.25rem;
  height: 0.19rem;
  margin-top: 0.1rem;
  margin-right: 0.2rem;
}
.lookTime {
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
}
.price {
  color: #ff4338;
  font-weight: 900;
  margin-left: 0.08rem;
}
</style>