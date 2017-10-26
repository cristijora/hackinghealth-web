<template>
  <div class="row" v-loading="true" id="loading">
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Loading} from 'element-ui'

  Vue.use(Loading.directive)
  export default {}
</script>
<style>
  #loading {
    height: calc(100vh - 210px);
    background-color: #f4f3ef;
  }

  .el-loading-spinner .path {
    stroke: #66615B !important;
  }

  .el-loading-mask {
    background: transparent !important;
  }
</style>
