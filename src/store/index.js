import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import charging from './modules/charging'
import area from './modules/area'
import network from './modules/network'
import instance from './modules/instance'
import storage from './modules/storage'
import purchases from './modules/purchases'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    areaType: 'BJ-GC4',
    chargingType: '730'
  },
  actions,
  getters,
  modules: {
    charging,
    area,
    network,
    instance,
    storage,
    purchases
  }
})
export default store
