<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/bones.png" style="width: 100px;height: 100px;"/>
    <span class="title">英雄遗骸</span>
  </div>
    
<p>英雄遗骸会生成在上一次死亡的层数，每目挑战不会留下遗骸。</p>
<p>如果开启了任意挑战或者自定义种子，遗骸必定生成10金币。</p>
<p>较大的可能性生成(2/3):装备栏(每个装备栏1/7)或快捷栏(总共2/7)的一件物品，如果对应的栏目没有可以在遗骸中生成的物品则返回初始重新判定。</p>
<p>较小可能性生成(1/3):背包内的一件物品(数量为1~(数量+1)/2)，如果物品不足三件则用金币补充到三件。如果钱而多余100则会继承50~原有钱币/2的数额，不足100则会给50金币。</p>
<p>一些物品不能在遗骸中生成，如各职业的初始武器(包括投掷)、具有贵重属性的物品(露珠瓶等)</p>
<p>如果是装备品，则继承原等级，但不超过+3;如果是神器则回归0级。</p>
<p>遗骸只能存在一个。</p>
<p>一个存档可以开启多个遗骸。如:存档1死于3层，存档2去开启3层的遗骸，在存档2进入4层之前又有存档3死于4层，则存档2此时进入4层能够找到对应的遗骸。</p>

</template>

<script>
export default {
    name: 'BonesView',
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