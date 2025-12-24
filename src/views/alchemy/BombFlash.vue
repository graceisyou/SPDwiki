<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice60.png" style="width: 100px;height: 100px;"/>
    <span class="title">闪光弹</span>
  </div>
    
    <p>这枚改造过的炸弹不会爆炸，但会释放一阵强烈闪光。任何看到闪光的生物都会晕头转向一阵子。</p>
    <p>正常造成伤害，使生物失明残废<text class="gg">16-4*距离</text>回合。(4格以外无影响)</p>
</template>

<script>
export default {
    name: 'BombFlash',
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