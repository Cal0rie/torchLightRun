<template>
	<view>
		<img style="position: fixed;z-index: -1;width: 100%;" src="/static/me-background.png">
		<view class="avatar-box">
			<u-avatar mode='circle' :src="src"></u-avatar>
			<view style="color:white;padding-left: 15px;">
				<view style="margin-bottom: 5px; font-size: 20px;font-weight: bold;">{{userID}}</view>
				<view>简介：{{userIntro}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '/static/avatar.png',
				userID: "无名",
				userIntro:'该用户未设置简介'
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.avatar-box {
		height: 180px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
