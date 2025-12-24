<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice301.png" style="width: 100px;height: 100px;"/>
    <span class="title">肉馅饼</span>
  </div>
<p>这是份正宗康郡肉烘饼，内含土豆加牛肉的传统馅料。</p>
<p>回复450饱食度。</p>
<p>每层生成干粮时有1/5概率生成肉馅饼。</p>
<p>特定月份会变成特殊食物:</p>
<p>万圣节:南瓜派，回复<text class="gg">450饱食度与1/10生命值。</text></p>
<p>圣诞节:拐杖糖，回复<text class="gg">450饱食度与1点充能。</text></p>
</template>

<script>
export default {
    name: 'FoodPasty',
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