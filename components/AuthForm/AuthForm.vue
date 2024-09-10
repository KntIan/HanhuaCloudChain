<template>
	<view class="tab-bar">
				  <CustomNavBar title="瀚华云链"></CustomNavBar>
			
		</view>
		<view class="bg_img" style="background-color: indianred;height: 220rpx;border-radius: 0 0 8rpx 8rpx;">
			
		</view>

  <view class="auth-container">
    <text class="welcome-text">欢迎来到瀚华云链</text>
    <form @submit.prevent="handleSubmit" class="form-group">
      <view class="form-item">
        <text class="form-group-label">+86</text>
        <input type="text" v-model="form.phone" placeholder="请输入手机号" class="input" />
      </view>
	  <view class="form-item">
	    <text class="form-group-label">验证码</text>
	    <input type="text" v-model="form.phone" placeholder="请输入验证码" class="input" />
	    <button type="button" @click="sendVerificationCode" class="code-button">获取验证码</button>
	  </view>
      <view v-if="mode === 'register'" class="form-item">
        <input type="text" v-model="form.referralCode" placeholder="员工推荐码" class="input" />
      </view>
	  <view v-if="mode === 'register'" class="form-item">
	    <input type="text" v-model="form.intention" placeholder="意向办理业务" class="input" />
	  </view>
      <view v-if="mode === 'register'" class="form-item">
        <input type="password" v-model="form.password" placeholder="请输入密码" class="input" />
      </view>
      <view v-if="mode === 'register'" class="form-item">
        <input type="password" v-model="form.confirmPassword" placeholder="确认密码" class="input" />
      </view>
      <view class="agreement">
      	<label class="agreement-label" >
      	  <checkbox :checked="form.agree" class="checkbox"/> 我已阅读并同意
      	  <navigator url="/pages/terms" open-type="navigate" class="link">用户协议</navigator>
      	  和
      	  <navigator url="/pages/privacy" open-type="navigate" class="link">隐私政策</navigator>
      	</label>
      </view>
      <button type="submit" class="submit-button">{{ props.mode === 'login' ? '登录' : '注册' }}</button>
    </form>
	
	<view class="switch-link" v-if="mode === 'login'">
		<navigator >密码登录</navigator> 
		<text >|</text>
	  <navigator >找回密码</navigator> 
	  <text >|</text>
	  <navigator url="/pages/Register/Register" open-type="redirect">立即注册</navigator>
	</view>
    
	<navigator v-if="mode === 'register'" class="goLogin" url="/pages/login/login" @click="dian" open-type="redirect">已有账号可直接登录</navigator>
	
  </view>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';


import CustomNavBar from '../CustomNavBar/CustomNavBar'


// 定义props
const props = defineProps({
  mode: {
    type: String,
    default: 'login',
    validator: (value) => ['login', 'register'].includes(value),
  },
});

const form = ref({
  phone: '',
  verificationCode: '',
  referralCode: '',
  password: '',
  confirmPassword: '',
  agree: false,
  intention:'',
});

const sendVerificationCode = () => {
  console.log('发送验证码到手机号:', form.value.phone);
};

const handleSubmit = () => {
  if (!isLogin.value && form.value.password !== form.value.confirmPassword) {
    uni.showToast({ title: '密码和确认密码不一致', icon: 'none' });
    return;
  }
  if (!form.value.agree) {
    uni.showToast({ title: '请同意用户协议和隐私政策', icon: 'none' });
    return;
  }
  console.log(`${isLogin.value ? '登录' : '注册'}信息:`, form.value);
};

</script>

<style scoped>
/* .auth-container {
  padding: 20px;
  width: 640rpx;
  margin: 0 auto;
  margin-top: -40rpx;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 2rpx 2rpx 20rpx 2rpx #666;

}

.logo {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  display: block;
}

.welcome-text {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: inline-block;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-group-code{
	border-bottom: 1rpx solid #999;
}

.form-group-code input{
	padding-left: 0;
}


.form-group-label{
	display: inline-block;
	width: 100rpx;
}

.form-input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.code-button {
  background-color: transparent;
  color: red;
  padding: 10px;
  border-radius: 5px;
  font-size: 32rpx;
}

.code-button::after,
.submit-button::after{
	border: none;
	
}

.submit-button {
  width: 100%;
  background-color: #ff5722;
  color: #fff;
  padding: 15px;
  border-radius: 20rpx;
  margin: 20px 0;
  line-height: 40rpx;
}

.submit-button[disabled]{
	background-color: #feefe3;
}

.footer {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #999;
} */

.auth-container {
  
  padding: 40rpx;
  width: 640rpx;
  margin: 0 auto;
  margin-top: -40rpx;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 2rpx 2rpx 20rpx 2rpx #666;
}
.logo {
  width: 100rpx;
  margin-bottom: 20rpx;
}
.welcome-text {
  text-align: center;
  font-size: 40rpx;
  margin-bottom: 40rpx;
  width: 100%;
  display: inline-block;
}
/* .form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
} */
.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 15rpx;
}
.form-group-label{
	line-height: 1rpx;
	display: inline-block;
	width: 100rpx;
}
.input {
  flex: 1;
  padding: 8rpx;
  border: none;
  outline: none;
  font-size: 28rpx;
}
.code-button {
  background-color: transparent;
  color: red;
  border-radius: 10rpx;
  font-size: 32rpx;
}

.code-button::after,
.submit-button::after{
	border: none;
	
}
.submit-button {
  width: 100%;
  background-color: #ff5722;
  color: #fff;
  padding: 15px;
  border-radius: 20rpx;
  margin: 20px 0;
  line-height: 40rpx;
}

.agreement-label {
  margin-top: 30rpx;
  font-size: 28rpx;
  display: flex;
}
.checkbox{
	transform: scale(0.6);
	margin-top: -2rpx;
}
.link {
  color: #007aff;
}

.switch-link {
 /* margin-top: -60rpx; */
 display: flex;
 justify-content: space-around;
 font-size: 14px;
 color: #999;
 padding: 0 62rpx;
}

.goLogin{
	/* margin-top: -60rpx; */
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	color: #999;
}
</style>
