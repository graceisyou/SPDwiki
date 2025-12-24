<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice182.png" style="width: 100px;height: 100px;"/>
    <span class="title">干枯玫瑰</span>
  </div>   
    <p>这就是那朵在幽灵消失前被提及的玫瑰吗?它似乎拥有某种精神力量，也许能以此为媒介触及这位陨落战士的能量。</p>
    <p>召唤的白幽的生命值上限为<text class="gg">神器等级*8+20</text>,命中为<text class="gg">英雄等级+9</text>，闪避为<text class="gg">英雄等级+4</text>。它的力量为<text class="gg">神器等级/2+13</text>。它的伤害与防御均为装备的面板数值。未装备时，它的伤害为<text class="gg">0~5</text>，防御为<text class="gg">0。</text></p>
    <p>白幽每回合可以恢复0.2%的生命。</p>
    <p>玫瑰需要500回合充能完毕。</p>
    <p>如果玫瑰被诅咒，每回合周围都有0.01概率生成一只幽灵。</p>
    <p>玫瑰的神器充能效果是<text class="gg">每回合回复4充能。</text></p>
    <p>或是为白幽每回合<text class="gg">恢复1+等级13点生命。</text></p>
  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=607535039&bvid=BV1X84y1a7Rm&cid=960180372&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</template>

<script>
export default {
    name: 'RoseView',
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