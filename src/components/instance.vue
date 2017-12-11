<template>
  <div class="bgColor">
    <div class="title">实例</div>
    <Row class="content">
      <Row>
        <Col span="2">
        <label>实例系列：</label>
        </Col>
        <Col span="22">
        <Radio-group v-model="instanceType" type="button" @on-change="v => changeInstance(v,'instance')">
          <Radio label="1">
            <span>1核</span>
          </Radio>
          <Radio label="2">
            <span>2核</span>
          </Radio>
          <Radio label="4">
            <span>4核</span>
          </Radio>
          <Radio label="8">
            <span>8核</span>
          </Radio>
          <Radio label="16">
            <span>16核</span>
          </Radio>
          <Radio label="32">
            <span>32核</span>
          </Radio>
        </Radio-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>内存：</label>
        </Col>
        <Col span="22">
        <Radio-group v-model="memoryType" type="button" @on-change="v => changeInstance(v,'memory')">
          <Radio :label="item.id+','+item.memory_size_g" :true-value="item.memory_size_g" v-for="item in memoryTypeItems">
            <span>{{item.memory}}G</span>
          </Radio>
        </Radio-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>操作系统：</label>
        </Col>
        <Col span="22">
        <Select v-model="systemType" style="width:200px" @on-change="v => changeInstance(v,'operatingSystem')">
          <Option v-for="item in systemTypeList" :value="item.id">{{item.name}}</Option>
        </Select>
        </Col>
      </Row>
    </Row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'instance',
  computed: mapState({
    instanceType: state => state.instance.instanceType,
    memoryType: state => state.instance.memoryType,
    memoryTypeItems: state => state.instance.memoryTypeItems,
    systemType: state => state.instance.systemType,
    systemTypeList: state => state.instance.systemTypeList
  }),
  created () {
    this.$store.dispatch('get_system_list')
  },
  methods: {
    changeInstance (v, target) {
      this.$store.dispatch('get_change_instance', [v, target])
    }
  }
}
</script>