<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice59.png" style="width: 100px;height: 100px;"/>
    <span class="title">再生炸弹</span>
  </div>
    
    <P>这枚改造的炸弹在触发时不会爆炸，而是向四周溅射出拥有再生能力的药液。被药液影响到的区域会立刻被植被覆盖，在范围内的友方单位也会被治疗。</P>
    <p>5*5长草，长出1~3株植物，5*5治疗(治疗量等同于治疗药水)。</p>
</template>

<script>
export default {
    name: 'BombRegrowth',
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