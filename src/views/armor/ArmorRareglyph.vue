<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice34.png" style="width: 100px;height: 100px;"/>
    <span class="title">罕见刻印</span>
  </div>
  <p>罕见刻印每个均有3.33%概率出现。</p>
  <p><text class="gg">敌法刻印</text>:提供基础为<text class="gg">0~3</text>，成长<text class="gg">1~1.5</text>的魔法减伤(包括法杖、敌方魔法攻击、解离与即死陷阱)。</p>
  <p><text class="gg">荆棘刻印:(等级+2)/(等级+12)</text>概率使攻击者获得初始值为4+等级的流血效果。</p>
  <p><text class="gg">魅惑刻印:(等级+3)/(等级+20)</text>概率魅惑攻击者8~12回合。</p>
  </template>
  
  <script>
  export default {
    name:'ArmorRareglyph',
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