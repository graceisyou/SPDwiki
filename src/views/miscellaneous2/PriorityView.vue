<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice166.png" style="width: 100px;height: 100px;"/>
    <span class="title">角色优先级</span>
  </div>
    
<p>地牢中所有角色都有行动优先级。更新视野的优先级最高，其次是人物，然后是环境效果(如气体)，再次是其它生物(其中有些优先级稍高，如白幽，镜像，灵壤守卫)，最后是各种buff结算(有些buff优先级很高，如治疗)。</p>
<p>角色根据一根共同的时间轴决定行动先后，当前消耗时间少者优先，当这些角色都需要在一个时间点行动时，按照优先级递减的顺序进行行动。</p>
<p>合理利用优先级也是一个技巧。比如怪物沿直线无法逃离扩散的气体(因为气体先扩散并起作用，怪物再进行行动)。</p>

</template>

<script>
export default {
    name: 'PriorityView',
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