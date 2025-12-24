<template>
  <div>

    <div class="button-container">
      <el-button @click="initializeBoard1" type="primary" size="large">初始化</el-button>
      <el-button @click="initializeBoard" type="success" size="large">消除路线</el-button>
      <el-button @click="toggleAddBuildingMode" type="warning" size="large">{{ addBuildingMode ? '取消添加建筑物模式' : '进入添加建筑物模式' }}</el-button>
      <el-button @click="toggleAddMonsterMode" type="danger" size="large">{{ addMonsterMode ? '取消添加怪物模式' : '进入添加怪物模式' }}</el-button>

    </div>

    <div class="board-container">
      <div class="board"
           ref="board"
           @mousemove="handleMouseMove"
           @mouseleave="resetHighlight"
      >
        <div
            v-for="(row, rowIndex) in board"
            :key="rowIndex"
            class="cell-row"
        >
          <div
              v-for="(cell, colIndex) in row"
              :key="colIndex"
              :class="['cell', cellClass(rowIndex, colIndex)]"
              @click="handleCellClick(rowIndex, colIndex)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardWidth: 15, // 棋盘宽度为15格
      boardHeight: 30, // 棋盘高度为30格
      playerPosition: { x: 0, y: 0 }, // 初始位置在棋盘左上角
      buildings: [], // 建筑物的位置
      monsters: [], // 怪物的位置
      path: [], // 路径数组
      addBuildingMode: false, // 是否处于添加建筑物模式
      addMonsterMode: false, // 是否处于添加怪物模式
      highlightedCell: null, // 当前高亮显示的单元格位置
      attackPaths: [] // 攻击路径
    };
  },
  computed: {
    board() {
      return Array.from({length: this.boardHeight}, () =>
          Array.from({length: this.boardWidth}, () => 0)
      );
    }
  },
  methods: {
    initializeBoard1() {
      this.path = [];
      this.attackPaths = [];
      this.buildings = [];
      this.monsters = [];
      this.playerPosition = { x: 0, y: 0 };
      this.addBuildingMode = false; // 关闭添加建筑物模式
      this.addMonsterMode = false; // 关闭添加怪物模式
    },
    cellClass(rowIndex, colIndex) {
      if (this.playerPosition.x === colIndex && this.playerPosition.y === rowIndex) {
        return 'player';
      }
      if (this.buildings.some(b => b.x === colIndex && b.y === rowIndex)) {
        return 'building';
      }
      if (this.path.some(p => p.x === colIndex && p.y === rowIndex)) {
        return 'path';
      }
      if (this.attackPaths.some(p => p.x === colIndex && p.y === rowIndex)) {
        return 'attackable';
      }
      if (this.monsters.some(m => m.x === colIndex && m.y === rowIndex)) {
        return 'monster';
      }
      return '';
    },
    handleMouseMove(event) {
      if (!this.addBuildingMode && !this.addMonsterMode) {
        this.highlightedCell = null;
        return;
      }

      const rect = this.$refs.board.getBoundingClientRect();
      const x = Math.floor((event.clientX - rect.left) / (rect.width / this.boardWidth));
      const y = Math.floor((event.clientY - rect.top) / (rect.height / this.boardHeight));

      if (this.addMonsterMode) {
        this.highlightedCell = {x, y};
      } else {
        this.highlightedCell = {x, y}; // 或者根据需求设置其他高亮效果
      }
    },
    resetHighlight() {
      this.highlightedCell = null;
    },
    handleCellClick(rowIndex, colIndex) {
      if (this.addBuildingMode) {
        const existingBuilding = this.buildings.find(b => b.x === colIndex && b.y === rowIndex);
        if (!existingBuilding) {
          this.addBuilding(colIndex, rowIndex);
        } else {
          this.removeBuilding(colIndex, rowIndex);
        }
      } else if (this.addMonsterMode) {
        const clickedMonster = this.monsters.find(m => m.x === colIndex && m.y === rowIndex);
        if (clickedMonster) {
          this.removeMonster(colIndex, rowIndex);
        } else {
          this.addMonster(colIndex, rowIndex);
        }
      } else {
        if (this.playerPosition.x === colIndex && this.playerPosition.y === rowIndex) {
          return;
        }

        const clickedMonster = this.monsters.find(m => m.x === colIndex && m.y === rowIndex);
        if (clickedMonster) {
          this.highlightPathsThroughMonster(colIndex, rowIndex);
        } else {
          const path = this.calculatePath(this.playerPosition, {x: colIndex, y: rowIndex});
          const finalPosition = this.calculateFinalPosition(path);
          this.path = path;
          this.playerPosition = finalPosition;
        }
      }
    },
    highlightPathsThroughMonster(monsterX, monsterY) {
      this.attackPaths = [];
      let canAttack = false;
      for (let row = 0; row < this.boardHeight; row++) {
        for (let col = 0; col < this.boardWidth; col++) {
          const path = this.calculatePath({x: col, y: row}, this.playerPosition);
          if (path.some(p => p.x === monsterX && p.y === monsterY)) {
            if (!path.some(p => this.buildings.some(b => b.x === p.x && b.y === p.y))) {
              this.attackPaths.push({x: col, y: row});
              canAttack = true;
            }
          }
        }
      }
      if (!canAttack) {
        this.$message({
          message: '打不到',
          type: 'warning'
        });
        console.log('打不到');
      }
    },
    calculatePath(start, end) {
      const path = [];
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const steps = Math.max(Math.abs(dx), Math.abs(dy));
      const xStep = dx / steps;
      const yStep = dy / steps;

      for (let i = 1; i <= steps; i++) {
        const x = Math.round(start.x + xStep * i);
        const y = Math.round(start.y + yStep * i);
        path.push({x, y});

        // 检查是否遇到了建筑物，如果遇到则停止添加路径
        if (this.buildings.some(b => b.x === x && b.y === y)) {
          break;
        }
      }
      return path;
    },
    calculateFinalPosition(path) {
      for (let position of path) {
        if (this.buildings.some(b => b.x === position.x && b.y === position.y)) {
          return {
            x: position.x - Math.sign(position.x - this.playerPosition.x),
            y: position.y - Math.sign(position.y - this.playerPosition.y)
          };
        }
      }
      return path[path.length - 1];
    },
    initializeBoard() {
      this.path = [];
      this.attackPaths = [];
      this.addBuildingMode = false; // 关闭添加建筑物模式
      this.addMonsterMode = false; // 关闭添加怪物模式
    },
    toggleAddBuildingMode() {
      this.addBuildingMode = !this.addBuildingMode;
      if (this.addBuildingMode) {
        this.addMonsterMode = false;
      }
      this.highlightedCell = null;
    },
    toggleAddMonsterMode() {
      this.addMonsterMode = !this.addMonsterMode;
      if (this.addMonsterMode) {
        this.addBuildingMode = false;
      }
      this.highlightedCell = null;
    },
    addBuilding(x, y) {
      this.buildings.push({x, y});
    },
    removeBuilding(x, y) {
      this.buildings = this.buildings.filter(b => !(b.x === x && b.y === y));
    },
    addMonster(x, y) {
      this.monsters.push({x, y});
    },
    removeMonster(x, y) {
      this.monsters = this.monsters.filter(m => !(m.x === x && m.y === y));
    }
  }
};
</script>

<style scoped>
.board-container {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(30, 1fr);
  width: 100%;
  height: 100%;
  position: relative;
}

.cell-row {
  display: contents;
}

.cell {
  border: 1px solid #ccc;
  position: relative;
  aspect-ratio: 1 / 1;
}

.cell::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/images/background/main_back.png");
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.player::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 
  z-index: 2;
  background-image: url("/images/BallisticSimulation/part-Slice2.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.building::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  z-index: 2;
}

.path::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,0,0.5);
  z-index: 2;
}

.monster::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;
  background-image: url("/images/BallisticSimulation/part-Slice35.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.attackable::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: orange;
  z-index: 2;
}

.button-container{
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;

  z-index: 1000; /* 确保在其他内容之上 */
  display: flex;
  flex-wrap: wrap;

}
</style>
