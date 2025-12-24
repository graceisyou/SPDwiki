<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice113.png" style="width: 100px;height: 100px;" />
    <span class="title">震爆方石</span>
  </div>
<p>    这种奇形怪状的武器小到可以握在掌心，但极其沉重。命中目的地后，这种武器会把冲击力发散到一个小范围内，对波及区域内的所有单位造成伤害。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为17，基础伤害为10~25，每件的耐久度为5。</p>
<p>这件武器成长为+2/+5。无论击中目标与否，掷出即消耗耐久度。效果类似无击退的冲击波法杖。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileCube',
    data() {
      return {
  
  
      }
    }
  }
  
  </script>
  
  <style scoped lang="less">
  .titlebox{
    display: flex;
    align-items: center;
    .title{
      font-size: 40px;
      color: rgb(255,255,68);
      text-shadow:
            -2px -2px 0 #000, /* 左上 */
            2px -2px 0 #000, /* 右上 */
          -2px 2px 0 #000, /* 左下 */
          2px 2px 0 #000; /* 右下 */
    }
  }
  :deep(.gg){
    color: rgb(255,255,68);
    text-shadow:
          -2px -2px 0 #000, /* 左上 */
          2px -2px 0 #000, /* 右上 */
        -2px 2px 0 #000, /* 左下 */
        2px 2px 0 #000; /* 右下 */
  }
  p{
    color: white;
    text-shadow:
          -1px -1px 0 #000, /* 左上 */
          1px -1px 0 #000, /* 右上 */
        -1px 1px 0 #000, /* 左下 */
        1px 1px 0 #000; /* 右下 */
  }
  </style>