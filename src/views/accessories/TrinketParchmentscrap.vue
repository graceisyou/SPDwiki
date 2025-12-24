<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice186.png" style="width: 100px;height: 100px;"/>
    <span class="title">残魔余卷</span>
  </div>
    
    <p>概率增加武器和护甲的附魔刻印与诅咒概率，在等级0/1/2/3时，附魔刻印概率变为原来的2/4/7/10倍，诅咒概率变为原来的1.5/2/1/0倍，升级消耗10+5x余卷等级炼金能量。附魔刻印基础概率为1/10，诅咒为3/10</p>
</template>

<script>
export default {
    name: 'TrinketParchmentscrap',
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