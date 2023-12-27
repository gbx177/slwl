<template>
	<view>
		<uni-forms :modelValue="formData">
			<uni-forms-item>
				<input type="text" v-model="formData.tel" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item style="display: flex;">
				<input type="text" v-model="formData.token" placeholder="请输入验证码" />
				<text>获取验证码</text>
			</uni-forms-item>
		</uni-forms>
		<!-- 登录按钮 -->
		<button class="btn">登录</button>
	</view>
</template>

<script setup lang="ts">
	import {
		reactive
	} from 'vue'
	const formData = reactive({
		tel: '',
		token: ''
	})
</script>

<style >
	input {
		margin-bottom: 25px;
	}
	.btn{
		width: 309px;
		height: 50px;
		background: #FADCD9;
		border-radius: 24.77px;
		color: #fff;
	}
</style>
