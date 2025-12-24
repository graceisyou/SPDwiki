<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice193.png" style="width: 100px;height: 100px;"/>
    <span class="title">拟箱利齿</span>
  </div>
    
<p>宝箱怪出现概率变为1+(利齿等级+1)x0.5倍，(利齿等级+1)x0.125概率额外生成个黑檀宝箱怪，升级消耗6+2x利齿等级炼金能量。</p>
<p>黑檀宝箱怪属性按1.5倍层数计算，开箱时的攻击是普通宝箱怪的1.5倍。掉落同金色宝箱怪，携带的装备或法杖不带有诅咒。如果物品不是投掷武器或神器且等级为0，有1/2概率升一级。有1/2概率生成于特殊房间之外的随机物品堆处，1/10概率生成于下楼楼梯，2/5概率生成于门。(2.4.1改为开箱1.75倍，层数1.33倍)</p>
</template>

<script>
export default {
    name: 'TrinketMimictooth',
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