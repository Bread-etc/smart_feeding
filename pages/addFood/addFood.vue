<template>
	<view class="content">
		<view class="title"><span>普通加粮</span></view>
		<view class="functionContent">
			<view class="addNow">
				<h3>剩余粮食:{{foodSurplus}}g</h3>
				<view class="addKg">
					<h3>添加克数:</h3>
					<fui-input-number v-model="food" custom></fui-input-number>
					g
				</view>
				<fui-button text="立即添加" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addFoodNow()"></fui-button>
			</view>
		</view>
		<view class="title"><span>定时加粮</span></view>
		<view class="functionContent">
			<view class="addSetTime">
				<view class="setTime">
					<h3>每日两次加粮时间:</h3>
					<view class="item">
						|
						<picker class="picker" mode="time" :value="firstTime" start="09:01" end="21:01" @change="bindfirstTime">
							<view class="uni-input">{{firstTime}}</view>
						</picker>
						|
						<picker class="picker" mode="time" :value="secondTime" start="09:01" end="21:01" @change="bindsecondTime">
							<view class="uni-input">{{secondTime}}</view>
						</picker>
						|
					</view>
				</view>
				<view class="foodMaxium">
					<h3>加粮上限:</h3>
					<fui-input-number v-model="foodMax" custom ></fui-input-number>
					g
				</view>
				<fui-button text="定时添加" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addSetTime()"></fui-button>
			</view>
		</view>
		<view class="title"><span>智能加粮</span></view>
		<view class="functionContent">
			<view class="addSmart">
				<view class="addSmartMin">
					<h3>
						粮食重量低于
					</h3>
					<fui-input-number v-model="foodMin" custom ></fui-input-number>
					<h3>
						g自动加粮
					</h3>
				</view>
				<view class="addSmartMax">
					<h3>自动加粮上限:</h3>
					<fui-input-number v-model="foodMax" custom ></fui-input-number>
					g
				</view>
				<fui-button text="定时添加" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addSmart()"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				food:50,
				foodMin:1,							//智能加粮底线
				foodMax:1,							//定时和智能加粮上限
				foodSurplus:store.state.restFood,	//将vuex中的食物剩余量传递到子组件
				firstTime: '09:00',					//第一次加粮时间
				secondTime: '21:00'					//第二次加粮时间
			}
		},
		props:{
			restFood:Number,
		},
		methods:{
			addFoodNow(){
				//发送网络请求添加食物
				this.foodSurplus += this.food
				store.commit('changeRestFood',this.foodSurplus)
				console.log(this.foodSurplus);
				return this.foodSurplus
			},
			addSetTime(){
				//发送网络请求定时添加食物
				//发送网络请求
				uni.showToast({
					title:"定时加粮成功",
					duration:2000,
					icon:'success',
					image:"../../static/images/ali-icon/success.png",
					mask:true
				})
			},
			addSmart(){
				if(this.foodMax >= this.foodMin){
					//发送网络请求
					uni.showToast({
						title:"智能加粮成功",
						duration:2000,
						icon:'success',
						image:"../../static/images/ali-icon/success.png",
						mask:true
					})
				}else{
					uni.showToast({
						title:"智能加粮失败",
						duration:2000,
						icon:'error',
						image:"../../static/images/ali-icon/error.png",
						mask:true
					})
				}
			},
			//第一次喂食时间
			bindfirstTime(e){
				this.firstTime = e.target.value;
			},
			//第二次喂食时间
			bindsecondTime(e){
				this.secondTime = e.target.value;
			},
		}
	}
</script>

<style lang="css" scoped>	
	/* 共用属性 */
	.addNow,
	.addSetTime,
	.addSmart
	{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 40rpx;
	}
	/* 共用属性 */
	.fui-input__number{
	    display: inline-flex;
	    flex-direction: row;
	    align-items: baseline;
	}
	/* 共用属性 */
	.addNow fui-button,
	.addSetTime fui-button,
	.addSmart fui-button
	{
		margin-top: 20rpx;
	}
	/* 共用属性 */
	.setTime,
	.foodMaxium,
	.addKg,
	.addSmartMin,
	.addSmartMax
	{
		display: inline-flex;
	}
	
	.item{
		display: flex;
		flex-direction: row;
		margin-bottom: 20rpx;
	}

</style>
