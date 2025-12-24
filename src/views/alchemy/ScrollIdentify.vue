<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice200.png" style="width: 100px;height: 100px;"/>
    <span class="title">鉴定卷轴</span>
  </div>
<p>该卷轴能永久揭示一件物品的所有秘密。</p>
<p><text class="gg">预知秘卷</text>:永久鉴定<text class="gg">随机四件</text>物品。被鉴定的物品可能是是一瓶药水，也可能是一张卷轴或一枚戒指。不过被鉴定的物品未必是你包裹中含有的。</p>
<p><text class="gg">感知符石</text>:通过猜测来试图鉴定一种药水或者卷轴、一种戒指。猜测正确可使用第二次。</p>
</template>

<script>
export default {
    name: 'ScrollIdentify',
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