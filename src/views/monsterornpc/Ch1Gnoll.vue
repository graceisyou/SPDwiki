<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/gnoll/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼巡查</span>
  </div>
    
<p>豺狼是鬣狗状的类人生物。它们在下水道和地牢里游荡，不时向上行动试图向地表发起进攻。豺狼巡查是它们种群里最普通的一员，它们既没有豺狼暴徒强壮，也赶不上萨满聪明。</p>
<p>这只怪物的生命值上限为<text class="gg">12</text>，攻击为<text class="gg">1~6</text>，防御为<text class="gg">0~2</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">4</text>，命中为<text class="gg">10。</text></p>
<p>掉落<text class="gg">2</text>经验，获得经验的最大等级为<text class="gg">8</text>级。</p>
<p><text class="gg">0.5</text>概率掉落<text class="gg">金币。</text></p>
</template>

<script>
export default {
    name: 'Ch1Gnoll',
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