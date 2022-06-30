<template>
	<view>
		<view class='head'>
			<view style="display: flex;align-items: center;">
			<u-switch style="margin-left: 25px;margin-right:12px" active-color="#F8D03B" v-model="relax"></u-switch>
			<view v-if='!relax'>休息一下吧</view>
			<view v-if='relax'>开始接单啦</view>
			</view>
			<u-icon style="margin-right: 25px;" size="50" name="/static/message.png" @click="jumpMessage"></u-icon>
		</view>
			<!-- <view class="page-section page-section-gap" >
				<map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view> -->
			<img class="map" src="/static/map.jpg">
			<u-icon style='bottom:50%;left:45%; position: absolute;width:45px' name="/static/position.png"></u-icon>
		<view @click="add">
			<img style="z-index: 5;right:20px;
			bottom:10px;position: absolute;width:80px;height:80px" src="/static/round_add_fill.png">
		</view>
		<u-popup closeable="true" v-model="show" mode="bottom" border-radius="18" height="200px">
			<view class="popup-head">任务</view>
				<view class="popup">
					
					<view @click="snatch" style="margin-right: 50px;">
					<u-icon style="" size="100" name="/static/抢单.png"></u-icon>
					<view class='text'>抢单</view>
					</view>
					<view @click="release">
					<u-icon style="" size="100" name="/static/发布.png"></u-icon>
					<view class='text'>发布</view>
					</view>
					
				</view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				relax: true,		//是否进入休息状态，停止接单
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {
			add(){		//点击添加按键时的操作
				this.show=true
			},
			snatch(){		//抢单
				uni.navigateTo({
					url:"/pages/snatch/snatch"
				})
			},
			release(){		//发布
				uni.navigateTo({
					url:"/pages/release/release"
				})
			},
			jumpMessage(){
				uni.switchTab({
					url:'/pages/chat/message'
				})
			}
		}
	}
</script>

<style scoped>
	.map{
		z-index: -1;
		position: fixed;
		width: 450px;
		height: 800px;
		transform: translateX(-35px);
	}
	.popup-head{
		font-weight: bold;
		font-size: 20px;
		padding: 20px;
	}
	.text{
		text-align: center;
	}
.head{
	height: 130rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	color: #9e9e9e;
}
.popup{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
