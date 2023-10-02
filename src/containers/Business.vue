<script setup>
import {ref} from 'vue';
import segment from '../components/Segment.vue';
import {business} from '../contents/index.js';
import {useStore} from '../store/index.js';
import validator from '../utility/validator.js';

// 調用螢幕寬度
const store = useStore();
const screenWidth = store.screenWidth;

// 定義啟用中標籤物件
let activeSegment = ref(business.segments.manufacturer);

// 定義切換標籤時內容重新渲染方法
function toChangeContent(path) {
  activeSegment.value = business.segments[path];
}

// 定義須回傳的表單物件
let data = {
  name: '',
  phone: '',
  email: '',
  firm: '',
};

defineExpose({
  activeSegment,
  data,
});
</script>

<template>
  <div class="min-vh-100">
    <h1 class="text-main mb-3">{{ business.title }}</h1>
    <h5 class="text-white mb-5">{{ business.subTitle }}</h5>
    <segment :options="business.segmentOptions" class="mb-5" @to-change-label="toChangeContent"/>
    <div class="mb-5 text-white">
      <div v-for="(item, index) in activeSegment.description" :key="`3${index}`" class="mb-1 text-white">{{
          item
        }}
      </div>
    </div>
    <div>
      <Form :class="{'w-25': screenWidth >= 768, 'w-100': screenWidth < 768}">
        <div class="mb-3">
          <Field id="name" v-model="data.name" :rules="validator.required" class="form-control" name="name"
                 placeholder="請輸入您的姓名"/>
          <ErrorMessage class="ms-2 text-danger" name="name"/>
        </div>
        <div class="mb-3">
          <Field id="phone" v-model="data.phone" :rules="validator.requiredPhone" class="form-control" name="phone"
                 placeholder="請輸入您的電話"/>
          <ErrorMessage class="ms-2 text-danger" name="phone"/>
        </div>
        <div class="mb-3">
          <Field id="email" v-model="data.email" :rules="validator.requiredEmail" class="form-control"
                 name="email" placeholder="請輸入您的電子郵件"/>
          <ErrorMessage class="ms-2 text-danger" name="email"/>
        </div>
        <div class="mb-3">
          <Field id="firm" v-model="data.firm" :rules="validator.required" class="form-control"
                 name="firm" placeholder="請輸入您的公司名稱"/>
          <ErrorMessage class="ms-2 text-danger" name="firm"/>
        </div>
        <button class="btn btn-main w-100" type="submit">送出</button>
      </Form>
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>
.form-control {
  color: #ffffff;
  background-color: #262627;
  background-clip: padding-box;
  border: 1px solid #aaafbc;
}

.form-control::placeholder {
  color: #aaafbc;
  opacity: 1;
}
</style>