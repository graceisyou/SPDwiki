<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/brute/part-Slice12.png" style="width: 100px;height: 100px;"/>
    <span class="title">重甲暴徒</span>
  </div>
    
<p>这些顶级的豺狼暴徒通常装备着强力的护甲来体现它们的地位。它们的护甲使得它们对物理伤害有着更高的防御，它们坚强的意志允许它们在弥留之际坚持更长的时间。</p>
<p>这只怪物的生命值上限为<text class="gg">40</text>，攻击为<text class="gg">5~25</text>防御为<text class="gg">6~10</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">20。</text></p>
<p>在生命值清零后获得21点护盾(每三回合-1)，攻击上升为<text class="gg">15~40。</text></p>
<p>掉落<text class="gg">8</text>经验，获得经验的最大等级为<text class="gg">16</text>级。</p>
<p><text class="gg">0.75</text>概率掉落<text class="gg">鳞甲</text>，<text class="gg">0.25</text>概率掉落板甲。</p>
<p>在暴怒时免疫恐惧。</p>
</template>

<script>
export default {
    name: 'Ch3Armoredbrute',
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