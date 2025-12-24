<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/larva/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">古神幼虫</span>
  </div>
    
<p>这些古神的小小造物是一种易于制造的简陋生物。虽然单个幼虫十分脆弱，但它们能够被迅速地制造出来，并会在形成一个大数目后变得难以抵挡。</p>
<p>这只怪物的生命值上限为<text class="gg">20</text>，攻击为<text class="gg">15~25</text>，防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">12</text>，命中为<text class="gg">30。</text></p>
<p>具有<text class="gg">恶魔</text>属性。</p>
<p>掉落<text class="gg">5</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
</template>

<script>
export default {
    name: 'Ch5Larva',
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