<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item" :key="item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'RecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		width: 100%;
		padding-bottom: 20px;
		margin-bottom: 5px;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 30px;
		border-bottom: 10px solid #eeeeee;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 80%;
		height: 80%;
		margin-bottom: 10px;
	}
</style>
