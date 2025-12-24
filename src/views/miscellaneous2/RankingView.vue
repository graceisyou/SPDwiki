<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/ranking.png" style="width: 100px;height: 100px;"/>
    <span class="title">排行榜</span>
  </div>
    
<p>排行榜按照分数进行从高到低的排列。</p>
<p>分数计算公式:分数=(进度分+收集分+探索分+boss分+任务分)*挑战倍率*通关倍率。</p>
<p><text class="gg">进度分</text>=最深层数*等级*65，上限50000在30级26楼层时达到上限。</p>
<p><text class="gg">收集分</text>上限20000，等于金币收集数+背包内所有物品原始价格之和。</p>
<p><text class="gg">探索分</text>=经历过的普通楼层数*全探索的普通楼层数*50，上限20000。全探索的条件为:</p>
<p>1)发现所有物品，打开所有容器，收集到所有钥匙</p>
<p>2)清除献祭之火、魔法火墙、活化石像、宝箱怪</p>
<p>3)清除所有障碍物、上锁的门，使用所有的钥匙，发现所有隐藏门</p>
<p><text class="gg">Boss战</text>得分细则如下。</p>
<p>粘咕:满分1000。每次受到蓄力攻击-200。</p>
<p>天狗:满分2000。每次被特殊能力击中-100踩到毒镖陷阱-100。</p>
<p>DM300:满分3000。每次因地表导线触电200，受到能量塔电击-100，受到dm300落石攻击-100。</p>
<p>矮人国王:满分4000。每次受到术士射击-400。</p>
<p>满分10000。基础分数5000，每受到yog:一次本体的激光攻击-500。每有一个血巢存活+1250。</p>
<p>BOSS战得分满分20000。每个boss扣分无下限，但结算时负分按照0处理。</p>
<p><text class="gg">任务</text>:四个区的任务分别为1000，2000，3000，4000分。尸尘不交还也有分。</p>
<p><text class="gg">挑战倍率</text>:0挑战为1，每有一个挑战，倍率*1.25，精确到0.05。9挑战下倍率为7.45。</p>
<p><text class="gg">通关倍率</text>:满身疮痍为1，通关但未携带护符到地面2，携带护符回到地面2.5。</p>
<p>其它因素不参与分数计算。</p>

</template>

<script>
export default {
    name: 'RankingView',
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