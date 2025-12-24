<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/succubus/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">魅魔</span>
  </div>
    
<p>魅魔是一种善于操纵敌人的精神的变形恶魔。这一只化为了哥特风的苍白人形，或许是为了吸引矮人术士?</p>
<p>在攻击时，魅魔能够暂时魅惑目标，使其无法直接攻击魅魔本身。魅魔在攻击被魅惑的目标时能吸取其生命精华。</p>
<p>这只怪物的生命值上限为<text class="gg">80</text>，攻击为<text class="gg">25~30</text>，防御为<text class="gg">0~10</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">25</text>，命中为<text class="gg">40。</text></p>
<p>它攻击你时有<text class="gg">1/4</text>的几率<text class="gg">魅惑</text>你，攻击被魅惑的目标会回复<text class="gg">5+伤害</text>的生命值，超出部分转化为护盾。</p>
<p>具有<text class="gg">恶魔</text>属性，免疫<text class="gg">魅惑。</text></p>
<p>掉落<text class="gg">12</text>经验，获得经验的最大等级为<text class="gg">25</text>级。</p>
<p><text class="gg">1/3</text>概率掉落一张<text class="gg">随机卷轴</text>(不包含升级与鉴定)。</p>
</template>

<script>
export default {
    name: 'Ch5Succubus',
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