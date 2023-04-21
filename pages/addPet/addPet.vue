<template>
	<view class="content">
		<view class="title"><span>添加宠物</span></view>
		<view class="functionContent">
			<form @submit="formSubmit">
				<uploadPic></uploadPic>
				<view>
					<view>宠物名字:</view>
					<input name="name" placeholder="请输入爱称" />
				</view>
				<view>
					<view>出生年月:</view>
					<picker name="date" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				<button form-type="submit">确认</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format:true
			})
			return {
				date:currentDate,					//当前时间
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 30;				//开始时间（现在时间30年前）
				} else if (type === 'end') {
					year = year + 2;				//结束时间（现在时间两年后）
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange(e){
				this.date = e.detail.value			//更改事件e的value
			},
			formSubmit(e){
				console.log(e);
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
	}
</script>

<style>
	.functionContent{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
