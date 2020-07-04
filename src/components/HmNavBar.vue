<template>
  <div class="hm-navbar" @click="clickFn">
    <div class="title"><slot></slot></div>
    <div class="content"><slot name="content"></slot></div>
    <div class="arrow"><span class="iconfont iconjiantou1"></span></div>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.hm-navbar {
  display: flex;
  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 50px;
}
.content {
  flex: 1;
  text-align: right;
  color: #ccc;
}
.arrow {
  font-size: 16px;
  padding-left: 10px;
}
</style>
