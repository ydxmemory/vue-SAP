import Vue from 'vue'
import iView from 'iview'
import { HOST } from '../common'

export const getBuyInstance = ({ commit, state }) => {
  const diskTotalSizeG = parseInt(state.storage.diskSize) + (state.storage.isShow ? parseInt(state.storage.dataDiskSize) : 0)
  const dataDiskSizeList = state.storage.isShow ? JSON.stringify([state.storage.dataDiskSize]) : JSON.stringify([])
  const buyParams = {
    site_name: state.areaType,
    co_name: 'guomeidianqi',
    conf_id: parseInt(state.instance.memoryType.split(',')[0]),
    core_count: state.instance.instanceType,
    memory_size_g: parseInt(state.instance.memoryType.split(',')[1]),
    charging_cycle: state.chargingType,
    default_network: state.network.subnet,
    os_id: state.instance.systemType,
    io_type: state.storage.diskType,
    sys_disk_size_g: state.storage.diskSize,
    data_disk_total_size_g: state.storage.isShow ? state.storage.dataDiskSize : '0',
    data_disk_size_list: dataDiskSizeList,
    disk_total_size_g: diskTotalSizeG,
    disk_type: 'disk',
    count: state.purchases.buyNums,
    app_id: state.purchases.hostGroup,
    vpc_id: 0,
    vpc_subnet_id: 0,
    envs: state.purchases.checkAllGroup.join(','),
    username: 'epi_zhaoyue-kg',
    password: state.purchases.password
  }
  if (buyParams.os_id === '') {
    iView.Notice.error({
      desc: '操作系统不能为空！'
    })
  } else if (buyParams.app_id === '') {
    iView.Notice.error({
      desc: '主机组不能为空！'
    })
  } else if (buyParams.password === '') {
    iView.Notice.error({
      desc: '密码不能为空！'
    })
  } else {
    Vue.http.post(HOST.DEV + 'buy_instance', buyParams).then((response) => {
      if (response.body.success === 'true') {
        iView.Notice.success({
          desc: '购买成功！'
        })
      } else {
        iView.Notice.error({
          desc: response.body.msg
        })
      }
      setTimeout(() => location.reload(), 800)
    }, (response) => {
      iView.Notice.error({
        desc: response.body.msg
      })
    })
  }
}

