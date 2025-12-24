<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/red_sentry/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">血色哨卫</span>
  </div>
    
<p>这红似鲜血的哨卫结晶像是被刻意安置在此，守卫着房间另一端的宝藏。如果你进入警戒区域，它就会向你发射解离光束。</p>
<p>它对所有的负面效果都免疫，能一眼看穿隐身效果，但似乎需要充能一段时间才能开火</p>
<p>不知何故，哨兵只会向你开火，就好像它知道地牢里的居民对宝藏没有威胁一样。</p>
<p>它的命中为<text class="gg">20+层数*2</text>，不会受到伤害，伤害为<text class="gg">2+层数/2~4+层数。</text></p>
</template>

<script>
export default {
    name: 'RedSentry',
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