<template>
	<view class="content">
		<view class="content-box">
			<view class="header">
				瀚华云链
			</view>
			<view class="login">
				<text @tap="navigateToRegister" class="welcome-text">欢迎使用瀚华云链，请登录</text>
			</view>
			<view class="banner">
				<ImageCarousel></ImageCarousel>
			</view>
			<view class="product">
				<view class="product_title">
					推荐产品
				</view>
				<view class="">
					<ProductList></ProductList>
				</view>
				
				<view class="intermediate_view">
					<image src="https://ts1.cn.mm.bing.net/th/id/R-C.127d91d9f76e45226b53e44c3b7fc269?rik=lUI7oe%2bLj95dng&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f24%2f8724.jpg&ehk=5aLCyHbd0q5ckO0qtGh3IsYspTVicAlfkCgIwsFXEeU%3d&risl=&pid=ImgRaw&r=0" class="product-image" mode="aspectFill" />
				</view>
			</view>
		</view>
		
		<!-- 底部导航栏 -->
		<view class="footer">
			<CustomTabBar
				:tabList="tabList"
				:currentIndex="currentIndex"
				:activeColor="activeColor"
				:inactiveColor="inactiveColor"
				@switchTab="switchTab"
			/>
		</view>
	</view>
</template>

<script setup>
	
import { ref } from 'vue';


import ImageCarousel from '@/components/carousel/carousel';
import ProductList from '@/components/ProductList/ProductList';
import CustomTabBar from '@/components/CustomTabBar/CustomTabBar';



const currentIndex = ref(0);
const activeColor = ref('#FF6600');
const inactiveColor = ref('#666666');

const switchTab = (index) => {
	currentIndex.value = index;
};

const navigateToRegister = () => {
  uni.navigateTo({
    url: '/pages/login/login'
  });
};
const tabList = ref([
	{
		// iconPath: '/static/tabbar/home.png',
		// selectedIconPath: '/static/tabbar/home-active.png',
		text: '首页',
		// pagePath: '/pages/index/index'
	},
	{
		// iconPath: '/static/tabbar/record.png',
		// selectedIconPath: '/static/tabbar/record-active.png',
		text: '待办',
		// pagePath: '/pages/record/record'
	},
	{
		// iconPath: '/static/tabbar/mine.png',
		// selectedIconPath: '/static/tabbar/mine-active.png',
		text: '我的',
		// pagePath: '/pages/mine/mine'
	}
]);
</script>

<style lang="scss" scoped>
	.content{
		.content-box{
			padding: 15rpx;
			.header{
				background-color: red;
				line-height: 130rpx;
				color: #fff;
			}
			.login{
				line-height: 100rpx;
			}
			.banner{
				height: 300rpx;
				overflow: hidden;
			}
			.product{
				.product_title{
					color: #666;
					margin: 28rpx 0 12rpx;
				}
			
			}
			.intermediate_view{
				height: 140rpx;
				overflow: hidden;
				border-radius: 10rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
