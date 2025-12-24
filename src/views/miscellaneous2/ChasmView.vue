<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice287.png" style="width: 100px;height: 100px;"/>
    <span class="title">裂缝</span>
  </div>
    
<p>掉入裂缝的怪物会立即死亡，并获得一半经验。</p>
<p>英雄掉入裂缝会损失一半生命值，不足一半生命时为失去0~1/4最大生命与半数生命中的较大者。并且根据跌入前的生命附加流血，初始值为最大生命*1/(12-6*失血百分比)</p>
<p>掉入裂缝的物品会在下一层的随机位置生成(但不会掉入特殊房间与隐藏房间，boss层固定掉在楼梯旁)。不过药水会碎裂，种子会直接生长。</p>

</template>

<script>
export default {
    name: 'ChasmView',
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