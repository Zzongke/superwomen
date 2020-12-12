<template>
    <div id="detail">
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
        <div class="main">
            <div v-for="n in 10" :key="n">{{n}}</div>
        </div>
    </div>
</template>
<script>
import detailNavBar from "../../views/detail/childComps/detailNavBar.vue"
import {getDetail,Goods} from "../../network/detail.js"
import detailSwiper from "../detail/childComps/detailSwiper.vue"

export default {
    name:"Detail",
    components:{
        detailNavBar,
        detailSwiper
    },
    data() {
       return {
           iid:null,
           topImages:[],
           goods:null
       }
    },
    created(){
        //1.保存传入的iid
        this.iid = this.$route.params.iid 

        //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
            const data = res.result
            //1.获取顶部的图片轮播数据
            this.topImages = res.result.itemInfo.topImages

            //2.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        })
    },
    computed:{
    },
    methods:{
    },
}
</script>
<style scoped>
    .main{
        height: calc(100vh - 93px);
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
