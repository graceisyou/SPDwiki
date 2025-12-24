<template>
  <el-menu
      :default-active="menuStore.activeSidebarMenu"
      class="el-menu-vertical-demo"
      @select="handleMenuSelect"
      v-if="toggleStore.isActive"

  >
    <el-menu-item
        v-for="(item, index) in filteredItems"
        :key="index"
        :index="item.index"
        ref="menuItems"
        @click="navigateTo(item)"
        
    >
     <el-image :src="item.url" fit="fill" style="width: 50px; height: 50px;"/>
      <template #title>{{ item.name }}</template>
      
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useMenuStore } from '@/store/menuStore';
import { useToggleStore } from '@/store/toggleStore';
import { nextTick } from 'vue';

export default {
  name: 'SidebarMenu',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      abc:false,
    }
  },
  computed: {
    menuStore() {
      return useMenuStore();
    },
    //调用函数
    toggleStore() {
      return useToggleStore();
    },
    
    filteredItems() {
      return this.menuStore.getMenuItemsByType(this.type);
    }
  },
  watch: {
    'menuStore.activeSidebarMenu': {
      immediate: true,
      handler(newVal) {
        this.scrollToMenuItem(newVal);
      }
    }
  },
  methods: {
    handleMenuSelect(index) {
      this.menuStore.setActiveSidebarMenu(index);
      localStorage.setItem('lastUpdateTime', Date.now().toString()); // 更新跳转时间
    },
    async scrollToMenuItem(index) {
      await nextTick();
      const menuItem = this.$refs.menuItems.find(item => item.index === index);
      if (menuItem) {
        const el = menuItem.$el;
        if (el && !this.isInViewport(el)) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    navigateTo(item) {
      this.$router.push(item.path).then(() => {
        this.menuStore.setActiveTopMenu(item.type);
        this.menuStore.setActiveSidebarMenu(item.index);
        localStorage.setItem('lastUpdateTime', Date.now().toString()); // 更新跳转时间
      });
    },

},
  mounted() {

  }
}
</script>

<style scoped>
.el-menu {
  width: auto;
  height: 90vh;
  overflow: auto; /* 如果内容超过高度，则显示滚动条 */
 
}
</style>
