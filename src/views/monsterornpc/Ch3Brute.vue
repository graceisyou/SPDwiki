<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/brute/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼暴徒</span>
  </div>
    
<p>暴徒是豺狼人中体型最庞大，力量最强壮且生命力最顽强的精英。严重受伤时，他们会陷入疯狂之中，对敌人造成更高的伤害。</p>
<p>这只怪物的生命值上限为<text class="gg">40</text>，攻击为<text class="gg">5~25</text>防御为<text class="gg">0~8</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">20</text>。在生命值清零后获得24点护盾(每回合-4)，攻击上升为<text class="gg">15~40。</text></p>
<p>掉落<text class="gg">8</text>经验，获得经验的最大等级为<text class="gg">16</text>级。</p>
<p><text class="gg">0.5</text>概率掉落<text class="gg">一堆钱。</text></p>
<p>在暴怒时免疫恐惧。</p>
</template>

<script>
export default {
    name: 'Ch3Brute',
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