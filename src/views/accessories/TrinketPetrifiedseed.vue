<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice187.png" style="width: 100px;height: 100px;"/>
    <span class="title">石化种子</span>
  </div>
    
    <p>在等级0/1/2/3时，有0.25/0.46/0.65/0.80的概率会将践踏高草应掉落的种子替换为符石，还会提升0/0.08/0.17/0.25高草掉落物品的概率，升级消耗6+2x种子等级炼金能量</p>
</template>

<script>
export default {
    name: 'TrinketPetrifiedseed',
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