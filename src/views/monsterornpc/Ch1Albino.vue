<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/rat/part-Slice16.png" style="width: 100px;height: 100px;"/>
    <span class="title">白化老鼠</span>
  </div>
    
<p>这是一种珍稀的啮齿小鼠，有着纯自色的毛皮和锯齿状的牙齿。</p>
<p>这只怪物的生命值上限为<text class="gg">15</text>，攻击为<text class="gg">1~4</text>防御为<text class="gg">0~1</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">2</text>，命中为<text class="gg">8。</text></p>
<p>它攻击你时有<text class="gg">1/2</text>的几率导致<text class="gg">流血</text>，流血的初始值等于伤害。</p>
<p>掉落<text class="gg">2</text>经验，获得经验的最大等级为<text class="gg">5</text>级。</p>
<p>100%概率掉落一块肉。</p>
</template>

<script>
export default {
    name: 'Ch1Albino',
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