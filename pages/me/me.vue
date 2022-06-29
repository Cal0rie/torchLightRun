<template>
	<view>
		<img style="position: fixed;z-index: -1;width: 100%;" src="/static/me-background.png">
		<view class="avatar-box">
			<u-avatar size=120 mode='circle' :src="src"></u-avatar>
			<view style="color:white;padding-left: 15px;">
				<view style="margin-bottom: 5px; font-size: 20px;font-weight: bold;">{{userID}}</view>
				<view>简介：{{userIntro}}</view>
			</view>
		</view>
		<view class="data-board">
			<view class="singleData" @click="jumpReleased">
				<view class="red">{{finishOrder}}</view>
				<view class="gray">已发布</view>
			</view>
			<view class="singleData" @click="jumpSnatched">
				<view class="red">{{settleOrder}}</view>
				<view class="gray">已抢单</view>
			</view>
			<view class="singleData">
				<view class="red">{{income}}</view>
				<view class="gray">收入</view>
			</view>
		</view>
		<view class="cell-board">
			<u-cell-group :border="border">
					<u-cell-item :arrow="true" icon="shopping-cart" title="已发布" @click="jumpReleased"></u-cell-item>
					<u-cell-item :arrow="true" icon="order" title="已抢单" @click="jumpSnatched"></u-cell-item>
					<u-cell-item :arrow="true" icon="red-packet" title="我的钱包"></u-cell-item>
					<u-cell-item :arrow="true" icon="rmb-circle" value="未保证" title="保证金"></u-cell-item>
					<u-cell-item :arrow="true" icon="error-circle" title="帮助中心"></u-cell-item>
					<u-cell-item :border-bottom="border" :arrow="true" icon="setting" title="设置"></u-cell-item>
				</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: false,
				src: '/static/avatar.png',
				userID: "无名",
				userIntro:'该用户未设置简介',
				finishOrder: 8,		//完成订单
				settleOrder: 8,		//结算订单
				income: "12.00",		//今日收入
			}
		},
		methods: {
			jumpReleased(){
				uni.navigateTo({
					url:"/pages/me/Released"
				})
			},
			jumpSnatched(){
				uni.navigateTo({
					url:"/pages/me/Snatched"
				})
			},
		}
	}
</script>

<style scoped>
	.singleData{
		padding: 20px;
	}
	.avatar-box {
		padding-top: 20px;
		padding-right: 80px;
		height: 130px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cell-board{
		margin-left: 30px;
		margin-right: 30px;
		padding: 15px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
	.data-board{
		margin-left: 30px;
		margin-right: 30px;
		margin-bottom: 20px;
		padding: 15px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
	.red{
		font-size: 20px;
		color: #F0604D;
	}
	.gray{
		color: #B5BCC7;
	}
</style>
