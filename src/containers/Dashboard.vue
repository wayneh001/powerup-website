<script setup>
import {ref} from 'vue';
import segment from '../components/Segment.vue';
import {dashboard} from '../contents/index.js';
import {useStore} from '../store/index.js';

// 調用螢幕寬度
const store = useStore();
const screenWidth = store.screenWidth;

// 定義啟用中標籤物件
let activeSegment = ref(dashboard.segments.overview);

// 定義切換標籤時內容重新渲染方法
function toChangeContent(path) {
  activeSegment.value = dashboard.segments[path];
}

// 定義回傳圖片路徑方法
function toReturnSrcPath(path) {
  return new URL(`../public/img/${path}`, import.meta.url).href;
}

defineExpose({
  activeSegment,
  toReturnSrcPath,
});

</script>

<template>
  <div class="min-vh-100 mb-5 border-bottom border-white">
    <h1 class="text-main mb-3">{{ dashboard.title }}</h1>
    <h5 class="text-white mb-5">{{ dashboard.subTitle }}</h5>
    <segment :options="dashboard.segmentOptions" class="mb-5" @to-change-label="toChangeContent"/>
    <div class="mb-5 text-white">
      <div v-for="(item, index) in activeSegment.description" :key="`2${index}`" class="mb-1 text-white">{{
          item
        }}
      </div>
    </div>
    <div class="d-flex">
      <img v-for="(item, index) in activeSegment.image" :key="`2${index}`" :alt="item.alt"
           :src="toReturnSrcPath(item.path)" class="img-fluid border border-white"
           :class="{'w-75': screenWidth >= 768}">
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>

</style>