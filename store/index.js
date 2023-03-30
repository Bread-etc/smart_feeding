
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
const store = new Vuex.Store({
	//准备state对象——保存具体的数据
	state : {
		connectBoolean:false,	//托管设备是否显示的布尔值
		data:{
			//保存请求体中的数据
		},
		restFood:20,			//剩余食物
		restWater:50,			//剩余水量
		petPicUrl:'',			//宠物头像链接
	},
	//准备actions对象——响应组件中用户的动作
	actions : {
		changeConnectBoolean(context,value){
			context.commit('changeConnectBoolean',value)
		},
		addData(context,value){
			context.commit('addData',value)
		},
		changeRestFood(context,value){
			context.commit('changeConnectBoolean',value)
		},
		changeRestWater(context,value){
			context.commit('changeConnectBoolean',value)
		},
		petPic(context,value){
			context.commit('petPic',value)
		},
	},
	//准备mutations对象——修改state中的数据
	mutations : {
		changeConnectBoolean(state,value){
			//mutations中的changeConnectBoolean被调用了
			state.connectBoolean = value
		},
		addData(state,value){
			state.data = value
		},
		changeRestFood(state,value){
			state.restFood = value
		},
		changeRestWater(state,value){
			state.restFood = value
		},
		petPic(state,value){
			state.petPicUrl = value
		},
	}
})


//创建并暴露store
export default store