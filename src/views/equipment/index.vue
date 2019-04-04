<template>
    <div class="index">
        <div class="indexCon">
        <Select/>
        <Tab/>
        <Banner/>
        <Bgarea/>
        <List/>
        </div>
    </div>
</template>
<script>
import Select from '../../components/equipment/select/select';
import Tab from '../../components/equipment/Tab/tab';
import Banner from '../../components/equipment/Modular/basketball';
import List from '../../components/equipment/List/list';
import Bgarea from '../../components/bg/bg-area'
export default {
    components:{
        Select,
        Tab,
        Banner,
        List,
        Bgarea
    }
}
</script>
<style>
.index{
    width:100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}
.indexCon{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    
    flex: 1;
}
</style>