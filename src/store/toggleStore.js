// src/store/toggleStore.js
import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggle', {
  state: () => ({
    // 默认值为 true
    isActive: true
  }),
  // 可以添加 actions 来更改状态
  actions: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
});