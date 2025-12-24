<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice190.png" style="width: 100px;height: 100px;"/>
    <span class="title">位面日暑</span>
  </div>
    
    <p>在系统时间21到6点之间刷怪效率每级提高0.25，升级消耗5炼金能量。通常每50回合尝试刷新一只怪物，黑暗层乘2/3，拿到护符返回时会加快，最后回合数会除以1+(日等级+1)x0.25。挖矿层固定150回合不受影响</p>
</template>

<script>
export default {
    name: 'TrinketDimensionalsundial',
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