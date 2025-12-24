<template><div class="titlebox">
    <el-image src="/images/ring/part-Slice160.png" style="width: 100px;height: 100px;"/>
    <span class="title">精准之戒</span>
  </div>
    
<p>这枚戒指提高了你的专注力，使敌人难以躲闪你的攻击。负等级的戒指则会让你的攻击更易于被闪避。</p>
<p>你的命中属性变为<text class="gg">1.3^效果等级</text>倍。</p>
</template>

<script>
export default {
    name: 'RingAccuracy',
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