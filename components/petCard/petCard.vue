<template>
	<view>
		<view class="petInfo">
			<view class="petText">
				<span></span>
				<span></span>
				<span></span>
			</view>
			<view class="petPic">
				<image :src="petPicUrl" mode="aspectFill"></image>
			</view>
		</view>
		<fui-card src="../../../static/images/ali-icon/foodShow.png" title="余粮显示" >
			<view class="foodProgress">
				<progress :percent="restFood" active="true"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
				>
				</progress>
			</view>
		</fui-card>
		<fui-card src="../../../static/images/ali-icon/chongwuguantou.png" title="水量显示" >
			<view class="waterProgress">
				<progress :percent="restWater" active="true"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
				>
				</progress>
			</view>
		</fui-card>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		name:"petCard",
		data() {
			return {
				timer:'',
				restFood:null,
				restWater:null,
			};
		},
		methods:{
			start(){
				this.timer = setTimeout(this.valChange,100)
			},
			valChange(){
				this.restFood = store.state.dataStreams.surplus.restFood
				this.restWater = store.state.dataStreams.surplus.restWater
			}
		},
		mounted() {
			this.start()
		},
		beforeDestroy() {
			clearTimeout(this.timer)
		}
		
	}
</script>

<style>
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
	
	.foodProgress,
	.waterProgress
	{
		height: 50rpx;
	}
</style>