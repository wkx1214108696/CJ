<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
    <el-form-item label="用户" prop="user">
      <el-input v-model.number="ruleForm.user" prefix-icon="el-icon-s-custom"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
    </el-form-item>
    <el-form-item class="sign-in">
      <el-button type="primary" @click="signIn">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'register',
  data () {
    var checkUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signIn () {
      console.log(111, this.ruleForm.user)
      if (this.ruleForm.user === 'admin' && this.ruleForm.pass === '1234') {
        console.log(111, this.ruleForm.pass)
        this.$router.push('/home')
      } else {
        this.$alert('禁止访问', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  text-align: center;
}
</style>
