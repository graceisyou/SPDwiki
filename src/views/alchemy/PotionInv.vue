<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice238.png" style="width: 100px;height: 100px;"/>
    <span class="title">隐形药剂</span>
  </div>
    
<p></p>饮用这种药剂会使你暂时隐形。隐身期间敌人将无法看见你。攻击敌人，或在敌人面前使用法杖和卷轴，会让药剂效果立即消失
<p></p>20回合，对应<text class="gg"></text>致盲草种子。
<p></p><text class="gg"></text>暗夜迷雾合剂:共生成1080单位的迷雾气体，从中心向周围8格的空地扩散每格120容量的气体，气体内视野仅有1格，仅阻挡敌方生物的视线。
<p></p>造成5~10回合失明与残废。
<p></p>致盲草效果:造成10回合失明与残废。
<p></p>守望者特效:<text class="gg"></text>10回合隐身。
</template>

<script>
export default {
    name: 'PotionInv',
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