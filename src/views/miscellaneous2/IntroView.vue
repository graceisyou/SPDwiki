<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/mimic/part-Slice48.png" style="width: 100px;height: 100px;"/>
    <span class="title">版本介绍</span>
  </div>
    
<p>所有说明均基于2024年9月12号版本2.5.0。</p>
<p>原注解作者endlesssolitude(红龙:QQ1095711567)最后更新于v1.3.2-2.7.3目前由我shower(沐沐，QQ987765678)接手更新，游玩过程中有任何意见，错误或者bug还请通过QQ告知。Github链接为<a href="https://github.com/showerrr/statistical-shattered-pixel-dungeon" target="_blank">https://github.com/showerrr/statistical-shattered-pixel-dungeon</a></p>
<p>这个栏目主要是一些机制等的说明。</p>
<P>本网站说明：</P>
<p>本网站处在起步阶段，倘若使用过程中发现网站信息缺失或者不好用，有两种解决办法:1.加群联系我们，我们会快马加鞭的更新内容。2.使用fandom的wiki</p>
  <audio controls>
    <source src="http://mp3.hanmaidj.com:700/770551120/hanmaidj_com/%E5%8F%A6%E7%B1%BB/%E6%B2%88%E9%98%B3%E5%B0%8F%E4%BC%99%E7%8B%82%E5%96%B730%E5%88%86%E9%92%9F(%E7%BB%8F%E5%85%B8).mp3" type="audio/mpeg">
    您的浏览器不支持 audio 元素。
  </audio>
</template>

<script>
export default {
    name: 'IntroView',
    data() {
        return {
        }
    },

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