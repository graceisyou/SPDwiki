<template>
  <div class="titlebox">
  <el-image src="/images/armors/part-Slice127.png" style="width: 100px;height: 100px;" />
  <span class="title">布甲</span>
</div>

    <p>这件轻便的护甲能提供最基本的防御。它是 <text class="gg">1</text>阶护甲，力量需求为 <text class="gg">10</text>点，基础防御 <text class="gg">0~2</text>，防御成长为 <text class="gg">+1/+1</text>。</p>
  </template>
  
  <script>
  export default {
    name:'ClothView',
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