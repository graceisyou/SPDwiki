<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice64.png" style="width: 100px;height: 100px;"/>
    <span class="title">鞭炮</span>
  </div>
    
    <p>这枚改造过的炸弹不会爆炸，但会持续不断的放出杂音。没有目标的敌人听到声响后都会逐渐聚集到引爆处。每6回合释放一次。怪物踩上去会爆炸。</p>
</template>

<script>
export default {
    name: 'BombNoise',
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