<template>
  <div class="select">
    <div class="selectLeft">
      <div class="selectCon">
        <span class="selectSpan iconfont">&#xe637;</span>
        <input type="text" class="selectInput" placeholder="搜索全网低价好券">
      </div>
    </div>
    <span class="selectRight"></span>
    <!-- taoge -->
  </div>
</template>
<script>
export default {};
</script>
<style>
.select {
  height: 0.8498rem;
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.selectLeft {
  width: 6.75rem;
  height: 100%;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectCon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectSpan {
  width: 0.53rem;
  height: 0.5498rem;
  background: #ebebeb;
  font-size: 13px;
  color: #9c9c9c;
  /* padding:5px 5px 5px 5px; */
  text-align: center;
  line-height: 0.5498rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left:3px;
}
.selectInput {
  height: 0.5498rem;
  width: 5.8898rem;
  background: #ebebeb;
  font-size: 10px;
  color: #666;
  
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.selectInput::placeholder{
    color : #9c9c9c;
}
.selectRight {
  flex: 1;
  height: 100%;
  /* background: yellowgreen; */
  background-image: url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png');
  background-size: 100%;
  background-position-y: 3px;
}
</style>
