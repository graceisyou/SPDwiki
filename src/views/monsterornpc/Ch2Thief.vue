<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/thief/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">疯狂小偷</span>
  </div>
    
<p>虽然这些囚犯逃出了他们的牢房，但这个地方仍然是关押着他们的监狱。随着时间的推移，这个地方摧毁了他们的心智以及对自由的希望。在很久以前，这些疯狂的小偷和强盗就已经忘记了它们是谁以及它们在为什么而偷窃。</p>
<p>这些敌人更愿意偷走你的东西然后逃跑而不是战斗。一定不要让它们离开你的视线，否则你可能再也看不到自己的被盗物品了。</p>
<p>这只怪物的生命值上限为<text class="gg">20</text>，攻击为<text class="gg">1~10</text>，防御为<text class="gg">0~3</text>，攻击延迟为<text class="gg">0.5</text>，移速为<text class="gg">1</text>(盗窃前)<text class="gg">5/6</text>(盗窃后)，闪避为<text class="gg">12</text>，命中为<text class="gg">12。</text></p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>掉落<text class="gg">5</text>经验，获得经验的最大等级为<text class="gg">11</text>级。</p>
<p>小偷有<text class="gg">0.03</text>概率掉落<text class="gg">神器或戒指</text>，每一次掉落都会降低掉落率2/3。</p>
</template>

<script>
export default {
    name: 'Ch2Thief',
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