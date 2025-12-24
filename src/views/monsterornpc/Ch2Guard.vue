<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/guard/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">监狱守卫</span>
  </div>
    
<p>作为曾经监狱的管理者，这些守卫和那些罪犯已经没什么区别了。它们蹒跚的步伐如同僵尸一般，毫无思绪地四处寻找不属于这片区域的生物，比如你!</p>
<p>它的铁链缠在自己的胯部，卡也许可以用来将敌人拉扯到非常近的距离。</p>
<p>这只怪物的生命值上限为<text class="gg">40</text>，攻击为<text class="gg">4~12</text>，防御为<text class="gg">0~7</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>闪避为<text class="gg">10</text>，命中为<text class="gg">12。</text></p>
<p>掉落<text class="gg">7</text>经验，获得经验的最大等级为<text class="gg">14</text>级。</p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>1/5概率掉落随机护甲，每一次掉落都会降低掉落率1/2。</p>
</template>

<script>
export default {
    name: 'Ch2Guard',
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