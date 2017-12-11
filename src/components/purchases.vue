<template>
  <div class="bgColor">
    <div class="title">购买量</div>
    <Row class="content">
      <Row>
        <Col span="2">
        <label>数量：</label>
        </Col>
        <Col span="22">
        <Radio-group v-model="buyNums" type="button" @on-change="v => purchasesChange(v, 'buyNums')">
          <Radio label="1"></Radio>
          <Radio label="2"></Radio>
          <Radio label="3"></Radio>
          <Radio label="4"></Radio>
        </Radio-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>主机组：</label>
        </Col>
        <Col span="3">
        <Select v-model="hostGroup" @on-change="v => purchasesChange(v, 'hostGroup')">
          <Option v-for="item in hostGroupList" :value="item.id">{{item.app_name}}</Option>
        </Select>
        </Col>
        <Col span="3" class="newHostGroup">
        <label @click="new_modal = true">创建主机组</label>
        </Col>
        <Modal v-model="new_modal" title="创建主机组" @on-ok="ok('formValidate')" @on-cancel="cancel('formValidate')">
          <Form ref="formValidate" :model="formValidate" :label-width="100" :rules="ruleValidate">
            <FormItem label="名称：" prop="app_name">
              <Input v-model="formValidate.app_name" placeholder="请输入名称"></Input>
            </FormItem>
            <FormItem label="中文名称：" prop="app_cn_name">
              <Input v-model="formValidate.app_cn_name" placeholder="请输入中文名称"></Input>
            </FormItem>
            <FormItem label="服务类型：" prop="serverType">
              <Select v-model="formValidate.serverType" placeholder="请选择">
                <Option v-for="item in serverTypeList" :value="item" >{{item}}</Option>
              </Select>
            </FormItem>
            <FormItem label="描述：" prop="description">
              <Input v-model="formValidate.description" placeholder="描述"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
          </Form>
        </Modal>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>环境：</label>
        </Col>
        <Col span="22">
        <Checkbox-group v-model="checkAllGroup" @on-change="v => purchasesChange(v, 'checkAllGroup')">
          <Checkbox label="prod">
            <span>线上</span>
          </Checkbox>
          <Checkbox label="pre">
            <span>预发</span>
          </Checkbox>
          <Checkbox label="test">
            <span>测试</span>
          </Checkbox>
          <Checkbox label="dev">
            <span>开发</span>
          </Checkbox>
        </Checkbox-group>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="2">
        <label>密码：</label>
        </Col>
        <Col span="22" style="color: #949494;">
        <Input v-model="password" type="password" placeholder="请输入密码" style="width: 410px" @on-change="v => purchasesChange(v, 'inputChange')"></Input>
        长度 8-16, 必须包含 1 个大写字母，1个小写字母，1个数字, 可以包含特殊字符($@$!%*?&)
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="24" offset="2">
          <Button type="primary" @click="buyInstance">购买</Button>
        </Col>
      </Row>
    </Row>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import { HOST } from '../common'
export default {
  name: 'purchases',
  computed: mapState({
    buyNums: state => state.purchases.buyNums,
    hostGroup: state => state.purchases.hostGroup,
    hostGroupList: state => state.purchases.hostGroupList,
    checkAllGroup: state => state.purchases.checkAllGroup,
    password: state => state.purchases.password
  }),
  data () {
    return {
      new_modal: false,
      serverTypeList: ['tomcat', 'spring-boot', 'html', 'ios', 'android', 'java',
        'jboss', 'php', 'binary', 'client-hot', 'component', 'django',
        'beego', 'go', 'others'],
      formValidate: {
        co_name: 'guomeidianqi',
        app_name: '',
        app_cn_name: '',
        site_name: 'BJ-GC4',
        serverType: '',
        description: '',
        create_username: 'guomeidianqi'
      },
      ruleValidate: {
        app_name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        app_cn_name: [
          { required: true, message: '中文名称不能为空', trigger: 'blur' }
        ],
        serverType: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' },
          { type: 'string', min: 10, message: '描述不能少于10字', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$store.dispatch('get_host_group_list')
  },
  methods: {
    purchasesChange (v, target) {
      this.$store.dispatch('get_nums_change', [v, target])
    },
    buyInstance () {
      this.$store.dispatch('getBuyInstance')
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$http.post(HOST.DEV + 'create_app', this.formValidate).then((response) => {
            this.$Notice.success({
              title: '创建主机组成功！'
            })
            this.$store.dispatch('get_host_group_list')
          }, (response) => {
            this.$Notice.error({
              title: '创建主机组失败！'
            })
          })
          this.new_modal = false
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    // ok (name) {
    //   this.$Message.info('点击了确定')
    // },
    cancel (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.newHostGroup {
  margin: 0 20px;
  label {
    line-height: 35px;
    padding: 10px 0px;
    color: #108ee9;
    cursor: pointer;
  }
}

p {
  margin: 20px 0;
  label {
    width: 60px;
    display: inline-block;
    text-align: right;
  }
}
</style>

