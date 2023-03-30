<template>
	<view class="content">
		<view class="title"><span>添加宠物</span></view>
		<view class="functionContent">
			<form @submit="formSubmit">
				<uploadPic></uploadPic>
				<view>
					<view>姓名</view>
					<input name="input" placeholder="这是一个输入框" />
				</view>
				<view>
					<view>出生年月</view>
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				<button form-type="submit">111</button>
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
				date:currentDate,			//当前时间
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
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

</style>
