<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/crab/part-Slice15.png" style="width: 100px;height: 100px;"/>
    <span class="title">巨大螃蟹</span>
  </div>
    
<p>就算是和其他的下水道螃蟹相比较，这只螃蟹也是如此巨大。它的蓝色甲壳上有着一条条裂缝和几只藤壶，证明其经历的无数岁月。它缓慢地在周围爬行，用它那只巨大的钳子勉强保持平衡。</p>
<p>尽管这螃蟹只有一只蟹钳，但钳子的大小完全补偿了这一不足。螃蟹只要发现危险就会把爪子举在自己身前，让自己获得坚不可摧的甲壳防护。</p>
<p>这只怪物的生命值上限为<text class="gg">25</text>，攻击为<text class="gg">1~8</text>防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">0</text>，命中为<text class="gg">12。</text></p>
<p>每移动两次，暂停一次。</p>
<p>防御来自目标的物理攻击与玩家的法术攻击</p>
<p>掉落<text class="gg">6</text>经验。</p>
<p>具有<text class="gg">小型boss</text>属性。</p>
<p>100%概率<text class="gg">掉落2块生肉。</text></p>
</template>

<script>
export default {
    name: 'Ch1Greatcrab',
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