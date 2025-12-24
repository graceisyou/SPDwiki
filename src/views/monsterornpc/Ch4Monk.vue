<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/monk/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">矮人武僧</span>
  </div>

    
<p>这些僧侣皆是狂热的信徒，倾其所能从一切异族手中保护国王的安全。狂热的信仰使得他们将自己的意志交给了国王，只剩下没有思想的躯壳在城市中游荡。</p>
<p>这只怪物的生命值上限为<text class="gg">70</text>，攻击为<text class="gg">12~25</text>防御为<text class="gg">0~2</text>，攻击延迟为<text class="gg">0.5</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">30</text>，命中为<text class="gg">30。</text></p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>每6~7回合获得精神集中状态(必定格挡下一次物理攻击)，在移动时精神集中恢复加快67%。</p>
<p>掉落<text class="gg">11</text>经验，获得经验的最大等级为<text class="gg">21</text>级。</p>
<p><text class="gg">1/12</text>概率掉落<text class="gg">干粮。</text></p>
</template>

<script>
export default {
    name: 'Ch4Monk',
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