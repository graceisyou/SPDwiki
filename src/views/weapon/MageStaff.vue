<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice71.png" style="width: 100px;height: 100px;" />
    <span class="title">魔杖</span>
  </div>
<p>  这支魔杖是件独一无二的魔法武器，由法师亲自雕琢而成。它不天然具备魔力，而是需要将另一支法杖的魔力灌注其中，藉此来获得新的力量。</p>
<p v-highlight-numbers>这是一件1阶武器，力量需求为10，基础伤害为1~6。</p>
<p v-highlight-numbers>它的伤害成长为1~2,精准修正为1，攻击延迟为1，攻击距离为1。</p>
<p>战斗法师近战效果:</p>
<p v-highlight-numbers>固有:为魔杖回复0.5点充能。</p>
<p>冲击波:同弹性附魔。</p>
<p>酸蚀: <text class="gg">(等级+1)/(等级+3)</text> 概率使目标获得20回合腐蚀污泥。</p>
<p>腐化: <text class="gg">(等级+1)/(等级+6)</text> 施加4+2*等级回合的狂乱。</p>
<p>解离:同索敌附魔。</p>
<p>焰浪:同烈焰附魔。</p>
<p>冰霜:概率冻结已经处于冻伤的目标(10回合以上则必定)，不能连续冻结。</p>
<p>雷电:同电击附魔。</p>
  <p>灵壤:获得等同于伤害的33%的灵壤护甲。</p>
<p>魔弹:所有法杖恢复0.5点充能。</p>
<p>棱光:延长1+等级回合的残废。</p>
<p>再生:至少一方站在草中时，击中目标获得 <text class="gg">0.5*伤害*(等级+2)/(等级+6)</text> 的草药疗养。</p>
<p>注魂:击中被你魅惑的目标时，获得 <text class="gg">10+2*等级</text> 的护盾，且下一次释放不消耗生命。</p>
<p>哨卫: <text class="gg">(等级+1)/(等级+5)</text> 为所有哨卫恢复9/12/16生命。</p>
</template>

<script>
export default {
  name:'MageStaff',
  data(){
    return{

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