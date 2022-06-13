import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Graph3dPlugin from './plugins/graph3d-plugin';
import SoukaiPlugin from './plugins/soukai-plugin';
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App)
app.use(store)
app.use(router)
// Make BootstrapVue available throughout your project
app.use(BootstrapVue3)
// Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin)
app.use(Graph3dPlugin, {store: store})
app.use(SoukaiPlugin, {store: store})

app.mount('#app')
