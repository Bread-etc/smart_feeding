<template>
  <view>
    <view v-if="imageUrl">
      <image :src="imageUrl" mode="aspectFit" />
    </view>
    <view>
      <button @click="chooseImage">选择图片</button>
      <button @click="uploadImage">上传图片</button>
    </view>
  </view>
</template>

<script>
	export default{
		data(){
			return{
				imageUrl:''
			}
		},
		methods:{
			chooseImage() {
			  uni.chooseImage({
			    count:1,									//只能选择一张图片
			    sourceType:['album'],						//从相册选图
			    extension:['jpg','png'],					//后缀只有jpg和png
			    crop:{										//裁剪为64*64的图片
			    	width:64,
			    	height:64
			    },
			    success: res => {
					const tempFilePaths = res.tempFilePaths[0]
					uni.getImageInfo({
						src:tempFilePaths,
						success: res=>{
							this.imageUrl = res.path
						}
					})
			    }
			  })
			},
			// 上传图片
			uploadImage(){
				uni.getStorage({
					key:'token',
					success: tokenRes=>{
						uni.getStorage({
							key:'openid',
							success: openidRes=>{
								uni.uploadFile({
									url:'https://hastur23.top/upload',
									filePath:this.imageUrl,
									name:'file',
									formData:{
										openid: openidRes.data
									},
									header:{
										'Authorization': `Bearer ${tokenRes.data}`,
									},
									success: res=>{
										// 成功上传
										uni.showToast({
											title:'上传成功',
											icon:'none'
										})
									},
									fail: err=>{
										// 失败上传
										uni.showToast({
											title:'上传失败',
											icon:'none'
										})
									}
								})
							}
						})
					}
				})
			}
		}
	}
</script>
