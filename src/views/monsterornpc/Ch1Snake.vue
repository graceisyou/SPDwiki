<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/snake/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">下水道巨蛇</span>
  </div>
    
<p>这些体型庞大的蛇能通过快速滑行以闪避普通的攻击，让它们难以命中。不过伏击与魔法攻击会使它们措手不及。</p>
<p>在这条蛇的视野外攻击它时可以触发伏击。当这条蛇在追击你时，可以尝试躲入一扇门后，再<text class="gg"></text>在蛇进门的瞬间发动攻击。</p>
<p>这个怪物的生命上限为<text class="gg">4</text>，攻击为<text class="gg">1~4</text>，防御为<text class="gg">0</text>，攻击延迟为<text class="gg">1</text>移速为<text class="gg">1</text>，闪避为<text class="gg">25</text>，命中为<text class="gg">10。</text></p>
<p>掉落<text class="gg">2</text>经验，获取经验最大等级不超过<text class="gg">7。</text></p>
<p><text class="gg">25%</text>掉落随机的<text class="gg">种子。</text></p>
</template>

<script>
export default {
    name: 'Ch1Snake',
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