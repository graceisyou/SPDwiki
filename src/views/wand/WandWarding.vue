<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice147.png" style="width: 100px;height: 100px;"/>
    <span class="title">哨卫法杖</span>
  </div>
    
  <p>这个短小的金属法杖尖端上有一颗亮紫色宝石悬空浮动。这根法杖并不能直接攻击敌人，但可以召唤出哨卫元素与哨卫结晶。</p>
  <p>每根法杖能提供的能量是<text class="gg">2+等级。</text>维持1~6阶哨卫分别需要消耗1~6点能量。如果所有哨卫法杖的能量和不高于维持所有哨卫的消耗，则不能再放置或是升级哨卫。</p>
  <p>每根法杖能提供的能量是2+等级。维持1~6阶哨卫分别需要消耗1~6点能量。如果所有哨卫法杖的能量和不高于维持所有哨卫的消耗，则不能再放置或是升级哨卫。</p>
  <p>哨卫初始视野为4，每次升阶视野+1。</p>
  <p>1~3阶哨卫在分别攻击1,3,5次后消散，4~6阶哨卫则是受到5,67点伤害。</p>
  <p>哨卫的攻击延迟为1，伤害为<text class="gg">2+等级~8+4*等级。</text></p>
  <p>4~6阶哨卫分别具有35,54,84点生命，具有(0~3+层数/2)*(7-阶数)的防御，拥有4+层数的闪避。</p>
  <p>哨卫具有非生物、无法移动属性，免疫睡眠、恐惧、魂飞魄散、腐化、眩晕。</p>
  <p>战法效果为:(等级+1)/(等级+5)概率对所有4/5/6阶哨卫恢复9/12/16点生命。</p>
  </template>
  
  <script>
  export default {
    name:'WandWarding',
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