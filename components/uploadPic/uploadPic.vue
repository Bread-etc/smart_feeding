<template>
	<view class="uploadPic">
		<uni-file-picker
			v-model="imageValue" 
			title="请选择一张图片" 
			limit="1" 
			file-mediatype="image"
			fileExtname="png,jpg"
			mode="grid"
			@select="select"
			@progress="progress"
			@success="success"
			@fail="fail"
			:list-styles="listStyles"
			:image-styles="imageStyles"
			:autoUpload="false"
			ref="files"
		>
		</uni-file-picker>
		<fui-button text="上传图片" background="#ecbd6b" width="200rpx" @click="upload"></fui-button>
	</view>
</template>

<script>
	import store from '@/store/index.js'	//引入store
	export default {
		name:"uploadPic",
		data() {
			return {
				imageValue:[],
				petPicUrl:'',
				imageStyles:{
					width:64,
					height:64	
				}
			};
		},
		methods:{
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(data){
				console.log('上传进度：',data)
				this.petPicUrl = data.tempFile.url		//存储上传头像的链接
				console.log(this.petPicUrl);
				store.commit('petPic',this.petPicUrl)		//更改vuex中petPicUrl数据
			},
			
			// 上传成功
			success(e){
				console.log('上传成功')				
			},
			
			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			},
			//手动上传图片
			upload(){
				this.$refs.files.upload()
			}
		}
	}
</script>

<style>
	.uploadPic{
		display: flex;
		flex-direction: column;
		justify-items: center;
	}
	
	.uploadPic fui-button{
		margin-bottom: 30rpx;
		margin-top: 30rpx;
	}
</style>