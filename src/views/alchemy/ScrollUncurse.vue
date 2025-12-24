<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice202.png" style="width: 100px;height: 100px;"/>
    <span class="title">祛邪卷轴</span>
  </div>
    
<p>卷轴上的咒语能够瞬间清除指定的一件武器、护甲、法杖、戒指或神器上的诅咒。</p>
<p><text class="gg">驱魔秘卷</text>:20回合魔法免疫。期间你不会受到任何魔法伤害，但你不能使用法杖卷轴等魔法道具，戒指和神器不提供任何加成。此外神器的充能，以及玫瑰召唤的白幽两种自然生命回复都会暂停。</p>
<p><text class="gg">拆除符石</text>:拆除17*17范围内的9个陷阱，优先拆除距离落点直线距离更近的陷阱</p>
</template>

<script>
export default {
    name: 'ScrollUncurse',
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