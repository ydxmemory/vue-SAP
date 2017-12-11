import Vue from 'vue'
import iView from 'iview'
import { HOST } from '../../common'

const state = {
  networkType: 'tradition',
  networkList: '',
  subnet: ''
}

const getters = {

}

const actions = {
  get_network_list: function ({ commit }) {
    Vue.http.post(HOST.DEV + 'get_network_list', {site_name: 'BJ-GC4', co_name: 'guomeidianqi'}).then((response) => {
      commit('set_network_list', { list: response.body.data.network_list })
    }, (response) => {
      iView.Notice.error({
        title: '获取网段列表失败！'
      })
    })
  },
  subnet_change: function ({ commit }, value) {
    commit('set_subnet_change', value)
  }
}

const mutations = {
  set_network_list: (state, { list }) => {
    state.networkList = list
  },
  set_subnet_change: (state, value) => {
    state.subnet = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
