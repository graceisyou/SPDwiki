<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice96.png" style="width: 100px;height: 100px;" />
    <span class="title">魔岩拳套</span>
  </div>
   <p> 这个巨大的拳套由一匹红布和层层覆盖在布上的魔法岩石交织而成。戴上后，布料紧紧裹住你的整个前臂，让厚重的岩板变得像一层坚硬的皮肤。要有足够的力量才能将如此沉重的武器自如挥舞，但正是这种力量和重量的结合让这件武器发挥出可怕的威力。</p>
  <p v-highlight-numbers>这是一件5阶武器，力量需求为18，基础伤害为5~15。</p>
<p v-highlight-numbers>它的伤害成长为1~3，精准修正为1，攻击延迟为0.5，攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name: 'StoneGauntlet',
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