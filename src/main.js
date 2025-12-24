import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// less
import less from 'less'

//pinia
import { createPinia } from 'pinia';

import highlightNumbers from './directives/highlight-numbers';

const app = createApp(App)

const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(ElementPlus)
app.use(less)
app.use(pinia);

app.directive('highlight-numbers', highlightNumbers);

app.mount('#app')
