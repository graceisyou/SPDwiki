<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice149.png" style="width: 100px;height: 100px;"/>
    <span class="title">注魂法杖</span>
  </div>
    
  <p>这根法杖形状很普通，是那暗红的色泽和镶在顶端的漆黑宝石让它显眼起来。这支法杖对盟友释放时会消耗你的部分生命能量并治疗或赐盾盟友，对敌人释放时会短暂魅惑敌人并回馈给你一定的生命能量。敌对亡灵生物会受到伤害而不是被魅惑。</p>
  <p>对敌人释放会魅惑敌人<text class="gg">5</text>回合，对亡灵生物改为造成 <text class="gg">3+等级~6+2*等级</text>的伤害，并为自己施加一个数值为<text class="gg">5+等级</text>的护盾。</p>
  <p>对盟友释放则会消耗<text class="gg">5%生命值</text>，并且给予盟友<text class="gg">3*等级+扣除生命值</text>的治疗量，溢出部分转化为护盾。</p>
  <p>战法效果为击中被你魅惑的目标时，获得<text class="gg">10+2*等级</text>的护盾，且下一次释放不消耗生命。</p>
  </template>
  
  <script>
  export default {
    name:'WandTransfusion',
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