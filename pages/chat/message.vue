<template>
	<view>
		<u-navbar :isBack="false" title="消息"></u-navbar>
		<view class='card1'>
			<view class='card1-message' style="margin-bottom: 8px;">
				<img src='/static/通知消息.png' style="width: 150rpx;margin-right: 15px;">
				<view>
					<view style="padding-bottom: 8px ;font-size: 20px;font-weight: 600;">通知消息</view>
					<view style='color:#B5BCC7'>{{notice}}</view>
				</view>
			</view>
			<view class='card1-message'>
				<img src='/static/互动消息.png' style="width: 150rpx;margin-right: 15px;">
				<view>
					<view style="padding-bottom: 8px ;font-size: 20px;font-weight: 600;">通知消息</view>
					<view style='color:#B5BCC7'>{{interactive}}</view>
				</view>
			</view>
			<view>

			</view>
		</view>
		<!-- <u-avatar style="width: 150rpx;margin-right: 15px;" src='/static/avatar.png'></u-avatar> -->
		<view class='card1'>
			<view class='card1-message' v-for="(item, index) in messages" :key="index" @click="enterMessage(item)">
				<img src='/static/avatar.png' style="width: 150rpx;margin-right: 15px;">
				<view>
					<view style="padding-bottom: 8px ;font-size: 20px;font-weight: 600;">{{item.username}}</view>
					<view style='color:#B5BCC7'>{{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notice: "夏日活动开始啦!!",
				interactive: "李四关注了你",
				messages: [
					{
						username: '李四',
						content: '快递给你送到啦，给个好评吧',
					}
				]
			}
		},
		methods: {
			enterMessage(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	.card1 {
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
		padding: 15px;
		
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;

	}

	.card1-message {
		display: flex;
		align-items: center;
		
	}
</style>
