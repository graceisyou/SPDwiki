<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/shaman/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼萨满</span>
  </div>
    
<p>那些最具有智慧的豺狼可以掌握萨满魔法豺狼萨满由于缺少力量所以更喜欢使用战斗法术。它们在部落中享有很高的地位，即使它们的身形相对薄弱。</p>
<p>这只怪物的生命值上限为<text class="gg">35</text>，攻击为<text class="gg">5~10</text>，防御为<text class="gg">0~6</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">18。</text></p>
<p>共有三种类型，数量比为，红:蓝:紫=2:2:1,远程攻击与种类有关。</p>
<p>远程攻击伤害为<text class="gg">6~15</text>，50%概率对目标施加负面效果:虚弱20回合(红)、易伤20回合(蓝)、幻惑30回合(紫)。</p>
<p>掉落<text class="gg">8</text>经验，获得经验的最大等级为<text class="gg">16</text>级。</p>
<p><text class="gg">3%</text>概率掉落<text class="gg">随机法杖</text>，每一次掉落都会降低掉落率2/3。</p>
</template>

<script>
export default {
    name: 'Ch3Shaman',
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