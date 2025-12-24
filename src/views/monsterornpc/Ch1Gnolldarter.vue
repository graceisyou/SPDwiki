<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/gnoll/part-Slice12.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼诡术师</span>
  </div>
    
<p>即使以豺狼人的标准来看，这个生物也非常的诡异。它鬼鬼祟祟地弯着腰向前移动，脸上挂着咧着嘴的邪恶笑容，肩上挂着的挎包鼓得同摇篮一般。它的瞳孔中诡异地混合着恐惧与兴奋。</p>
<p>它的挎包里有一大批粗制滥造的飞镖，它们似乎包含着各种有害物质。</p>
<p>这只怪物的生命值上限为<text class="gg">20</text>，防御为<text class="gg">0~2</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">5</text>，命中为<text class="gg">16</text></p>
<p>具有<text class="gg">小型boss</text>属性。</p>
<p>攻击叠加连击数，攻击等级=(0~3)+连击数，超过2使用毒镖，超过6使用火镖，目标已经处于燃烧则使用毒镖。毒镖的中毒回合数攻击等级-2。中断攻击会重置。</p>
<p>掉落<text class="gg">5</text>经验，并掉落<text class="gg">随机的投掷武器1~2个</text>(2/3,1/3)。</p>
</template>

<script>
export default {
    name: 'Ch1Gnolldarter',
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