<template>
    <div class="titlebox">
    <el-image src="/images/accessories/part-Slice194.png" style="width: 100px;height: 100px;"/>
    <span class="title">奇迹聚酯</span>
  </div>
    
<p>(聚酯等级+1)x0.25概率使部分诅咒法杖效果变好,(聚酯等级+1)x0.125概率使普通法杖额外触发一次诅咒法杖效果</p>
<p>以下是较好的诅咒法杖效果区别:</p>
<p>双方一个冰冻一个着火时，不对自身起作用传送自己或目标时改为传送目标</p>
<p>输血时只从目标转给自己</p>
<p>充能卷轴但不受电击</p>
<p>诅咒自身装备改为对目标幻惑</p>
<p>跨层传送改为传送自身</p>
<p>召唤陷阱改为召唤自身两个镜像</p>
<p>森林大火只长草不着火</p>
<p>召唤的宝箱怪变为友方单位</p>
<p>随机嬗变改为蜕变秘卷效果</p>
</template>

<script>
export default {
    name: 'TrinketWondrousresin',
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