<template>
  <div class="body">
    <div class="navBox posr" :class="{ navBoxHide: navIsHide }">
      <Nav />
    </div>
    <div class="main">
      <div class="main" v-if="true">
        <Iframe />
      </div>
      <div class="main" v-if="false">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCurrentInstance } from "vue";
import { mapState } from "vuex";
import store from "../store";
import Nav from "@/components/Nav.vue";
import Iframe from "@/components/Iframe.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Body",
  components: {
    Nav,
    Iframe,
    Main,
  },
  store,
  computed: {
    ...mapState(["navIsHide"]),
  },
  setup() {
    const { ctx } = getCurrentInstance();

    return {
      ctx,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.body
  display: flex
  width: 100%
  height: 100%

.navBox
  width: 200px
  height: 100%
  overflow: hidden
  transition: all .2s linear 0s

.navBoxHide
  width: 0

.main
  width: 100%
  height: 100%
</style>
