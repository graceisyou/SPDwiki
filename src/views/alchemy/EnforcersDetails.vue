<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice257.png" style="width: 100px;height: 100px;"/>
    <span class="title">强化道具</span>
  </div>
    <p>效果总览:</p>
    <p><text class="gg">液金</text>:修复一件投掷武器的耐久。修复100%耐久需消耗5*(阶数+1)*2^等级的液金每件投掷武器可转化为(0.25+0.75*剩余中耐久比例)*5*(阶数+1)*2^等级的液金，且计算时等级最高取3。</p>
    <P><text class="gg">奥术聚酯</text>:每一根法杖可转化为2+等级*2个奥术聚酯，可消耗1,23个奥术聚酯将法杖升级到1.2.3级。</P>
</template>

<script>
export default {
    name: 'EnforcersDetails',
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