<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice306.png" style="width: 100px;height: 100px;"/>
    <span class="title">幻影鱼肉</span>
  </div>
    
<p>这块从幻影食人鱼身上切下的大块鱼肉呈半透明，闪烁着奇光。这充满魔力的肉无须烹饪即可食用，它能完全填饱你的肚子并且赋予多种防御性增益。当被食用时，它会为你提供隐形、树肤、少量治疗，并治愈大部分有害效果。</p>
<p>食用后回复<text class="gg">450</text>饱食度，恢复<text class="gg">1/4最大生命值</text>的血量，附加<text class="gg">1/4最大生命值</text>的树肤以及<text class="gg">20</text>回合隐身，并清除中毒/残废/虚弱/易伤人流血/失明/催眠/迟缓/眩晕debuff。(如果没有点一回合干饭天赋的话，会因为三回合进食时间而导致buff-2回合)</p>
</template>

<script>
export default {
    name: 'PhantomMeat',
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