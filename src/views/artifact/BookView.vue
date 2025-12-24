<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice168.png" style="width: 100px;height: 100px;"/>
    <span class="title">无序魔典</span>
  </div>   
    <p>这本魔典就其年岁而言被保养得异常好。当你翻动页面时它不断地噼啪作响并发出嘶嘶声，涌动着不稳定的能量。一旦诵读这本书，没人能笃定你会释放出什么咒语。</p>
    <p>它的充能上限为<text class="gg">(神器等级*0.6)+2</text>向下取整</p>
    <p>使用它会消耗1充能随机触发一张卷轴效果(不包括升级与嬗变)。</p>
    <p>添加在魔典介绍中指出的卷轴能够使它升级并允许你使用对应的秘卷效果(消耗2点充能)。</p>
    <p>魔典每过<text class="gg">120-已使用充能数*5</text>回合就会回复1点充能。</p>
    <p>被诅咒的魔典会让你只能使用驱邪卷轴(或其对应秘卷)。</p>
    <p>神器充能效果为<text class="gg">每回合回复0.1充能。</text></p>
    <p>无序魔典无法读出嬗变、升级，鉴定、驱邪、地图概率减半。</p>
</template>

<script>
export default {
    name: 'BookView',
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