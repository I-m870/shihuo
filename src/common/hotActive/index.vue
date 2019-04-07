<template>
  <div class="hot-activity">
    <h2>热门活动</h2>
    <div class="box">
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
      <div class="con">
        <div class="img">
          <img
            src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
            alt
          >
        </div>
        <h3>花鸟市场行</h3>
        <p>今天穿这样</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style lang="scss">
.hot-activity {
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.11006rem;
  h2 {
    font-size: 28px;
    margin-bottom: 0.10005rem;
    padding: 0.20011rem 0.3rem;
    font-weight: bold;
    color: #444;
  }
  .box {
    padding: 0 0.30016rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .con {
      margin-bottom: 0.25013rem;
      .img {
        width: 2.24087rem;
        height: 1.34063rem;
        overflow: hidden;
        margin-bottom: 0.10005rem;
        img {
          width: 100%;
        }
      }
      h3 {
        color: #444;
        font-size: 24px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
        line-height: 0.4rem;
      }
    }
  }
}
</style>