<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/necromancer/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">死灵法师</span>
  </div>
    
<p>这些黑暗魔法的学徒大量涌入监狱，因为这里是它们磨练死灵法术的最佳地点。</p>
<p>死灵法师通过召唤并加强骷髅作战。死灵法师被击杀后，其召唤的骷髅也会消散。</p>
<p>这个怪物的生命上限为<text class="gg">40</text>，攻击为<text class="gg">0</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">13</text>，命中为<text class="gg">0</text>。它会召唤属性等同于正常的骷髅作战，并给骷髅以生命回复或是激素效果。</p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>掉落<text class="gg">7</text>经验，获取经验最大等级不超过<text class="gg">14。</text></p>
<p>最高<text class="gg">1/5</text>掉落<text class="gg">治疗药水</text>，但最多掉落<text class="gg">6</text>瓶。</p>
</template>

<script>
export default {
    name: 'Ch2Necro',
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