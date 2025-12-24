<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice62.png" style="width: 100px;height: 100px;"/>
    <span class="title">神圣炸弹</span>
  </div>
    
  <p>这枚改造过的炸弹会在爆炸的一瞬间闪耀出神圣的光芒，对亡灵和恶魔类敌人造成额外伤害。</p>
  <p>在普通炸弹的基础上增加了:5*5范围内亡灵与恶魔受到<text class="gg">额外的0.5倍</text>的炸弹爆炸伤害。</p>
</template>

<script>
export default {
    name: 'BombHoly',
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