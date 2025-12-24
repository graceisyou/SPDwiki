<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/dm300/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">DM-300</span>
  </div>
    
<p>数个世纪前矮人们制造了这个机器。但此后，矮人们开始使用魔像、元素生物甚至是恶魔来替换机器，最终导致其文明的衰败。DM-300及类似的机器通常用于建设和挖掘，某些情况下，也可以用于城防。</p>
<p>这只怪物的生命值上限为<text class="gg">300</text>，攻击为<text class="gg">15~25</text>，防御为<text class="gg">0~10</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">20。</text></p>
<p>具有<text class="gg">非生物、巨大体型、boss</text>属性，免疫<text class="gg">睡眠</text>，抵抗恐惧，魅惑，眩晕，迟缓，霜冻，冻结，生根，残废。</p>
<p>掉落<text class="gg">30</text>经验。</p>
<p>掉落<text class="gg">2~4个邪能碎片</text>，概率分别为0.6，0.3， 0.1。</p>
</template>

<script>
export default {
    name: 'Ch3Dm300',
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