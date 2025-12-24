<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice92.png" style="width: 100px;height: 100px;" />
    <span class="title">战锤</span>
  </div>
    <p>很少有生物能抵挡这铅铁巨块的辗压，但也只有最强壮的冒险者才能有效使用它。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为18，基础伤害为5~24。</p>
<p v-highlight-numbers>它的伤害成长为1~6，精准修正为1.2，攻击延迟为1，攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name:'WarHammer',
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