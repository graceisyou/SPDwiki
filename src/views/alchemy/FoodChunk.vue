<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice304.png" style="width: 100px;height: 100px;"/>
    <span class="title">无味果块</span>
  </div>
    
<P>无味果触地爆炸，碎成了一地的普通果块。</P>
<P>尽管上面沾上了坐土，这些大块的熟制无味果应该可以安全食用。回复<text class="gg">450</text>饱食度。</P>
</template>

<script>
export default {
    name: 'FoodChunk',
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