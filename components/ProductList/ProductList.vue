<template>
  <view class="product-list">
    <view v-for="(product, index) in products" :key="index" class="product-item">
      <image :src="product.image" class="product-image" />
      <view class="product-info">
        <text class="product-title">{{ product.title }}</text>
        <text class="product-description">{{ product.description }}</text>
        <button class="apply-button" @tap="applyNow(product.id)">立即申请</button>
      </view>
    </view>
  </view>
</template>

<script setup>
const products = [
  {
    id: 1,
    title: '政采建易贷',
    description: '单局可贷500万，放款快',
    image: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/04/ChMkJlbKyFOILgqwAAU1Zymsk68AALIAgFwgVgABTV_720.jpg'
  },
  {
    id: 2,
    title: '五冶保函',
    description: '基于五冶资合约总·效率高',
    image: 'https://pic2.zhimg.com/v2-5fb13110e1de13d4c11e6e7f5b8026da_r.jpg'
  },
  {
    id: 3,
    title: '电子履约保函',
    description: '电子履约总·出函快',
    image: 'https://ts1.cn.mm.bing.net/th/id/R-C.c4c52f16cc67c7409eff60a4fce2d152?rik=qBwdq1iz39HyPA&riu=http%3a%2f%2fwww.kutoo8.com%2fupload%2fimage%2f95093231%2f13.jpg&ehk=%2flbRri2PpwfxcQiqdvwcgv76NPhmuhxXUC9lhcyITcw%3d&risl=&pid=ImgRaw&r=0'
  }
];

const applyNow = (id) => {
  // 处理申请逻辑
  console.log(`申请产品 ID: ${id}`);
};
</script>

<style scoped>
.product-list {
  padding: 16rpx;
}

.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
  padding-bottom: 16rpx;
}

.product-image {
  width: 200rpx;
  height: 160rpx;
  margin-right: 30rpx;
  border-radius: 8rpx;
}

.product-info {
  display: grid;
  justify-items: start;
 
}

.product-title {
  font-weight: bold;
  /* font-size: 16rpx; */
  margin-bottom: 8rpx;
}

.product-description {
  color: #666;
  font-size: 24rpx;
  margin-bottom: 8rpx;
}

.apply-button {
  background-color: #f9dfc8;
  color: red;
  border-radius: 50rpx;
  margin-left: 0;
  font-size: 32rpx;
}
</style>
