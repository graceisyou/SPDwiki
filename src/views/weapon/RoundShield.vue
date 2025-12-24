<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice81.png" style="width: 100px;height: 100px;" />
    <span class="title">圆盾</span>
  </div>
<p>    这个大盾可以有效格挡攻击，在危机时刻也可以作为不错的武器使用。</p>
<p v-highlight-numbers>这是一件3阶武器，力量需求为14，基础伤害为3~12。</p>
<p v-highlight-numbers>它的伤害成长为1~2,精准修正为1，攻击延迟为1，攻击距离为1。</p>
<p v-highlight-numbers>增加基础为0~4每级成长0~1的防御。</p>
  </template>
  
  <script>
  export default {
    name: 'RoundShield',
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