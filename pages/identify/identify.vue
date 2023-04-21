<template>
	<view class="content">
		<view class="title"><span>宠物环境</span></view>
		<view class="functionContent">
			<view>
				<h3>室内温度:{{temperature}}℃</h3>
			</view>
		</view>
		<view class="title"><span>进食曲线</span></view>
		<view class="functionContent">
			
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				temperature:store.state.dataStreams.temp
			}
		},
		methods: {
			getPetData(){
				//通过发送网络请求获得温度和宠物体温以及进食曲线
			}
		}
	}
</script>

<style lang="css" scoped>

</style>
