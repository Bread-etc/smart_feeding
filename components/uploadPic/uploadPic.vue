<template>
	<view>
		<fui-button text="选择图片" background="#ecbd6b" width="350rpx" height="80rpx" bold @click="chooseImage"></fui-button>
		<image v-if="imageUrl" :src="imageUrl" mode="aspectFit" @click="previewImage"></image>
		<fui-button v-if="imageUrl" text="删除照片" background="#ecbd6b" width="350rpx" height="80rpx" bold @click="deleteImage"></fui-button>
	</view>
</template>

<script>
	import store from '@/store/index.js'	//引入store
	export default {
		name:"uploadPic",
		data() {
			return {
				imageUrl:''
			}
		},
		methods:{
			chooseImage(){
				uni.chooseImage({
					count:1,						//只能选择一张图片
					sourceType:['album'],			//从相册选图
					extension:['jpg','png'],		//后缀只有jpg和png
					crop:{							//裁剪为64*64的图片
						width:64,
						height:64
					},
					success: res=>{
						const tempFilePath = res.tempFilePaths[0]
						this.uploadImage(tempFilePath)
					},
					fail: err=>{
						console.error(err)
					}
				})
			},
			uploadImage(filePath){
				uni.uploadFile({
					url:'',		//开发者服务器地址
					filePath:filePath,
					name:'file',
					success: res=>{
						const data = JSON.parse(res.data)
						this.imageUrl = data.url
					},
					fail: err=>{
						console.error(err)
					}
				})
			},
			previewImage(){
				uni.previewImage({
					urls:[this.imageUrl]
				})
			},
			deleteImage(){
				this.imageUrl = ''
			}
		}
	}
</script>

<style>
	
</style>