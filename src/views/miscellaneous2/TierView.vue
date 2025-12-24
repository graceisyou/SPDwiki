<template>
    <div class="titlebox">
    <el-image src="/images/weapons/part-Slice93.png" style="width: 100px;height: 100px;"/>
    <span class="title">武器与护甲等阶</span>
  </div>
  <p>武器与护甲的等阶与层数有关。 </p>   
  <p>不会自然生成1阶的武器与护甲。</p>
  <p>各个区域各个阶级的概率(区域1-5):</p>
  <p>2阶:75%--25%--0%--0%--0%</p>
  <p>3阶:20%--50%--40%--20%---0%</p>
  <p>4阶:4%--20%--50%--40%--20%</p>
  <p>5阶:1%--5%--10%--40%-80%</p>
</template>

<script>
export default {
    name: 'TierView',
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