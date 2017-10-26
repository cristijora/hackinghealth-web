<template>
  <div class="col-md-12">
    <h4>Timeline</h4>

    <el-steps :active="1"
              finish-status="success"
              process-status="finish" >
      <el-step title="S-a nascut Sofia"></el-step>
      <el-step title="3 months"></el-step>
      <el-step title="6 months"></el-step>
      <el-step title="1 year"></el-step>
      <el-step title="2 years"></el-step>
    </el-steps>

      <Card class="col-xs-12">
        <div slot="header">
          <div  class="icon-big text-center icon-danger">
            <h5 class="text-danger"><i class="ti-announcement"></i> Atentionare vaccin</h5>
          </div>
        </div>
        <h5 class="text-info">De acum toate vaccinurile se vor efectua la medicul de familie. E timpul sa-l suni sa te programezi la vaccinuri.</h5>

      </Card>

    <Card class="col-xs-12">
      <div slot="header">
        <h4 class="text-danger"><i class="fa fa-user-md "></i>Vaccinare</h4>
      </div>
      <div class="col-xs-12 vaccine">
        <checkbox :value="true">EUVAX</checkbox>
        <checkbox :value="true">DTPa</checkbox>
        <checkbox :value="true">VPI</checkbox>
        <checkbox :value="true">Hib</checkbox>
      </div>
    </Card>

  </div>

</template>
<script>
  import Vue from 'vue'
  import Card from 'src/components/UIComponents/Cards/Card'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox'
  import {Steps, Step} from 'element-ui'
  Vue.use(Step)
  Vue.use(Steps)

  export default {
    components: {
      Card,
      Checkbox
    }
  }
</script>
<style lang="scss">
  @import "~assets/sass/paper/variables";
  .vaccine .checkbox {
    font-size: 22px;
    font-weight: 700;
    color: $danger-color;
  }
</style>
