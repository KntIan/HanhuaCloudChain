<template>
  <view class="container">
    <text class="title">找回密码</text>

    <view class="form-group">
      <input type="text" placeholder="请输入手机号" class="form-input" v-model="phone" />
    </view>

    <view class="form-group">
      <input type="text" placeholder="请输入验证码" class="form-input" v-model="code" />
      <button class="code-button" @tap="getCode">获取验证码</button>
    </view>

    <view class="form-group">
      <input type="password" placeholder="请输入新密码" class="form-input" v-model="newPassword" />
    </view>

    <view class="form-group">
      <input type="password" placeholder="确认新密码" class="form-input" v-model="confirmPassword" />
    </view>

    <button class="submit-button" @tap="submit">提交</button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const phone = ref('');
const code = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const getCode = () => {
  // 发送验证码逻辑
  console.log('发送验证码到手机号:', phone.value);
};

const submit = () => {
  // 提交找回密码逻辑
  console.log('手机号:', phone.value);
  console.log('验证码:', code.value);
  console.log('新密码:', newPassword.value);

  if (newPassword.value !== confirmPassword.value) {
    console.error("两次输入的密码不一致");
    return;
  }

  // 添加实际提交逻辑，例如调用API
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #fff;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.code-button {
  background-color: #ff5722;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
}

.submit-button {
  width: 100%;
  background-color: #ff5722;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
