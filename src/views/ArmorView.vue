<template>
  <div class="box">
    <div class="left">
      <SidebarMenu type="2" @menu-clicked="handleMenuClick" />
    </div>
    <div class="right" v-loading="loading">
      <!-- 给右边增加滚动条 -->
      <el-scrollbar height="90vh">
        <router-view @route-change="handleRouteChange"></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { useLoadingStore } from '@/store/loading';
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'ArmorView',
  components: {
    SidebarMenu
  },
  computed: {
    loading() {
      const loadingStore = useLoadingStore();
      return loadingStore.loading;
    }
  },
  methods: {
    handleMenuClick() {
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(true);
    },
    handleRouteChange() {
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(false);
    }
  }
}
</script>

<style scoped lang="less">
.box {
  display: flex;
  border: 1px solid black;
}

.left {
  width: auto;
  height: 90vh;
}
.right {
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
}
</style>
