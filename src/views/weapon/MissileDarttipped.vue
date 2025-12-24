<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice123.png" style="width: 100px;height: 100px;" />
    <span class="title">涂药飞镖</span>
  </div>
<p>    一颗种子可以为1~2枚飞镖涂药。涂药飞镖力量需求为11点，药效的基础使用次数为1次。效果一览:</p>
<p>激素飞镖:对友方使用使其移动速度*2，攻击速度*1.5，持续10回合。对敌方使用则使其残废5回合。对应速行蓟。</p>
<p>致盲飞镖:附加10回合失明。对应致盲草。</p>
<p>寒霜飞镖:附加6回合霜冻，如果在水上改为10回合。对应冰冠花。</p>
<p>净化飞飞镖:清除友方单位的负面效果并赋予10回合效果完全净化。清除敌方单位所有正面效果，并使其丢失目标。对应法皇花。</p>
<p>传送飞镖:把目标传送到距离使用者8~10格远的位置。对应消逝草。</p>
<p>治疗飞镖:为目标回复 <text class="gg">0.5*最大生命+30</text>点生命。对应阳春草。</p>
<p>神圣飞镖:对友方单位施加30回合祝福，或是对非友方亡灵或恶魔生物造成额外的10+层数/3~20+层数/3点伤害。对应星陨花。</p>
<p>燃烧飞镖:命中目标造成8回合燃烧，若命中地点有可燃物产生4回合火焰。对应烈焰花</p>
<p>麻痹飞镖:5回合麻痹。对应地缚根。</p>
<p>毒液飞镖:3+层数/3回合中毒。对应断肠苔</p>
<p>腐莓飞镖:对于非boss单位施加10回合的基础伤害等于层数的酸蚀，对于boss单位施加5回合的基础伤害等于层数/3 的酸蚀。固定只能使用5次。对应腐败果。</p>
<p>电击飞镖:造成5+层数/4~10+层数/4点伤害，可传导。对应风暴藤。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileDarttipped',
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