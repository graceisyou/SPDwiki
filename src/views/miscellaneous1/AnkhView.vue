<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/part-Slice33.png" style="width: 100px;height: 100px;"/>
    <span class="title">重生十字架</span>
  </div>
    
<p>这枚象征不朽的古老饰品能够起死回生。在复苏时所有未装备的道具都会丢失。使用装满的露水瓶能够祝福十字章，赋予它更强的力量。</p>
<p>祝福的十字架能回复<text class="gg">1/4生命</text>，并赋予3回合无敌。</p>
<p>未祝福的十字架则允许携带两件物品在本层的某一处复活，挖矿十字镐以外的其余物品掉落在死亡地点。在拾取遗物之前无法拾取或使用其它道具。</p>
</template>

<script>
export default {
    name: 'AnkhView',
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