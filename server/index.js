const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

//开发者信息
const wx = {
	appid:'wx91f0b611d8a7a22d',					//开发者appid
	secret:'49d751ee6090aa2332d887adaba5a009'	//开发者秘钥
}

//模拟数据库存放信息
var db = {
	user:{},			//userinfo
	session:{},			//保存session_key和openID
}


//处理post请求
app.post('/login',(req,res)=>{
	console.log(req.body.code);
	//code,appid,secret都有了就发起请求到微信接口服务校验
	var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wx.appid + '&secret=' + wx.secret + '&js_code=' + req.body.code + '&grant_type=authorization_code'
	request(url,(err,response,body)=>{
		//可以获取到 session_key(会话信息) openid(用户唯一标识)
		console.log('body:' + body)
		//上面的session信息是字符串数据，通过JSON.parse()转成js对象
		var session = JSON.parse(body)
		
		//利用时间戳生成token
		var token = 'token_' + new Date().getTime()
		db.session[token] = session		//db.session[token]动态添加到对象中
		console.log(db);
		if(!db.user[session.openid]){
			db.user[session.openid] = {
				state:1		//成功登录获取状态
			}
		}
		res.json({
			token:token		//返回token
		})
	})
})

//处理get请求
app.get('/checklogin',(req,res)=>{
	var session = db.session[req.query.token]
	console.log('checklogin:',session);
	//将用户是否登录的布尔值返回给客户端
	res.json({
		is_login:session !== undefined
	})
})

//监听3000端口
app.listen(3000,()=>{
	console.log('server running at http://127.0.0.1:3000');
})

//存放你的数据
var data = {
	
}