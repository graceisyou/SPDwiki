<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/part-Slice318.png" style="width: 100px;height: 100px;"/>
    <span class="title">尸尘</span>
  </div>
    
  <p>任务道具。在背包里时，每<text class="gg">(本层幽灵数量+1)^2</text>回合召唤一只幽灵，位置在英雄视野内且与英雄距离大于当前视野半径的1/3(四舍五入)，但召唤间隔不超过49回合。</p>
</template>

<script>
export default {
    name: 'DustView',
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