<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/eye/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">邪恶之眼</span>
  </div>
    
<p>邪眼是一种将恶魔能量压抑在自己体内的漂浮球形生物。它们拥有近战能力，但其真正的力量蕴藏在它们的魔法之中。</p>
<p>在短暂的蓄能过后邪眼将会释放一种名叫<text class="gg">死亡凝视</text>的毁灭性能量射线。任何受到邪眼的这种凝视的生物都会受到极大的伤害，所以明智的冒险者都会导求掩护。</p>
<p>这只怪物的生命值上限为<text class="gg">100</text>，攻击为<text class="gg">20~30</text>，防御为<text class="gg">0~10</text>，攻击延迟为<text class="gg">1</text>，移速头<text class="gg">1</text>,闪避为<text class="gg">20</text>，命中为<text class="gg">30</text>，视野距离为<text class="gg">6。</text></p>
<p>蓄力2回合后能射出<text class="gg">死亡凝视</text>，攻击为<text class="gg">30~50</text>蓄力期间受到的任何伤害都会减少3/4。</p>
<p>具有<text class="gg"></text>恶魔属性，对<text class="gg">解离法杖，解离陷阱与死亡凝视</text>具有抗性。</p>
<p>掉落<text class="gg">13</text>经验，获得经验的最大等级为<text class="gg">26</text>级。</p>
<p>50%掉落<text class="gg">2滴露珠</text>，25%掉落<text class="gg">一个种子</text>，25%掉落<text class="gg">一个符石。</text></p>
</template>

<script>
export default {
    name: 'Ch5Eye',
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