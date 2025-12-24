<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice166.png" style="width: 100px;height: 100px;"/>
    <span class="title">时光沙漏</span>
  </div>    
    <p>这只大型的华贵沙漏看起来却并不怎么起眼，但你仍觉得它精雕细刻的框架内蕴含着某种强大的力量。在翻转沙漏、在看着沙子流下的同时，你能感受到一种魔法正在拉扯着你，使用这种魔法肯定能给你一些控制时间的方法。</p>
    <p>它的最高等级为<text class="gg">5</text>(显示等级为实际等级*2)</p>
    <p>使用它能使自己遁入时间裂隙或使周围时间静止。</p>
    <p>遁入时间裂隙的回合数为<text class="gg">剩余充能数*5</text>，此时相当于原地不动隐身，怪物仍然会自由行动，饥饿值消耗和自然恢复效果依然存在:结束时若不为饥肠辘辘则会返还期间消耗的饥饿。静止周围时间最多为<text class="gg">剩余充能数*2</text>。</p>
    <p>每<text class="gg">90-损失充能数*3</text>回合恢复一点充能。</p>
    <p>拥有已鉴定且未诅咒的沙漏后，新生成的商店会刷出魔法砂袋，购买即可升级。</p>
    <p>诅咒的沙漏每回合有<text class="gg">1/10</text>的几率跳过1合。</p>
    <p>神器充能效果是<text class="gg">每回合回复0.25充能。</text></p>
</template>

<script>
export default {
    name: 'HourglassView',
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