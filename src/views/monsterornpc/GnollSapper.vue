<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/gnoll_sapper/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼矿工</span>
  </div>

    
    
<p>这个豺狼人矮小虚弱但机智。它长有浅色皮毛，携带着装满各种小工具的挎包。</p>
<p>这只怪物的生命值上限为<text class="gg">45</text>，攻击为<text class="gg">1~6</text>防御为<text class="gg">0~6</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">18</text>，闪避为<text class="gg">15。</text></p>
<p>不可获得经验。</p>
<p>具有迷你BOSS属性，会尝试唤醒三格内的伙伴，视野内有敌人时不会移动，没有敌人时不会离开出生地3格内。技能冷却<text class="gg">4~6</text>回合，受伤时减少伤害的1/10回合，技能详细内容见豺狼地卜师介绍</p>
</template>

<script>
export default {
    name: 'GnollSapper',
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