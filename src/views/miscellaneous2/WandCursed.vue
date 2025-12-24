<template>
    <div class="titlebox">
    <el-image src="/images/weapons/part-Slice288.png" style="width: 100px;height: 100px;"/>
    <span class="title">诅咒法杖</span>
  </div>
    
<p>诅咒法杖效果一览:</p>
<p><text class="gg">15%</text>概率的情况:</p>
<p>使用者与目标冰冻或起火，概率均等。</p>
<p>将自己或目标传送至本层随机位置，概率均等。如果找不到目标或目标传送不合法，则reroll。</p>
<p>释放气体(眩晕800单位，毒气500单位，麻痹200单位，概率均等)</p>
<p>在目标地点附近长出一小片草。</p>
<p><text class="gg">7.5%</text>概率的情况:</p>
<p>生成随机植物，如果不能生成则rerollo施法者向目标输血或是相反，概率均等，数值最多为当前层数*2。无合法目标则reroll。</p>
<p>在目标地点制造一次炸弹爆炸。</p>
<p>原地施放10回合3*3电场并获得充能buff30回合。</p>
<p><text class="gg">2.25%</text>概率的情况:</p>
<p>变羊术(对boss,miniboss无效)，将目标变形为羊。无合法目标则reroll。</p>
<p>诅咒装备，等同于诅咒陷阱。</p>
<p>向上的跨层传送(跨度越大的传送概率越低)</p>
<p>召唤怪物，等同于召唤陷阱。</p>
<p><text class="gg">0.25%</text>概率的情况:</p>
<p>全层长草并燃起数处火焰(平均5处)</p>
<p>召唤带有不低于+1物品的金色宝箱怪，无合法位置则reroll。</p>
<p>变成一个随机装备，升1级且必定诅咒。</p>
<p>什么都不发生(英文为强制退出游戏，但一般不影响存档)</p>
</template>

<script>
export default {
    name: 'WandCursed',
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