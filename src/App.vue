<template>
  <div id="app">
	<router-view></router-view>
    <TabBar>
    	<TabBarItem path='/home'>
    		<img slot="item-icon" src="./assets/img/tabbar/bengta1.png" alt="">
    		<img slot="item-icon-active" src="./assets/img/tabbar/bengta2.png" alt="">
    		<div slot="item-text">首页</div>
    	</TabBarItem>
    	<TabBarItem path='/category'>
    		<img slot="item-icon" src="./assets/img/tabbar/diliefeng1.png" alt="">
    		<img slot="item-icon-active" src="./assets/img/tabbar/diliefeng2.png" alt="">
    		<div slot="item-text">分类</div>
    	</TabBarItem>
    	<TabBarItem path='/cart'>
    		<img slot="item-icon" src="./assets/img/tabbar/buwendingxiepo1.png" alt="">
    		<img slot="item-icon-active" src="./assets/img/tabbar/buwendingxiepo2.png" alt="">
    		<div slot="item-text">购物车</div>
    	</TabBarItem>
    	<TabBarItem path='/profile'>
    		<img slot="item-icon" src="./assets/img/tabbar/dimianchenjiang1.png" alt="">
    		<img slot="item-icon-active" src="./assets/img/tabbar/dimianchenjiang2.png" alt="">
    		<div slot="item-text">我的</div>
    	</TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
	TabBarItem
  }
}
</script>

<style>
	@import url("./assets/css/base.css");
	@import url("./assets/css/normalize.css");
	

</style>
