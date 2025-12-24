<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice185.png" style="width: 100px;height: 100px;"/>
    <span class="title">巨鼠头骨</span>
  </div>
    
    <p>稀有敌人的出现频率变为2+头骨等级倍，对装甲石像和水晶宝箱怪效果减半，升级消耗6+2x头骨等级炼金能量。稀有怪基础概率大都为1/50，装甲雕像为1/10,咒缚灵为1/100</p>
</template>

<script>
export default {
    name: 'TrinketSkull',
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