<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice192.png" style="width: 100px;height: 100px;"/>
    <span class="title">陷阱元件</span>
  </div>
    
    <p>正常楼层的基础概率为1/2，元件等级x0.25的概率使普通楼层变为陷阱楼层，升级消耗6+2x从簇等级炼金能量</p>
</template>

<script>
export default {
    name: 'TrinketTrapmechanism',
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