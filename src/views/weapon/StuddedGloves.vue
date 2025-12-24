<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice68.png" style="width: 100px;height: 100px;" />
    <span class="title">镶钉手套</span>
  </div>
<p>  这双镶钉手套没有多少防护作用，但能在勉强当作武器使用的同时腾出双手。</p>
<p>这是一件 <text class="gg">1</text> 阶武器，力量需求为 <text class="gg">10</text>，基础伤害为 <text class="gg">1~5</text>。</p>
<p>它的伤害成长为 <text class="gg">1~1</text> ，精准修正为<text class="gg">1</text>，攻击延迟为<text class="gg">0.5</text>，攻击距离为<text class="gg">1</text>。</p>
</template>


<script>
export default {
  name: 'StuddedGloves',
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
.gg{
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