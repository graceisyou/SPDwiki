<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice189.png" style="width: 100px;height: 100px;"/>
    <span class="title">苔藓丛簇</span>
  </div>
    
    <p>正常楼层的基础概率为1/2，从簇等级x0.25的概率使普通楼层变为流水或草木楼层，两者概率各半，升级消耗10+10x丛簇等级炼金能量。优先于陷阱元件</p>
</template>

<script>
export default {
    name: 'TrinketMossyclump',
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