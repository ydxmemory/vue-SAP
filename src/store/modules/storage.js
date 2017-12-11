const state = {
  diskType: 'ssd',
  diskSize: '20',
  dataDiskSize: '0',
  dataDisk: '',
  isShow: false
}

const getters = {

}

const actions = {
  get_storage_type: function ({ commit }, value) {
    commit('set_storage_type', value)
  },
  add_data_disk: function ({ commit }) {
    commit('data_disk_add')
  },
  remove_data_disk: function ({ commit }) {
    commit('data_disk_remove')
  },
  change_data_disk: function ({ commit }, value) {
    commit('set_data_disk', value)
  }
}

const mutations = {
  set_storage_type: (state, value) => {
    state.diskType = value
  },
  data_disk_add: (state, value) => {
    state.isShow = true
    state.dataDiskSize = '200'
  },
  data_disk_remove: (state) => {
    state.isShow = false
    state.dataDisk = ''
  },
  set_data_disk: (state, value) => {
    state.dataDiskSize = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
