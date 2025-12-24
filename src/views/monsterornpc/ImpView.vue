<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/demon/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">野心勃勃的小恶魔</span>
  </div>
    
<p>小恶魔是一种低等恶魔。它们既没有强大的力量也没有魔法天赋，但他们相当聪明而且善于交际。许多小恶魔都喜欢生活在没有其他恶魔存在的地方。</p>
<p>完成任务会奖励一个<text class="gg">2~4级</text>的带诅咒的随机戒指。各个等级的概率为:2:2/3,3:4/15,4:1/15</p>
</template>

<script>
export default {
    name: 'ImpView',
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