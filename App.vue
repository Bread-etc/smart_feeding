<script>
	export default {
		globalData:{
			token:null
		},
		methods:{
			//实现微信无感登录，仅用于实现保持用户登录态
			login(){
				uni.login({
					success:res=>{
						uni.request({
							url:'http://127.0.0.1:3000/login',
							method:'POST',
							data:{ code:res.code },
							success:res=>{
								//将请求成功的token打印
								console.log('token:',res.data.token);
								//将token保存为全局数据（多页面使用->全局globalData)
								this.globalData.token = res.data.token
								//将token保存在数据缓存中(下次登录无需重新获取token)
								uni.setStorage({
									key:'token',
									data:res.data.token
								})
							}
						})
					}
				})
			},
			
			checkLogin(callback){
				let token = this.globalData.token
				if(!token){
					//从缓存中获取token
					token = uni.getStorageSync('token')
					if(token){
						this.globalData.token = token
					}else{
						callback({ is_login:false })
					}
				}
				//发送request请求校验是否token存在
				uni.request({
					url:'http://127.0.0.1:3000/checklogin',
					data:{
						token:token
					},
					success:res=>{
						console.log(res)
						callback({
							is_login:res.data.is_login
						})
					}
				})
			}
		},
		onLaunch: function() { 
			//检测用户是否登录(无感登录)
			this.checkLogin(res=>{
				console.log('is_login:',res.is_login)		//is_login的值为undefined时返回
				//未登录-->login()
				if(!res.is_login){
					//调用login()
					this.login()
				}
			})
		},
		onShow: function() {
 
		},
		onHide: function() {
		},
	}
</script>

<style> 
	/*每个页面公共css */
	@import './common/fui-app.css';
	@import './components/firstui/fui-theme/fui-theme.css';
	*{
		font-family:‘Segoe UI’, Tahoma, Geneva, Verdana, sans-serif;
	}
	
	/* 公共样式 */
	.content{
		display: flex;
		width: 750rpx;
		flex-direction: column;
	}
	.title{
		display: flex;
		position: relative;
		margin-left: 10rpx;
		font-size: 30rpx;
		font-weight: 600;
		padding: 20rpx 25rpx;
		line-height: 40rpx;
		flex-direction: row;
		align-items: center;
	}
	.title:before{
		content: "";
		background-color: #465CFF;
		width: 4rpx;
		height: 38rpx;
		position: absolute;
		left: 15rpx;
		top: 40%;
		margin-top: -10rpx;
		border-radius: 5rpx;	
	}
	.functionContent{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
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
	h3{
		font-size: 40rpx;
		font-weight: 500;
		margin-bottom: 20rpx;
	}
</style>
