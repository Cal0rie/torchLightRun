<template>
	<view class="wrap">
		<u-toast ref="uToast"></u-toast>
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册校园积跑</view>
			<input class="u-border-bottom" type="number" v-model="tel" placeholder="请输入账号" />
			<input class="u-border-bottom" type="password" v-model="pas1" placeholder="请输入密码" />
			<input class="u-border-bottom" type="password" v-model="pas2" placeholder="请确认密码" />
			<u-tag class='tag' :show="showInfo" text="请确认两次输入密码一致" type='error' />
			<button :disabled="disabled" @tap="submit" :style="[inputStyle]" class="getCaptcha">提交</button>
			<view class="alternative">
				<view class="password"></view> <!-- 此处放“找回密码” -->

			</view>
		</view>
		<view class="buttom">
		</view>
		<u-notify type='warning' top=100 message="检查你的账号密码" :show="show1"></u-notify>
		<u-loading-page :loading="loading" loading-text="正在努力为您登录..."></u-loading-page>
	</view>
</template>

<script>
	// //调用leancloud
	// const AV = require('leancloud-storage');
	// const { Query, User } = AV;

	export default {
		data() {
			return {
				showInfo: false,
				loading: false,
				disabled: true,
				show: false,
				tel: '',
				pas1: '',
				pas2: '',
				show1: false
			}
		},
		created() {

		},
		computed: {
			inputStyle() {
				let style = {

				};
				if (this.tel && this.pas1 && this.pas2) {
					if (this.pas1 == this.pas2) {
						this.showInfo = false;
						this.disabled = false;
						style.color = "#fff";
						style.backgroundColor = "#f9ae3d";
					} else {
						this.showInfo = true;
					}
				}
				return style;
			}
		},
		methods: {
			submit() {		//点击提交时的操作
				this.loading = true //加载页开启
				
				//注册成功时处理
				uni.switchTab({
					url: '/pages/index/index'
				})
				this.loading = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		margin-bottom: 40rpx;
	}

	.login {
		color: black;
		background-color: "#3c9cff";
		border: none;
		font-size: 30rpx;
		padding: 12rpx 0;
		margin-top: 30rpx;

		&::after {
			border: none;
		}
	}

	.u-border-bottom {
		margin-bottom: 40rpx !important;
	}

	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;
			}
		}
	}
</style>
