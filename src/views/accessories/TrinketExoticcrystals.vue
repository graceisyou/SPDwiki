<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice188.png" style="width: 100px;height: 100px;"/>
    <span class="title">奇异能晶</span>
  </div>
    
    <p>1+(能晶等级+1)x0.125的概率会将自然生成的药剂、卷轴替换为对应的合剂、秘卷，升级消耗6+2x能晶等级炼金能量。对水晶道路房/秘密炼金房/秘密书房/财富戒指高级奖励的固定生成的物品也生效</p>
</template>

<script>
export default {
    name: 'TrinketExoticcrystals',
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