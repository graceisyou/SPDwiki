<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice161.png" style="width: 100px;height: 100px;"/>
    <span class="title">能量戒指</span>
  </div>
    
<p>在戒指的奥术领域笼罩下你的所有魔法装备充能速度都会因此提升。被诅咒的戒指将减慢充能速度。</p>
<p>法杖，魔杖，神器与护甲技能充能速度变为<text class="gg">1.15^效果等级</text>倍。</p>
</template>

<script>
export default {
    name: 'RingEnergy',
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