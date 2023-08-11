<script setup>
import {ref} from 'vue';
import {useStore} from '../store/index.js';

// 調用螢幕寬度
const store = useStore();
const screenWidth = store.screenWidth;

// 定義上層傳入 Segments 標籤陣列
const props = defineProps(['options']);
// 定義回傳上層新的 Segments 標籤
const emit = defineEmits(['toChangeLabel']);
// 定義啟用中標籤
let activeLabel = ref(props.options[0].label);

// 定義 Segments 標籤切換方法
function toChangeLabel(label, path) {
  activeLabel.value = label;
  emit('toChangeLabel', path);
}

defineExpose({
  options: props.options,
  toChangeLabel,
  activeLabel,
});
</script>

<template>
  <div>
    <div class="segment-container-shape p-1">
      <button v-for="(option, index) in options" :key="index"
              :class="[{'active-segment': option.label === activeLabel}, {'w-100': screenWidth < 768}]"
              class="segment-shape btn btn-dark-gray px-md-5 text-center"
              @click.prevent="toChangeLabel(option.label, option.path)">{{ option.label }}
      </button>
    </div>
  </div>

</template>

<style scoped>
.segment-container-shape {
  border-radius: 0.375rem;
}

.segment-shape {
  padding: 0.375rem;
  border-radius: 0;
}

.segment-shape:hover {
  background-color: #383839 !important;
  border-radius: 0.375rem;
}

.segment-shape:active {
  border-color: rgba(0, 0, 0, 0.5) !important;
}
</style>