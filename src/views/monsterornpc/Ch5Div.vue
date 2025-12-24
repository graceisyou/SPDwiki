<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/yog/part-Slice10.png" style="width: 100px;height: 100px;"/>
    <span class="title">第五区域boss</span>
  </div>
    
<p>第二十五层--第五个boss。战斗分五阶段。前三阶段，boss每失去300生命值是一个阶段，在失去300,600.900生命值时各召唤个拳头助战。第四阶段在三阶段结束后立即执行，召唤出一堆怪物，同时进入第五阶段:快速召唤怪物并高频释放激光。</p>
<p>被动技能:boss每失去400生命值，释放的激光条数+1;每受到10点伤害，召唤与释放激光的cd-1;21~24层每有一个恶魔血巢没有清掉，boss召唤物的25%由古神幼虫变为恶魔撕裂者。</p>
</template>

<script>
export default {
    name: 'Ch5Div',
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