<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/spinner/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">矿洞蜘蛛</span>
  </div>
    
<p>绿色而多毛的洞穴蜘蛛们会试着去躲避直接的战斗，它们更喜欢在远处等待其猎物卷入蜘网，在毒素中慢慢死去。</p>
<p>这只怪物的生命值上限为<text class="gg">50</text>，攻击为<text class="gg">10~20</text>防御为<text class="gg">0~6</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">17</text>，命中为<text class="gg">22。</text></p>
<p>攻击使得目标有<text class="gg">1/3</text>的几率获得7~9回合中毒。</p>
<p>对<text class="gg">中毒</text>有抵抗性，并免疫<text class="gg">蛛网</text>的缠绕。</p>
<p>遇到敌人时会先远程发射蛛网阻碍敌人移动，蛛网可用投掷武器消掉。</p>
<p>掉落<text class="gg">9</text>经验，获得经验的最大等级为<text class="gg">17</text>级。</p>
<p><text class="gg">1/8</text>概率掉落<text class="gg">一块生肉。</text></p>
</template>

<script>
export default {
    name: 'Ch3Spinner',
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