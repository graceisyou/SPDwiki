<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice238.png" style="width: 100px;height: 100px;"/>
    <span class="title">治疗药剂</span>
  </div>
    
<p>一支让你快速回满生命值并清除毒素的万能药剂。</p>
<p>总共回复<text class="gg">0.8*最大生命+14</text>的生命值，并清除中毒残废虚弱流血等负面效果。对应<text class="gg">阳春草</text>种子。治疗药水无论是怪物掉落还是酿造都有数量上限(财富戒指除外)。</p>
<p>在恐药异症挑战下，治疗药剂、护盾合剂、水灵秘药、再生炸弹、圣愈蜜药改为造成<text class="gg">4+人物等级/2</text>回合的中毒。</p>
<p><text class="gg">奥术护盾合剂</text>:为饮用者施加一个数值为<text class="gg">0.6*最大生命+10</text>的护盾，每口合衰减1点。</p>
<p>阳春草效果:使目标获得缓慢的治愈效果(每回合回复(40+最大生命)/150 点生命)期间不能移动。</p>
<p>守望者特效:<text class="gg">获得可移动的总量等于最大生命的缓慢治疗。</text></p>
</template>

<script>
export default {
    name: 'PotionHealing',
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