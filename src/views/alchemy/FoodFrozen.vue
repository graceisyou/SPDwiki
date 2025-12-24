<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice299.png" style="width: 100px;height: 100px;"/>
    <span class="title">肉</span>
  </div>
    
    <p>肉类不论各种状态，均可回复<text class="gg">150</text>饱食度神秘肉:1/5概率燃烧8回合，1/5概率生根10回合，1/5概率迟缓10回合，1/5概率获得中毒(时长等于最大生命/5)，最多触发种效果。冻肉:1/5概率获得20回合隐身，1/5概率获得数值为</p>
    <p>最大生命/4 的树皮效果，1/5概率获得净化效果，1/5概率回复1/4生命值，最多触发一种效果。</p>
    <p>烤肉与炖肉没有特殊效果。</p>
</template>

<script>
export default {
    name: 'FoodFrozen',
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