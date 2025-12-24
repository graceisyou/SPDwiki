<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/food.gif" style="width: 100px;height: 100px;"/>
    <span class="title">食物</span>
  </div>
    
<P>每一个正常层都会 生成一个食物(80%干粮，20%馅饼)。</P>
<P>最大饥饿度为450。小份干粮，各种肉回复150点饥饿度，干粮300，馅饼与无味果(包括无味果碎块)450，合成的全肉大饼450+450。</P>
<P>饥饿状态每10回合结算一次。在极度饥饿状态下，每10回合会损失1%的生命。</P>
<P>搜索花费2回合，但消耗6点饱食度。</P>
</template>

<script>
export default {
    name: 'FoodView',
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