<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/yog_fists/part-Slice15.png" style="width: 100px;height: 100px;"/>
    <span class="title">腐烂之拳&锈蚀之拳</span>
  </div>
    
<p>这两个拳头会随机出现一个。</p>
<p><text class="gg">腐烂之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">18~36</text>，防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击会释放毒气，经过水时恢复2%生命，近战攻击50%使得目标获得腐蚀污泥，受到的伤害转化为初始值60%的不可叠加的流血。</p>
<p>具有<text class="gg">酸、恶魔、boss</text>属性，免疫<text class="gg">有毒气体。</text></p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
<p><text class="gg">锈蚀之拳</text>生命值上限为<text class="gg">300</text>，攻击为<text class="gg">22~44</text>防御为<text class="gg">0~15</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">36。</text></p>
<p>远程攻击使得目标残废4回合，受到的伤害全部变为延缓伤害。</p>
<p>具有<text class="gg">恶魔、巨大体型、boss</text>属性。</p>
<p>掉落<text class="gg">25</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
</template>

<script>
export default {
    name: 'Ch5Fist2',
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