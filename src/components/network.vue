<template>
  <div class="bgColor">
    <div class="title">网络</div>
    <Row class="content">
      <Row>
        <Col span="2">
        <label>网络模式：</label>
        </Col>
        <Col span="22">
        <Radio-group v-model="networkType" type="button">
          <Radio label="tradition">
            <span>经典网络</span>
          </Radio>
        </Radio-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>网段：</label>
        </Col>
        <Col span="22">
        <Select v-model="subnet" style="width:200px" @on-change="subnetChange">
          <Option v-for="item in networkLists" :value="item.network">{{ item.network }}</Option>
        </Select>
        </Col>
      </Row>
    </Row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'network',
  computed: mapState({
    networkType: state => state.network.networkType,
    networkLists: state => state.network.networkList,
    subnet: state => state.network.subnet
  }),
  created () {
    this.$store.dispatch('get_network_list')
  },
  methods: {
    subnetChange (v) {
      this.$store.dispatch('subnet_change', v)
    }
  }
}
</script>