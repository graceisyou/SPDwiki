<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice239.png" style="width: 100px;height: 100px;"/>
    <span class="title">极速药剂</span>
  </div>
    
<p>喝下这甜到掉牙的奇怪液体后，体内会爆发一股巨天的能量，让你可以短时间内飞速奔跑。</p>
<p>20回合内你的移动速度变为3倍。对应<text class="gg">速行蓟</text>种子。</p>
<p><text class="gg">精力恢复合剂</text>:100回合，移速提升<text class="gg">50%。</text></p>
<p>速行蓟效果:使目标获得5回合时间气泡。</p>
<p>守望者特效:额外<text class="gg">获得1回合极速。</text></p>
</template>

<script>
export default {
    name: 'PotionHaste',
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