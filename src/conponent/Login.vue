<template>
  <div calss="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象

      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入正确的昵称', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 5到 12个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      //! $refs是固有属性,loginFormRef为表单的引用对象
      this.$refs.loginFormRef.resetFields()
    },
    // 表单进行预验证
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        // !{data:res}解构赋值
        const { data: res } = await this.$http.post('login', this.loginForm)
        // this的返回结果是promise所以可以用async
        if (res.meta.status !== 200) {
          return this.$message.error('登录失败')
        }
        // 储存token
        // !将登陆成功之后的token ,保存到客户端的sessionStorage 中
        // setItem储存.get获取
        // 通过编程式导航跳转到后台主页, 路由地址是 / home
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.data.token)

        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: lightblue;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #2b4b6b;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
