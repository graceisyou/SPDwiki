<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/elemental/part-Slice15.png" style="width: 100px;height: 100px;"/>
    <span class="title">新生火元素</span>
  </div>
    
<p>这些游荡的火元素是在召唤某种更强大存在时产生的副产品。其特性太过紊乱，以至于最强大的恶魔学者都没有办法驱使。</p>
<p>这只火元素刚刚被召唤，因此它还很弱。这种状态下它几乎无法承受任何形式的寒冷伤害。但其攻击能方仍日很强，小心为好。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">10~12</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">12</text>，命中为<text class="gg"></text>15。</p>
<p>特殊攻击有随机3~5回合冷却时间，冷却完成后随机选取目标相邻格子充能，给予3x3范围的警告，一回合后使该范围着火(但不造成直接伤害)。若弹道受阻选取格子失败则进入1回合冷却。</p>
<p>掉落<text class="gg">7</text>经验。</p>
</template>

<script>
export default {
    name: 'Ch2Newelefire',
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