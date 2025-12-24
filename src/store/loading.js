import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        loading: true,
    }),
    actions: {
        setLoading(value) {
            this.loading = value;
        },
    },
});
