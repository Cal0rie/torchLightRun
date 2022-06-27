<template>
	<view>
		<img class="map" src="/static/预览图.png">
		<u-navbar title="发布订单"></u-navbar>
		<img class="background" src="/static/me-background.png">

		<view class='card'>
			<view class='location'>
				<view class="location-text" style="color: #F0604D">From</view>
				<u-field :clearable="false" v-model="getLocation" label="取件地址" placeholder="请填写取件地址" style="margin-bottom: 10px;">
				</u-field>
				<view class="location-text" style="color: #00bfbf">To</view>
				<u-field :clearable="false" v-model="toLocation" label="收件地址" placeholder="请填写收件地址" style="margin-bottom: 10px;">
				</u-field>
				<view class="location-text" style="color: #F0604D">Time</view>
				<u-field :clearable="false" v-model="deadlineView" label="截止时间" placeholder="请填写截止时间" style="margin-bottom: 10px;"
					@click="this.timeShow=true">
				</u-field>
				<view class="location-text" style="color: #00bfbf">Heavy</view>
				<u-field :clearable="false" v-model="heavy" label="预估重量" placeholder="预估重量,单位kg" style="margin-bottom: 10px;">
				</u-field>
				<view class="location-text" style="color: #F0604D">Reward</view>
				<u-field :clearable="false" v-model="reward" label="积分悬赏" placeholder="系统收取5%手续费" style="margin-bottom: 10px;">
				</u-field>
				
				<u-button @click="submit" shape='circle' class='btn'>发布</u-button>
				
				<u-picker :clearable="false" @confirm="confirmTime" :params="timeParams" mode="time" v-model="timeShow"></u-picker>
				<u-toast ref="uToast" />
			</view>


		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				getLocation: '',
				toLocation: '',
				deadlineView: '',		//显示的格式
				deadline: "",		//保存的格式,时间戳格式
				releaseTime: '',		//将发布时间保存为时间戳格式
				heavy: '',
				reward:'',
				//以上为应传入参数
				
				timeShow: false,
				timeParams: {
					month: true,
					day: true,
					hour: true,
					minute: true,
				},
			}
		},
		methods: {
			getUnixTime(dateStr){		//将日期转换为时间戳
			    var newstr = dateStr.replace(/-/g,'/'); 
			    var date =  new Date(newstr); 
			    var time_str = date.getTime().toString();
			    return time_str.substr(0, 10);
			},
			confirmTime(e) {
				console.log("2022/"+e.month+'/'+e.day+" "+e.hour+":"+e.minute+":00")
				var oldTime= this.getUnixTime("2022/"+e.month+'/'+e.day+" "+e.hour+":"+e.minute+":00")
				
				this.deadlineView=e.month+'/'+e.day+" "+e.hour+":"+e.minute		//显示为 月/日/时间 格式
				
				this.deadline=oldTime			//保存为时间戳格式
				console.log("截止时间保存为"+this.deadline)
				this.releaseTime = Date.parse(new Date());		//保存发布时间为时间戳格式
				console.log("发布时间保存为"+this.releaseTime)
			},
			submit(){		//发布订单
				if(this.getLocation&&this.toLocation&&this.deadline&&this.releaseTime&&this.heavy&&this.reward){
					this.$refs.uToast.show({
					title: '正在发布订单',
					type: 'primary',
					duration: 1000,
				})
				
					this.$refs.uToast.show({
						title: '发布成功',
						type: 'success',
						duration: 1000,
					})
				}
				else{
					this.$refs.uToast.show({
						title: '请检查您的表单',
						type: 'warning',
						duration: 1000,
					})
				}
			}
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.btn{
		color: black;
	}
	.map {
		z-index: -1;
		position: fixed;
		width: 450px;
		height: 800px;
		transform: translateX(-35px);
	}

	.background {
		transform: rotate(180deg);
		position: fixed;
		bottom: 0;
		z-index: -1;
		width: 100%;
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
		text-align: left;
		font-size: 18px;
		font-weight: bold;
	}

	.location-text {
		font-size: 12px;
		font-weight: 700;
	}

	.card {
		margin-left: 30px;
		margin-right: 30px;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
		position: fixed;
		bottom: 100px;
	}
</style>
