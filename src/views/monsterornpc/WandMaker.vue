<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/wandmaker/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">老杖匠</span>
  </div>
    
<p>这位老先生的表情看起来十分困扰。他正在被一个力场盾牌保护着。</p>
<p>完成任务可以从两根已鉴定法杖中二选一，等级为<text class="gg">1~3级</text>。各个等级的概率:1:2/3,2:4/15,3:1/15</p>
</template>

<script>
export default {
    name: 'WandMaker',
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