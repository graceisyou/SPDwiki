<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/mob.gif" style="width: 100px;height: 100px;"/>
    <span class="title">怪物</span>
  </div>
    
    
<p>每个怪物都有最大等级。你的等级高于怪物的最大等级时，击败怪物不能获得经验。你的等级高于怪物最大等级+2时，击败怪物不能掉落任何物品，也不会触发财富戒指的效果。</p>
<p>你与怪物的距离越近，越容易被怪物发现:被睡眠的怪物发现的概率为1/(距离+潜行)被游荡的怪物发现的概率为1/(距离/2.0+潜行)。刻印可以降低被发现的概率。</p>
</template>

<script>
export default {
    name: 'MobView',
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