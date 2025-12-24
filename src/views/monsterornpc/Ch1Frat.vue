<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/rat/part-Slice31.png" style="width: 100px;height: 100px;"/>
    <span class="title">腐臭老鼠</span>
  </div>
    
<p>这只老鼠很不对劲。它油腻的黑毛和腐烂的皮肤与你之前见过的健康老鼠很不同。浅绿色的眼睛让它显得更具威胁。</p>
<p>这只老鼠周围盘绕着一片可怕恶臭，靠近时臭气尤为浓烈。</p>
<p>黑色的淤泥从它的嘴中流出。淤泥腐蚀掉了地砖，但遇水似乎就会溶解。</p>
<p>这只怪物的生命值上限为<text class="gg">20</text>，攻击为<text class="gg">1~4</text>防御为<text class="gg">0~2</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">5</text>，命中为<text class="gg">12。</text></p>
<p>攻击时有1/3的几率使得目标获得20回合腐蚀污泥。</p>
<p>具有<text class="gg">恶魔</text>属性与<text class="gg">小型boss</text>属性，免疫<text class="gg">恶臭气体。</text></p>
<p>掉落<text class="gg">4</text>经验</p>
</template>

<script>
export default {
    name: 'Ch1Frat',
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