<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice239.png" style="width: 100px;height: 100px;"/>
    <span class="title">经验药剂</span>
  </div>
<p>众多战斗积累而来的经验被浓缩为液态，这种药剂能够瞬间提升你的等级。</p>
<p>立刻提升1级，对应<text class="gg">星陨花</text>种子。30级后饮用会给与30回合祝福。</p>
<p><text class="gg">神意启发合剂</text>:指定层的天赋获得两个额外的天赋点，每层仅可用一次。</p>
<p>星陨花出现概率为其它植物的40%。</p>
<p>星陨花效果:使目标获得30回合祝福。</p>
<p>守望者特效:额外<text class="gg">获得30回合充能效果。</text></p>
</template>

<script>
export default {
    name: 'PotionExp',
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