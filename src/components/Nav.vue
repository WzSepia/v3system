<template>
  <div class="nav">
    <ul class="layui-nav layui-bg-blue layui-nav-tree" lay-filter="test">
      <template v-for="(item, index) in navList">
        <li
          v-if="item.children"
          :index="item.src"
          :key="index"
          class="layui-nav-item"
        >
          <a>{{ item.name }}</a>
          <dl class="layui-nav-child">
            <dd v-for="(a, li) in item.children" :key="li">
              <a :src="a.src" @click="select(a.src)">{{ a.name }}</a>
            </dd>
          </dl>
        </li>

        <li v-if="item.src" :key="index" class="layui-nav-item">
          <a :src="item.src" @click="select(item.src)">{{ item.name }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import "jquery/dist/jquery";
import store from "../store";
import { mapState } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      isShow: 0,
    };
  },
  store,
  computed: {
    ...mapState(["navList", "iframeSrc"]),
  },
  setup() {
    //显示当前路径
    const { ctx } = getCurrentInstance();
    function select(val) {
      ctx.$store.state.iframeSrc = ref(val);
      console.log(ctx.$store.state.iframeSrc, "=", val);
    }

    return {
      select
    }
  },
  mounted() {
    //getCurrentInstance
    /* eslint-disable */
    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use("element", () => {
      var element = layui.element;
      element.render();
      //监听Tab切换
      element.on("tab(test)", function (data) {
        console.log("data=", data);
      });
    });
    /* eslint-enable */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.nav
  width: 100%
  height: 100%
.layui-nav-tree
  width: 100%
  height: 100%

.layui-bg-blue
  color: #ffffff!important
  background-color: #007DDB!important

.layui-nav-tree a
  color: #ffffff!important
  cursor: pointer

.layui-this a
  background-color: #1E9FFF!important

.layui-nav-tree .layui-nav-item a:hover
  background-color: #1E9FFF!important
</style>
