<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice285.png" style="width: 100px;height: 100px;"/>
    <span class="title">结晶法术</span>
  </div>
    
  <p>效果总览:</p>
  <p><text class="gg">炼金菱晶</text>:将物品转化为金币或能量。</p>
  <p><text class="gg">返回晶柱</text>:标记一个位置后可随时返回，每次返回需消耗1个。</p>
  <p><text class="gg">诅咒菱品</text>:诅咒一件物品，覆盖原有的附魔，提供1+原等级/6的额外等级。</p>
  <p><text class="gg">注魔菱晶</text>:不会消附魔的升级。</p>
  <p><text class="gg">念力结品</text>:抓取目标物品或卡在角色身上的所有投掷物。</p>
  <p><text class="gg">转移结晶</text>:随机传送目标，但非boss/miniboss日标会在传送后麻痹10回合。</p>
  <p><text class="gg">陷阱晶核</text>:捕获并暂存一个陷阱。</p>
  <p><text class="gg">转换菱晶</text>:将卷轴，药水，种子，符石，药镖转换为一个随机的同类物品。</p>
  <p><text class="gg">强能晶柱</text>:4(立即生效)+8(缓慢生效)回合的充能与神器充能效果，但同时也会随机触发一种诅咒法杖的效果。</p>
  <p><text class="gg">唤魔晶柱</text>:召唤一个友方元素生物。未灌注新生火元素;液火药剂火元素;冰霜药剂E冰霜元素;充能卷轴=电击元素;变卷轴:混沌元素。</p>
  <p><text class="gg">无序结晶</text>:随机触发卷轴效果，根据视野内有无敌人与一般用途不同，会有一次机会重新选取。卷轴权重大部分都为2，除了鉴定3升级0变1</p>
</template>

<script>
export default {
    name: 'SpellSpells',
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