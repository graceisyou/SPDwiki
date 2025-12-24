<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice143.png" style="width: 100px;height: 100px;"/>
    <span class="title">酸蚀法杖</span>
  </div>
    
  <p>这根法杖的灰色主干顶端镶嵌着一颗明亮的橙色宝石。这根法杖能射出一颗会在目标位置爆炸成一团强酸性雾气的法球。进入酸雾的任何单位都会持续受到伤害，在酸雾中停留时间越长伤害越高。</p>
  <p>释放的酸雾基础伤害为<text class="gg">2+等级</text>，气体量为50+10*等级。</p>
  <p>战法效果为有概率为目标<text class="gg">附加20回合的腐蚀污泥。</text></p>
  </template>
  
  <script>
  export default {
    name:'WandCorrosion',
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