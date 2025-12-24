<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice58.png" style="width: 100px;height: 100px;"/>
    <span class="title">寒霜炸弹</span>
  </div>
    
    <p>这枚改造过的炸弹会在爆炸时向周围释放出强大的冰霜之风。</p>
    <p>5*5冰寒，持续10回合，立即冻结范围内敌人2回合。</p>
</template>

<script>
export default {
    name: 'BombFrost',
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