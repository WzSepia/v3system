<template>
  <iframe class="iframe" :src="iframeSrc"></iframe>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
export default {
  name: "Iframe",
  store,
  computed: {
    ...mapState(["iframeSrc"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.iframe
  width: 100%
  height: 100%
</style>
