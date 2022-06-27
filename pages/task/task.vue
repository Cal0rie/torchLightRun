<template>
	<view>
		<view class='head'>
			<u-switch style="margin-left: 25px;" active-color="#F8D03B" v-model="relax"></u-switch>
			<u-icon style="margin-right: 25px;" size="50" name="/static/message.png"></u-icon>
		</view>
			<!-- <view class="page-section page-section-gap" >
				<map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view> -->
			<img style="z-index: -1;;width:450px;height:800px" src="/static/预览图.png">
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
				
			}
		}
	}
</script>

<style scoped>
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
}
.popup{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
