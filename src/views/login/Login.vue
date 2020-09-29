<template>
  <div class="login posa">
    <form class="layui-form">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名：</label>
        <div class="layui-input-block">
          <input
            type="text"
            required
            lay-verify="required"
            placeholder="请输入用户名"
            autocomplete="off"
            class="layui-input"
            v-model="userInfo.name"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码：</label>
        <div class="layui-input-inline">
          <input
            type="password"
            required
            lay-verify="required"
            placeholder="请输入密码"
            autocomplete="off"
            class="layui-input"
            v-model="userInfo.password"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button type="button" class="layui-btn layui-btn-normal" @click="login">登陆</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
export default {
  name: "Login",
  setup() {
    //显示当前路径
    const { ctx } = getCurrentInstance();
    //console.log(ctx.$router);
    const userInfo = reactive({
      name: "super",
      password: "123",
    });
    function login() {
      sessionStorage.eleToken = userInfo.name;
      ctx.$router.push("/home");
    }

    return {
      userInfo,
      login,
    };
  },
  mounted() {
    /* eslint-disable */
    layui.use("form", function () {
      var form = layui.form;
    });
    /* eslint-enable */
  },
};
</script>

<style lang="sass" scoped>
.login
  width: 300px
  height: 200px
  background-color: #2f68bf
  left: 50%
  top: 50%
  padding: 20px
  transform: translate(-50%,-50%)
  border-radius: 4px
  box-shadow: 0 0 6px 0 #000000

.layui-form-label
  color: #ffffff

.layui-input , .layui-textarea
  width: auto

.layui-form-item .layui-input-inline
  width: auto
</style>