<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/king/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">矮人国王</span>
  </div>
    
<p>许多年前，矮人议会中一名最强的巫师洞察了凌驾于生死之上的秘术。很快他就借助这种强大的力量，控制、腐化了王室与整个议会，并将魔爪伸向王国中的每一名矮人。现在他成为了矮人国的国王，统领着数量庞大的死灵。</p>
<p>会尝试利用矮人国王是极具进攻性的强敌，他手下的死灵大军压制入侵者。</p>
<p>这只怪物的生命值上限为<text class="gg">300</text>，攻击为<text class="gg">15~25</text>，防御为<text class="gg">0~10</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>,闪避为<text class="gg">22</text>，命中为<text class="gg">26。</text></p>
<p>具有<text class="gg">boss，亡灵</text>属性，2阶段及之后免疫定命的伤害增幅效果，最后阶段受到的伤害强制变为延缓伤害。</p>
<p>掉落<text class="gg">40</text>经验。</p>
</template>

<script>
export default {
    name: 'Ch4King',
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