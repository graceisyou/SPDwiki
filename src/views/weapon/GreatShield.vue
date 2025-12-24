<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice95.png" style="width: 100px;height: 100px;" />
    <span class="title">巨型方盾</span>
  </div>
   <p> 与其说它是一面盾，不如说它是一堵能移动的墙。这一大块金属对于防御十分有效，但没有在攻击方面留下多少余地。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为18，基础伤害为5~18。</p>
<p v-highlight-numbers>精准修正为1，攻击延它的伤害成长为1~3，迟为1，攻击距离为1增加基础0~6，每级成长0~2的防御。</p>
  </template>
  
  <script>
  export default {
    name:'GreatShield',
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