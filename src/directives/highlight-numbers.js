// src/directives/highlight-numbers.js
export default {
    mounted(el) {
        // 匹配小数、单个数字或范围数字（例如 1, 0.5, 1~2, 0.5~1.5）
        el.innerHTML = el.innerHTML.replace(/(\d+(\.\d+)?~?\d*(\.\d+)?)/g, '<text class="gg">$1</text>');
    }
};
