<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice132.png" style="width: 100px;height: 100px;"/>
    <span class="title">英雄护甲</span>
  </div>
  <p>英雄护甲由矮人王冠升级护甲而来。</p>
  <p>英雄护甲每回合恢复<text class="gg">0.2</text>能量。</p>
  </template>
  
  <script>
  export default {
    name:'EpicView',
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