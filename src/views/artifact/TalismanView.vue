<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice165.png" style="width: 100px;height: 100px;"/>
    <span class="title">先见护符</span>
  </div>   
    <P>一块奇怪的有着光滑雕刻的石头。你觉得它在关注着你周围的一切，留意任何不寻常的东西。</P>
    <P>附近有隐藏地形时，护符会进行提示<text class="gg">(最远3格)。</text></P>
    <P>充能回复速度为<text class="gg">0.05+(神器等级*0.005)。</text></P>
    <P>每次搜索到隐藏陷阱会为护符恢复点充能2点，搜索到隐藏门则恢复10点。</P>
    <P>护符可以消耗(3+距离*1.08)点充能探查一个锥形区域，但探查最大距离不超过(5+等级*2)。探查的区域内，隐藏地形会被揭露使用者获得5+等级*2回合的对范围内敌人与物品的视野。</P>
    <P>护符探查到不同目标会获得不同的经验。新的地格:1;视野外的敌人或一格物品:10;隐藏陷阱:10;隐藏门:100。</P>
    <P>诅咒护符会让角色探查时从消耗6点饥饿值变为12点饥饿值。每级需要的经验是50+50*等级。</P>
    <P>神器充能效果是<text class="gg">每回合回复2点充能。</text></P>
</template>

<script>
export default {
    name: 'TalismanView',
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