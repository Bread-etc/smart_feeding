<template>
	<view class="infoContent">
		<view class="infoPic">
			<image src="../../static/images/normal/addInfo.jpg" mode="aspectFill"></image>
			<fui-button text="用户登录" background="#ecbd6b" width="350rpx" bold @click="getUserInfo"></fui-button>
			<fui-button text="添加宠物" background="#ecbd6b" width="350rpx" bold @click="addPet"></fui-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			addPet(){
				uni.navigateTo({
					url:'/pages/addPet/addPet'
				})
			},
			getUserInfo(event){
				console.log('登录成功');
			}
			
		}
	}
</script>

<style lang="css" scoped>
	.infoContent{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		padding: 20rpx 0;
		align-items: center;
	}
	.infoPic{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50rpx;
		width: 700rpx;
		background-color: white;
		border-radius: 10rpx;
		padding: 20rpx 0 100rpx 0;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.infoPic image{
		width: 400rpx;
		height: 400rpx;
		margin-bottom: 50rpx;
	}
	.infoPic fui-button{
		margin-bottom: 30rpx;
	}
</style>
