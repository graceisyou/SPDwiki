<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/warlock/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">矮人术士</span>
  </div>
    
<p>当矮人的兴趣从工程建设转向奥秘学术时:术士们开始在城市中掌权。它们从元素魔法起步，但很快就开始研究恶魔学和死灵术。最强大的术士掌握了矮人王国的王权，其他术士如果想继续练习黑暗魔法，就必须放弃精神的自由，将意志交给他控制。</p>
<p>这些术士拥有具有强大的干扰性魔法，能暂时抑制装备的升级魔力。装备的等级越高，受降级魔法的影响就越严重。</p>
<p>这只怪物的生命值上限为<text class="gg">70</text>，攻击为<text class="gg">12~18</text>，防御为<text class="gg">0~8</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">18</text>，命中为<text class="gg">25。</text></p>
<p>远程攻击伤害为<text class="gg">12~18</text>，<text class="gg">1/3</text>的几率使目标获得30回合<text class="gg">降级。</text></p>
<p>具有<text class="gg">亡炅</text>属性。</p>
<p>掉落<text class="gg">11</text>经验，获得经验的最大等级为<text class="gg">21</text>级。</p>
<p><text class="gg">1/2</text>概率掉落<text class="gg">随机药水</text>(治疗概率再乘1/3日不断衰减)，但最多只能掉落<text class="gg">7(实际数值，有bug，理应为8)</text>瓶治疗。</p>
</template>

<script>
export default {
    name: 'Ch4Warlock',
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