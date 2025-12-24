<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice206.png" style="width: 100px;height: 100px;"/>
    <span class="title">嬗变卷轴</span>
  </div>
<p>卷轴内存着强力的嬗变魔法，用在可行的道具上会将其转变成同类型的另一样道具。变魔法还会保留原道具上的升级、附魔和刻印。</p>
<p><text class="gg">蜕变秘卷</text>:将自身的一个天赋更改为其它职业同层的一个天赋。部分天赋在其它职业选取时具有不同效果。</p>
<p><text class="gg">强化符石</text>:用于强化装备的一种属性，但是会以减弱另一种属性为代价。用于武器可以强化伤害或者速度。用于护甲可以强化防御或者闪避。</p>
<p>武器强化速度会使延迟降至<text class="gg">0.667</text>倍，伤害降为<text class="gg">0.7</text>倍;强化伤害会使伤害提升至<text class="gg">1.5</text>倍，延迟会提升到<text class="gg">1.667</text>倍。</p>
<p>护甲强化闪避会使最高防御降低<text class="gg">2+等级</text>，增加<text class="gg">4+等级*2</text>的闪避值，强化防御具有相反的效果。</p>
</template>

<script>
export default {
    name: 'ScrollAlter',
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