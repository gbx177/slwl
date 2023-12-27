<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<button @click="go">登录</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import {getLogin} from '../../api/login' 
const go = ()=>{
	getLogin({
		 account: "xbsj001",
		 password: "123456"
	}).then(res=>{
		console.log(res);
	})
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
