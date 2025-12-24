<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/slime/part-Slice10.png" style="width: 100px;height: 100px;"/>
    <span class="title">蚀化史莱姆</span>
  </div>
    
<p>这个史莱姆似乎已经被下方渗透的黑暗能量完全侵蚀了。它已经失去了体表原有的绿色光泽，并且在不断滴落腐蚀污泥。</p>
<p>这个怪物的生命上限为<text class="gg">20</text>，攻击为<text class="gg">2~5</text>，防御为<text class="gg">0</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">5</text>，命中为<text class="gg">12。</text></p>
<p>它在攻击时有<text class="gg">1/2</text>概率附加腐蚀污泥。</p>
<p>大幅抑制超过5的伤害。( 4之后每想要造成一点伤害，需要1,2，3，4，.点原始伤害)</p>
<p>具有<text class="gg">酸</text>属性。</p>
<p>掉落<text class="gg">4</text>经验，获取经验最大等级不超过<text class="gg">9。</text></p>
<p>额外掉落一个<text class="gg">粘咕球。</text></p>
</template>

<script>
export default {
    name: 'Ch1Causticslime',
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