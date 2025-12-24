<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/crystal_spire/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">水晶尖塔</span>
  </div>
    
<p>这座尖塔由无比坚硬的水晶构成，很大概率是洞穴中所有奇怪水晶生物的来源。你的常规武器无法对它造成伤害，所以最好用一把十字镐来摧毁它。</p>
<p>这只怪物的生命值上限为<text class="gg">300</text>，攻击为<text class="gg">1</text>，防御为<text class="gg">0</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">0</text>，闪避为<text class="gg">0。</text></p>
<p>经验值为20。</p>
<p>具有不可移动、迷你boss、非生物属性，无视隐身，免疫失明麻痹狂乱睡眠恐惧魂飞魄散和眩晕。要求背包中有镐子，<text class="gg">且英雄对其攻击伤害由镐子计算得来，不会受到镐子以外其他伤害</text></p>
<p>不会普通攻击，特殊攻击为概率各一半的十字型或直线型，有警示的范围攻击，其初始范围如下:</p>
<p><text class="gg">十字型攻击</text>:以玩家位置和其上下左右四格</p>
<p><text class="gg">直线型攻击</text>:以自身往玩家方向直线的前7格</p>
<p>满血时只有一回合攻击，每损失100生命值会增加1施放回合，范围为前一回合攻击到的所有格子以及每个格子的上下左右四格对范围内灵性晶簇之外所有角色造成<text class="gg">6-15</text>点法术伤害，对水晶哨兵额外造成<text class="gg">12</text>伤害并给予<text class="gg">30回合残疾</text>，使水晶哨兵外所有角色击退远离尖塔1格，使水晶哨兵击退远离玩家一格，攻击范围内地面生成水晶</p>
<p>冷却<text class="gg">15</text>回合，或者看不到英雄时不会冷却，受到伤害时减少伤害量1/10的时间</p>
<p>受到一次攻击时给予警告，受到三次攻击后特殊攻击开始冷却且为1回合，同时吸引所有灵性晶簇与水品哨兵，给予沉睡的水晶哨兵<text class="gg">(20-与尖塔距离)</text>回合的麻痹，给予游荡中的水晶哨兵<text class="gg">(与尖塔距离-8)/2</text>回合的加速</p>
<p>死亡时对拥有自身位置视野的所有水晶哨兵造成最大生命值的伤害，灵性晶簇造成5回合失明。</p>
<p>击败可获得<text class="gg">1000</text>铁匠人情。</p>
</template>

<script>
export default {
    name: 'CrystalSpire',
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