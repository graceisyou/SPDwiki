<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/wand.gif" style="width: 100px;height: 100px;"/>
    <span class="title">法杖</span>
  </div>
    
<p>法杖灌注入魔杖可以使充能上限+1。法杖与魔杖最大充能数为10。</p>
<p>法杖充能耗时为 10+40*充能因数^(最大充能数-当前充能数)。充能因数对于普通法杖是0.875，对法杖套内的的法杖为0.85，对魔杖是0.75。由此可见，(1)魔杖充能远远快于普通法杖。(2)维持法杖的充能数在中等水平能提高法杖的效率。</p>
<p>杖自然生成的等级为:2/3概率+0，4/15概率+1,1/15概率+2。老杖匠的法杖有额外的1级。</p>
<p>自然生成的法杖有30%概率诅咒。</p>
<p>鉴定法杖需要10次使用与一级经验。</p>
<p>在电火花中，法杖每回合额外获得1/3点充能。</p>
</template>

<script>
export default {
    name: 'WandView',
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