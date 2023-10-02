<script setup>
import {nextTick, onMounted, reactive, ref} from 'vue';
import customNav from '../components/CustomNav.vue';
import about from '../containers/About.vue';
import spec from '../containers/Spec.vue';
import application from '../containers/Application.vue';
import dashboard from '../containers/Dashboard.vue';
import business from '../containers/Business.vue';
import {useStore} from '../store/index.js';

// 儲存螢幕寬度
const store = useStore();
store.setScreenWidth(document.body.clientWidth);

// 定義導覽列組件關聯
const customNavComponent = ref();

// 定義各區塊的位置
let position = reactive({});
// 監聽滾動事件，以觸發導覽列樣式變化
nextTick(() => {
  window.addEventListener('scroll', () => {
    toChangeNavOrder(window.scrollY, window.outerHeight);
  });
});

// 定義導覽列順序
function toChangeNavOrder(positionY, outerHeight) {
  let adjustment = outerHeight;
  if (document.body.clientWidth < 768) adjustment = 0;
  if (positionY <= position.spec - adjustment) {
    navItems[0].position = 'nav-3';
    navItems[1].position = 'nav-4';
    navItems[2].position = 'nav-5';
    navItems[3].position = 'nav-1';
    navItems[4].position = 'nav-2';
    customNavComponent.value?.toCloseNavItemsArea(true);
  } else if (positionY <= position.application - adjustment) {
    navItems[0].position = 'nav-2';
    navItems[1].position = 'nav-3';
    navItems[2].position = 'nav-4';
    navItems[3].position = 'nav-5';
    navItems[4].position = 'nav-1';
    customNavComponent.value.toCloseNavItemsArea(false);
  } else if (positionY <= position.dashboard - adjustment) {
    navItems[0].position = 'nav-1';
    navItems[1].position = 'nav-2';
    navItems[2].position = 'nav-3';
    navItems[3].position = 'nav-4';
    navItems[4].position = 'nav-5';
    customNavComponent.value.toCloseNavItemsArea(false);
  } else if (positionY <= position.business - adjustment) {
    navItems[0].position = 'nav-5';
    navItems[1].position = 'nav-1';
    navItems[2].position = 'nav-2';
    navItems[3].position = 'nav-3';
    navItems[4].position = 'nav-4';
    customNavComponent.value.toCloseNavItemsArea(false);
  } else {
    navItems[0].position = 'nav-4';
    navItems[1].position = 'nav-5';
    navItems[2].position = 'nav-1';
    navItems[3].position = 'nav-2';
    navItems[4].position = 'nav-3';
    customNavComponent.value.toCloseNavItemsArea(false);
  }
}

onMounted(() => {
  position = {
    about: document.getElementById('about').offsetTop,
    spec: document.getElementById('spec').offsetTop,
    application: document.getElementById('application').offsetTop,
    dashboard: document.getElementById('dashboard').offsetTop,
    business: document.getElementById('business').offsetTop,
  };
});

// 定義導覽列結構陣列
let navItems = reactive([
  {label: '摘要概覽', name: 'about', position: 'nav-3'},
  {label: '充電規格', name: 'spec', position: 'nav-4'},
  {label: '應用程式', name: 'application', position: 'nav-5'},
  {label: '後台管理', name: 'dashboard', position: 'nav-1'},
  {label: '商務合作', name: 'business', position: 'nav-2'},
]);

// 定義導覽列標籤切換方法
function toScroll(name) {
  window.scrollTo(0, position[name] - 20);
}

defineExpose({
  customNavComponent,
  position,
  navItems,
  toScroll,
});

</script>

<template>
  <div>
    <div class="container-xxl pb-5">
      <about id="about"/>
      <spec id="spec"/>
      <application id="application"/>
      <dashboard id="dashboard"/>
      <business id="business"/>
    </div>
    <div class="sticky-bottom">
      <custom-nav ref="customNavComponent" :nav-items="navItems" @to-scroll="toScroll"/>
    </div>
  </div>
</template>

<style scoped>

</style>