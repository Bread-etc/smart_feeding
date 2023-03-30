<template>
	<view class="content">
		<fui-divider text="爱宠现状" dividerColor="#a88a6e" width="500rpx" size="26"></fui-divider>
		<view class="petInfo">
			<view class="petText">
				<span>petname</span>
				<span>出生年月</span>
				<span>陪伴时间</span>
			</view>
			<view class="petPic">
				<image :src="petPicUrl" mode="aspectFill"></image>
			</view>
		</view>
		<fui-card src="../../../static/images/ali-icon/foodShow.png" title="余粮显示" >
			<view class="foodProgress">
				<progress :percent="restFood"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
				>
				</progress>
			</view>
		</fui-card>
		<fui-card src="../../../static/images/ali-icon/guantou.png" title="水量显示" >
			<view class="waterProgress">
				<progress :percent="restWater"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
				>
				</progress>
			</view>
		</fui-card>
		<fui-divider text="功能选项" dividerColor="#a88a6e" width="500rpx" size="26"></fui-divider>
		<view class="functionArea">
			<fui-card src="../../../static/images/ali-icon/addFood.png" title="精准加粮" @click="addFood"></fui-card>
			<fui-card src="../../../static/images/ali-icon/drink.png" title="定时换水" @click="addWater"></fui-card>
			<fui-card src="../../../static/images/ali-icon/dog.png" title="宠物智能识别" @click="identify"></fui-card>
			<fui-card src="../../../static/images/ali-icon/dogNotice.png" title="实时监控" @click="monitor"></fui-card>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				restFood:store.state.restFood,
				restWater:store.state.restWater,
				petPicUrl:store.state.petPicUrl,
			}
		},
		methods: {
			//创建各个功能路由
			addFood(){
				uni.navigateTo({
					url:"/pages/addFood/addFood"
				})
				store.dispatch('changeRestFood',this.restFood)	//将食物剩余量传递到vuex
		
				
			},
			addWater(){
				uni.navigateTo({
					url:"/pages/addWater/addWater"
				})
			},
			identify(){
				uni.navigateTo({
					url:"/pages/identify/identify"
				})
			},
			monitor(){
				uni.navigateTo({
					url:"/pages/monitor/monitor"
				})
			}
		},
	}
</script>

<style lang="css" scoped>
	.content{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		padding: 20rpx 0;
	}
	.petInfo{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		margin: 0 32rpx;
		border-radius: 16rpx;
		box-shadow: 0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05);
		border-color: #EEEEEE;
		padding: 50rpx 50rpx;
		font-size: 30rpx;
		color: black;
	}
	.petText{
		display: flex;
		flex-direction: column;
	}
	.petText span:first-child{
		font-size: 50rpx;
		margin-bottom: 20rpx;
	}
	.petText span:nth-child(1){
		
	}
	
	.petPic image{
		border-radius: 8rpx;
		width: 100rpx;
		height: 100rpx;
		margin-right: 100rpx;
	}
	

	.functionArea{
		display: flex;
		flex-direction: column;
	}
	
	.foodProgress,
	.waterProgress
	{
		height: 50rpx;
	}
</style>
