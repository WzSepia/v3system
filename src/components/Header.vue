<template>
  <div class="header">
    <div class="logo">
      <i class="fa fa-th-large" @click="navIsHide"></i>
      交通管理系统
    </div>
    <ul class="layui-nav layui-bg-blue" lay-filter="">
      <li
        v-for="(item, index) in headerList"
        class="layui-nav-item"
        :class="{ 'layui-this': isShow === index }"
        :key="index"
        @click="select(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="userInfo">
      <div class="time">
        <p>{{ date.hhmmss }}</p>
        <p>{{ date.yymmdd }}</p>
      </div>
      <div class="user">
        <i class="fa fa-user-circle"></i>
        <p>超级管理员</p>
      </div>
      <div class="set">
        <button
          type="button"
          class="layui-btn layui-btn-normal"
          data-method="notice"
          @click="setPassword"
        >
          <i class="fa fa-gear"></i>
        </button>
      </div>
      <div class="quit">
        <button
          type="button"
          class="layui-btn layui-btn-danger"
          @click="quitSystem"
        >
          <i class="fa fa-close"></i>
        </button>
      </div>
    </div>

    <div class="setPass" style="display: none">
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label">旧密码：</label>
          <div class="layui-input-inline">
            <input
              type="password"
              required
              lay-verify="required"
              placeholder="请输入旧密码"
              autocomplete="off"
              class="layui-input"
              v-model="userInfo.oldPass"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">新密码：</label>
          <div class="layui-input-inline">
            <input
              type="password"
              required
              lay-verify="required"
              placeholder="请输入新密码"
              autocomplete="off"
              class="layui-input"
              v-model="userInfo.newPass"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">确认密码：</label>
          <div class="layui-input-inline">
            <input
              type="password"
              required
              lay-verify="required"
              placeholder="请确认新密码"
              autocomplete="off"
              class="layui-input"
              v-model="userInfo.surePass"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//ref，reactive，watch，computed，router，store
import { ref, reactive, getCurrentInstance } from "vue";
import $ from "jquery";
import store from "../store";
import { mapState } from "vuex";
export default {
  name: "Header",
  store,
  computed: {
    ...mapState(["headerList"]),
  },
  setup() {
    const date = reactive({
      hhmmss: "00:00:00",
      yymmdd: "0000年00月00日",
    });

    const userInfo = reactive({
      oldPass: "",
      newPass: "",
      surePass: "",
    });

    const isShow = ref(0);
    const { ctx } = getCurrentInstance();

    function select(val) {
      isShow.value = val;
    }

    function navIsHide() {
      ctx.$store.state.navIsHide = !ctx.$store.state.navIsHide;
    }

    function hoursMinutesSeconds() {
      const time = reactive({
        h: new Date().getHours() + ":",
        m: new Date().getMinutes() + "",
        s: new Date().getSeconds() + "",
      });
      time.m = time.m.length === 1 ? "0" + time.m : time.m;
      time.s = time.s.length === 1 ? ":0" + time.s : ":" + time.s;
      return time.h + time.m + time.s;
    }

    function yearMonthDay() {
      const y = new Date().getFullYear() + "年";
      const m = new Date().getMonth() + 1 + "月";
      const d = new Date().getDate() + "日";
      return y + m + d;
    }

    setInterval(() => {
      date.hhmmss = ref(hoursMinutesSeconds());
      date.yymmdd = ref(yearMonthDay());
    }, 1000);

    //
    function setPassword() {
      userInfo.oldPass = "";
      userInfo.newPass = "";
      userInfo.surePass = "";
      /* eslint-disable */
      //示范一个公告层
      layer.open({
        type: 1,
        title: "修改登陆密码", //不显示标题栏
        closeBtn: false,
        area: "",
        shade: 0.8,
        id: "LAY_layuipro", //设定一个id，防止重复弹出
        btn: ["确定", "取消"],
        btnAlign: "c",
        moveType: 1, //拖拽模式，0或者1
        content: $(".setPass"), //document.querySelector
        yes: function () {
          if (!userInfo.oldPass) {
            alert("旧密码不能为空！");
            return;
          } else if (!userInfo.newPass) {
            alert("新密码不能为空！");
            return;
          } else if (!userInfo.surePass) {
            alert("确认密码不能为空！");
            return;
          } else if (userInfo.newPass != userInfo.surePass) {
            alert("两次密码输入不一致！");
            return;
          }
          //请求后台看看旧密码输入的对不对
          /*
            callname
          */
          alert("修改成功！");
          layer.closeAll();
          document.querySelector(".setPass").style.display = "none";
        },
        btn2: function () {
          layer.closeAll();
          document.querySelector(".setPass").style.display = "none";
        },
      });
      /* eslint-enable */
    }
    //
    function quitSystem() {
      if (confirm("确定退出系统吗？")) {
        sessionStorage.eleToken = "";
        //alert("退出成功！");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }

    return {
      date,
      userInfo,
      isShow,
      select,
      navIsHide,
      setPassword,
      quitSystem,
    };
  },
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  height: 100%
  display: flex
  user-select: none

.logo
  height: 100%
  line-height: 60px
  font-size: 22px
  color: #ffffff

.fa-th-large
  cursor: pointer

ul.layui-nav
  flex: 1
  height: 100%
  padding: 0

.layui-bg-blue
  background-color: #1E9FFF!important

.layui-nav-item
  color: #ffffff
  padding: 0 20px
  cursor: pointer
  transition: all 200ms linear 0s

.layui-nav .layui-nav-item:after
  content: ''
  position: absolute
  left: 0
  bottom: 0
  width: 0
  height: 5px
  background-color: transparent
  transition: all .2s linear 0s

.layui-nav .layui-nav-item:hover:after
  width: 100%
  background-color: #93D1FF!important

.layui-nav .layui-this:after
  width: 100%
  background-color: #93D1FF!important

.userInfo
  display: flex
  width: 280px
  height: 100%
  padding-top: 12px
  div
    padding: 0 4px
.time
  color: #ffffff
  text-align: center
.user
  color: #ffffff
  text-align: center
  position: relative
  top: -6px
  p
    font-size: 12px
  i
    font-size: 35px
.set
  button
    width: 30px
    height: 30px
    line-height: 30px
    background-color: #007DDB
    text-align: center
    padding: 0

.quit
  button
    width: 30px
    height: 30px
    line-height: 30px
    text-align: center
    padding: 0

.setPass
  width: auto
  height: auto
  padding: 10px 0 0 0
</style>
