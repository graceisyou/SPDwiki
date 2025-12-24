<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/ranged.gif" style="width: 100px;height: 100px;"/>
    <span class="title">投掷武器</span>
  </div>
    
<p>投掷武器具有一定的耐久度。每次升级都会使投掷武器耐久度*3，每级神射增加20%耐久度，购买魔法筒袋同样会增加20%耐久度</p>
<p>投掷武器在耐久超过100后可以无限使用。</p>
<p>投掷武器远程使用会增加50%精准，但贴身使用会减少50%精准。</p>
<p>投掷武器自然生成的时候是2~4个(2/34/15,1/15)。</p>
</template>

<script>
export default {
    name: 'RangedView',
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