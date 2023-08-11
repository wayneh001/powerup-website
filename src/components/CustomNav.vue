<script setup>
import {ref} from 'vue';
// 定義上層傳入 Segments 標籤陣列
const props = defineProps(['navItems']);
// 定義回傳上層新的導覽列
const emit = defineEmits(['toScroll']);
// 定義導覽列開關，在摘要概覽頁面時關閉
let navItemsArea = ref(false);
// 定義導覽列標籤開關
let navItemsToggle = ref(true);

// 定義上層導覽列開關觸發，當目前頁面停留在摘要概覽時，導覽列標籤不顯示
function toCloseNavItemsArea(toClose) {
  toClose ? navItemsArea.value = false : navItemsArea.value = true;
}

// 定義導覽列標籤切換方法
function toScroll(name) {
  emit('toScroll', name);
}

defineExpose({
  navItems: props.navItems,
  navItemsArea,
  navItemsToggle,
  toCloseNavItemsArea,
  toScroll,
});
</script>

<template>
  <div v-show="navItemsArea" class="position-relative">
    <div v-show="navItemsToggle">
      <button v-for="(item, index) in navItems" :key="index" :class="item.position"
              class="custom-nav btn"
              @click.prevent="toScroll(item.name)">{{
          item.label
        }}
      </button>
    </div>
    <button class="nav-main-circle" @click.prevent="navItemsToggle = !navItemsToggle"></button>
  </div>
</template>

<style scoped>
.nav-main-circle {
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0);
  border-top: 4px solid #06F675;
  border-left: 4px solid #06F675;
  border-radius: 5rem 0 0 0;
}

.nav-main-circle:active {
  border-right: 0 solid #06F675;
  border-bottom: 0 solid #06F675;
}
</style>