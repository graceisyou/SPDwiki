<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice233.png" style="width: 100px;height: 100px;"/>
    <span class="title">毒气药剂</span>
  </div>   
<p>打开或摔碎这个密封的药瓶将导致内容物爆发成一团剧毒的绿色烟雾。你应该选择从远处将这瓶药剂扔向敌人，而不是手动开封。1000单位毒气，对范围内的生物造成1+层数/5的伤害。对应<text class="gg">断肠苔</text>种子。</p>
<p><text class="gg">腐蚀酸雾合剂</text>:共225容量的酸蚀气体，从中心向周围8格的空地扩散每格25容量的气体。初始伤害为2+层数/5。</p>
<p>断肠苔效果:造成<text class="gg">5+层数*2/3</text>回合的中毒。</p>
<p>守望者特效:<text class="gg">获得15回合的毒粹之力。</text></p>
</template>

<script>
export default {
    name: 'PotionGas',
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