<template>
	<view class="content">
		<view class="title"><span>普通加粮</span></view>
		<view class="functionContent">
			<view class="addNow">
				<h3>剩余粮食:{{foodSurplus}}g</h3>
				<view class="addKg">
					<h3>添加克数:</h3>
					<view class="NumInput">
						<fui-input-number v-model="food"  min="100" max="500" step="100"></fui-input-number>
					</view>
				</view>
				<fui-button text="立即添加" background="#fff" color="#333" borderColor="#333" bold width="200rpx" @click="addFoodNow()"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
import store from '@/store/index.js'
	export default {
		data() {
			return {
				food:100,														//添加食物克数
				foodSurplus:parseInt(store.state.dataStreams.surplus.food),		//将vuex中的食物剩余量传递到子组件
				reqData:1
			}
		},
		methods:{
			addAlert(){
				if(this.foodSurplus <= 20){
					uni.showToast({
						title:'请及时换粮',
						duration:2000,
						icon:'none',
						mask:true
					})
				}
			},
			addFoodNow(){
				this.reqData = this.food / 100
				//发送网络请求添加食物
				uni.request({
				    url: 'http://api.heclouds.com/cmds?device_id=1076689798',
					method:'POST',
				    data: { "Servo":this.reqData },
				    header: {
						"api-key":store.state.device.apiKey,
				        "Content-Type": "application/json"
				    }, 	//设置请求头更改为json
				    success: res =>{
						console.log(this.reqData);
						console.log('添加成功');
						this.foodSurplus += this.food
						store.commit('changeFood',this.foodSurplus)
						console.log(this.foodSurplus);
				    },
					fail: err =>{
						console.log(err);
					}
				})
			}
		},
		onShow() {
			this.addAlert()
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
	
	.NumInput{
		font-size: 20px;
		display: inline-flex;
		flex-direction: row;
		align-items: flex-start;
		margin-bottom: 10rpx;
	}

</style>
