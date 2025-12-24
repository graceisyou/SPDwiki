<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice303.png" style="width: 100px;height: 100px;"/>
    <span class="title">无味果</span>
  </div>   
    <P>干燥且脆弱，或许加点其他材料再煮能够增强它的效果。</P>
    <P>现在无味果的效果与种子对应的药水效果<text class="gg">完全相同。</text></P>
    <P>回复<text class="gg">450</text>饱食度。</P>
</template>

<script>
export default {
    name: 'FoodFruit',
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