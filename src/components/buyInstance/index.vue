<template>
  <Row type="flex">
    <Col span="2"></Col>
    <Col span="20">
    <charging />
    <areas />
    <network />
    <instance />
    <storage />
    <purchases />
    </Col>
    <Col span="2"></Col>
  </Row>
</template>
<script>
import charging from '../charging'
import areas from '../area'
import network from '../network'
import instance from '../instance'
import storage from '../storage'
import purchases from '../purchases'
export default {
  name: 'buyInstance',
  components: {
    charging,
    areas,
    network,
    instance,
    storage,
    purchases
  }
}
</script>
<style lang="scss">
.bgColor {
  min-height: 100px;
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: #fafafa;
  .title {
    word-wrap: break-word;
    border-right: 1px solid #f5f5f5;
    width: 30px;
    align-self: stretch;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0 7px;
    background-color: #f2f2f2;
  }
  .content {
    width: 100%;
    padding: 15px 0;
    label {
      line-height: 30px;
    }
    div:first-child {
      text-align: right;
    }
    div:last-child {
      text-align: left;
    }
  } 
}

.ivu-modal-footer {
  display: none;
}
</style>

