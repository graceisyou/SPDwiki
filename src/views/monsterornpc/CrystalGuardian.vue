<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/crystal_guardian/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">水晶哨兵</span>
  </div>
    
<p>这种巨大的水晶哨兵看似一尊普通雕像，但其眼中泛起的明光出卖了它。因为身体由硬化的水晶构成，它们行动不便但异常坚固。所以最好别打扰它们在品体巢穴中的酣眠。</p>
<p>这只怪物的生命值上限为<text class="gg">100</text>，攻击为<text class="gg">10~16</text>，防御为<text class="gg">0~10</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">20</text>，闪避为<text class="gg">14。</text></p>
<p>经验值为0。</p>
<p>具有非生物和迷你boss属性，不会死亡初始为沉睡状态，视野内有可抵达敌人时苏醒。受到致死伤害时，血量变为1，进入倒地回复状态，移除定命和残疾之外的buff，期间每回合回复5血，闪避归0，不受英雄与水晶尖塔以外的伤害，无法行动直至满血</p>
<p>移动可以破开水晶尖刺(但会尽量不这么做)，与墙壁相邻时移速变为0.25</p>
</template>

<script>
export default {
    name: 'CrystalGuardian',
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