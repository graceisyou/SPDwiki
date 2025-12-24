<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/bat/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">吸血蝙蝠</span>
  </div>
    
  <p>这些敏捷且坚韧的洞穴穹顶生物能够通过每一次成功的攻击来恢复自己的生命，从而打败比它们大得多的对手。</p>
  <p>这只怪物的生命值上限为<text class="gg">30</text>，攻击为<text class="gg">5~18</text>防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">2</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">16</text>，每次攻击会为自己恢复<text class="gg">伤害-4</text>生命。</p>
  <p>掉落<text class="gg">7</text>经验，获得经验的最大等级为<text class="gg">15</text>级。</p>
  <p>最高<text class="gg">1/6</text>的概率掉落<text class="gg">治疗药剂</text>，但最多只能掉落<text class="gg">7</text>瓶。</p>
</template>

<script>
export default {
    name: 'Ch3Bat',
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