import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
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