<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/large_buffs/part-Slice40.png" style="width: 100px;height: 100px;"/>
    <span class="title">献祭之火</span>
  </div>
    
<p>取得献祭之火的奖励需要6+4*层数点经验。</p>
<p>杀死带有献祭之火的目标可以获得经验。</p>
<p>大部分怪物为其自身经验+1。石像或宝箱怪为1+层数;食人鱼或蜜蜂为1+层数/2;幽灵为1+层数/3。此经验乘2~3计算。</p>
<p>如果是玩家本身则为1000000.</p>
<p>产生奖励为一件武器，如果生成时没有诅咒则升一级，升级后没有正面附魔则赋予诅咒附魔，最后诅咒。</p>
</template>

<script>
export default {
    name: 'SacFire',
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