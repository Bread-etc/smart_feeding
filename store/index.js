
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
			deviceId:'1076689798',										//设备ID
			apiKey:"JlgBre4PLdF2aMprOToM1ARMWgk=",						//普通连接apikey
			access_key:"zOGTZYEhToBYjKxKUyKlMey5AfGyM44jTQLb2zwzVN0=",	//安全连接apikey
			datastream_ids:'state,rest,water,temp,Weight',							//数据流id
		},
		connectBoolean:false,	//托管设备是否显示的布尔值
		data:{
			//保存请求体中的数据 (包括设备名称/设备id/数据流名称)
		},
		dataStreams:{
			//保存数据流中各项指标
			state:0,
			rest:0,
			temp:0,
			surplus:{
				food:0,
				water:0,
			}
		},
	},
	

	actions : {
		changeConnectBoolean(context,value){
			context.commit('changeConnectBoolean',value)
		},
		addData(context,value){
			context.commit('addData',value)
		},
		changeState(context,value){
			context.commit('changeState',value)
		},
		changeRest(context,value){
			context.commit('changeRest',value)
		},
		changeTemp(context,value){
			context.commit('changeTemp',value)
		},
		changeFood(context,value){
			value = 1000 - value
			context.commit('changeFood',value)
		},
		changeWater(context,value){
			value = 1000 - value
			context.commit('changeWater',value)
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
		//修改状态
		changeState(state,value){
			state.dataStreams.state = value
		},
		//修改超声波
		changeRest(state,value){
			state.dataStreams.rest = value
		},
		//修改温度
		changeTemp(state,value){
			state.dataStreams.temp = value
		},
		//修改剩余食物
		changeFood(state,value){
			state.dataStreams.surplus.food = value
		},
		//修改剩余水量
		changeWater(state,value){
			state.dataStreams.surplus.water = value
		},
	}
})


//创建并暴露store
export default store