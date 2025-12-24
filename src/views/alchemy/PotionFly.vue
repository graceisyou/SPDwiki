<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice238.png" style="width: 100px;height: 100px;"/>
    <span class="title">浮空药剂</span>
  </div>
    
<p>饮用这种古怪的药剂能让你漂浮到空中，从而轻易地越过陷阱和裂隙。扔出它会产生一片未知气体，让其中的所有生物迷失方向。</p>
<p>20回合，对应<text class="gg">风暴藤</text>种子。扔出则会产生1000单位的致眩气体。</p>
<p><text class="gg">暴风骤雨合剂</text>:共生成1080单位的水汽，从中心向周围8格的空地扩散每格120容量的气体，覆盖处任何地格变为水。</p>
<p>风暴藤效果:使目标获得10回合眩晕。</p>
<p>守望者特效:<text class="gg">获得10回合浮空。</text></p>
</template>

<script>
export default {
    name: 'PotionFly',
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