<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice160.png" style="width: 100px;height: 100px;"/>
    <span class="title">元素之戒</span>
  </div>
    
<p>这枚戒指能为佩戴者提供抗性，降低大部分元素和魔法效果的伤害和持续时间。被诅咒的戒指自然会加重这些效果。</p>
<p>对各种元素(火焰毒气等)伤害的抗性，些debuff时间的缩短，以及对某些怪物(萨满，术士，邪眼)的攻击增加抗性，降低受到的法杖伤害。使这些效果变为<text class="gg">0.825^效果等级</text>倍。</p>
</template>

<script>
export default {
    name: 'RingElement',
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