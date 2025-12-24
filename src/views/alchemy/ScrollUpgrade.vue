<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice206.png" style="width: 100px;height: 100px;"/>
    <span class="title">升级卷轴</span>
  </div>
    
<p>这张卷轴可以升级一件物品，提升其品质。法杖的魔力及充能数会获得提升，武器和护甲可以造成或吸收更多的伤害，戒指的效果将会增强。</p>
<p>每次升级都有1/3概率消除诅咒附魔:卷轴的魔力也会影响甚至消除武器的附魔或护甲的刻印。从+4开始升级装备可能会消除附魔或刻印，在+8或者更高等级则会必定消除。+4~+7消除概率:0.1，0.2，0.4，0.8</p>
<p><text class="gg">注魔秘卷</text>:</p>
<p>从三个附魔中选择一个。<text class="gg">其一是常见附魔另一是稀有附魔，最后一个是随机附魔。</text>请注意，这张卷轴不能提供升级。</p>
<p><text class="gg">附魔符石</text>:给武器或者护甲施加附魔。</p>
</template>

<script>
export default {
    name: 'ScrollUpgrade',
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