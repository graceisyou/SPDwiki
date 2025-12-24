<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice300.png" style="width: 100px;height: 100px;"/>
    <span class="title">备用口粮</span>
  </div>    
    <p>这包口粮是被盗贼公会成员留在地牢里的。旅途中方便食用是它的设计理念，这对从事一般的欺诈活动很有帮助。</p>
    <P>回复<text class="gg">200</text>饱食度，回复5生命值，1斗篷充能，只花费一回合。若点了2-1干饭天赋则不花费回合。</P>
</template>

<script>
export default {
    name: 'FoodRation',
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