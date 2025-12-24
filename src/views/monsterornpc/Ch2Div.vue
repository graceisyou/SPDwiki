<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/tengu/part-Slice6.png" style="width: 100px;height: 100px;"/>
    <span class="title">第二区域boss</span>
  </div>

    
<p>第十层--第二个boss。战斗分三阶段。一阶段boss会在一个充满毒镖陷阱的小型房间中进行远程物理战斗;半血后进入二阶段，boss会在直径约为12的近似圆形房间中进行远程物理攻击并使用定时炸弹、电击炸弹热浪三种异能。注意在战斗阶段，boss受到一定伤害后就会闪现，多余的伤害无效。</p>
</template>

<script>
export default {
    name: 'Ch2Div',
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