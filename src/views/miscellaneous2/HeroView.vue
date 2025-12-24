<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/hero.gif" style="width: 100px;height: 100px;"/>
    <span class="title">英雄</span>
  </div>
    
<p>英雄最大等级为30。30级以后再升级则会获得30回合的祝福。</p>
<p>英雄初始命中属性为10，闪避属性为5。</p>
<p>每次升级，英雄命中+1，闪避+1，最大生命+5。</p>
<p>英雄本身没有任何属性抗性:</p>
<p>随着地牢的深入，隐藏地形越来越难被发现。被动感知发现隐藏门的概率为0.2-层数/100(20层之后无法被动发现)，发现陷阱的概率为0.4-层数/250。诅咒的先见护符会把被动感知降为0。</p>

</template>

<script>
export default {
    name: 'HeroView',
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