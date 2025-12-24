<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice137.png" style="width: 100px;height: 100px;"/>
    <span class="title">魔弹法杖</span>
  </div>
    
  <p>这根十分普通的法杖能发射由纯魔法能量构成的飞弹。尽管不如其他法杖那么强大，但它更多的充能数弥补了这一点。</p>
  <p>这根法杖的伤害为<text class="gg">2+法杖等级~8+2*法杖等级。</text></p>
  <p>命中目标后获得4回合“魔力聚集”效果，在此期间所有等级低于魔弹法杖的杖均被视为等同于魔弹等级。不过每次的充能消耗还是由法杖本身的充能数决定。</p>
  <p>战法效果为所有法杖恢复0.5充能。</p>
  </template>
  
  <script>
  export default {
    name:'WandMagicmissile',
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