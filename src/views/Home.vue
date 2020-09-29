<template>
  <div class="home">
    <div class="headerBox">
      <Header />
    </div>
    <div class="bodyBox">
      <Body />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";

export default {
  name: "Home",
  components: {
    Header,
    Body,
  },
};
</script>

<style lang="sass" scoped>
.home
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
.headerBox
  width: 100%
  height: 60px
  padding: 0 0 0 1.25rem
  border-bottom: 1px solid #cccccc
  box-shadow: 0 1px 2px 0 #cccccc
  background-color: #1E9FFF!important
.bodyBox
  flex: 1
  width: 100%
</style>