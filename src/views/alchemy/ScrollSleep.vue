<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice200.png" style="width: 100px;height: 100px;"/>
    <span class="title">催眠卷轴</span>
  </div>
    
<p>阅读这张卷轴会释放出一段舒缓的旋律，让所有听到它的生物陷入魔法沉眠。卷轴释放后5回合，周围的进入魔法睡眠。</p>
<p><text class="gg">塞壬之歌秘卷</text>:选择一个目标将其催眠为友方单位，而视野内的其它生物会释放者魅惑10回合。</p>
<p><text class="gg">沉睡符石</text>:使目标单位陷入魔法睡眠。</p>
</template>

<script>
export default {
    name: 'ScrollSleep',
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