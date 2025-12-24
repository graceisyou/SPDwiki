<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/yog/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">Yog-Dzewa</span>
  </div>
    
<p>Yog-Dzewa是一个古老的神;一个将自己的力量延伸向凡间世界并吞噬它们、以为自身无尽的成长提供养分的巨大怪物。矮人一定是在玩弄黑暗魔法的时候引起了这个巨大恐怖的注意，并且从那以后就一直试图控制他，使之无法侵吞外界。</p>
<p>这位古神起源于一个原始的、充满魔法与混沌的维度，且无法将他的真实形态带入这个世界。因此，他创造了自己的化身并召唤了恶魔们作为他的仆从来完成它的命令。</p>
<p>这只巨眼是古神在这个世界上力量的焦点。虽然这只眼睛本身是不可移动的，但它能够射出强大的魔能光束，并召唤各种恶魔仆从来帮助它。</p>
<p>这只怪物的生命值上限为<text class="gg">1000。</text></p>
<p>拳头存在时免疫一切伤害。</p>
<p>每10~15回合召唤怪物，每10~15回合发射一次激光造成20~30点伤害，最后阶段大幅加快。</p>
<p>具有<text class="gg">boss，恶魔，无法移动</text>属性，免疫<text class="gg">恐惧、狂乱、魅惑、魔法睡眠。</text></p>
<p>掉落<text class="gg">50</text>经验。</p>
</template>

<script>
export default {
    name: 'Ch5Yog',
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