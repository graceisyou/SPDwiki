<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/yog_fists/part-Slice29.png" style="width: 100px;height: 100px;"/>
    <span class="title">辉耀之拳&暗影之拳</span>
  </div>

    
<p>这两个拳头会随机出现一个。</p>
<p><text class="gg">辉耀之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">18~36</text>，防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击(无cd，但贴身不释放)造成10~20点伤害并造成5回合致盲，半血时随机跃迁到地图其它地方并致盲敌人15回合，死亡时改为30回合。</p>
<p>具有<text class="gg">电、恶魔、boss</text>属性。</p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
<p><text class="gg">暗影之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">18~36</text>，防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击(无cd，但贴身不释放)成10~20点伤害，减少50回合光照，半血时随机跃迁到地图其它地方并消除照明效果，死亡时相同。</p>
<p>具有<text class="gg">恶魔、boss</text>属性。</p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
</template>

<script>
export default {
    name: 'Ch5Fist3',
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