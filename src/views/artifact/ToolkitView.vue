<template>
  <div class="titlebox">
    <el-image src="/images/artifact/part-Slice167.png" style="width: 100px;height: 100px;"/>
    <span class="title">炼金工具箱</span>
  </div>
<p>工具箱内存放着各类试剂，草药，和一个小混合瓶，让使用者在野外也能够进行炼金实验。</p>
<p>炼金工具箱每消耗6能量便会升1级。也可以随着人物获得经验充能，每级经验可以提供<text class="gg">2+炼金工具箱等级</text>的能量。</p>
<p>其神器充能效果为<text class="gg">每回合获得0.25能量。</text></p>
<p>诅咒的工具箱使你无法炼药。</p>
  </template>
  
  <script>
  export default {
    name:'ToolkitView',
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