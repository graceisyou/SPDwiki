<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice91.png" style="width: 100px;height: 100px;" />
    <span class="title">巨剑</span>
  </div>
<p>    这把大剑进行的每次沉重挥舞都能造成大量伤害。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为18，基础伤害为5~30。</p>
<p v-highlight-numbers>它的伤害成长为1~6，精准修正为1，攻击延迟为1，攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name:'GreatSword',
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