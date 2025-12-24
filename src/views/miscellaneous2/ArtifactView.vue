<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/artifact.gif" style="width: 100px;height: 100px;"/>
    <span class="title">神器</span>
  </div>
    
<p>每件神器在一局游戏中都只能生成一次。如果神器已经完全生成，进行嬗变则会生成-个0级戒指，水晶宝箱内的神器会尝试重新生成直至变为戒指或法杖。</p>
<p>神器显示等级均为最大10级，但有些神器实际等级不是10级，如沙漏，锁链，草鞋。</p>
<p>神器相对于其他物品生成概率更低。</p>
<p>自然生成的神器有30%概率诅咒。</p>
</template>

<script>
export default {
    name: 'ArtifactView',
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