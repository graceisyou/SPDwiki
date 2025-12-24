<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/potion.gif" style="width: 100px;height: 100px;"/>
    <span class="title">药水</span>
  </div>
    
<p>药水分为有益药剂与有害药剂。麻痹气体:冰霜，毒气，火焰药剂为默认丢出的有害药剂。</p>
<p>当前版本酿造药剂的机制为:</p>
<p>三个不同的种子:50%生成完全随机的药剂50%概率根据种子决定药剂。</p>
<p>两个相同的种子:33%生成完全随机的药剂，67%根据种子决定药剂。</p>
<p>三个相同的种子:100%生成对应的药剂。</p>
<p>以上规律对阳春草不完全适用(随着酿造治疗数量增加，概率会衰减)。</p>
<p>药水生成概率顺序(力量不计):治疗>灵视>冰霜=液火=毒气>隐身=漂浮=麻痹=净化疾速>经验。隐藏的炼金室相反。</p>

</template>

<script>
export default {
    name: 'PotionView',
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