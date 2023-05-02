<script>
	export default {
		globalData:{
			token:'',
		},
		methods:{
			//实现微信无感登录，仅用于实现保持用户登录态
			login(){
				uni.login({
					provider:'weixin',
					onlyAuthorize:true,
					success:res=>{
						console.log(res.code);
						uni.request({
							url:'https://hastur23.top/login',
							method:'POST',
							header: {
							    'Content-type': 'application/x-www-form-urlencoded'
							},
							data:{ code:res.code },
							success: res=>{
								if(res.data.token){
									uni.setStorageSync('token',res.data.token);
									uni.setStorageSync('openid',res.data.openid);
									this.globalData.token = res.data.token;
									this.checkLogin();
								}
							},
							fail: err=>{
								console.log(err);
							}
						})
					}
				})
			},
			
			checkLogin(){
				let token = uni.getStorageSync('token');
				if(token){
					// token存在，发送请求到checkLogin路由进行校验
					uni.request({
						url:'https://hastur23.top/checklogin',
						method:'POST',
						data:{ token:token },
						header: {
						    'Content-type': 'application/x-www-form-urlencoded'
						},
						success: res=>{
							if(res.data.is_login){
								// token有效，可以访问页面
								console.log('登录状态有效');
							}else{
								// token无效，需要重新登录获取新token
								console.log('登录状态失效');
								this.login();
							}
						},
						fail: err=>{
							console.log(err);
						}
					})
				}else{
					// 无token，需要重新登陆获取新token
					this.login();
				}
			}
		},
		onLaunch: function() { 
			this.checkLogin()
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
