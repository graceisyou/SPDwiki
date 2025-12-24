<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice72.png" style="width: 100px;height: 100px;" />
    <span class="title">短剑</span>
  </div>
  <p>它确实相当短，只比一把匕首长出几厘米。</p>
    <p v-highlight-numbers>这是一件2阶武器，力量需求为12，基础伤害为2~15。</p>
<p v-highlight-numbers>    它的伤害成长为1~3，精准修正为1，攻击延迟为1，攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name: 'ShortSword',
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