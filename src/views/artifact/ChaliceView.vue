<template>
  <div class="titlebox">
    <el-image src="/images/artifact/part-Slice175.png" style="width: 100px;height: 100px;"/>
    <span class="title">蓄血圣杯</span>
  </div>
    
<p>这个闪闪发光的银质酒杯在边沿突兀地装饰着几颗造型尖锐的宝石。</p>
<p>蓄血圣杯作用是缩短被动回复间隔，无圣杯时每隔<text class="gg">10</text>回合回复1生命值，有非诅咒圣杯时每隔<text class="gg">10-1.33-圣杯等级*0.667</text>回合回复1生命值(相当于每8~2回合)</p>
<p>圣杯通过血祭升级，每次伤害为<text class="gg">5+3*圣杯等级平方</text>，可以受到护甲等各种形式的防御的减免。如果伤害超过你当前生命值的<text class="gg">75%</text>，血祭之前会有警告。</p>
<p>神器充能效果为<text class="gg">额外获得5倍生命回复，结果向上取整。</text></p>
<p>诅咒的圣杯无法血祭且会让你的被动回复减慢至<text class="gg">2/3。</text></p>
  </template>
  
  <script>
  export default {
    name:'ChaliceView',
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