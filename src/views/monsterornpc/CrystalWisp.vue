<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/crystal_wisp/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">灵性品簇</span>
  </div>
    
<p>一块小而愤怒的硬化水晶漂浮在空中，泛起明亮的光。它虽然不算强，但只要有机会，就会射出光束伤害你。</p>
<p>这只怪物的生命值上限为<text class="gg">30</text>，攻击为<text class="gg">5~10</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">18</text>,闪避为<text class="gg">16。</text></p>
<p>具有非生物属性经验值为0。</p>
<p>可通过水晶尖刺而不破坏，不相临时可对视野范围内敌人释放光束，造成5~10法术伤害，但光束无法穿过水晶尖刺。</p>

</template>

<script>
export default {
    name: 'CrystalWisp',
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