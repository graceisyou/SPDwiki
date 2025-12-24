<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice170.png" style="width: 100px;height: 100px;"/>
    <span class="title">虚空锁链</span>
  </div>
    <p>这些巨大但轻盈的锁链散发着员魂能量。它们可以用来把你拉向一些地形，或将敌人拉向你。无实体的天然特质甚至可以允许其穿透墙壁!</p>
    <p>它的最高等级为<text class="gg">5</text>(显示等级等于实际等级*2)</p>
    <p>它的充能阈值为<text class="gg">5+神器等级*2</text>。获取经验或是经过时间都可以增加充能。</p>
    <p>时间充能为为每<text class="gg">40-(阈值-充能)*2</text>回合1点,但不能超过阈值。</p>
    <p>对于经验充能，充能低于阈值时，每1级经验可以为锁链提供6充能，充能高于阈值时，经验充能的数值减少到(阀值/当前充能)倍。</p>
    <p>它的升级所需经验为100+神器等级*100。玩家每升1级，它就获得100经验。</p>
    <p>诅咒的锁链每回合有<text class="gg">1%</text>的几率使你<text class="gg">残废10回合。</text></p>
    <p>锁链的神器充能效果是:充能小于10+神器等级*4时<text class="gg">每回合获得0.5充能。</text></p>
</template>

<script>
export default {
    name: 'ChainView',
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