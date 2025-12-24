<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/dm300/part-Slice9.png" style="width: 100px;height: 100px;"/>
    <span class="title">第三区域boss</span>
  </div>
    
    <p>第十五层--第三个boss。战斗分三阶段。-阶段boss会使用喷射毒气、范围麻痹、普攻;损失1/3生命后，boss开始免疫伤害具有二倍移速、可破墙，场景出现电火花电火花指向的那一角的能源塔激活，需要打掉塔以解除当前状态。随后一二阶段重复一遍。最后阶段，战斗正常，场景比一阶段多了电火花。在一二阶段boss踩到地上的线缆会获得30点护盾(会自动解除)，三阶段无效。</p>
</template>

<script>
export default {
    name: 'Ch3Div',
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