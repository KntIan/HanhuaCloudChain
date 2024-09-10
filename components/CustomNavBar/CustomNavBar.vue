<template>
  <div class="custom-navbar">
    <div v-if="showBack" class="navbar-left" @click="goBack">
      <span class="back-icon">返回</span>
    </div>
    <div class="navbar-center">
      <span class="title">{{ title }}</span>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.custom-navbar {
  display: flex;
  height: 110rpx;
  background-color: red;
  color: white;
  align-items: flex-end;
  padding: 0 16px;
  padding-bottom: 18rpx;
}
.navbar-left, .navbar-right {
  flex: 1;
}
.navbar-center {
  flex: 6;
}
.back-icon {
  font-size: 16px;
}
.title {
  font-size: 18px;
}
</style>
