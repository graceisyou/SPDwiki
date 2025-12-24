<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/mimic/part-Slice29.png" style="width: 100px;height: 100px;"/>
    <span class="title">水晶宝箱怪</span>
  </div>
    
<p>宝箱怪是一种能随意改变外形的魔法生物。在地牢里它们几乎总会以宝箱形态出现，因为这样更能吸引不防备的冒险者。</p>
<p>水晶宝箱怪相比于它们的近亲更为狡猾，会夺取财宝并尽量避免争斗。它们会在被发现后试图迅速逃离，还能在攻击时将敌人传送到别处。</p>
<p>水晶宝箱怪是普通宝箱怪的衍生生物，属性同普通宝箱怪，但在被发现时会以三倍移速逃离。</p>
<p>具有<text class="gg">恶魔</text>属性。</p>
<p>经验值为0。</p>
<p>1/10的水晶箱子会成为宝箱怪。</p>
<p>水晶宝箱怪携带的物品不带诅咒</p>
</template>

<script>
export default {
    name: 'MimicCrystal',
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