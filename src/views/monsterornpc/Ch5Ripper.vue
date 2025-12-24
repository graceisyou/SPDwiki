<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/ripper/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">恶魔撕裂者</span>
  </div>
    
<p>这种恐怖的生物是恶魔利用这里残留的众多矮人尸骸而组成的。恶魔撕裂者外观类似苍白瘦弱的矮人，具有残缺不全的躯干与尖利修长的骨爪。</p>
<p>恶魔撕裂者难以承受沉重的打击，但它们行动迅捷并十分危险。它们能够瞬间扑过极远的距离，再用自己的骨爪刺穿目标。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">15~25</text>，防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">0.5</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">22</text>，命中为<text class="gg">30。</text></p>
<p>可以花费1回合跳跃到提示地点，攻击目标并造成初始值为伤害75%的流血。</p>
<p>具有<text class="gg">恶魔、亡灵</text>属性。</p>
<p>掉落<text class="gg">9</text>经验，获得经验的最大等级为<text class="gg">-2</text>级。</p>
</template>

<script>
export default {
    name: 'Ch5Ripper',
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