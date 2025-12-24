<template>
    <div class="titlebox">
    <el-image src="/images/accessories/shardofoblivion.png" style="width: 100px;height: 100px;"/>
    <span class="title">遗忘碎片</span>
  </div>
    
    <p>阻止自动鉴定，但能手动鉴定本应该自动鉴定完成的物品。除了神器栏外，每装备一个未鉴定的物品或50回合内使用过未鉴定的法杖，!就获得一级掉率加成(不超过饰品等级+1)，每级掉率加成为12.5%，与财富戒指和赏金猎手天赋加算</p>
</template>

<script>
export default {
    name: 'Trinketshardofoblivion',
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