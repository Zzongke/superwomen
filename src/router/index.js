import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const CateGory = () => import('../views/CateGory/CateGory.vue')
const ProFile = () => import('../views/ProFile/ProFile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Error = () => import('../views/error/Error.vue')


Vue.use(Router)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component: Home,
		// meta:{
		// 	title:'首页'
		// },
		// children:[{
		// 	path:'',
		// 	redirect: 'pop'
		// },
		// {
		// 	path:'/pop',
		// 	component:Pop
		// },
		// {
		// 	path:'/new',
		// 	component:New
		// },
		// {
		// 	path:'/sell',
		// 	component:Sell
		// }]
	},
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/category',
		component: CateGory
	},
	{
		path:'/profile',
		component: ProFile
	},
	{
		path:'/detail/:iid',
		component: Detail
	},
	{
		path:'/error',
		component:Error
	}
]

const router = new Router ({
	routes,
	mode:'history'
}) 

export default router