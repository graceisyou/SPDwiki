<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/blacksmith/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">铁匠任务补充</span>
  </div>
    
<p><text class="gg">水晶层</text>:只会生成一个食物，没入黑暗挑战开启时额外掉落一个火把，不会生成其他物品。怪物只有水晶巨塔、水晶哨兵和灵性晶簇三种。地面上会遍布不可通行的水晶尖刺，携带镐子点击相邻的水晶尖刺，可以敲碎目标点周围3x3范围所有尖刺。</p>
<p><text class="gg">豺狼层</text>:生成两个食物，没入黑暗挑战开启时额外掉落一个火把，不会生成其他物品。怪物只有豺狼地卜师、豺狼守卫和豺狼矿工三种。地面上会遍布不可通行的岩砾，携带镐子点击相邻的岩砾，可以敲碎目标点的岩砾。</p>
<p><text class="gg">蘑菇层</text>:半成品</p>
</template>

<script>
export default {
    name: 'BlackSmith1',
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