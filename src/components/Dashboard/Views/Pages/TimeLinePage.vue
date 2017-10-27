<template>
  <div class="col-xs-12">
    <h4>Timeline</h4>

    <el-steps :active="1"
              finish-status="success"
              process-status="finish">
      <el-step title="S-a nascut Sofia"></el-step>
      <el-step title="3 months"></el-step>
      <el-step title="6 months"></el-step>
      <el-step title="1 year"></el-step>
      <el-step title="2 years"></el-step>
    </el-steps>

    <Card class="col-xs-12">
      <div slot="header">
        <div class="icon-big text-center icon-danger">
          <h5 class="text-danger"><i class="ti-announcement"></i> Atentionare vaccin</h5>
        </div>
      </div>
      <h5 class="text-info">De acum toate vaccinurile se vor efectua la medicul de familie. E timpul sa-l suni sa te
        programezi la vaccinuri.</h5>

    </Card>

    <div class="col-xs-12">

    </div>
    <div class="col-sm-6 col-xs-12">
      <Card class="col-xs-12">
        <div slot="header">
          <h4 class="text-danger"><i class="fa fa-user-md "></i>Vaccinare</h4>
        </div>
        <Analize :weeks="weeks" :child-data="medicale"></Analize>
      </Card>
    </div>
    <div class="col-sm-6 col-xs-12">
      <Card class="col-xs-12">
        <div slot="header">
          <h4 class="text-danger"><i class="fa fa-user-md "></i>Vaccinare</h4>
        </div>
        <Analize :weeks="weeksDezvoltare" :child-data="dezvoltare"></Analize>
      </Card>
    </div>
  </div>

</template>
<script>
  import Vue from 'vue'
  import Card from 'src/components/UIComponents/Cards/Card'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox'
  import Analize from './Analize'

  export default {
    components: {
      Card,
      Checkbox,
      Analize
    },
    data () {
      return {
        weeks: [{week: 1, status: 'error'}, {week: 6, status: 'success'}, {week: 8, status: 'finish'}],
        medicale: [
          {
            week: 1,
            name: 'Screening boli metabolice',
            required: false,
            description: 'Screening boli metabolice care trebuie facut in prima saptamana',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 1,
            name: 'BCG (vaccin anti-tuberculoza)',
            required: true,
            description: 'BCG(vaccin anti-tuberculoza)',
            notes: '',
            files: [],
            done: true,
            date: ''
          },
          {
            week: 1,
            name: 'EUVAX(vaccin anti-hepatita B)',
            required: true,
            description: 'EUVAX(vaccin anti-hepatita B)',
            notes: 'Am facut vaccina in Cluj la spitalul public',
            files: [],
            done: true,
            date: ''
          },
          {
            week: 1,
            name: 'Screening oftalmologic',
            required: true,
            description: 'Screening oftalmologic care trebuie facut in prima saptamana',
            notes: '',
            files: [],
            done: true,
            date: ''
          },
          {
            week: 6,
            name: 'Bilirubina',
            required: false,
            description: 'Bilirubina care trebuie facut in a 2-a saptamana',
            notes: '',
            files: [],
            done: true,
            date: ''
          }
        ],
        weeksDezvoltare: [{week: 4, status: 'success'}, {week: 8, status: 'finish'}, {week: 12, status: 'finish'}],
        dezvoltare: [
          {
            week: 4,
            name: 'tresare la zgomote puternice',
            required: false,
            description: 'tresare la zgomote puternice',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 4,
            name: 'Se linisteste cand e mangaiat',
            required: false,
            description: 'Se linisteste cand e mangaiat',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 4,
            name: 'Privește fata părinților pt scurt timp',
            required: false,
            description: 'Privește fata părinților pt scurt timp',
            notes: 'Se uita gingas si la mami si la tati',
            files: [],
            done: true,
            date: new Date()
          },
          {
            week: 4,
            name: 'Tine mâna in pumn',
            required: false,
            description: 'Tine mâna in pumn',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 8,
            name: 'Reactioneaza la sunete',
            required: false,
            description: 'Reactioneaza la sunete',
            notes: '',
            files: [],
            done: false,
            date: ''
          }
        ]
      }
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
