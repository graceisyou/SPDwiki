<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/blacksmith/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">巨魔铁匠</span>
  </div>
    
<p>这个巨魔看起来和任何其他巨魔一样:又高又瘦，皮肤的色泽和纹理都像是石头。这位巨魔铁匠正在拿着一把与其体形极其不符的小锤子不停地修修补补。</p>
<p>当重铸物品时，等级较高的物品会提升1等级(无论放置顺序)，而等级较低的物品会消失。</p>
</template>

<script>
export default {
    name: 'BlackSmith',
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