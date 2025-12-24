<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/ghost/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">悲伤幽灵</span>
  </div>
    
<p>这个幽灵几乎不能被看见。它看起来像是由一片无形的昏暗光斑和一张悲痛的面孔所组成的。</p>
<p>完成任务可以获得<text class="gg">0~3级</text>的<text class="gg">2~5阶</text>武器或护甲一件。</p>
<p>各个等级的概率为:0:0.5,1:0.3,2:0.153:0.05</p>
<p>各个等阶的概率为:2:0.5,3:0.3,4:0.155:0.05</p>
</template>

<script>
export default {
    name: 'GhostView',
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