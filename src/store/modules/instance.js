import Vue from 'vue'
import iView from 'iview'
import _ from 'lodash'
import { HOST } from '../../common'

const state = {
  instanceType: '1',
  memoryType: '12,2',
  memoryList: '',
  memoryTypeItems: [{
    'tag': 'V1',
    'memory': '2',
    'id': 12,
    'memory_size_g': 2
  }],
  systemType: '',
  systemTypeList: ''
}

const getters = {

}

const actions = {
  get_system_list: function ({ commit }) {
    Vue.http.post(HOST.DEV + 'get_base_info_by_bjdx', {}).then((response) => {
      commit('set_memory_list', { list: response.body.data.conf_list })
      commit('set_system_list', { list: response.body.data.os_list })
    }, (response) => {
      iView.Notice.error({
        title: response.body.msg
      })
    })
  },
  get_change_instance: function ({ dispatch, commit, state }, [value, target]) {
    if (target === 'instance') {
      state.memoryTypeItems.length = 0
      switch (value) {
        case '1':
          dispatch('searchMemoryData', value)
          break
        case '2':
          dispatch('searchMemoryData', value)
          break
        case '4':
          dispatch('searchMemoryData', value)
          break
        case '8':
          dispatch('searchMemoryData', value)
          break
        case '16':
          dispatch('searchMemoryData', value)
          break
        case '32':
          dispatch('searchMemoryData', value)
          break
      }
    } else if (target === 'memory') {
      state.memoryType = value
    } else {
      state.systemType = value
    }
  },
  searchMemoryData: ({ commit }, value) => {
    commit('set_change_instance', value)
  }
}

const mutations = {
  set_memory_list: (state, { list }) => {
    state.memoryList = list
  },
  set_system_list: (state, { list }) => {
    state.systemTypeList = list
  },
  set_change_instance: (state, value) => {
    const cpu = _.filter(state.memoryList, (o) => o.core_count == value)
    state.memoryTypeItems = _.sortBy(cpu, (o) => o.memory_size_g)
    state.instanceType = value
    state.memoryType = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
