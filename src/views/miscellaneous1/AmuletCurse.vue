<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/large_buffs/part-Slice60.png" style="width: 100px;height: 100px;"/>
    <span class="title">护符诡咒</span>
  </div>
    
<p>在携带护符从25层上楼时触发。</p>
<p>具有诅咒值，初始为0，每次新到达非boss楼层+2，无上限。每次到达boss楼层则会为玩家恢复所有生命值并解除饥饿状态。</p>
<p>消灭一个被强化的敌人可-1组咒值(恶魔撕裂者与矮人尸群-0.5)，最多降至0。</p>
<p>诡咒状态下击杀强化敌人同时会获得10经验值并触发所有“获得经验时”效果，即使已达到等级上限</p>
<p>诅咒值达到2时，所有敌人目标改为玩家的方位;诅咒值达到4时，所有敌人移动速度*2;诅咒值达到6时，玩家移速减半，且不超过1;诅咒值不低于8时，每回合受到(组咒值-4)/4点伤害。</p>
<p>在此期间，部分取决于层数的数字，层数按照26计算。</p>
<p>敌人会受到命中、闪避、防御、伤害、生命值五个方面的强化。不同敌人强化倍率不同</p>
<p>强化倍率:</p>
<p>小鼠:10;蛇:9;豺狼:9;蝇群:8.5;螃蟹:8;史莱姆:8;</p>
<p>骷髅:5;小偷:5;DM100:4.5;监狱看守:4,死灵法师:4;</p>
<p>蝙蝠:2.5;暴徒:2.25;萨满:2.25;蜘蛛:2;DM200:2;</p>
<p>矮人尸群:1.67;元素生物:1.67;术士:1.5,武僧:1.5;魔像:1.33;</p>
<p>撕裂者:1.2;魅魔:1.2;邪眼:1.1;蝎子:1.1;</p>
</template>

<script>
export default {
    name: 'AmuletCurse',
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