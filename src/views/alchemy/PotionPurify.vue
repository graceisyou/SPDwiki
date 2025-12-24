<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice233.png" style="width: 100px;height: 100px;"/>
    <span class="title">净化药剂</span>
  </div>
<p>这种魔法试剂能迅速中和掉大范围内的各种有害环境。饮用它将使你暂时免疫这种环境</p>
<p>饮用可获得20回合的净化buff，期间免疫切环境效果(如火焰，冰霜，气体)，投掷则可以清除7*7范围内的环境效果。对应<text class="gg">法皇花</text>种子。</p>
<p><text class="gg">全面净化合剂</text>:完全驱散饮用者或目标生物的所有负面状态，包括但不限于饥饿，中毒，燃烧等，并在5回合内免疫负面效果。</p>
<p>法皇花效果:解除流血、中毒、虚弱、迟缓、眩晕、残废、易伤、失明、困倦效果。</p>
<p>守望者特效:<text class="gg">获得10回合气体免疫</text>(同净化药剂)</p>
</template>

<script>
export default {
    name: 'PotionPurify',
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