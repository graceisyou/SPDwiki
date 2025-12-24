<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice302.png" style="width: 100px;height: 100px;"/>
    <span class="title">全肉大饼</span>
  </div>

    
  <p>一份填满了美味肉馅的诱人大饼。吃下它后你会获得远高于其他食物的饱足感。</p>
  <p>回复<text class="gg">450</text>饱食度，并获得450回合饱食buff。</p>
</template>

<script>
export default {
    name: 'FoodPie',
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