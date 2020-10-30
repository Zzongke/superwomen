<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
   name:'Scroll',
   props:{
       probeType:{
           type:Number,
           default:0
       },
       pullUpLoad:{
           type:Boolean,
           default:false
       }
   },
   data() {
      return {
          scroll:null
      }
   },
   mounted(){
       this.scroll = new BScroll(this.$refs.wrapper,{
           probeType:this.probeType,
           click:true,
           pullUpLoad:this.pullUpLoad
       })

       this.scroll.on('scroll',(position) => {
           this.$emit('scroll',position)
       })

       this.scroll.on('pullingUp',() =>{
           this.$emit('pullingUp')
       })

    //    this.scroll.scrollTo(0,0)
   },
   created(){
   },
   computed:{
   },
   methods:{
       scrollTo(x,y,time=300){
           this.scroll.scrollTo(x,y,time)
       },
       finishPullUp(){
           this.scroll.finishPullUp()
       }
   },
}
</script>
<style scoped>
    .wrapper{
		height: calc(100vh - 93px);
		overflow: hidden;
	}
	.content{
		list-style: none;
	}
</style>

