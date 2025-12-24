<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/armor.gif" style="width: 100px;height: 100px;"/>
    <span class="title">护甲</span>
  </div>
    
  <p>护甲力量需求为8+2*阶数，力量需求会在1,3,6,10,15,21..等级分别减少1点。</p>
  <p>如果你的力量不足，每一点超重的力量都会使你的移速下降至5/6，闪避下降至2/3，防御减少2点。</p>
  <p>护甲刻印分为三档:常见(12.5%):晦暗，迅捷，粘稠，电势</p>
  <p>稀有(6.67%):磐岩，狱火，缠绕，反斥，迷彩，涌流</p>
  <p>罕见(3.33%):敌法，魅惑，荆棘</p>
  <p>护甲自然生成时，有5%概率+2.20%概率+1,75%概率+0。些场合的装备可能具有额外升级(如金箱子，鱼房，迷宫房等)，上锁的墓碑房最为明显(正等级概率高达77.5%)</p>
  <p>自然生成的护甲有30%概率自带诅咒，15%概率自带刻印。</p>
  <p>鉴定护甲需要10次使用与半级经验。</p>
  <p>在信念护体挑战下，护甲防御变为0~阶数+等级</p>
</template>

<script>
export default {
    name: 'ArmorView',
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