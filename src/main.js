// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'vue-awesome/icons'
Vue.component('icon', Icon)
Vue.use(VueResource)
Vue.use(iView)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  template: '<App/>',
  components: { App }
})
