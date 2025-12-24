<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/wraith/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">怨灵</span>
  </div>

    
<p>怨灵是来自于墓穴中渴望复仇的罪人之魂。</p>
<p>作为飘渺的非实体很难被正常武器击中。</p>
<p>这只怪物的生命值上限为<text class="gg">1</text>，攻击为<text class="gg">1+层数/2~2+层数</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">命中*5</text>，命中为<text class="gg">10+层数。</text></p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>经验值为0。</p>
</template>

<script>
export default {
    name: 'WraithView',
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