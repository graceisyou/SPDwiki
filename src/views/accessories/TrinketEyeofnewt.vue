<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice195.png" style="width: 100px;height: 100px;"/>
    <span class="title">蝾螈灵眼</span>
  </div>
    
    <p>视野范围变为1-( 灵眼等级+1)x0.125倍:同时赋予你对2+能晶等级格内敌人的灵视感知，升级消耗6+2x灵眼等级炼金能量。与鹰眼远视天赋乘算</p>
</template>

<script>
export default {
    name: 'TrinketEyeofnewt',
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