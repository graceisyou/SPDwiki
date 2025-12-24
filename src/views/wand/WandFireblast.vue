<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice138.png" style="width: 100px;height: 100px;"/>
    <span class="title">焰浪法杖</span>
  </div>
    
  <p>这根法杖由红漆木制成，饰以金叶，这使它看起来相当庄严。它的顶端噼啪作响嘶嘶而鸣，渴望着释放其强大的魔法。</p>
  <p>这根法杖的伤害为<text class="gg">(1+法杖等级)*消耗充能~2*消耗充能*(消耗充能+法杖等级)。</text></p>
  <p>一次使用2充能会给目标造成<text class="gg">4回合残废</text>效果一次使用3充能会给目标造成<text class="gg">4回合麻痹</text>效果。</p>
  <p>释放消耗30%的当前充能，向上取整，最少1充能。</p>
  <p>当每次使用1/2/3充能时，火焰会波及5/7/9格远的范围。</p>
  <p>战法效果是<text class="gg">使敌人起火</text>(等同于烈焰附魔)。</p>
  </template>
  
  <script>
  export default {
    name:'WandFireblast',
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