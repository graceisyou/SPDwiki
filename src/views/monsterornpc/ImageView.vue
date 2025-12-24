<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/warrior/part-Slice2.png" style="width: 100px;height: 100px;"/>
    <span class="title">镜像</span>
  </div>
    
<p>这个幻象和你非常相似，甚至还装备着你当前的武器和护甲。</p>
<p>镜像会猎寻敌人，并用它们的镜像武器对其发动攻击。镜像武器的使用方式特性和你手中的一样，但造成的伤害会低些。镜像出生的时候没有实体，但攻击后会显形。</p>
<p>虽然镜像有一定的攻击能力(你的伤害的-半，相同的精准度)，它们非常脆弱(防御等同于武器防御，与你相同的闪避，1点生命)，受到伤害就会瞬间消散。</p>
<p>镜像免疫毒气、火焰、酸雾、腐化。</p>
</template>

<script>
export default {
    name: 'ImageView',
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