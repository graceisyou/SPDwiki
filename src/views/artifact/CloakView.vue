<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice162.png" style="width: 100px;height: 100px;"/>
    <span class="title">暗影斗篷</span>
  </div>
    <p>这是盗贼多年前从皇家军械库窃取的一件无价的魔法斗篷。穿上时，能够使你在短时间内完全隐身。</p>
    <p>被使用得越频繁，斗篷就会变得越强，使盗贼更频繁地隐身，持续时间也更长。</p>
    <p>每点充能可以<text class="gg">隐身4回合</text>。斗篷每隔<text class="gg">45-损失充能数</text>回合恢复1点充能，在高于7级时恢复时间还会降低<text class="gg"></text>(等级-7)*5/3回台。</p>
    <p>斗篷的神器充能效果为<text class="gg">每回合获得0.25充能。</text></p>
    <p>诅咒的斗篷无法使用。</p>
    <p>斗篷的升级算法为:每级需要的经验为50+50*等级。每消耗1点充能获得10经验。</p>
    <p>斗篷每级对应的标准人物等级为1,3,5,7,9;11,13,16,19,22。人物等级每高于标准等级1级，斗篷获取经验*110%，每低1级则会*75%。</p>
</template>

<script>
export default {
    name: 'CloakView',
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