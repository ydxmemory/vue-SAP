<template>
  <div class="bgColor">
    <div class="title">存储</div>
    <Row class="content">
      <Row>
        <Col span="2">
          <label>IO：</label>
        </Col>
        <Col span="22">
          <Radio-group v-model="diskType" type="button" @on-change="storageType">
            <Radio label="ssd">
              <span>高速盘</span>
            </Radio>
            <Radio label="sas">
              <span>普通盘</span>
            </Radio>
          </Radio-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
          <label>系统盘：</label>
        </Col>
        <Col span="3">
          <Input v-model="diskSize" disabled>
            <span slot="append">G</span>
          </Input>
        </Col>
        <Col span="18" class="diskSizeTip">
          <label>免费20 G、正在升级, 不能修改</label>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
          <label>数据盘：</label>
        </Col>
        <Col span="22">
          <Radio-group v-model="dataDisk" v-show="!isShow" type="button"  @on-change="addDataDisk">
            <Radio label="增加数据盘"></Radio>
          </Radio-group>
        </Col>
        <div v-show="isShow">
            <Col span="3">
              <InputNumber v-model="dataDiskSize" :max="3072" :min="10" style="width:100%" @on-change="dataDiskSizeChange">
              </InputNumber>
              <span slot="append">G</span>
            </Col>
            <Col span="18" class="diskSizeTip">
              <label>容量范围 : 10G - 3072G</label><span  @click="removeDataDisk"><icon name="times" class="iconClass"></icon></span>
            </Col>
          </div>
      </Row>
    </Row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'storage',
  computed: mapState({
    diskType: state => state.storage.diskType,
    diskSize: state => state.storage.diskSize,
    dataDiskSize: state => state.storage.dataDiskSize,
    dataDisk: state => state.storage.dataDisk,
    isShow: state => state.storage.isShow
  }),
  methods: {
    storageType (v) {
      this.$store.dispatch('get_storage_type', v)
    },
    dataDiskSizeChange (v) {
      this.$store.dispatch('change_data_disk', v)
    },
    addDataDisk () {
      this.$store.dispatch('add_data_disk')
    },
    removeDataDisk () {
      this.$store.dispatch('remove_data_disk')
    }
  }
}
</script>
<style lang="scss" scoped>
  .diskSizeTip {
    margin: 0 10px;
    label {
      line-height: 35px;
      color: #949494;
    }
  }
  .iconClass {
    margin: -3px 10px;
    cursor: pointer;
  }
</style>
