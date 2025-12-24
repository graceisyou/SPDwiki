<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice277.png" style="width: 100px;height: 100px;"/>
    <span class="title">秘药</span>
  </div>   
<p>各秘药效果一览:</p>
<p><text class="gg">抗魔秘药</text>:获得最大值为5+人物等级/2点魔法减伤，每80口合衰减1点。</p>
<p><text class="gg">水灵秘药</text>:在水中每回合回复2%生命值，不在水中治疗量不会减少，总量为最大生命*1.5。</p>
<p><text class="gg">龙血秘药</text>:获得50回合火焰之力。</p>
<p><text class="gg">羽落秘药</text>:50回合内免疫一次坠落伤害。</p>
<p><text class="gg">圣愈蜜药</text>:额外恢复150饱食度的治疗，或是可投掷使用的治疗，也能使蜜蜂平静下来。</p>
<p><text class="gg">晶触秘药</text>:获得50回合晶触之力。</p>
<p><text class="gg">根骨秘药</text>:增加1力量，并在5级之内最多增加4+最大生命/20生命上限。</p>
<p><text class="gg">毒粹秘药</text>:50回合周身9格不断释放6单位毒气，同时免疫毒与毒气55回合。</p>
</template>

<script>
export default {
    name: 'PotionElixirs',
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