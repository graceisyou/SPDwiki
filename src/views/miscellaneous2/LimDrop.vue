<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice233.png" style="width: 100px;height: 100px;"/>
    <span class="title">治疗药水限制掉落</span>
  </div>
    
<p>地牢中治疗药水的掉落是有限的(财富除外，不受影响)。</p>
<p>怪物的治疗药水掉落存在上限。苍蝇的上限为5，死灵法师6，蝙蝠7，矮人术士8，恶魔血巢必定掉落但只有4只。</p>
<p>酿造同样存在限制，最多10瓶。酿造出的治疗有概率被替换为随机的其它药剂。</p>
<p>限制掉落对爆率的影响:爆率降为(上限-已掉落数)/(上限)倍。</p>
</template>

<script>
export default {
    name: 'LimDrop',
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