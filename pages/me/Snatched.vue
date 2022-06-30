<template>
	<view>
		<u-navbar title="已抢订单"></u-navbar>
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
				<u-button @click="call" class='btn' shape='circle' type='success'>联系发布者</u-button>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
		<view class='tabbar'>
			<text>已获得:</text>
			<view>
				<text style="color: #F0604D;font-size: 30px;">{{totalReward}}</text><text>积分</text>
			</view>
		</view>
	</view>
</template>

<script>
	const AV = require('leancloud-storage');
	AV.init({
		appId: "UqpXHTrOW0OBVh1IvuGowWuN-gzGzoHsz",
		appKey: "HofTE9IcDA9Qmkg1wKqDy5vM",
		serverURL: "https://uqpxhtro.lc-cn-n1-shared.com"
	});
	export default {
		data() {
			return {
				totalReward: 0,
				btnWord: "",
				btnDisabled: false,
				showPopup: false,
				popupContent: {}, //弹框中的对象

				orders: [{
						releaseTime: "",
						deadline: '',
						releaseUser: "",
						reward: "",
						getLocation: '',
						toLocation: '',
						heavy: "",
						state: '',
					},
				]
			}
		},
		beforeCreate() {
			const query = new AV.Query('Packge');
			query.equalTo('id', '0');
			query.notEqualTo('state', '未抢单');
			query.find().then((res) => {
				// mine 是包含满足条件的 Student 对象的数组
				console.log(res);
				this.orders = res;
				// console.log(this.orders);
				for (let i = 0; i < res.length; i++) {
					this.orders[i].getLocation = res[i].attributes.getLocation;
					this.orders[i].toLocation = res[i].attributes.toLocation;
					this.orders[i].deadline = res[i].attributes.deadline;
					this.orders[i].releaseTime = res[i].attributes.releaseTime;
					this.orders[i].heavy = res[i].attributes.heavy;
					this.orders[i].reward = res[i].attributes.reward;
					this.orders[i].state = res[i].attributes.state;
					this.orders[i].releaseUser = res[i].attributes.releaseUser;
					this.orders[i].taskID = res[i].id;
				};
			
				console.log(this.orders);
			
			}).then(() => {
				this.load = false
				for (var i = 0; i < this.orders.length; i++) {
					if (this.orders[i].state == '已完成') {
						this.totalReward += this.orders[i].reward
					}
				}
			});
			
			
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

					case "取件完成":
						this.orders[this.popupContent.id].state = '已取件'
						this.showPopup = false
						console.log(this.orders)
						break

					case "送件完成":
						this.orders[this.popupContent.id].state = '已送达'
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
						this.btnWord = '已送达'
						this.btnDisabled = true
						break

					case "已完成":
						this.btnWord = '订单完成'
						this.btnDisabled = true
						break

					case "已取件":
						this.btnWord = '送件完成'
						this.btnDisabled = false
						break

					case "已抢单":
						this.btnWord = '取件完成'
						this.btnDisabled = false
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
	.tabbar {
		box-shadow: 1px 1px 7px 1px #d5d5d5;
		height: 60px;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: white;
		display: flex;
		justify-content: space-between;
		padding: 30px;
		align-items: center;
	}

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
