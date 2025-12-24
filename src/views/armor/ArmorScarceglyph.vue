<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice34.png" style="width: 100px;height: 100px;"/>
    <span class="title">稀有刻印</span>
  </div>

  <p>稀有刻印每个均有6.67%概率出现。</p>
  <p><text class="gg">磐岩刻印:</text>这个刻印让使用者无法闪避，但会根据根据敌我双方属性计算出闪避概率，此概率的<text class="gg">75%</text>转化为优先于护甲本身防御的百分比减伤。</p>
  <p><text class="gg">狱火刻印:</text>免疫燃烧效果。</p>
  <p><text class="gg">缠绕刻印</text>:每次受到攻击都有25%概率提供总数为 <text class="gg">2*等级+5的植被护甲。</text>植被护甲每次能吸收(层数+5)/2点伤害，并消耗等同于吸收伤害的护甲。</p>
  <p><text class="gg">反斥刻印</text>:每次被相邻单位击中都有<text class="gg">(等级+1)/(等级+5)</text>的概率将攻击者沿攻击反方向击退2格。</p>
  <p><text class="gg">迷彩刻印</text>:踩踏高草获得<text class="gg">3+等级/2回合</text>的隐身。</p>
 </template>
  
  <script>
  export default {
    name:'ArmorScarceglyph',
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