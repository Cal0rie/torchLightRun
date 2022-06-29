<template>
	<view>
		<u-navbar title="已发布订单"></u-navbar>
		<img style="position: fixed;z-index: -1;width: 100%;" src="/static/me-background.png">
		<view class="cards">
			<view @click="choose(index)" class='card' v-for="(item, index) in orders" :key="index">
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
					<view class='from'>{{item.state}}</view>
				</view>

			</view>
		</view>
		<view style="width: 100%;height: 300px;"></view>
		<u-popup v-model="showPopup" border-radius='20' closeable mode='center' width="300px" height="575px">
			<view class='content'>
				<view>
					<view style="font-size: 20px ;font-weight: 600;">来自</view>
					<view class="avatar-box">
						<u-avatar size=120 mode='circle' src="/static/avatar.png"></u-avatar>
						<view style="padding-left: 30px;">
							<view style="margin-bottom: 5px; font-size: 20px;font-weight: bold;">
								{{popupContent.releaseUser}}
							</view>
						</view>
					</view>

					<view class="content-title">取件地址</view>
					<view class="content-content">{{popupContent.getLocation}}</view>
					<view class="content-title">送件地址</view>
					<view class="content-content">{{popupContent.toLocation}}</view>
					<view class="content-title">发布时间</view>
					<view class="content-content">{{popupContent.releaseTime}}</view>
					<view class="content-title">截止时间</view>
					<view class="content-content">{{popupContent.deadline}}</view>
					<view class="content-title">预计重量</view>
					<view class="content-content">{{popupContent.heavy}}kg</view>
					<view class="content-title">订单状态</view>
					<view class="content-content">{{popupContent.state}}</view>


					<view class="content-reward">
						<text style="padding-right: 4px;color: #F0604D;font-size: 30px;">
							{{popupContent.reward}}</text>
						<text>积分</text>
					</view>
				</view>

			</view>
			<view class='btns'>
				<u-button :disabled="btnDisabled" @click="btn1" class='btn' shape="circle" type="primary">{{btnWord}}
				</u-button>
				<u-button @click="call" class='btn' shape='circle' type='success'>联系抢单者</u-button>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnWord: "",
				btnDisabled: false,
				showPopup: false,
				popupContent: {}, //弹框中的对象

				orders: [{
						releaseTime: "今天16:25",
						deadline: '今天18:00',
						releaseUser: "张三",
						reward: 10,
						getLocation: '望星运动场菜鸟驿站',
						toLocation: '软件公寓3号楼801',
						heavy: 1,
						state: '已抢单',
					},
					{
						releaseTime: "今天16:25",
						deadline: '今天18:00',
						releaseUser: "张三",
						reward: 10,
						getLocation: '望星运动场菜鸟驿站',
						toLocation: '软件公寓3号楼801',
						heavy: 2,
						state: '已取件'
					},
					{
						releaseTime: "今天16:25",
						deadline: '今天18:00',
						releaseUser: "张三",
						reward: 10,
						getLocation: '望星运动场菜鸟驿站',
						toLocation: '软件公寓3号楼801',
						heavy: 3,
						state: '已送达'
					},
					{
						releaseTime: "今天16:25",
						deadline: '今天18:00',
						releaseUser: "张三",
						reward: 10,
						getLocation: '望星运动场菜鸟驿站',
						toLocation: '软件公寓3号楼801',
						heavy: 3,
						state: '已完成'
					},
					{
						releaseTime: "今天16:25",
						deadline: '今天18:00',
						releaseUser: "张三",
						reward: 10,
						getLocation: '望星运动场菜鸟驿站',
						toLocation: '软件公寓3号楼801',
						heavy: 3,
						state: '已完成'
					}
				]
			}
		},
		mounted() {
		},
		methods: {
			choose(e) {
				console.log(e)
				this.popupContent = this.orders[e]
				console.log(this.popupContent)
				this.popupContent.id = e
				console.log(this.popupContent)
				this.showPopup = true
			},
			btn1() { //点击第一个按钮时的操作
				switch (this.btnWord) {

					case "确认收货":
						this.orders[this.popupContent.id].state = '已完成'
						this.showPopup = false
						console.log(this.orders)
						break

				}
				this.btnChange()

				// console.log(this.popupContent.id)
				// this.$refs.uToast.show({
				// 	title: '正在抢单',
				// 	type: 'primary',
				// 	duration: 2000,
				// })

				// //抢单成功时
				// this.$refs.uToast.show({
				// 		title: '抢单成功',
				// 		type: 'primary',
				// 		duration: 500,

				// })

			},
			call() {
				this.$refs.uToast.show({
					title: '正在开发中',
					type: 'success',
					duration: 2000,
				})
			},
			btnChange() {
				switch (this.popupContent.state) {
					case "已送达":
						this.btnWord = '确认收货'
						this.btnDisabled = false
						break

					case "已完成":
						this.btnWord = '订单完成'
						this.btnDisabled = true
						break

					case "已取件":
						this.btnWord = '未送件'
						this.btnDisabled = true
						break

					case "已抢单":
						this.btnWord = '未取件'
						this.btnDisabled = true
						break

				}
			}
		},
		watch: {
			popupContent(val) {
				this.btnChange()
			},

			orders(val) {

				this.btnChange()
			}


		}
	}
</script>

<style scoped>
	.btns {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -40px;
	}

	.btn {
		width: 120px;
		margin: 10px;
	}

	.content-reward {
		position: absolute;
		bottom: 80px;
		right: 40px
	}

	.content-content {
		margin-bottom: 10px;
		font-weight: 500;
		color: #5a5a5a;
	}

	.content-title {
		font-weight: 800;
		font-size: 20px;

	}

	.avatar-box {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.content {
		padding: 30px;
		display: flex;
		justify-content: space-between;
		border-radius: 20px;
	}

	.time {
		padding-top: 5px;
		font-size: 15px;
		color: #999999;
		font-weight: 500;
	}

	.from {
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
