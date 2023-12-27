<template>
	<view>
		<uni-forms :modelValue="formData">
			<uni-forms-item>
				<input type="text" v-model="formData.account" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item>
				<input type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<!-- 登录按钮 -->
		<button class="btn" v-if="formData.account!=''&& formData.password!=''" @click="go" style="background-color: #EF4F3F;">登录</button>
		<button class="btn" v-else style="background-color: #FADCD9;">登录</button>
	</view>
</template>

<script setup lang="ts">
	import {
		reactive
	} from 'vue'
	import {getLogin} from '../../api/login'
	const formData = reactive({
		account: '',
		password: ''
	})
	const go = () =>{
		getLogin(formData).then(res=>{
			console.log(res);
		})
	}
	
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