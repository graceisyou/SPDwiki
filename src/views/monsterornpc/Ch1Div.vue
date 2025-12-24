<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/goo/part-Slice7.png" style="width: 100px;height: 100px;"/>
    <span class="title">第一区域boss</span>
  </div>
    
<p>第五层--第一个boss。战斗不分阶段，无特殊场地效果，无召唤，boss异能主要是蓄力攻击、水中恢复以及半血以下属性提高。</p>
<p>goo的通常行动为普通攻击，<text class="gg">1/5</text>概率(半血以下为<text class="gg">1/2</text>)替换为蓄力。</p>
<p>蓄力需要两回合，移动和不处于追猎状态会终止蓄力，期间不会攻击但是攻击距离暂时变为2。</p>
<p>蓄力结束时使用蓄力攻击，为<text class="gg">2倍</text>命中<text class="gg">3倍</text>伤害的<text class="gg">单体</text>攻击，目标为英雄时(不管是否被闪避均会)扣除100排行榜boos战分数。</p>
<p>当它在水中时，每口合回复<text class="gg">1</text>点生命值。开启挑战时回复量会随着在水中的回合逐渐加1,最高为3，离开水时重置。</p>
<p>击杀后获得1000排行榜boos战分数。</p>
</template>

<script>
export default {
    name: 'Ch1Div',
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