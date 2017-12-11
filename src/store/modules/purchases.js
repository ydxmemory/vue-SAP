import Vue from 'vue'
import iView from 'iview'
import { HOST } from '../../common'

const state = {
  buyNums: '1',
  hostGroup: '',
  hostGroupList: '',
  checkAllGroup: ['prod'],
  password: ''
}

const getters = {

}

const actions = {
  get_host_group_list: function ({ commit }) {
    Vue.http.post(HOST.DEV + 'get_base_info_by_bjdx', {}).then((response) => {
      commit('set_host_group_list', { list: response.body.data.app_list })
    }, (response) => {
      iView.Notice.error({
        title: '获取主机组列表失败！'
      })
    })
  },
  get_nums_change: function ({ commit, state }, [value, target]) {
    if (target === 'buyNums') {
      state.buyNums = value
    } else if (target === 'hostGroup') {
      state.hostGroup = value
    } else if (target === 'checkAllGroup') {
      state.checkAllGroup = value
    } else {
      state.password = value.target.value
    }
  }
}

const mutations = {
  set_host_group_list: (state, { list }) => {
    state.hostGroupList = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
