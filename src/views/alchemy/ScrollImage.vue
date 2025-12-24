<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice200.png" style="width: 100px;height: 100px;"/>
    <span class="title">镜像卷轴</span>
  </div>    
<p>卷轴上的咒文会创造使用者的两个镜像。这些像使用者的弱化版克隆体的镜像会对敌人展开追杀。不过镜像非常脆弱，受到伤害就会瞬间消散。</p>
<p><text class="gg">虹卫秘卷</text>:创造使用者的一个虹色幻影。这个像使用者的弱化版克隆体的幻影有着相同的防御，但生命值和造成的伤害更低。当虹色幻影存在时阅读这张秘卷将会为其恢复所有生命。</p>
<p><text class="gg">羊群符石</text>:在5*5范围内生成持续8回合的绵羊。</p>
</template>

<script>
export default {
    name: 'ScrollImage',
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