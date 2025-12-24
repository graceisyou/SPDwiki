<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/rot_lasher/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">腐烂触手</span>
  </div>
    
<p>腐烂触手是成熟腐莓根系的一部分，也是其主要自卫手段。触手固扎土中不能移动，却会猛烈攻击任何靠近的威胁。当附近没有敌人，它们矗立不动，试图融入周遭植被。</p>
<p>这只怪物的生命值上限为<text class="gg">40</text>，攻击为<text class="gg">8~15</text>,防御为<text class="gg">0~8</text>，闪避为<text class="gg">0</text>，命中为<text class="gg">15。</text></p>
<p>无敌人或敌人不相邻时每回合回复3生命值，命中目标会使目标获得2回合<text class="gg">残废。</text></p>
<p>具有<text class="gg">小型boss，无法移动</text>属性，免疫<text class="gg">毒气。</text></p>
<p>掉落<text class="gg">1</text>经验。</p>
<p>掉落1个<text class="gg">随机种子。</text></p>
</template>

<script>
export default {
    name: 'Ch2Rotlash',
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