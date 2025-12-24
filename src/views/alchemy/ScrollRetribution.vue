<template>
    <div class="titlebox">
    <el-image src="/images/armors/part-Slice34.png" style="width: 100px;height: 100px;"/>
    <span class="title">复仇卷轴</span>
  </div>
    
<p>这张卷轴可以将使用者的所受的伤痛转化为能量释放而出。使用者的伤势越重，所释放的能量越大。使用者处于低生命值的情况下所释放的这种能量足以杀死大部分敌人。</p>
<p>即便如此，这张卷轴依然会影响使用者，使其短时间目盲并虚弱无比。</p>
<p>对视野内的所有目标造成<text class="gg">10%最大生命值+22.5%*增幅*当前生命值</text>的伤害，其中增幅为4.45*已损失生命值百分比且上限为4，并使目标失明10回合，并对自己造成10回合失明与20回合虚弱。</p>
<p><text class="gg">灵爆秘卷</text>:对视野内所有生物造成(50%最大生命+50%当前生命)的伤害，对自己造成<text class="gg">0.5*最大生命*0.9^目标数量</text>的伤害，对自己附加10回合失明与100回合虚弱。</p>
<p><text class="gg">震爆符石</text>:瞬爆的炸弹，但是受护甲和抗性影响。</p>
</template>

<script>
export default {
    name: 'ScrollRetribution',
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