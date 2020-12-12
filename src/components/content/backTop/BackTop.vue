<template>
    <div class="back-top" @click="backClick">
        <img src="../../../assets/img/common/top.png" alt="">
    </div>
</template>
<script>
export default {
    name:'BackTop',
    data() {
        return {
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
        backClick(){
            //回到顶部
            // this.$emit('backClick')
        }
    },
}
</script>
<style scoped>
    .back-top{
        position: fixed;
        right: 5px;
        bottom: 55px;
        z-index: 10;
    }
    .back-top img{
        width: 50px;
        height: 50px;
    }
</style>
