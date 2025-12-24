<template>
  <div class="titlebox">
    <el-image src="/images/armors/part-Slice34.png" style="width: 100px;height: 100px;"/>
    <span class="title">常见刻印</span>
  </div>
  <p>常见刻印每个均有12.5%的概率出现。</p>
  <p><text class="gg">晦暗刻印</text>:这个刻印会掩盖使用者的气息:让使用者更难以被发现。增加1+等级/3点港行，降低被发现的概率且随等级成长。被睡眠的怪物发现的概率为1/(距离+潜行)，被游荡的怪物发现的概率为1/(距离/2.0+潜行)。</p>
  <p><text class="gg">迅捷刻印</text>:在穿戴者与敌人的距离大于2时，穿戴者速度提升至<text class="gg">1.2+等级*0.04倍。</text></p>
  <p><text class="gg">粘稠刻印</text>:将经过护甲减免过的(不包括其它防御)伤害的<text class="gg">(等级+1)/(等级+6)</text>的比例转化为延迟伤害。</p>
  <p><text class="gg">电势刻印</text>:每次受到攻击都有<text class="gg">(等级+1)/(等级+6)</text>概率为法杖恢复1点充能。</p>
</template>

<script>
export default {
  name: 'ArmorCommonglyph',
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