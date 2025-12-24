<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice202.png" style="width: 100px;height: 100px;"/>
    <span class="title">探地卷轴</span>
  </div>
<p>阅读这张卷轴时，一副明晰的景象会刻入你的记忆中，告知你整个楼层的精确布局并揭开所有隐藏的秘密。不过道具位置和生物分布依旧是未知状态。</p>
<p><text class="gg">先见秘卷</text>:400回合自动发现位于8格范围内的任何隐藏地形。</p>
<p><text class="gg">明示符石</text>:范围20的探查，不受地形影响。</p>
</template>

<script>
export default {
    name: 'ScrollMapping',
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