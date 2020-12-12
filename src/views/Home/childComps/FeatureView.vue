<template>
	<div class="feature">
		<a href="https://act.mogujie.com/zzlx67" :style="center">
			<img src="../../../assets/img/home/recommend_bg.jpg" alt="">
		</a>
	</div>
</template>

<script>
	export default {
		name:'FeatureView',
		data(){
			return{
				center:{
					width:'100%',
					textAlign:'center',
					display:'block'
				}
			}
		}
	}
</script>

<style>
	.feature img{
		width: 100%;
		height: 100%;
	}
</style>
