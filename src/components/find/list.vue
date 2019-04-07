<template>
  <div class="list">
    <Bg/>
    <ul class="tit">
      <li class="titli" v-for="(items,index) in tit">
        <a href="javascript:;" @touchstart="handleClick(index)" ref="clickli">{{items}}</a>
      </li>
    </ul>
    <ul class="listUl">
      <li class="listli" v-for="(val,num) in data">
        <div class="author">
          <a class="avatar" href="javascript:;">
            <img :src="val.data.avatar">
          </a>
          <div class="nameM">
              <p class="name">{{val.data.author_name}}</p>
              <p class="time">{{val.data.date}}</p>
          </div>
        </div>
        <div class="content">
            <div class="contit">{{val.data.title}}</div>
            <div class="conimg"><img :src="val.data.img"/></div>
            <div class="tags">
                <span class="like">{{val.data.praise}}</span>
                <span class="say">{{val.data.reply_count}}</span>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Bg from "../bg/bg-area";
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      tit: state => state.Find.tit,
      data: state => state.Find.data
    })
  },
  created() {
    this.$store.dispatch("Find/getFind");
  },
  components: {
    Bg
  },
  methods: {
    handleClick(index) {
      console.log(this.$refs.clickli[index]);
      for (var i = 0; i < this.$refs.clickli.length; i++) {
        this.$refs.clickli[i].style.color = "#333";
        this.$refs.clickli[i].style.borderBottom = "none";
      }
      this.$refs.clickli[index].style.color = "red";
      this.$refs.clickli[index].style.borderBottom = "2px red solid";
    }
  },
  mounted() {
    // this.handleClick();
    // this.$refs.clickli[index].style.color="red";
  }
};
</script>
<style lang="scss" scoped>
.list {
  padding: 0;
  padding-right: 0.2rem !important;
  // margin-top: .2rem;
}
.tit {
  width: 100%;
  display: flex;
  height: 0.84rem;
  overflow: auto;
  white-space: nowrap;
  .titli {
    // width:1.4403rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.2rem;
    a {
      // width:1.4403rem;
      height: 100%;
      color: #333;
      font-size: 0.26rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.listUl {
  width: 7.3rem;
  height: 100%;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  .listli {
    width: 100%;
    height: 5.8586rem;
    padding: 0.2rem 0.2rem 0.2rem 0;
    display: flex;
    flex-direction: column;
    .author {
      width: 100%;
      display: flex;
      height:1.07rem;
      .avatar {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: .2rem;
        // border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .nameM{

          .name{
              height: .52rem;
               font-size: 30px;
              color: #444;
          }
          .time{
              height: .52rem;;
              font-size: 28px;
              color: #999;
          }
      }
    }
    .content{
       margin-left: .88rem;
       height:4.3786rem;
       width:100%;
       .contit{
           font-size: 30px;
           line-height: .45rem;
           width:6.2202rem;
       }
       .conimg{
           width:6.22016rem;
           height:2.94859rem;
           margin:.2rem auto;
           margin-left: 0;
       }
       .tags{
           width:100%;
           height:.58rem;
           display:flex;
           .like{
               font-size: 30px;
               color:#a4a4a4;
               background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png);
               background-position: left center;
               background-repeat: no-repeat;
               padding: 0 0 0 .44rem;
               margin-right: .2rem;
            }
            .say{
                font-size: 30px;
               color:#a4a4a4;
               padding: 0 0 0 .44rem;
               margin-right: .2rem;
               background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png);
                 background-position: left center;
               background-repeat: no-repeat;
            }
       }
    }
  }
}
</style>