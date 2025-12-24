<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice70.png" style="width: 100px;height: 100px;" />
    <span class="title">匕首</span>
  </div>
  <p>木柄被磨损的简易铁质匕首。</p>
<p>这是一件<text class="gg">1</text>阶武器，力量需求为<text class="gg">10</text>，基础伤害为<text class="gg">1~8</text>。</p>
<p>它的伤害成长为<text class="gg">1~2</text>，精准修正为<text class="gg">1</text>，攻击延迟为<text class="gg">1</text>，攻击距离为<text class="gg">1</text>。偷袭伤害为 <text class="gg">伤害范围的75%~最大伤害</text>。</p>
</template>

<script>
export default {
  name:'DaggerView',
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