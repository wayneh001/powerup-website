import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'App',
            component: () => import('../views/Landing.vue'),
        },
        {
            path: '/main-page',
            name: 'MainPage',
            component: () => import('../views/MainPage.vue'),
        }
    ]
});

export default router;