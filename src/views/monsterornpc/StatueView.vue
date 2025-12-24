<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/statue/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">活化石像</span>
  </div>
    
<p>你以为这只是地牢里的另一个丑陋雕像，但它发出红光的眼睛让你放弃了刚才的想法。</p>
<p>这只怪物的生命值上限为<text class="gg">15+层数*5</text>，防御为<text class="gg">0~层数+手中武器防御</text>，移速为<text class="gg">1</text>,闪避为<text class="gg">4+层数。</text></p>
<p>具有<text class="gg">非生物</text>属性，抵抗<text class="gg">死神。</text></p>
<p>经验值为0。</p>
</template>

<script>
export default {
    name: 'StatueView',
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