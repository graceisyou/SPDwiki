<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/bee/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">金色蜜蜂</span>
  </div>

    
  <p>尽管它们体积小，但金色蜜蜂有着强烈的保护家园的欲望。这只蜜蜂非常疯狂，最好和它保持距离。</p>
  <p>这只怪物的生命值上限为<text class="gg">(2+层数)*4</text>，攻击为<text class="gg">生命值上限/10~生命值上限/4</text>，防御为<text class="gg">0</text>，攻击延迟为<text class="gg">1</text>移速为<text class="gg">1</text>闪避为<text class="gg">9+层数</text>，命中为<text class="gg">9+层数。</text></p>
  <p>经验值为0，它只能在破碎的蜜蜂罐周围3格内活动。</p>
</template>

<script>
export default {
    name: 'BeeView',
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