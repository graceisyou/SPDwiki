<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice163.png" style="width: 100px;height: 100px;"/>
    <span class="title">神偷袖章</span>
  </div>
    <p>这个紫色的天鹅绒袖标是盗贼大师的标志。它不属于你，但它也不属于你拿到这个袖标时击败的人。</p>
    <p>最大等级为10，最大充能数为5+等级/2。</p>
    <p>允许偷取商店物品，或是从敌人身上偷取物品</p>
    <p>通过获得经验充能，每1级经验提供3.0点充能。</p>
    <p>偷取商品时，每一点充能视为10+等级/2.0的价值，价值大于商品原始价格则必定成功，小于原始价格则成功率为充能价值/原始价格。</p>
    <p>偷取敌人时，抢到物品的概率为掉落率*倍率，倍率=1+0.1*等级。如果成功则获取掉落物，消耗1充能，给敌人3+等级/2回合的失明与残废。若是敌方未察觉，则增加0.5的倍率，延长2回合的负面效果。</p>
    <p>同一个敌人不能被多次偷取。当玩家等级超过敌方掉落等级限制时无法偷取。被偷取的敌人不再掉落本身的掉落物。</p>
    <p>袖章升级需要10+3.33*等级的经验。每偷取一次敌人(无论是否成功)经验+3，若是未察觉偷取经验再+2。偷取商品每消耗1充能获取4经验。</p>
    <p>诅咒的袖章无法充能，每5回合损失1金币。</p>
    <p>神器充能效果为每回合恢复0.1充能。</p>
</template>

<script>
export default {
    name: 'ArmbandView',
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