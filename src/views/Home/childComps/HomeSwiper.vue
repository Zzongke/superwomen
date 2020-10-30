<template>
	<Swiper>
		<swiper-item v-for="(item,index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
		</swiper-item>
	</Swiper>
</template>

<script>
	import {SwiperItem,Swiper} from '../../../components/common/swiper/index.js'
	
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			SwiperItem,
			Swiper
		}
	}
</script>

<style>
</style>
