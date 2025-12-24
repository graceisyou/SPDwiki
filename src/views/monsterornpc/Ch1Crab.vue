<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/crab/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">下水道螃蟹</span>
  </div>
    
<p>这些巨型的螃蟹位居下水道食物链的顶端它们行动极其迅速且其厚重的甲壳能承受沉重的打击。</p>
<p>这只怪物的生命值上限为<text class="gg">15</text>，攻击为<text class="gg">1~7</text>，防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">2</text>，闪避为<text class="gg">5</text>，命中为<text class="gg">12。</text></p>
<p>掉落<text class="gg">4</text>经验，获得经验的最大等级为<text class="gg">9</text>级。</p>
<p><text class="gg">1/6</text>概率掉落<text class="gg">一块生肉。</text></p>
</template>

<script>
export default {
    name: 'Ch1Crab',
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