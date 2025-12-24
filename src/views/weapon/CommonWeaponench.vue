<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice229.png" style="width: 100px;height: 100px;" />
    <span class="title">常见附魔</span>
  </div>
<p>    常见附魔每个都有12.5%概率出现。</p>
<p> <text class="gg">烈焰附魔</text> : <text class="gg">(等级+1)/(等级+3)</text> 的几率触发:触发附魔会使敌人燃烧8回合，已经在燃烧的敌人还会受到额外一次燃烧伤害。</p>
<p> <text class="gg">电击附魔</text> : <text class="gg">(等级+1)/(等级+4)</text> 的几率触发,对攻击目标附近的所有敌人造成40%的伤害</p>
<p> <text class="gg">寒霜附魔</text> : <text class="gg">(等级+1)/(等级+5)</text> 几率触发，触发使敌人冻伤3回合，最多叠加至6回合。</p>
<p> <text class="gg">恒动附魔</text> :储存上个杀敌一击的过剩能量:用来加强你的下次攻击以造成额外伤害。这份能量会慢慢随时间减弱，每回合减少2.5%，最少为每回合减少0.1点，<text class="gg">转移的伤害不能再次继承</text>。</p>
  </template>
  
  <script>
  export default {
    name:'CommonWeaponench',
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