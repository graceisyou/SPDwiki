<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/warrior/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">虹色幻影</span>
  </div>
    
<p>这个闪烁着虹光幻象和你非常相似，甚至还装备着你当前的武器和护甲。</p>
<p>虹色幻影将通过吸引敌人的方式来利用它的护甲和生命保护你。虽然它没有和镜像一样有攻击性，但它有更高的生命值，以及和你一样的护甲。</p>
<p>当幻影生命降至0时，它将保持一段时间的存在(5回合)，在此期间仍能被治愈。在周围没有敌方单位时，幻影便会回到主人身边。</p>
<p>它会继承你的防御与大部分闪避具有很低的攻击力(2+等级/4~4+等级/2)与10+等级*2点生命。免疫毒气、火焰、酸雾、腐化</p>
</template>

<script>
export default {
    name: 'PrisImage',
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