<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/king/part-Slice16.png" style="width: 100px;height: 100px;"/>
    <span class="title">第四区域boss</span>
  </div>
    
<p>第二十层--第四个boss。i战斗分三阶段。一阶段boss以适中的速度召唤小怪，并会释放系命、闪现两种技能。boss失去150生命后进入二阶段，此时boss无敌，四个角共计出现3波怪物(越来越强)，清掉后进入三阶段。三阶段boss会快速召唤小怪，受到所有伤害变为延缓伤害。召唤物在boss死亡时消失。</p>
</template>

<script>
export default {
    name: 'Ch4Div',
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