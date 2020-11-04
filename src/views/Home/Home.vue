<template>
	<div id="home" class="wrappers">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<tab-control :titles="['流行','新歌','精选']" 
						@tabClick="tabClick" 
						ref="tabControl" 
						class="tab-control"
						v-show="isFixed"></tab-control>

		
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMored">
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新歌','精选']" 
						@tabClick="tabClick" 
						ref="tabControl" ></tab-control>
			<goods-list :goods="showGoods"></goods-list>
			<!-- <h2>{{banners}}</h2> -->	
			<ul>
				<li>列表1</li>
				<li>列表2</li>
				<li>列表3</li>
				<li>列表4</li>
				<li>列表5</li>
				<li>列表6</li>
				<li>列表7</li>
				<li>列表8</li>
				<li>列表9</li>
				<li>列表10</li>
				<li>列表11</li>
				<li>列表12</li>
				<li>列表13</li>
				<li>列表14</li>
				<li>列表15</li>
				<li>列表16</li>
				<li>列表17</li>
				<li>列表18</li>
				<li>列表19</li>
				<li>列表20</li>
				<li>列表21</li>
				<li>列表22</li>
				<li>列表23</li>
				<li>列表24</li>
				<li>列表25</li>
				<li>列表26</li>
				<li>列表27</li>
				<li>列表28</li>
				<li>列表29</li>
				<li>列表30</li>
				<li>列表31</li>
				<li>列表32</li>
				<li>列表33</li>
				<li>列表34</li>
				<li>列表35</li>
				<li>列表36</li>
				<li>列表37</li>
				<li>列表38</li>
				<li>列表39</li>
				<li>列表40</li>
				<li>列表41</li>
				<li>列表42</li>
				<li>列表43</li>
				<li>列表44</li>
				<li>列表45</li>
				<li>列表46</li>
				<li>列表47</li>
				<li>列表48</li>
				<li>列表49</li>
				<li>列表50</li>
				<li>列表51</li>
				<li>列表52</li>
				<li>列表53</li>
				<li>列表54</li>
				<li>列表55</li>
				<li>列表56</li>
				<li>列表57</li>
				<li>列表58</li>
				<li>列表59</li>
				<li>列表60</li>
				<li>列表61</li>
				<li>列表62</li>
				<li>列表63</li>
				<li>列表64</li>
				<li>列表65</li>
				<li>列表66</li>
				<li>列表67</li>
				<li>列表68</li>
				<li>列表69</li>
				<li>列表70</li>
				<li>列表71</li>
				<li>列表72</li>
				<li>列表73</li>
				<li>列表74</li>
				<li>列表75</li>
				<li>列表76</li>
				<li>列表77</li>
				<li>列表78</li>
				<li>列表79</li>
				<li>列表80</li>
				<li>列表81</li>
				<li>列表82</li>
				<li>列表83</li>
				<li>列表84</li>
				<li>列表85</li>
				<li>列表86</li>
				<li>列表87</li>
				<li>列表88</li>
				<li>列表89</li>
				<li>列表90</li>
				<li>列表91</li>
				<li>列表92</li>
				<li>列表93</li>
				<li>列表94</li>
				<li>列表95</li>
				<li>列表96</li>
				<li>列表97</li>
				<li>列表98</li>
				<li>列表99</li>
				<li>列表100</li>
			</ul>
		</scroll>
		
		<back-top @click.native="backClick" v-show="isShowBackTop"/>

	</div>
</template>

<script>
	import NavBar from '@/components/navbar/NavBar.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import TabControl from '../../components/content/TabControl.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import Scroll from '../../components/common/swiper/scroll/Scroll.vue'
	import BackTop from '../../components/content/backTop/BackTop.vue'
	
	// import SwiperItem from '../../components/common/swiper/SwiperItem.vue'
	// import Swiper from '../../components/common/swiper/Swiper.vue'
	import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
	
	export default {
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop',
				isShowBackTop:false,
				tabOffsetTop:0,
				isFixed:false
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		mounted(){
			// this.$refs.aaaa
			//获取tabControl的offsetTop
			// this.tabOffsetTop = this.$refs.tabControl.offsetTop
		},
		created() {
			//1.请求多个数据
			this.getHomeMultidata()
			//2.请求商品
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods:{
			// 事件监听
			tabClick(index){
				switch(index){
					case 0:
					this.currentType = 'pop'
					break
					case 1:
					this.currentType = 'new'
					break
					case 2:
					this.currentType = 'sell';
					break
				}
			},
			backClick(){
				this.$refs.scroll.scrollTo(0,0);
			},
			contentScroll(position){
				this.isShowBackTop = (-position.y) > 1000
				this.isFixed = (-position.y) > this.tabOffsetTop
			},
			loadMored(){
				this.getHomeGoods(this.currentType)
			},
			swiperImageLoad(){
				this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
			},
			
			// 网络请求
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res);
					// this.result = res;
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page +=1
					this.$refs.scroll.finshPullUp()
				})
			}
		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.tab-control{
		/* position: sticky; */
		top: 44px;
		z-index: 9;
	}
	.content{
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tab-control{
		position: relative;
		z-index: 9;
	}
	/* .content{
		height: calc(100vh-93px);
		margin-top: 44px;
		overflow: hidden;
	} */
</style>
