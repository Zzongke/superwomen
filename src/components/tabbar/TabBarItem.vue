<template>
		<div class="tab-bar-item" @click="itemClick">
			<div v-if="!isActive"><slot name="item-icon"></slot></div>
			<div v-else><slot name="item-icon-active"></slot></div>
			<div :class="{active: isActive}"><slot name="item-text"></slot></div>
		</div>
		<!-- <div class="tab-bar-item">
			<img src="../../assets/img/tabbar/bengta1.png" alt="">
			<div>首页</div>
		</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tabbar/buwendingxiepo1.png" alt="">
			<div>分类</div>
		</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tabbar/diliefeng1.png" alt="">
			<div>购物车</div>
		</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tabbar/dimianchenjiang1.png" alt="">
			<div>我的</div>
		</div> -->
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		template:'<TabBarItem/>',
		data() {
			return {
				// isActive:true
			}
		},
		computed:{
			isActive(){
				if(this.$route.path == this.path){
					return this.$route.path == this.path;
				}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path).catch(err => {})
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
		cursor: pointer;
	}
	.tab-bar-item img{
		height: 24px;
		width: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
	.active{
		color: #42B983;
	}
</style>
