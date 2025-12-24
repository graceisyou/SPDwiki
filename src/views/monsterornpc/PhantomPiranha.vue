<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/piranha/part-Slice16.png" style="width: 100px;height: 100px;"/>
    <span class="title">幻影食人鱼</span>
  </div>
    
<p>幻影食人鱼是巨型食人鱼的一个罕见变种，具有诡异的半透明身体和魔法能力。他们能够在受到攻击时传送，从而逃跑或者迅速靠近敌人!</p>
<p>虽然难以处理，但它们的肉也因具有魔力而备受珍视。</p>
<p>这只怪物的生命值上限为<text class="gg">10+层数*5</text>，攻击为<text class="gg">层数~4+层数*2</text>，防御为<text class="gg">0~层数</text>，攻击延迟为<text class="gg">1</text>,移速为<text class="gg">2</text>，闪避为<text class="gg">10+层数*2</text>，命中为<text class="gg">20+层数*2。</text></p>
<p>它免疫所有气体。</p>
<p>经验值为0，100%概率掉落<text class="gg">一块幻影鱼肉。</text></p>
<p>当即将受到角色或法杖以外的伤害时(例如卷轴与炸弹)，它具有50%减伤并且依靠传送逃离至同一层的随机水域(优先选择英雄视野外的水域)。当即将受到角色或法杖的伤害，并且伤害来源与幻影食人鱼不相邻时，它会尝试传送到伤害来源相邻的水域中，如果找不到合适位置则会使用传送逃离。</p>
</template>

<script>
export default {
    name: 'PhantomPiranha',
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