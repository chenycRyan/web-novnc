<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  // provide来抛出变量
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  mounted() {
    console.log(window.appsettings)
  },
  methods: {
    // 重新加载页面
    reload() {
      this.isRouterAlive = false
      // this.$store.commit("resetState")
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  background: $Nav-style;
}
</style>
