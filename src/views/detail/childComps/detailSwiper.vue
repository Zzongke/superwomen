<template>
    <swiper  class="detail-swiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>
<script>
import {swiper,swiperItem} from "../../../components/common/swiper/index.js"

export default {
    name:'detailSwiper',
    components:{
        swiper,
        swiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
       return {
       }
    },
    created(){
    },
    computed:{
    },
    methods:{
    },
}
</script>
<style scoped>
    .detail-swiper{
        height: 300px;
        overflow: hidden;
    }
</style>
