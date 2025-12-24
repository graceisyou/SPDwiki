<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice148.png" style="width: 100px;height: 100px;"/>
    <span class="title">再生法杖</span>
  </div>
    
  <p>这柄法杖由一根细长木枝巧琢而成。不知为何，它还活着而且生机盎然，像一株树苗的嫩芽般艳绿。在施放时，法杖将消耗一定充能，向一个锥形区域倾洒出再生的能量。这种魔法会让草、根系甚至稀有的植物重获生命，破土而出。"春兰兮秋菊... 长无绝兮终古</p>
  <p>每次释放消耗30%充能，向上取整。</p>
  <p>种草数量与一次消耗的充能数与法杖等级有关。</p>
  <p>充能数限制为20+英雄等级*(2+法杖等级)*(1+(法杖等级/(50-5*法杖等级)))在使用的总充能数达到限制后，长草量会逐渐衰减，最终只能种出枯草。可以通过人物等级提升与法杖等级提升以继续使用。法杖达到10级即可无限使用。</p>
  <p>有几率(与消耗充能数有关)出现露珠草、星陨花、种子英、黄金莲等特殊植物。</p>
  <p>消耗3充能可复活黄金莲，持续法杖25+等级*3回合，影响范围等同于法杖等级，范围内所有种子有(40%+4%*法杖等级)概率在触发后掉落种子，涂药飞镖耐久提升到(1/(0.6-0.04*法杖等级))倍(15+则无限)。</p>
  <p>战法效果为站在草中时，击中目标获得<text class="gg">0.5*伤害*(等级+2)/(等级+6)</text>的草药疗养。</p>
  </template>
  
  <script>
  export default {
    name:'WandGrass',
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