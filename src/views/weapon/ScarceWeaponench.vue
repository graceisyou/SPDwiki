<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice229.png" style="width: 100px;height: 100px;" />
    <span class="title">稀有附魔</span>
  </div>
<p>   稀有附魔每个都有6.67%概率出现。</p>
<p> <text class="gg">招架附魔</text> : <text class="gg">(等级+4)/(等级+40)</text> 的几率触发给予自身持续5回合的护盾，护盾量为(等级+2).</p>
<p> <text class="gg">繁茂附魔</text> : <text class="gg">(等级+1)/(等级+3)</text> 的几率触发:触发后会在目标所在处或周围长1株草，并有 <text class="gg">等级/10</text>的概率额外长一株草。没有其他有效位置时才会在自身所在位置长草</p>
<p> <text class="gg">索敌附魔</text>:攻击距离+1。</p>
<p><text class="gg">幸运附魔</text>:在击败目标时有 <text class="gg">(等级+4)/(等级+40)</text>的几率触发，触发时对应财富戒指较低两档的奖励。</p>
<p> <text class="gg">紊乱附魔</text>:每一击的都会造成另一种附魔的效果，但索敌不会出现。</p>
<p><text class="gg">弹性附魔</text>: <text class="gg">(等级+1)/(等级+5)</text>概率击退目标2格。</p>
  </template>
  
  <script>
  export default {
    name:'ScarceWeaponench',
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