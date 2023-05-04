<template>
	<view>
		<view class="petInfo">
			<view class="petText">
				<span>{{petName}}</span>
				<span>生日:{{petBirthday | formatDate}}</span>
			</view>
			<view class="petPic">
				<image :src="petUrl" class="avatar" mode="aspectFill"></image>
			</view>
		</view>
		<fui-card src="../../../static/images/ali-icon/foodShow.png" title="余粮显示" >
			<view class="foodProgress">
				<progress :percent="percentageFood" active="true"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
					show-info="true" :max="max"
				>
				</progress>
			</view>
		</fui-card>
		<fui-card src="../../../static/images/ali-icon/chongwuguantou.png" title="水量显示" >
			<view class="waterProgress">
				<progress :percent="percentageWater" active="true"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
					show-info="true" :max="max"
				>
				</progress>
			</view>
		</fui-card>
		<fui-card src="../../../static/images/ali-icon/dogNotice.png" title="室内温度" >
			<view class="tempProgress">
				<progress :percent="temperature" active="true"
					activeColor="#5b5b5d" stroke-width="3"
					style="margin-left: 30rpx;margin-right: 30rpx;"
					show-info="true"
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
				restFood:store.state.dataStreams.surplus.food,
				restWater:store.state.dataStreams.surplus.water,
				max:300,
				temperature:store.state.dataStreams.temp,
				petName:'',
				petBirthday:'',
				petUrl:'../../static/images/normal/default.jpg'		// 默认照片地址
			};
		},
		created(){
			// 页面被创建时调用 getPetInfo 方法
			// 向服务器发送请求获取宠物信息和宠物图片，如果没有宠物图片，则使用默认图片default.jpg
			this.getPetInfo()
		},
		methods:{
			start(){
				this.timer = setTimeout(this.valChange,500)
			},
			valChange(){
				this.restFood = store.state.dataStreams.surplus.food
				this.restWater = store.state.dataStreams.surplus.water
				this.temperature = store.state.dataStreams.temp
			},
			getPetInfo(){
				const openid = uni.getStorageSync('openid')
				uni.request({
					url:'https://hastur23.top/getpetinfo',
					method:'POST',
					header:{
						'Content-Type':'application/json',
					},
					data:{
						openid:openid
					},
					success: res=>{
						// 将请求到的宠物信息赋值给data中的对应参数
						if(res.data.petName){
							this.petName = res.data.petName
						} else {
							this.petName = '肥猫'
						}
						if(res.data.petBirthday){
							this.petBirthday = res.data.petBirthday
						} else {
							this.petBirthday = '2020-09-16'
						}
						if(res.data.petUrl){
							this.petUrl = res.data.petUrl
						}
					},
					fail: err=>{
						console.log(err);
					}
				})
			},
		},
		computed: {
		    percentageFood: {
		        get() {
		            return Math.floor(this.restFood / this.max * 100);
		        }
		    },
		    percentageWater: {
		        get() {
		            return Math.floor(this.restWater / this.max * 100);
		        }
		    }
		},
		filters: {
		    formatDate(value) {
		      const date = new Date(value)
		      const year = date.getFullYear()
		      const month = date.getMonth() + 1
		      const day = date.getDate()
		      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
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
		
	.foodProgress,
	.waterProgress,
	.tempProgress
	{
		height: 50rpx;
	}
	
	.avatar{
		width: 150rpx; 
		height: 150rpx; 
		object-fit: cover; 
		border-radius: 50%; 
		display: block;
	}
</style>