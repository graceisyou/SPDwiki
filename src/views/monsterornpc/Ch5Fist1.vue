<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/yog_fists/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">燃烧之拳&大地之拳</span>
  </div>
    
<p>这两个拳头会随机出现一个。</p>
<p><text class="gg">燃烧之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">18~36</text>防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击使目标燃烧，蒸发经过的水，没有经过水时周围燃起火焰。</p>
<p>具有<text class="gg">火、恶魔、boss</text>属性，免疫冰冻。</p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
<p><text class="gg">大地之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">18~36</text>，防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击使目标束缚3回合并在周围长出枯草，拳头周围会长出枯草，拳头周围每有一株草获得1/6减伤(线性减少)。</p>
<p>具有<text class="gg">恶魔、boss</text>属性，免疫火焰伤害。</p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
</template>

<script>
export default {
    name: 'Ch5Fist1',
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