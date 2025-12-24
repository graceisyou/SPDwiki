<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice153.png" style="width: 100px;height: 100px;"/>
    <span class="title">疾速之戒</span>
  </div>
    
<p>这枚戒指减轻了配戴者在移动时的负担，使其能够飞速奔跑。负等级的戒指则会使配戴者倍感沉重。</p>
<p>你的移动速度变为<text class="gg">1.2^效果等级</text>倍。</p>
</template>

<script>
export default {
    name: 'RingHaste',
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