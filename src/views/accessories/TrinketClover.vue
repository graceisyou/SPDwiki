<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice191.png" style="width: 100px;height: 100px;"/>
    <span class="title">十三叶草</span>
  </div>
    
    <p>(幸运草等级+1)x0.25的概率触发，使得本次伤害或减伤取更为极端的随机数，升级消耗5炼金能量。游戏中计算随机伤害时，般会取两次随机数的平均数，使得结果更趋近于平均数。十三叶草触发时同样是取两次，但是以偏离平均数的一个作为最终值</p>
</template>

<script>
export default {
    name: 'TrinketClover',
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