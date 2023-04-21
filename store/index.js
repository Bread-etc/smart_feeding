
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)


const store = new Vuex.Store({
	state : {
		device:{
			//保存关于设备的ID和apikey
			deviceId:'1055375296',										//设备ID
			apiKey:"NWcyM=JHQsYGkSJgIjEzQnghAWY=",						//普通连接apikey
			access_key:"zOGTZYEhToBYjKxKUyKlMey5AfGyM44jTQLb2zwzVN0=",	//安全连接apikey
			datastream_ids:'temp,rest,state',							//数据流id
		},
		connectBoolean:false,	//托管设备是否显示的布尔值
		data:{
			//保存请求体中的数据 (包括设备名称/设备id/数据流名称)
		},
		dataStreams:{
			//保存数据流中各项指标
			temp:null,			
			surplus:{
				restFood:null,
				restWater:null
			}
		},
		
		petPicUrl:'',			//宠物头像链接
	},
	

	actions : {
		changeConnectBoolean(context,value){
			context.commit('changeConnectBoolean',value)
		},
		addData(context,value){
			context.commit('addData',value)
		},
		changeTemp(context,value){
			context.commit('changeTemp',value)
		},
		changeFood(context,value){
			context.commit('changeFood',value)
		},
		changeWater(context,value){
			context.commit('changeWater',value)
		},
		petPic(context,value){
			context.commit('petPic',value)
		},
	},
	
	
	mutations : {
		//修改连接状态
		changeConnectBoolean(state,value){
			state.connectBoolean = value
		},
		//将设备data加入state中
		addData(state,value){
			state.data = value
		},
		//修改温度
		changeTemp(state,value){
			state.dataStreams.temp = value
		},
		//修改剩余食物
		changeFood(state,value){
			state.dataStreams.surplus.restFood = value
		},
		//修改剩余水量
		changeWater(state,value){
			state.dataStreams.surplus.restWater = value
		},
		
		
		petPic(state,value){
			state.petPicUrl = value
		},
	}
})


//创建并暴露store
export default store