<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/property.gif" style="width: 100px;height: 100px;"/>
    <span class="title">怪物属性</span>
  </div>
    
<p>一些怪物具有特定的属性。特定属性可以使其获得一些抗性与免疫。(具有抗性效果减弱一半，具有免疫则完全无效)boss属性:复仇，震爆卷轴，即死抗性，同化效果(即变为我方单位的效果，如腐化)敌意符石，魂飞魄散免疫。</p>
<p>小型boss属性(蓝螃蟹之类的怪物):免疫同化效果，魂飞魄散</p>
<p>亡灵、恶魔属性:无</p>
<p>非生物:流血，毒气，中毒免疫</p>
<p>火属性:免疫火焰烈焰附魔，焰浪法杖抗性</p>
<p>酸属性:免疫腐蚀污泥，酸蚀抗性</p>
<p>电属性:各种电击抗性</p>
<p>冰属性:抵抗霜冻法杖，免疫霜冻、冻结</p>
<p>巨大体型:无法进入宽度为1的过道以及门</p>
<p>以上是属性固有的抗性与免疫，怪物除此之外可能还会有各种设定的抗性免疫。</p>
</template>

<script>
export default {
    name: 'PropertyView',
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