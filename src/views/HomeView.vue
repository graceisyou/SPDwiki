<template>
  <div class="box">
    <div class="header">
      <el-menu :default-active="menuStore.activeTopMenu" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#b22a2a">
        <el-scrollbar>
          <div class="topmenun">
            <el-tooltip
                class="box-item"
                effect="light"
                :content="item.name"
                placement="top-start"
                v-for="(item, index) in MenuItem" :key="index"
            >
              <el-menu-item :index="item.index" >
                <el-image :src="isActive(item) ? item.activeImgSrc : item.imgSrc" style="width: 50px; height: 50px;"
                          fit="fill" />
              </el-menu-item>
            </el-tooltip>

          </div>
        </el-scrollbar>


        <el-sub-menu index="100">
          <template #title>
            <el-input v-model="searchQuery" style="width: 240px" size="large" placeholder="请输入搜索内容"
              suffix-icon="el-icon-search" @input="filterItems" clearable />
            <el-button type="primary" size="large" style="margin-left: 10px" @click="onSearch">
              搜索
            </el-button>
          </template>
          <el-menu-item v-for="item in filteredItems" :key="item.index" @click="handleSearchSelect(item)" class="wz">
            <el-image style="width: 48px; height: 48px;" :src="item.url" />
            <span> {{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>


      </el-menu>
    </div>
    <div class="main">
      <router-view />
    </div>
    <el-dialog v-model="dialogVisible" title="大家好！">
     <div>

       <p>我们正在积极建设和优化 <span class="gg">《破碎的像素地牢》注解网站</span>，致力于为所有玩家提供最全面、最详细的游戏信息和攻略。我们诚挚地邀请每一位热爱这款游戏的朋友加入我们的大家庭，一同为这款精彩的游戏贡献智慧和力量。</p>

       <p>如果您有任何修改意见或建议，<span class="gg">欢迎加入我们的交流群与我们联系</span>。在这里，您不仅可以分享自己的见解，还能与其他玩家畅聊游戏心得，共同探索游戏的奥秘。</p>

       <p>期待您的加入，让我们一起打造最棒的《破碎的像素地牢》社区！</p>
       <p>QQ群号：<span class="gg">714373371</span> <el-link type="primary" href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=6LHttx0IuDBXR_uTkBcSvCG8fw6T4U6R&authKey=vo8%2FHYtTszKrUuyfce3W8tFXEV%2FSnpbX%2BX416g6j5m4EDkNU4z5CnOt0bg9u1fO8&noverify=0&group_code=714373371">一键加群</el-link></p>
       <p>抖音攻略：<el-link type="danger" href="https://v.douyin.com/ijEkFp8p/">一键跳转</el-link></p>
       <p>安卓注解版APP：<el-button type="primary" @click="downloadApk">一键安装</el-button></p>
     </div>
      <template #footer>
        <div class="dialog-footer">

          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>

  </div>

  <!-- 折叠按钮 -->
  <div class="collapse-btn" @click="toggleSideBar">
    <el-icon size="50" color="white">
      <Menu />
    </el-icon>
  </div>
</template>

<script>
import { useMenuStore } from '@/store/menuStore';
import { useToggleStore } from '@/store/toggleStore';

export default {
  name: 'HomeView',
  data() {
    return {

      searchQuery: '',

      dialogVisible: true,

      MenuItem: [
        {
          name: '武器', path: '/weapon', index: '1', type: '1',
          imgSrc: '/images/topmenu/part-weapon.png',
          activeImgSrc: '/images/topmenu/part-weaponbright.png'
        },
        {
          name: '护甲', path: '/armor', index: '2', type: '2',
          imgSrc: '/images/topmenu/part-Slice1.png',
          activeImgSrc: '/images/topmenu/part-Slice1bright.png'
        },
        {
          name: '法杖', path: '/wand', index: '3', type: '3',
          imgSrc: '/images/topmenu/part-Slice4.png',
          activeImgSrc: '/images/topmenu/part-Slice4bright.png'
        },
        {
          name: '戒指', path: '/ring', index: '4', type: '4',
          imgSrc: '/images/topmenu/part-Slice5.png',
          activeImgSrc: '/images/topmenu/part-Slice5bright.png'
        },
        {
          name: '神器', path: '/artifact', index: '5', type: '5',
          imgSrc: '/images/topmenu/part-Slice6.png',
          activeImgSrc: '/images/topmenu/part-Slice6bright.png'
        },
        {
          name: '炼金', path: '/alchemy', index: '6', type: '6',
          imgSrc: '/images/topmenu/part-Slice13.png',
          activeImgSrc: '/images/topmenu/part-Slice13bright.png'
        },
        {
          name: '饰品', path: '/accessories', index: '7', type: '7',
          imgSrc: '/images/topmenu/13.gif',
          activeImgSrc: '/images/topmenu/13bright.gif'
        },
        {
          name: '怪物和NPC', path: '/monsterornpc', index: '8', type: '8',
          imgSrc: '/images/topmenu/part-Slice1.gif',
          activeImgSrc: '/images/topmenu/part-Slice1bright.gif'
        },
        {
          name: '杂项1', path: '/miscellaneous1', index: '9', type: '9',
          imgSrc: '/images/topmenu/part-Slice15.gif',
          activeImgSrc: '/images/topmenu/part-Slice17bright.gif'
        },
        {
          name: '杂项2', path: '/miscellaneous2', index: '10', type: '10',
          imgSrc: '/images/topmenu/part-Slice27.gif',
          activeImgSrc: '/images/topmenu/part-Slice30bright.gif'
        },
        {
          name: '模拟弹道', path: '/BallisticSimulation', index: '11', type: '11',
          imgSrc: '/images/topmenu/part-Slice35.gif',
          activeImgSrc: '/images/topmenu/part-Slice46bright.gif'
        },
        {
          name: '数据展示', path: '/TableList', index: '12', type: '12',
          imgSrc: '/images/topmenu/part-Slice35.gif',
          activeImgSrc: '/images/topmenu/part-Slice46bright.gif'
        }
      ],
      filteredItems: []
    };
  },
  computed: {
    menuStore() {
      return useMenuStore();
    },
    toggleStore() {
      return useToggleStore();
    },
    menuItems() {
      return this.menuStore.menuItems;
    }
  },
  methods: {

    //下载包
    downloadApk(){
      const apkUrl = 'https://7370-spd-9g1aoni7113f64ba-1314542588.tcb.qcloud.la/Statistical.APK?sign=6587ce04a802555c9ccefb9abcfb65be&t=1719144940';

      const downloadLink = document.createElement('a');
      downloadLink.href = apkUrl;
      downloadLink.setAttribute('download', 'Statistical.apk');
      downloadLink.setAttribute('target', '_blank');

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
    },
    filterItems() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) {
        this.filteredItems = [];
        return;
      }
      this.filteredItems = this.menuItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
    },
    onSearch() {
      if (this.filteredItems.length > 0) {
        const firstItem = this.filteredItems[0];
        this.handleSearchSelect(firstItem);
      } else {
        this.resetToInitialState();
        console.log('空查询');
      }
    },
    navigateTo(item) {
      this.$router.push(item.path).then(() => {
        this.menuStore.setActiveTopMenu(item.type);
        this.menuStore.setActiveSidebarMenu(item.index);
        localStorage.setItem('lastUpdateTime', Date.now().toString()); // 更新跳转时间
      });
    },
    handleSearchSelect(item) {
      this.navigateTo(item);
    },

    //顶部菜单切换，作用是，修改顶部高亮，默认侧边栏第一个高亮，默认跳转对应路径
    handleSelect(index) {
      this.menuStore.setActiveTopMenu(index);
      this.menuStore.setActiveSidebarMenu('1');
      const selectedItem = this.MenuItem.find(item => item.index === index);
      this.$router.push(selectedItem.path);
      localStorage.setItem('lastUpdateTime', Date.now().toString()); // 更新跳转时间

    },
    resetToInitialState() {
      this.menuStore.setActiveTopMenu('1');
      this.menuStore.setActiveSidebarMenu('1');

      this.$router.push('/weapon/WornShortsword');
    },
    isActive(item) {
      return this.menuStore.activeTopMenu === item.type;
    },
    checkLastUpdateTime() {
      const lastUpdateTime = localStorage.getItem('lastUpdateTime');
      if (lastUpdateTime) {
        const lastUpdateTimeNum = parseInt(lastUpdateTime, 10);
        const currentTime = Date.now();
        const tenMinutesInMillis = 10 * 60 * 1000;
        if ((lastUpdateTimeNum + tenMinutesInMillis) < currentTime) {
          // 如果超过10分钟，清空localStorage的lastUpdateTime
          localStorage.removeItem('lastUpdateTime');
          this.menuStore.setActiveTopMenu('1');
          this.menuStore.setActiveSidebarMenu('1');
          //跳转到首页
          this.$router.push('/home')

        }
      }
    },
    toggleSideBar() {
      //调用函数
      this.toggleStore.toggle();

    },



  },
  mounted() {

    this.checkLastUpdateTime()

  },




};
</script>

<style scoped lang="less">
.topmenun {
  display: flex;
}

.main {

  background-image: url('/images/background/main_background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.wz {
  span {
    color: white;
  }
}

.wz:hover {
  span {
    color: rgb(255, 255, 68);
  }
}

.collapse-btn {
  position: absolute;
  right: 10px;
  bottom: 50px;
  cursor: pointer;
}
.gg{
  color: rgb(255,255,68);
  text-shadow:
        -1px -1px 0 #000, /* 左上 */
        1px -1px 0 #000, /* 右上 */
      -1px 1px 0 #000, /* 左下 */
      1px 1px 0 #000; /* 右下 */
}
.el-link{
  font-size: 16px;
}
</style>
