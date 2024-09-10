<template>
  <view class="container">
    <swiper class="swiper" :autoplay="true" :interval="3000" :duration="500">
      <swiper-item v-for="(image, index) in images" :key="index">
        <image :src="image" class="slide-image" @tap="goToDetail(image)" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
name: 'Carousel';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';



// const router = useRouter();

const images = ref([
  'https://ts1.cn.mm.bing.net/th/id/R-C.b7d86f694b0c0e08fde610685b682e4c?rik=DMoesjOanCbjgA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f53%2f4653.jpg&ehk=6rJJj81MmBC7y9hUUyUQjg%2bcP14CDK64VTMct15wcy0%3d&risl=&pid=ImgRaw&r=0',
  // 'https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0',
  // 'https://img95.699pic.com/photo/50059/8720.jpg_wh860.jpg'
]);

// const goToDetail = (image) => {
//   // 跳转到详情页，并传递图片URL
//   router.push({
//     path: '/pages/detail/detail',
//     query: { image: encodeURIComponent(image) }
//   });
// };
</script>

<style scoped>
/* .container {
  padding: 20px;
} */

.swiper {
  height: 300px;
}

.slide-image {
  width: 100%;
  height: 100%;
}
</style>
