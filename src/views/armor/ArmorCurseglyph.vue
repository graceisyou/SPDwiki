<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice288.png" style="width: 100px;height: 100px;"/>
    <span class="title">诅咒刻印</span>
  </div>
    <p>各个诅咒刻印出现概率相等。</p>
   <p><text class="gg">反熵诅咒</text>:使穿戴者燃烧4回合，并冰冻周围8格，<text class="gg">1/8</text>概率触发。</p>
<p><text class="gg">臃肿诅咒</text>:通过门的时间变为<text class="gg">3</text>倍。</p>
<p><text class="gg">腐蚀诅咒</text>:每次被击中都有<text class="gg">1/10</text>概率触发腐蚀污泥影响<text class="gg">3*3</text>的范围，持续时间10回合</p>
<p><text class="gg">定相诅咒</text>:每次被击中都有<text class="gg">1/20</text>概率随机传送。</p>
<p><text class="gg">代谢诅咒</text>:每次被击中都有<text class="gg">1/6</text>的概率会把<text class="gg">45</text>的饱食度转化为生命值(10:1转化)。</p>
<p><text class="gg">分身诅咒</text>:每次被击中都有<text class="gg">1/20</text>概率触发:复制怪物或是产生镜像。对boss、miniboss宝箱怪、石像会生成一个同区域的怪物。</p>
<p><text class="gg">从生诅咒</text>:每次被击中都有<text class="gg">1/20</text>概率触发随机触发一株植物效果，但<text class="gg">不会触发守望者增益效果。</text></p>
<p><text class="gg">恶臭诅咒</text>:每次被击中都有<text class="gg">1/8</text>概率施放250单位毒气。</p>
  </template>
  
  <script>
  export default {
    name:'ArmorCurseglyph',
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