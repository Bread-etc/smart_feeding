<template>
	<view class="content">
		<view class="title"><span>立即换水</span></view>
		<view class="functionContent">
			<view class="addWaterNow">
				<h3>剩余水量:{{waterSurplus}}ml</h3>
				<view class="addWater">
					<h3>添加水量:</h3>
					<fui-input-number v-model="water" custom></fui-input-number>
					ml
				</view>
				<fui-button text="立即换水" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addWaterNow()"></fui-button>
			</view>
		</view>
		<view class="title"><span>定时换水</span></view>
		<view class="functionContent">
			<view class="addWaterSetTime">
				<view class="addWaterSet">
					<h3>每隔</h3>
					<fui-input-number v-model="waterChangeTime" custom ></fui-input-number>
					<h3>小时换水</h3>
				</view>
				<fui-button text="定时换水" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addWaterSetTime()"></fui-button>
			</view>	
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				water:50,													//默认换水量
				waterSurplus:store.state.dataStreams.surplus.restWater,		//将vuex中的食物剩余量传递到子组件
				waterChangeTime:12,											//默认换水间隔时间
			}
		},
		methods: {
			addWaterNow(){
				//发送网络请求换水
				/*
				uni.request({
				    url: 'http://api.heclouds.com/cmds?device_id=1055375296',
					method:'POST',
				    data: { 'key':'OPEN' },
				    header: {
						"api-key":store.state.device.apiKey,
				        "Content-Type": "application/x-www-form-urlencoded"
				    }, 	//设置请求头更改为form-data
				    success: res =>{
				    	console.log(res);
				    },
					fail: err =>{
						console.log(err);
					}
				})
				*/
				this.waterSurplus += this.water
				store.commit('changeWater',this.waterSurplus)
				console.log(this.waterSurplus);
				return this.waterSurplus
			},
			addWaterSetTime(){
				//发送网络请求定时换水
				/*
				uni.request({
				    url: 'http://api.heclouds.com/cmds?device_id=1055375296',
					method:'POST',
				    data: { 'key':'OPEN' },
				    header: {
						"api-key":store.state.device.apiKey,
				        "Content-Type": "application/x-www-form-urlencoded"
				    }, 	//设置请求头更改为form-data
				    success: res =>{
				    	console.log(res);
				    },
					fail: err =>{
						console.log(err);
					}
				})
				*/
				console.log('定时换水设置成功');
			}
		}
	}
</script>

<style lang="css" scoped>
	/* 共用属性 */
	.addWaterNow,
	.addWaterSetTime
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
	.addWaterNow fui-button,
	.addWaterSetTime fui-button
	{
		margin-top: 20rpx;
	}
	/* 共用属性 */
	.addWater,
	.addWaterSet
	{
		display: inline-flex;
	}
	/* 共用属性 */
	.fui-input__number{
	    display: inline-flex;
	    flex-direction: row;
	    align-items: baseline;
	}
</style>
