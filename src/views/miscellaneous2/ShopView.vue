<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/part-Slice16.png" style="width: 100px;height: 100px;"/>
    <span class="title">商店</span>
  </div>
    
<p>商店会固定生成以下物品:</p>
<p>当前章节对应的武器，护甲，投掷武器，随机涂药飞镖</p>
<p>鉴定驱邪地图各一张，随机卷轴0~2张</p>
<p>治疗药水一瓶;随机药水3~5瓶小份干粮，炸弹或蜜蜂罐十字架，包裹，强化符石，炼金菱晶商店物价为( 1+层数/5)*5倍(括号内保留整数)。</p>
<p>商店会根据你的物品数量刷新包裹。下楼时背包里占格子最多的物品类型会生成对应的背包。</p>

</template>

<script>
export default {
    name: 'ShopView',
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