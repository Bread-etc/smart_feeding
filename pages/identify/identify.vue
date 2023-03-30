<template>
	<view class="content">
		<view class="title"><span>宠物环境</span></view>
		<view class="functionContent">
			<view>
				<h3>室内温度:{{temperature}}℃</h3>
				<h3>室内湿度:{{humidity}}%</h3>
			</view>
		</view>
		<view class="title"><span>宠物体温</span></view>
		<view class="functionContent">
			<view>
				<h3>宠物体温:{{petTemperature}}℃</h3>
			</view>
		</view>
		<view class="title"><span>进食曲线</span></view>
		<view class="functionContent">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				temperature:26,
				humidity:20,
				petTemperature:37
			}
		},
		methods: {
			getPetData(){
				//通过发送网络请求获得温度湿度和宠物体温以及进食曲线
			}
		}
	}
</script>

<style lang="css" scoped>

</style>
