<template>
	<view class='head'></view>
	<view class='content'>
		
			<view class='head-content'>
				<u-button shape="circle" class="weather">
					<u-icon style="margin-right: 5px;" size="40" name="/static/浓云.png"></u-icon>早上好</u-button>
				<u-search :show-action="showSearch" class='search' shape="round"></u-search>
				<u-icon style="margin-left: 10px;" size="45" name="/static/签到.png"></u-icon>
			</view>
		<u-swiper class='swiper' :list="list" border-radius=45></u-swiper>
		<view class="btns">
			<view>
				<img style="width:200rpx" src="/static/扫码投递.png">
				<view class='text'>扫码投递</view>
			</view>
			<view><img style="width:200rpx" src="/static/上门预约.png">
			<view class='text'>上门预约</view></view>
			<view><img style="width:200rpx" src="/static/商家合作.png">
			<view class='text'>商家合作</view></view>
		</view>
		<view class='Info'>
			<img style="position: absolute;margin-top: -18px; left:20px; width:230rpx" src="/static/预约信息.png"></view>
			<view class='Info-board'>
				<view style="margin-top: 30px;">
				<view class='Info-content' v-for="(item, index) in order" :key="index">
					<img style="margin-right: 10px ;width:25px" src="/static/定位.png">
					<text style="width: 50% ;font-weight: bold;">{{item.position}}</text>
					<u-button size='mini' :hairLine="ifhairLine" class='green' shape="circle">可预约</u-button>
					{{item.distance}}
				</view>
				</view>
			</view>
			<view class='news'>
				<view class="news-title">
				<view style="background-color: #F87C3B;
				width: 10px;
				height:35px;
				border-radius: 5px;
				margin-right: 10px;">
					</view>
					<text style="font-weight: bold;
					font-size:20px">到手咨询</text>
					
					</view>
					<view><img style="width:350px" src="/static/垃圾分类.png">
					<view style="font-size: 16px;">校方回应校园代取快递外卖成热点，或成趋势</view>
					</view>
				</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				ifhairLine: false,
				showSearch: false,
				title: 'Hello',
				list:[{
					image:'/static/list1.png'
				}],
				order: [{
					position:'天津工业大学',
					condition:'可预约',
					distance: "100m",
				},
				{
					position:'天津工业大学',
					condition:'可预约',
					distance: "100m",
				}],		//预约信息数组
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.news{
		margin-top: 20px;
	}
	.news-title{
		display: flex;
		align-items: center;
		justify-content: left;
		margin-left: auto;
	}
	.green{
		color: #2CEEBB;
		background-color: #EDFEF8;
		border-style: none;
		justify-self: flex-end;
	}
	.Info-content{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		margin-right: 20px;
		margin-left: 15px;
	}
	.Info{
		margin-top: 30px;
	}
	.Info-board{
		width: 85%;
		height: 120px;
		border-radius: 20px;
		box-shadow: 2px 2px 4px 1px #d5d5d5;
	}
	.swiper{
		width: 90%;
		top: 20px;
	}
	.head-content{
		margin-top: 20px;
		top:20px;
		width: 90%;
		display: flex;
	}
	.weather{
		width: 27%;
		height: 35px;
		background-color: white;
		color: #F8D03B;
		font-weight: bold;
		margin-right: 10px;
	}
	.head{
		width: 100%;
		top: 0;
		position: fixed;
		background-image: linear-gradient(to bottom right, #F8D03B, #FAA029);
		height :20%;
		z-index: -1;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text{
		margin-top: -15px;
	}

	.btns{
		width: 90%;
		margin-top: 40px;
		text-align:center;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
