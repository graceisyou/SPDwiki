<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice178.png" style="width: 100px;height: 100px;"/>
    <span class="title">自然之履</span>
  </div>   
    <p>初看像是用麻绳编成的凉鞋实际上是两株植物!它们看上去既虚弱又苍白，也许它们需要一点营养?</p>
    <p>自然之履一共可以升级三次，升级分别需要<text class="gg">3,6,9</text>颗不同的种子。</p>
    <p>种子爆率变为<text class="gg">1/(21-4*升级次数)</text>，露水爆率变为<text class="gg">非满级1/5,满级1/4。</text></p>
    <p>踩草时获得<text class="gg">(3+升级次数)/6</text>的充能，消耗定充能可以使用扎根，在三格范围内选择一格触发最后一次种子的效果(需要目标地点视野但可穿墙)。</p>
    <p>诅咒的自然之履使你无法获得种子和露珠(但物品及其他生物仍然可以)。</p>
    <p>神器充能效果为<text class="gg">每回合获得相当于踩一株草获得的充能。</text></p>
    <p>各种种子扎根所需充能如下:腐败果 <text class="gg">8</text></p>
    <p>致盲草 消逝草 魔皇草 <text class="gg"></text>12</p>
    <p>烈焰花 冰冠花 风暴藤 断肠苔 速行蓟 <text class="gg">20</text></p>
    <p>地缚根 星陨花 <text class="gg">40</text></p>
    <p>阳春草 <text class="gg">80</text></p>
</template>

<script>
export default {
    name: 'SandalView',
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