<template>
	<view class="loginBox">
		<view class="loginType">
			<div class="left">{{flag==false?'手机号登录':'账号登录'}}</div>
			<div class="right" @click="qh">
				<text>{{flag==false?'账号登录':'手机号登录'}}</text>
				<text> > </text>
			</div>
		</view>
		<!-- 表单 -->
		<tel v-if="flag==false"></tel>
		<user v-else></user>

	</view>
</template>

<script setup lang="ts">
	import tel from '../../components/telLogin/telLogin.vue'
	import user from '../../components/userLogin/userLogin.vue'
	
	import {
		ref
	} from 'vue'
	const flag = ref(false)
	const qh = () => {
		flag.value = !flag.value
	}
	
</script>

<style>
	.loginBox {
		width: 100%;
		padding: 30px 30px 0;
		box-sizing: border-box;
	}

	.loginType {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 25px;
	}

	.left {
		font-size: 24px;
		font-weight: 700;
	}

	.right {
		color: #EF4F3F;
	}
	
	.btn{
		width: 309px;
		height: 50px;
		background: #FADCD9;
		border-radius: 24.77px;
		color: #fff;
	}
</style>
