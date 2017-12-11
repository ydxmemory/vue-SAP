<template>
  <div class="bgColor">
    <div class="title">计费</div>
    <Row class="content">
      <Col span="2">
        <label>计费方式：</label>
      </Col>
      <Col span="22">
        <Radio-group v-model="chargingType" type="button">
          <Radio label="730">
            <span>包年包月</span>
          </Radio>
        </Radio-group>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'charging',
  computed: mapState([
    'chargingType'
  ])
}
</script>