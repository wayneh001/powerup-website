<script setup>
import segment from '../components/Segment.vue';
import {spec} from '../contents/index.js';
import {useStore} from '../store/index.js';

// 調用螢幕寬度
const store = useStore();
const screenWidth = store.screenWidth;

// 定義回傳圖片路徑方法
function toReturnSrcPath(path) {
  return new URL(`../public/img/${path}`, import.meta.url).href;
}

defineExpose({
  toReturnSrcPath,
});
</script>

<template>
  <div class="min-vh-100 mb-5 border-bottom border-white">
    <h1 class="text-main mb-3">{{ spec.title }}</h1>
    <h5 class="text-white mb-5">{{ spec.subTitle }}</h5>
    <segment :options="spec.segmentOptions" class="mb-5"></segment>
    <div class="d-flex overflow-scroll">
      <div v-for="(item, index) in spec.content" :key="index" class="col-12 col-md-2 text-white">
        <div class="w-100 d-flex justify-content-center">
          <img :alt="item.label" :src="toReturnSrcPath(item.image)" class="w-50 mb-3">
        </div>
        <div>
          <div class="mb-3 text-white text-center">{{ item.label }}</div>
          <p class="px-md-3" :class="{'height-rem-10': screenWidth >= 768}">{{ item.description }}</p>
          <div v-for="(sticker, stickerIndex) in item.stickers" :key="stickerIndex">
            <div class="d-flex align-items-center mb-3">
              <div class="sticker d-flex align-items-center justify-content-center me-3">{{ sticker[0] }}</div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="sticker d-flex align-items-center justify-content-center me-3">{{ sticker[1] }}</div>
              <span>kWh</span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="sticker d-flex align-items-center justify-content-center me-3">{{ sticker[2] }}</div>
              <span>% 市占率</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticker {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: #06F675;
  color: #262627;
}
</style>