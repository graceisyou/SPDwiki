<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice159.png" style="width: 100px;height: 100px;"/>
    <span class="title">财富之戒</span>
  </div>
    
<p>说不清这枚戒指具体如何起效，好运会以名种形式微妙地影响着冒险家的一生。自然，负等级的戒指会为配戴者招来厄运。</p>
<p>对于提升爆率，爆率提升至<text class="gg">1.2^效果等级</text>倍</p>
<p>财富戒指的奖励分为4种。</p>
<p>低级:金币或是随机药水符石卷轴1个中级:双份的低级奖励、随机均等分布的合剂与秘卷、罐子、炸弹、催化剂</p>
<p>高级:双份的中级奖励、经验药、嬗变卷、附魔符石</p>
<p>宝藏级:随机的武器、护甲、神器、戒指。财富戒指等级可以提升装备品阶级、附魔概率当财富戒指等级达到+1/3/5/7/9...时，掉落装备品等级为 +1/2/3/4/5..</p>
</template>

<script>
export default {
    name: 'RingWealth',
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