<template>
    <div class='listcon'>
      <Loading v-show="isLoading"/>
        <ul class="listUl">
      <li class="listli" v-for="(val,num) in infodate">
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
          <div class="conimg">
            <img :src="val.data.img">
          </div>
          <div class="tags">
            <span class="like">{{val.data.praise}}</span>
            <span class="say">{{val.data.reply_count}}</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- <h2>listcon</h2> -->
    </div>
</template>
<script>
import Vuex from 'vuex'
export default {
    name:"listcon",
    data(){
        return {
            infodate:'',
            isLoading:true
        }
    },
    watch: {
      infodate(){
        this.isLoading=false
      }
    },
    created() {
            this.infodate = this.info;
            console.log(info)
    },
    props:{
      info:{
        type:String,
        default:""
      }
    },
    
}
</script>
<style lang="scss" scoped>
h2{
    font-size:.28rem;
}
.listUl {
  width: 7.3rem;
  height: 100%;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  .listli {
    width: 100%;
    padding: 0.2rem 0.2rem 0.2rem 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    .author {
      width: 100%;
      display: flex;
      height: 1.07rem;
      .avatar {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.2rem;
        // border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .nameM {
        .name {
          height: 0.52rem;
          font-size: 0.3rem;
          color: #444;
        }
        .time {
          height: 0.52rem;
          font-size: 0.28rem;
          color: #999;
        }
      }
    }
    .content {
      padding-left: 0.88rem;
      width: 100%;
      .contit {
        font-size: 0.3rem;
        line-height: 0.45rem;
        width: 6.2202rem;
      }
      .conimg {
        width: 6.22016rem;
        height: 2.94859rem;
        margin: 0.2rem auto;
        margin-left: 0;
        img {
          width: 6.22362rem;
          height: 2.79263rem;
        }
      }
      .tags {
        width: 100%;
        height: 0.58rem;
        display: flex;
        .like {
          font-size: 0.3rem;
          color: #a4a4a4;
          background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png);
          background-position: left center;
          background-repeat: no-repeat;
          padding: 0 0 0 0.44rem;
          margin-right: 0.2rem;
          background-size: 0.3rem;
        height: 0.58rem;
        line-height: 0.58rem;
        }
        .say {
        height: 0.58rem;
          font-size: 0.3rem;
          color: #a4a4a4;
          padding: 0 0 0 0.44rem;
          margin-right: 0.2rem;
          background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png);
          background-position: left center;
          background-repeat: no-repeat;
          background-size: 0.3rem;
        line-height: 0.58rem;
        }
      }
    }
  }
}
</style>