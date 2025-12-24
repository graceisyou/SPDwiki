<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice236.png" style="width: 100px;height: 100px;"/>
    <span class="title">液火药剂</span>
  </div>
    
<p>该药瓶里装着一种不稳定的化合物，一旦暴露在空气中就会猛烈地燃烧起来。</p>
<p>3*3火焰，持续2回合，对应<text class="gg">烈焰花</text>种子。</p>
<p><text class="gg">火龙吐息合剂</text>:相当于一次消耗2充能的火杖(6格射程)，但是喷火本身没有伤害。</p>
<p>烈焰花效果:原地生成2回合火焰。</p>
<p>守望者特效:<text class="gg">获得15回合火焰之力。</text></p>
</template>

<script>
export default {
    name: 'PotionFire',
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