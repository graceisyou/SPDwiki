<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice206.png" style="width: 100px;height: 100px;"/>
    <span class="title">传送卷轴</span>
  </div>
    
<p>羊皮纸上的咒语能立刻让阅读者传送到本层的另一处，并且会去除缠绕。卷轴会<text class="gg">优先选择阅读者还未探索的地方</text>，但无法将人传送到门被锁或被路障堵住入口的密室中。不过，它能帮助发现通向未知区域的隐藏门。</p>
<p><text class="gg">归返秘卷</text>:回到本区域的初始楼层。如果已经处于一个区域的初始楼层，则返回上一个区域的初始楼层。</p>
<p><text class="gg">闪现符石</text>:无距离限制的定点闪现。</p>
</template>

<script>
export default {
    name: 'ScrollTp',
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