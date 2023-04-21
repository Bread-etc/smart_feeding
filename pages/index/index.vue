<template>
	<view class="content">
		<view class="title"><span>添加设备</span></view>
		<deviceConnect :device="deviceRequest"></deviceConnect>
		<view class="title"><span>我的设备</span></view>
		<myDevice></myDevice>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				device:{},
			}
		},
		computed:{
			deviceRequest(){
				this.device = store.state.device		//获取设备信息 
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
