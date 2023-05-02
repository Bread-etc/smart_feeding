<template>
	<view class="device" @click="addDevice">
		<view class="addContent">
			<fui-icon name="plussign" :size="40"></fui-icon>
			<text>点击此处添加设备</text>
		</view>
		<image src="/static/images/ali-icon/phone.png" mode="aspectFill"></image>
	</view>
</template>

<script>
import store from '@/store/index.js'	//引入store
	export default {
		name:"deviceConnect",
		data() {
			return {
				data:{},	//收集响应体数据data,
			};
		},
		props:{
			//指明props传入规则
			device:Object
		},
		methods:{
			addDevice(){
				uni.request({
					url:`http://api.heclouds.com/devices/${this.device.deviceId}`,		//查询设备状态url
					header:{
						'api-key':this.device.apiKey
					},
					success: res =>{
						if(res.data.data.online){
							this.data = res.data
							store.commit('addData',this.data)			//更改vuex中data数据
							store.commit('changeConnectBoolean',true)	//更改vuex中changeConnectBoolean中的布尔值
							uni.showToast({
								title:"设备添加成功",
								duration:2000,
								image:"../../static/images/ali-icon/success.png",
								mask:true
							})
						}else{
							uni.showToast({
								title:"设备添加失败",
								duration:2000,
								image:"../../static/images/ali-icon/error.png",
								mask:true
							})
						}
					}
				})	
			}
		}
	}
</script>

<style lang="css" scoped>
	.device{
		margin-left: 15rpx;
		margin-right: 15rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		width: 720rpx;
		height: 200rpx;
		border-radius: 15px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.addContent{
		margin-left: 50rpx;
		height: 40rpx;
	}
	.addContent:first-child{
		line-height: 40rpx;
	}
	.addContent text{
		margin-left: 10rpx;
		line-height: 40rpx;
		font-weight: 500;
		font-size: 35rpx;
	}
	.device image{
		width: 200rpx;
		height: 150rpx;
		margin-left: auto;
	}
</style>