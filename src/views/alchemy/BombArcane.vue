<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice65.png" style="width: 100px;height: 100px;"/>
    <span class="title">奥术炸弹</span>
  </div>
    
  <p>这枚炸弹里灌注了奥术能量，当它爆炸时会释放出等同粘咕蓄力攻击一般的强大能量。爆炸对5*5范围内的所有生物造成<text class="gg">层数+5~10+层数*2</text>点伤害，无视护甲，距离1/2格时爆炸伤害减少1/6,1/3。</p>
</template>

<script>
export default {
    name: 'BombArcane',
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