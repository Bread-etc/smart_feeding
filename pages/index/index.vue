<template>
	<view class="content">
		<view class="title"><span>添加设备</span></view>
		<deviceConnect :device="deviceRequest"></deviceConnect>
		<view class="title"><span>我的设备</span></view>
		<myDevice></myDevice>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//提供设备接口信息
				device:{
					deviceUrl:"http://api.heclouds.com/devices/1055375296",		//设备ID
					apiKey:"NWcyM=JHQsYGkSJgIjEzQnghAWY=",						//普通连接apikey
					access_key:"zOGTZYEhToBYjKxKUyKlMey5AfGyM44jTQLb2zwzVN0=",	//安全连接apikey
				},
			}
		},
		computed:{
			deviceRequest(){
				return this.device
			}
		},
	}
</script>

<style lang="css" scoped>
	.content{
		display: flex;
		width: 750rpx;
		flex-direction: column;
	}
	.title{
		display: flex;
		position: relative;
		margin-left: 10rpx;
		font-size: 30rpx;
		font-weight: 600;
		padding: 20rpx 25rpx;
		line-height: 40rpx;
		flex-direction: row;
		align-items: center;
	}
	.title:before{
		content: "";
		background-color: #465CFF;
		width: 4rpx;
		height: 38rpx;
		position: absolute;
		left: 15rpx;
		top: 40%;
		margin-top: -10rpx;
		border-radius: 5rpx;
		
	}
</style>
