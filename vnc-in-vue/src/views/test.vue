<template>
  <div class="g-container">
    <div class="g-middle"><div class="g-middle-inner">middle</div></div>
    <div class="g-left">left</div>
    <div class="g-right">right</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.g-container {
  position: relative;
  height: 100vh;
  min-width: 400px;

  & > div {
    height: 100vh;
    float: left;
    text-align: center;
    color: #fff;
    line-height: 100vh;
    font-size: 3vw;
  }
}

.g-middle {
  position: relative;
  width: 100%;
  background: #cc6630;

  .g-middle-inner {
    margin: 0 200px;
  }
}

.g-left {
  position: relative;
  width: 200px;
  background: #ffcc00;
  margin-left: -100%;
}

.g-right {
  position: relative;
  width: 200px;
  background: pink;
  margin-left: -200px;
}
</style>
