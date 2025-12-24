<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/swarm/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">蝇群</span>
  </div>
    
<p>致命的飞蝇群愤怒地发出嗡嗡声。每次非魔法攻击都会把它分割成两群更小但同样危险的飞蝇群。</p>
<p>这只怪物的生命值上限为<text class="gg">50</text>，攻击为<text class="gg">1~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">5</text>，命中为<text class="gg">10。</text></p>
<p>它每次分身都会让自己的生命值减半。</p>
<p>掉落<text class="gg">3</text>经验，获得经验的最大等级为<text class="gg">9</text>级。</p>
<p><text class="gg">最高1/6</text>概率掉落治疗药剂，但最多掉落<text class="gg">5</text>瓶。</p>
</template>

<script>
export default {
    name: 'Ch1Swarm',
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