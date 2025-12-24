<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice196.png" style="width: 100px;height: 100px;"/>
    <span class="title">恐惧卷轴</span>
  </div>
    
<p>一道红色闪光将以恐惧压垮使用者视觉范围内生物的心智并使它们转身逃跑(20回合)。攻击正在逃跑的敌人会缩短该效果的持续时长。</p>
<p><text class="gg">极度恐慌秘卷</text>:视野内敌人获得20回合魂飞魄散"效果，使其以双倍速逃离，在离开视野后永久消失，对boss/miniboss则改为造成20回合恐惧。</p>
<p><text class="gg">恐惧符石</text>:对目标造成恐惧20回合。</p>
</template>

<script>
export default {
    name: 'ScrollTerror',
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