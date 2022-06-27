<template>
	<view>
		<u-navbar title="可抢订单"></u-navbar>
		<img style="position: fixed;z-index: -1;width: 100%;" src="/static/me-background.png">
		<view class="cards">
			<view class='card' v-for="(item, index) in orders" :key="index">
				<view class='location'>
					<view class="location-text" style="color: #F0604D">From</view>
					<view style="margin-bottom: 5px;">{{item.getLocation}}</view>
					<view class="location-text" style="color: #00bfbf">To</view>
					<view>{{item.toLocation}}</view>
					<view class="time">
						{{item.releaseTime}}-{{item.deadline}}
					</view>
				</view>
				<view class='reward'><text style="color: #F0604D;font-size: 30px;">{{item.reward}}</text><text>积分</text>
					<view class='from'>{{item.releaseUser}}</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orders: [{
					releaseTime: "今天16:25",
					deadline: '今天18:00',
					releaseUser: "张三",
					reward: 10,
					getLocation: '望星运动场菜鸟驿站',
					toLocation: '软件公寓3号楼801'
				},
				{
					releaseTime: "今天16:25",
					deadline: '今天18:00',
					releaseUser: "张三",
					reward: 10,
					getLocation: '望星运动场菜鸟驿站',
					toLocation: '软件公寓3号楼801'
				},
				{
					releaseTime: "今天16:25",
					deadline: '今天18:00',
					releaseUser: "张三",
					reward: 10,
					getLocation: '望星运动场菜鸟驿站',
					toLocation: '软件公寓3号楼801'
				}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.time{
		padding-top: 5px;
		font-size: 15px;
		color: #999999;
		font-weight: 500;
	}
	.from{
		padding-top: 15px;
		font-weight: 800;
		font-size: 20px
	}
	.reward {
		text-align: right;
		padding-right: 20px;
		padding-top: 20px;
	}

	.location {
		width: 65%;
		text-align: left;
		font-size: 18px;
		font-weight: bold;
	}

	.location-text {
		font-size: 12px;
		font-weight: 700;
	}

	.cards {
		padding-top: 80px;
	}

	.card {
		margin-left: 30px;
		margin-right: 30px;
		margin-bottom: 20px;
		padding: 15px;
		display: flex;
		justify-content: space-between;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
</style>
