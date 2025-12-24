<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice102.png" style="width: 100px;height: 100px;" />
    <span class="title">捕鱼矛</span>
  </div>
<p>    小巧的投掷用短矛，本来是用来捕鱼的，不过也能当个武器用。</p>
<p v-highlight-numbers>这是一件2阶武器，力量需求为11,基础伤害为4~10，每件的耐久度为10。</p>
<p>伤害成长为 <text class="gg">+2/+2</text>。对 <text class="gg">食人鱼</text>造成不低于当前生命一半的伤害。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileFishing',
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