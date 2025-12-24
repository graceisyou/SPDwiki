<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice63.png" style="width: 100px;height: 100px;"/>
    <span class="title"> 绵绵炸弹</span>
  </div>
   
    <P>这枚改造过的炸弹不会爆炸，但会召出一群魔法绵羊。这群羊会留在原地一阵，在此期间成为阻碍几乎一切行动的障碍物。</P>
    <P>造成正常伤害，并生成9*9的羊群，持续200回合(互动可取消羊的持续时间)。boss层仅持续20回合。</P>
</template>

<script>
export default {
    name: 'BombWool',
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