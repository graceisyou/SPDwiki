<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/scroll.gif" style="width: 100px;height: 100px;"/>
    <span class="title">卷轴</span>
  </div>
    
<p>鉴定卷轴与驱邪卷轴是最常见的卷轴(升级除外，因为升级单独生成)。每个上锁的卷轴房里必定有一张鉴定或是驱邪。每个商店也会固定刷新鉴定，驱邪与探地卷轴。</p>
<p>除升级外，其余卷轴均可被火焰摧毁。</p>
<p>各种卷轴的自然生成比例排序:(升级不计)</p>
<p>鉴定>驱邪>镜像=充能=传送>探地复仇:恐惧E盛怒=催眠>嬗变。隐藏的卷轴房概率分布相反，很容易找到较为稀有的卷轴。</p>

</template>

<script>
export default {
    name: 'ScrollView',
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