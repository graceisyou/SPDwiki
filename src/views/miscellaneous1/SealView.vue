<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/part-Slice35.png" style="width: 100px;height: 100px;"/>
    <span class="title">破损纹章</span>
  </div>
    
<p>佩戴纹章时战士能缓慢获得基于护甲品质的额外生命护盾，护盾上限为<text class="gg">护甲等级+护甲阶数+1</text>。每30口合回复1点护盾。</p>

</template>

<script>
export default {
    name: 'SealView',
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