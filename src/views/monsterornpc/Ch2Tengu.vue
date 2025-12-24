<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/tengu/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">天狗</span>
  </div>
    
<p>一个著名的神秘刺客，得名于他脸上面具的雕刻。</p>
<p>天狗的手腕和膝盖都带着镣铐，但他似乎很久以前就已经摆脱了锁链的束缚。</p>
<p>他将尝试使用陷阱、欺骗性的魔法、和寻常精确的攻击，来消灭唯一能阻止他逃脱的人:你。</p>
<p>这只怪物的生命值上限为<text class="gg">200</text>，攻击为<text class="gg">6~12</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">20</text>(近身减半)，视野为<text class="gg">12</text>格。</p>
<p>具有<text class="gg">boss</text>属性，免疫<text class="gg">恐惧、失明、魂飞魄散</text></p>
<p>掉落<text class="gg">20</text>经验。</p>
</template>

<script>
export default {
    name: 'Ch2Tengu',
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