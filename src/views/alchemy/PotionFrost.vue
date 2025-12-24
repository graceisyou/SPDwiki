<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice239.png" style="width: 100px;height: 100px;"/>
    <span class="title">冰霜药剂</span>
  </div>
    
<p>一旦暴露在空气里，这种化学药剂会挥发成为一片冰冷的气雾。</p>
<p>生成3*3的冰寒，持续10回合，在水中冻结加快。对应<text class="gg">冰冠花</text>种子。</p>
<p><text class="gg">极速冰冻合剂</text>:3*3范围<text class="gg">立即冻结</text>并缠绕10回台。</p>
<p>冰冠花效果:3*3范围内冻结。</p>
<p>守望者特效:<text class="gg">获得15回合晶触之力。</text></p>
</template>

<script>
export default {
    name: 'PotionFrost',
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