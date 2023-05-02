<template>
	<view class="content">
		<fui-divider text="爱宠现状" dividerColor="#a88a6e" width="500rpx" size="26"></fui-divider>
		<petCard ref="petCard"></petCard>
		<fui-divider text="功能选项" dividerColor="#a88a6e" width="500rpx" size="26"></fui-divider>
		<view class="functionArea">
			<fui-card src="../../../static/images/ali-icon/addFood.png" title="精准加粮" @click="addFood"></fui-card>		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				device:store.state.device,
				petPicUrl:store.state.petPicUrl
			}
		},
		onShow() {
			// 获取pet-card组件的实例
			const petCard = this.$refs.petCard
			// 调用组件中的更新方法
			petCard.getPetInfo()
		},
		methods: {
			//向onenet平台获取请求拿到数据流,并存入vuex中
			getDataStreams(){
				uni.request({
					url:`http://api.heclouds.com/devices/${this.device.deviceId}/datastreams`,
					method:'GET',
					data:{
						datastream_ids:this.device.datastream_ids
					},
					header:{
						'api-key':this.device.apiKey
					},
					success: res =>{
						store.commit('changeState',res.data.data[0].current_value)		//修改vuex中的状态
						store.commit('changeRest',res.data.data[1].current_value)		//修改vuex中的超声波
						store.commit('changeWater',res.data.data[2].current_value)		//修改vuex中的水量
						store.commit('changeTemp',res.data.data[3].current_value)		//修改vuex中的温度
						store.commit('changeFood',res.data.data[4].current_value)		//修改vuex中的食物量
					}
				})
			},
			
			
			//创建各个功能路由
			addFood(){
				uni.navigateTo({
					url:"/pages/addFood/addFood"
				})	
			}
		},

		
		//切换到function页面发送请求
		created() {
			this.getDataStreams()
		}
	}
</script>

<style lang="css" scoped>
	.content{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		padding: 20rpx 0;
	}

	.functionArea{
		display: flex;
		flex-direction: column;
	}
	
</style>
