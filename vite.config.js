import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/powerup-website",
    plugins: [vue()],
    server: {
        port: 5173,
    },
});
