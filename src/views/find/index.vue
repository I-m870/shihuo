<template>
  <div class="find">
    <Block/>
    <HotBlock/>
    <List/>
  </div>
</template>

<script>
import Block from '@/components/find/block.vue'
import HotBlock from '@/components/find/hotBlock.vue'
import List from '@/components/find/list.vue'
export default {
  name: "first",
  components: {
    Block,
    HotBlock,
    List
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.find{
  background: #fff!important;
}
</style>
