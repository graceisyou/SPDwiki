<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/piranha/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">巨型食人鱼</span>
  </div>
    
<p>这些肉食性鱼类不是地下水池中的天然生物它们被专门培育用来保护被水淹没的储藏室。</p>
<p>这只怪物的生命值上限为<text class="gg">10+层数*5</text>，攻击为<text class="gg">层数~4+层数*2</text>，防御为<text class="gg">0~层数</text>，攻击延迟为<text class="gg">1</text>,移速为<text class="gg">2</text>，闪避为<text class="gg">10+层数*2</text>，命中为<text class="gg">20+层数*2。</text></p>
<p>它免疫所有气体。</p>
<p>经验值为0，100%概率掉落<text class="gg">一块生肉。</text></p>
</template>

<script>
export default {
    name: 'FishView',
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