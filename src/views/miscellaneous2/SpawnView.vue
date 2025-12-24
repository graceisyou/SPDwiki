<template><div class="titlebox">
    <el-image src="/images/miscellaneous/spawn.gif" style="width: 100px;height: 100px;"/>
    <span class="title">怪物生成</span>
  </div>
    
<p>怪物生成数量有一定的规律。初次进入一层时该层会生成<text class="gg">3+0~3+当前区域的层数</text>只怪物(特殊层除外)。黑暗层额外生成50%的怪物。广阔楼层额外生成33%怪物。</p>
<p>怪物每50回合刷新一只，黑暗层(指的是黑暗feeling，不是挑战)刷怪效率提高50%，护符返程清除原有怪物，刷怪间隔为5*当前怪物数量，且介于5~25之间，在1层该间隔进一步缩短60%。</p>
<p>怪物只会在视野外生成。</p>
<p>每生成一只怪物时，它都有0.02的概率变为对应的精英怪。</p>
<p>跨层刷怪同样存在。</p>
<p>4层有2.5%概率可能生成小偷</p>
<p>9层2.5%概率可能生成蝙蝠</p>
<p>14层2.5%概率可能生成矮人尸群</p>
<p>19层2.5%概率可能生成魅魔</p>
</template>

<script>
export default {
    name: 'SpawnView',
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