<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice130.png" style="width: 100px;height: 100px;"/>
    <span class="title">鳞甲</span>
  </div>
  <p>在厚实的皮背心中缝入金属鳞片，形成了灵活而高防御的护甲。它是<text class="gg">4</text>阶护甲，力量需求为<text class="gg">16</text>点，基础防御<text class="gg">0~8</text>，防御成长为<text class="gg">+1/+4</text>。</p>
  </template>
  
  <script>
  export default {
    name:'ScaleView',
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