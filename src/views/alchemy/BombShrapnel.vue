<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice66.png" style="width: 100px;height: 100px;"/>
    <span class="title">破片爆弹</span>
  </div>
    

  <p>这枚炸弹里封装了DM-300的金属破片，当炸弹爆炸时这些破片会携带着能量向四周进发使用它时你最好躲在一处掩体后面...等同于炸弹爆炸中心的伤害，范围类似8格视野，受护甲减免。每格距离伤害线性衰减1/20。</p>
</template>

<script>
export default {
    name: 'BombShrapnel',
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