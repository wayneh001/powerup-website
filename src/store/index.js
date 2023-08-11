import {defineStore} from 'pinia';

export const useStore = defineStore('store', {
    state: () => {
        return {
            screenWidth: '',
        };
    },
    actions: {
        setScreenWidth(width) {
            this.screenWidth = width;
        },
    }
});