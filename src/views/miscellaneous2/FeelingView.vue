<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/feeling.png" style="width: 100px;height: 100px;"/>
    <span class="title">感觉</span>
  </div>

    
<p>每个楼层都有一定概率出现各种感觉，每种感觉的概率为1/14。</p>
<p>草木感觉:本层植被覆盖率大幅提升</p>
<p>黑暗感觉:本层视野减半，怪物数量与刷新速度上升</p>
<p>流水感觉:本层几乎被水覆盖</p>
<p>悬空感觉:本层为天桥层，所有过道变为天桥</p>
<p>秘密感觉:本层额外生成一个隐藏房间，且大量生成隐藏门</p>
<p>陷阱感觉:本层增加400%明示的陷阱。</p>
<p>广阔感觉:本层房间数增加50%，怪物初始数量增加33%，物品生成增加2件，本层额外生成一个特殊房间。</p>

</template>

<script>
export default {
    name: 'FeelingView',
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