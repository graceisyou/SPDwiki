<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice140.png" style="width: 100px;height: 100px;"/>
    <span class="title">雷霆法杖</span>
  </div>
    
  <p>这根法杖由实心金属制成，这使它惊人地沉重。电弧在顶端两个内弯的又齿间跳跃。这根法杖能向任何目标放出强天的电弧，造成大量伤害。这种电能在附近多个敌人间跳跃，在水里会更强力。</p>
  <p>这根法杖的伤害为<text class="gg">5+法杖等级~10+5*法杖等级。</text></p>
  <p>通常情况下，电弧的伤害会随着跳跃目标的增多而衰减(衰减至 0.4+0.6/目标数量 倍)，处于有水地格中的目标不受伤害衰减影响</p>
  <p>若使用者受到波及，则受到一半伤害。</p>
  <p>战法效果<text class="gg">同电击附魔。</text></p>
  </template>
  
  <script>
  export default {
    name:'WandLightning',
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