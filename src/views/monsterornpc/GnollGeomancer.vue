<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/gnoll_geomancer/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼地卜师</span>
  </div>
    
<p>这豺狼人虽老态难掩却身形魁梧，定是此处贼首，亦为此地土石不稳之源。不似其他豺狼矿工，这地卜师精于土石术法，飞石落岩不可伤之。不过观其体态，似是疏于肉搏之技。</p>
<p>这只怪物的生命值上限为<text class="gg">150</text>，攻击为<text class="gg">3~6</text>,防御为<text class="gg">0~6</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">20</text>，闪避为<text class="gg">0。</text></p>
<p>经验值为0。</p>
<p>视野范围为<text class="gg">12</text>，具有BOSS和不可移动属性。拥有伙伴时免疫所有伤害，具有岩石护盾buff时不受镐子以外的伤害，破时吸收多余伤害，睡觉时最多受到15点伤害</p>
<p>起始处于睡眠状态，拥有50点岩石护盾，记录楼层最多三个豺狼矿工的坐标。点击三次后苏醒，让所有怪物仇恨对象变为英雄，没有同伴的豺狼守卫会获得英雄的位置信息每掉<text class="gg">50</text>血为一个阶段，苏醒或转阶段时获得<text class="gg">25</text>石石护盾，并使用破岩突进，往已记录的最近的豺狼矿工的坐标移动最多<text class="gg">12</text>格，下次技能冷却变为1/n。</p>
<p>突进影响范围为取移动弹道的所有点为中心，形状为旋转45°对角线长为7的正方形，覆盖的所有格子。范围内暗金墙掉落暗金，其他实体格子变为2/3概率的平地和1/3概率的岩砾。范围外圈空地变为岩砾技能冷却3~5回合，受伤时减少伤害的1/10回合。跟英雄距离大于2或拥有伙伴或岩石护盾，且英雄没有麻痹时，每回合冷却-1。</p>
<p>矿工与地卜师二者技能大致相同，判断以下三个条件任一条件满足时，使用丢石头技能，其余均为落石;</p>
<p>*目标周围8格有岩砾或者楼层入口</p>
<p>*上一次使用了落石技能2</p>
<p>*50%概率</p>
<p>落石</p>
<p>对目标周围八格随机抽取一个安全位置，如果是施法者坐标则重选，如果是陷阱或者实体格子则有4/5概率重选</p>
<p>矿工对目标周围5x5，地卜师对目标周围(5+阶段x4)x(5+阶段x4)，排除掉施法者位置、安全位置和实体格子，给予一回合警告一回合后范围内落石，造成<text class="gg">6~12</text>点伤害，给予或延长豺狼守卫<text class="gg">10</text>回合麻痹，给予或延长其他角色<text class="gg">3</text>回合麻痹，对楼梯周围以外受影响的空地都有1/3概率生成岩砾</p>
<p>丢石</p>
<p>寻找施法者视野内的一块石头(地卜师按阶段丢1/2/3块)，创建从石头到目标的弹道，给予一回合警告</p>
<p>一回合后石头沿弹道飞至第一个角色或者实体格子停止，造成<text class="gg">6~12</text>点伤害，给予或延长豺狼守卫<text class="gg">10</text>回合麻痹，给予或延长其他角色<text class="gg">3</text>口合麻痹</p>
<p>次技能对豺狼人地卜师无效</p>

</template>

<script>
export default {
    name: 'GnollGeomancer',
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