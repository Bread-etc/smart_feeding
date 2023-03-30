<template>
	<view class="device"  v-if="isShow()">
		<view class="addContent">
			<fui-icon name="arrowright" :size="40"></fui-icon>
			<text>{{data.data.title}}</text>
		</view>
		<image src="/static/images/normal/connected.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	import store from '@/store/index.js'	//引入store
	export default {
		name:"myDevice",
		data() {
			return {
				data:{},	//收集响应体数据data
			};
		},
		props:{
			device:Object	//指明props传入为一个对象
		},
		methods:{
			isShow(){
				this.data = store.state.data
				return store.state.connectBoolean
			}
		},
		updated() {
			this.isShow()		//页面更新时加载新组件myDevice
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
		width: 150rpx;
		height: 150rpx;
		margin-right: 20rpx;
		margin-left: auto;
	}
</style>