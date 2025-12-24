<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice229.png" style="width: 100px;height: 100px;" />
    <span class="title">罕见附魔</span>
  </div>
<p>    罕见附魔每个都有3.33%概率出现。</p>
<p><text class="gg">腐化附魔</text>:击杀敌人时有 <text class="gg">(等级+5)/(等级+25)</text>概率将其腐化。</p>
<p><text class="gg">死神附魔</text>: <text class="gg">(0.5+0.05*等级)*目标失血百分比^2</text>的几率触发，概率依照伤害初步作用后的生命值计算，对目标造成等同于当前生命值的伤害。</p>
<p><text class="gg">吸血附魔</text>: <text class="gg">0.05+0.25*失血百分比</text>概率回复 <text class="gg">伤害*0.5</text>的生命。</p>
   </template>
   
   <script>
   export default {
     name:'RareWeaponench',
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