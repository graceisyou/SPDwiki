<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/large_buffs/part-Slice36.png" style="width: 100px;height: 100px;"/>
    <span class="title">楼层封锁</span>
  </div>
    
<p>楼层封锁期间玩家不会降低饥饿度。</p>
<p>楼层封锁期间玩家可以通过对boss造成伤害以获取回复时间。攻击衍生的小怪无法获取回复时间。</p>
<p>每对boss造成1点伤害，你都可以获取n回合的回复时间，在此期间你的生命值按照被动速度恢复，法杖与神器充能也正常进行。</p>
<p>n的值为(中括号中为绝命头目挑战):Goo:1.5l1];Tengu:一阶段110.67];DM-300:110.5];矮人国王:0.33[0.2];古神:0.5[0.33];拳头:0.5[0.25]</p>
<p>楼层封锁具有初始的50[20]回合回复时间。</p>
<p>粘咕通过水面回复的每点生命值扣除1.5[1]倍恢复血量的时间。</p>
</template>

<script>
export default {
    name: 'LckFloor',
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