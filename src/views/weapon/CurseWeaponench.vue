<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice288.png" style="width: 100px;height: 100px;" />
    <span class="title">诅咒附魔</span>
  </div>
<p>    每个诅咒附魔概率均等。</p>
<p><text class="gg">喧闹诅咒</text>:每次命中，都有 <text class="gg">1/20</text>概率产生喧闹并暴露自身位置。总共有10条普通喧闹和3条特殊喧闹，分别占 <text class="gg">32/33</text>和 <text class="gg">1/33概率</text></p>
<p><text class="gg">转移诅咒</text>: <text class="gg">1/12</text>概率触发，触发时将目标随机传送。</p>
<p><text class="gg">炫目组咒</text>:攻击时 <text class="gg">1/10</text>概率触发，致盲所有能看到防守方的目标5回合，攻击者为10回合</p>
<p><text class="gg">爆炸诅咒</text>:每攻击一次爆炸计数增加0~10，计数达100时发生一次爆炸，爆炸位置为攻击者本身位置或双方连线上离防守方最近的格子。</p>
<p><text class="gg">友善诅咒</text>:每次命中都有 <text class="gg">1/10</text>概率将攻击方魅惑10回合，防守方魅惑5回台。</p>
<p><text class="gg">极化诅咒</text>:攻击时只会出现1.5倍伤害或完全没有伤害的情况，概率均等。</p>
<p><text class="gg">血祭诅咒</text>:每次命中都有 <text class="gg">1/10</text>概率流血，流血初始值为 <text class="gg">生命比例*生命比例:最天生命值/8</text>。</p>
<p><text class="gg">妄为诅咒</text>:攻击有1/4概率获得10回合命中80%的效果，成功命中一次即可解除此效果。</p>
  </template>
  
  <script>
  export default {
    name:'CurseWeaponench',
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