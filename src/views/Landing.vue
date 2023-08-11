<script setup>
import router from '../router/index.js';
import {useStore} from '../store/index.js';

// 儲存螢幕寬度
const store = useStore();
store.setScreenWidth(document.body.clientWidth);

setTimeout(() => {
  router.push('/main-page');
}, 5000);

</script>

<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center">
    <router-link to="/main-page">
      <img src="../public/img/logo.svg" alt="Logo" class="img-fluid animate__animated animate__fadeIn">
    </router-link>
  </div>
</template>

<style scoped>
.animate__fadeIn {
  animation-duration: 3s;
}
</style>