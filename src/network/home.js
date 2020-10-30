import {request} from './newwork.js'
 
 export function getHomeMultidata(){
	return request({
	url:'/home/multidata'
	})
 }
 
 export function getHomeGoods(type,page){
	return request({
	url:'/home/data',
	params:{
		// eslint-disable-next-line no-undef
		type,
		// eslint-disable-next-line no-undef
		page
	}
	})
 }
 
 //函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
 //函数调用结束 -> 弹出函数栈(释放函数所有的变量)
 // function test(){
	//  const names = ['why','aaa']
 // }
 
 // test()
 
//  const totalNums = []
//  const nums1 = [20,11,222]
//  const nums2 = [20,11,222]
//  // for (let n of nums1){
// 	//  totalNums.push(n)
//  // }
//  totalNums.push(...nums1)
