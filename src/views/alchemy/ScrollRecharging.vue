<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice196.png" style="width: 100px;height: 100px;"/>
    <span class="title">充能卷轴</span>
  </div>
<p>纯正的魔法能量被禁锢在羊皮纸内，当这股能量被释放时会在短时间内持续为阅读者的所有法杖充能。赋予30回合充能，每回合回复法杖1/4点充能。</p>
<p><text class="gg">魔能秘卷</text>:30回合神器充能。</p>
<p><text class="gg">电击符石</text>:5*5范围内的目标麻痹1回合，使用者的法杖回复<text class="gg">1+击中目标数</text>的充能。</p>
</template>

<script>
export default {
    name: 'ScrollRecharging',
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