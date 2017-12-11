<template>
  <div class="bgColor">
    <div class="title">地域</div>
    <Row class="content">
      <Col span="2">
        <label>地域：</label>
      </Col>
      <Col span="22">
        <Radio-group v-model="areaType" type="button">
          <Radio label="BJ-GC4">
            <span>北京德信</span>
          </Radio>
        </Radio-group>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'area',
  computed: mapState([
    'areaType'
  ])
}
</script>