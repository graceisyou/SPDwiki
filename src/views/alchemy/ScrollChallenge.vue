<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice202.png" style="width: 100px;height: 100px;"/>
    <span class="title">盛怒卷轴</span>
  </div>
<p>大声诵读内容时，卷轴将释放出一声轰响的咆哮，将所有敌人引向你并激怒附近的单位(5口合狂乱)。</p>
<p><text class="gg">决斗秘卷</text>:创建一个决斗区域，区域内释放者获得33%高优先级减伤并且不损失饱腹值吸引全层敌人。决斗区域的大小取决于是否在boss楼层，或是周围8格内可视区域的地格数量。</p>
<p><text class="gg">敌意符石</text>:使所有生物强制攻击目标。对敌人效果只有5回合，而对自己或友方/中立生物则有20回合。</p>
</template>

<script>
export default {
    name: 'ScrollChallenge',
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