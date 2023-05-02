<template>
  <view class="content">
	<view class="title"><span>添加宠物</span></view>
	<view class="functionContent">
		<uploadPic></uploadPic>
		<form>
			<input v-model="petName" placeholder="请输入宠物姓名" />
			<input v-model="petBirthday" placeholder="请输入宠物生日" />
			<button @click="submitPetInfo">提交</button>
		</form>
	</view>
  </view>
</template>

<script>
	export default{
		data(){
			return{
				petName:'',
				petBirthday:'',
			}
		},
		methods:{
			submitPetInfo(){
				// 获取填写的宠物名字和出生日期
				const petName = this.petName;
				const petBirthday = this.petBirthday;
				const openid = uni.getStorageSync('openid')
				
				// 发送POST请求到后端服务器
				uni.request({
					url:'https://hastur23.top/petinfo',
					method:'POST',
					header:{
						"Content-Type":"application/json",
					},
					data:{
						openid:openid,
						petName:petName,
						petBirthday:petBirthday,
					},
					success: res=>{
						// 显示提交成功信息
						uni.showToast({
							title:'提交成功',
							icon:'success',
						});
					},
					fail: err=>{
						// 显示提交失败信息
						uni.showToast({
							title:'提交失败',
							icon:'error',
						});
					},
				});
			},
		}
	}
</script>

<style>
	.functionContent{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
