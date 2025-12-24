<template>
    <div class="titlebox">
    <el-image src="/images/accessories/vialofblood.png" style="width: 100px;height: 100px;"/>
    <span class="title">血饮魔瓶</span>
  </div>
    
    <p>治疗药剂/水袋/生命之泉治疗量变为1.125/1.25/1.375/1.5倍，每回合治疗量上限变为4+0.15*血量上限/3+0.1*血量上限/2+0.07*血量上限/1+0.05*血量上限，能量消耗6/8/10/12点</p>
</template>

<script>
export default {
    name: 'Trinketvialofblood',
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