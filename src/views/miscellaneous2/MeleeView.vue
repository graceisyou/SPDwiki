<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/melee.gif" style="width: 100px;height: 100px;"/>
    <span class="title">武器</span>
  </div>
    
<p>武器有一定的力量需求。近战武器力量需求为8+2*阶数，投掷武器力量需求-1。力量需求会在1,3,6,10,15,21...等级分别减少1点。</p>
<p>如果你的力量不足，每一点超重的力量都会使你的攻速下降至5/6，命中下降至2/3，防御减少2点(如果武器自身有一定的防御)，且无法偷袭。</p>
<p>额外的力量可以使你获得0~超出力量 的伤害加成。</p>
<p>近战武器附魔分为三档:</p>
<p>常见(12.5%):烈焰，电击，寒霜，恒动</p>
<p>稀有(6.67%):弹性，繁茂，索敌，素乱，幸运，格挡</p>
<p>罕见(3.33%):腐化，死神，吸血。</p>
<p>近战武器自然生成时，有5%概率+2,20%概率+1,75%概率+0。一些场合的装备可能具有额外升级(如金箱子，鱼房，迷宫房等)</p>
<p>自然生成的近战武器有30%概率自带诅咒，10%概率自带附魔。</p>
<p>鉴定武器需要20次使用与半级经验。</p>
</template>

<script>
export default {
    name: 'MeleeView',
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