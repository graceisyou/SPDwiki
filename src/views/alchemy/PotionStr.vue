<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice233.png" style="width: 100px;height: 100px;"/>
    <span class="title">力量药剂</span>
  </div>
<p>这种强力的液体会洗刷你的肌肉，永久性增加1点刃量值。</p>
<p>对应<text class="gg">腐败果</text>种子。</p>
<p><text class="gg">肌肉记忆合剂</text>:永久减少一件武器或护甲2点力量需求，不可叠加。</p>
<p>腐败果特效:在原地生成100单位的毒气。</p>
<p>守望者特效:<text class="gg">获得200回合力量激发，期间力量+1。</text></p>
</template>

<script>
export default {
    name: 'PotionStr',
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