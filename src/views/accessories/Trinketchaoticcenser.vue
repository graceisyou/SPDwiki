<template>
    <div class="titlebox">
    <el-image src="/images/accessories/chaoticcenser.png" style="width: 100px;height: 100px;"/>
    <span class="title">混乱香炉</span>
  </div>
    
    <p>平均300/等级+1回合释放一次气体，能量消耗6/8/10/12点香炉每2-8回合判定一次，剩余回合超过20%的时候逐渐回复可延迟时长(最多100回合)。</p>
    <p>剩余回合在20%以下:如果有与商人距离≤5日弹道通畅且有可延迟时长，不会喷射气体，不减少剩余回合，改为减少可延迟时长。</p>
    <p>喷射概率为:</p>
    <P>(1-(剩余回合 +平均回合/5)/(平均回合/2))的平方</P>
    <p>计算自身周围八格的空地，超过两个空地每有一个+0.05</p>
    <p>如果有敌人的血条(即视野内有怪)，上2述概率进行立方计算，会变得特别小(此处应该是Evan写反了，在2.5.2已改为正确且更简单的判定)</p>
    <p>寻常气体:500单位毒气，500单位混乱250单位长草(草杖，禁止自然恢复时不会生成)。概率为0.7-饰品等级x0.1不寻常气体:500单位雷云，500单位烟幕:250单位麻痹。概率为0.25+饰品等级x0.05稀有气体:500单位狱火(火魔药)，500单位霜冻(冰药)，250单位酸雾(酸杖)。概率为0.05+饰品等级x0.05</p>
    <p>在自身周围7x7范围内的非实体格子，如果有敌人的血条，距离敌人直线距离最远格子权重作为0，其余格子以直线距离作为权重，否则按移动距离1/2/3设置为权重1/2/3，按权重抽取位置和气体类型释放</p>
</template>

<script>
export default {
    name: 'Trinketchaoticcenser',
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