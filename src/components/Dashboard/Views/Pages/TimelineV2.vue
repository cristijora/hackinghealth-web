<template>
  <div class="col-xs-12">
    <h3 class="text-center">Timeline</h3>
    <el-tabs value="first">
      <el-tab-pane label="Investigatii" name="first">
        <el-steps class="col-xs-10 col-xs-offset-1"
                  :active="activePeriod"
                  finish-status="success"
                  process-status="finish">
          <el-step v-for="period in periods"
                   :key="period.title"
                   :title="period.title"></el-step>
        </el-steps>

        <div class="col-xs-10 col-xs-offset-1">
          <transition-group name="flip-list" tag="span">
            <card v-for="(item, index) in investigations"
                  :key="item._id"
                  :data-background-color="getColor(item)">
              <div slot="header">
                <el-row>
                  <checkbox inline v-model="item.done"
                            class="pull-right"
                            @input="(value) => handleCheck(value, item, index)"
                            :class="item.done? 'checkbox-success': 'checkbox-danger'">
                  </checkbox>

                </el-row>

              </div>
              <div class="row ">
                <div class="col-xs-12 card-body" style="display: flex;">
                  <img :src="investigationTypes[item.category]"
                       style="width: 50px; height: 50px;" alt="">
                  <div class="info">
                    <div class="text-white">{{item.name}}</div>
                    <div class="description">
                      <i>{{item.description}}</i>
                    </div>
                  </div>
                </div>

              </div>
              <div slot="footer" v-if="item.files">
                <span class="fa fa-clock-o"> </span> {{getDueDate(item.dueDate)}}
              </div>
            </card>
          </transition-group>

        </div>
      </el-tab-pane>
      <el-tab-pane label="Dezvoltare" name="second">
        <el-steps class="col-xs-10 col-xs-offset-1"
                  :active="activePeriod"
                  finish-status="success"
                  process-status="finish">
          <el-step v-for="period in periods"
                   :key="period.title"
                   :title="period.title"></el-step>
        </el-steps>

        <div class="col-xs-10 col-xs-offset-1">
          <transition-group name="flip-list" tag="span">
            <card v-for="(item, index) in investigations"
                  :key="item._id"
                  :data-background-color="getColor(item)">
              <div slot="header">
                <el-row>
                  <checkbox inline v-model="item.done"
                            class="pull-right"
                            @input="(value) => handleCheck(value, item, index)"
                            :class="item.done? 'checkbox-success': 'checkbox-danger'">
                  </checkbox>

                </el-row>

              </div>
              <div class="row ">
                <div class="col-xs-12 card-body" style="display: flex;">
                  <img :src="investigationTypes[item.category]"
                       style="width: 50px; height: 50px;" alt="">
                  <div class="info">
                    <div class="text-white">{{item.name}}</div>
                    <div class="description">
                      <i>{{item.description}}</i>
                    </div>
                  </div>
                </div>

              </div>
              <div slot="footer" v-if="item.files">
                <span class="text-info fa fa-clock-o"> </span> {{getDueDate(item.dueDate)}}
              </div>
            </card>
          </transition-group>

        </div>
      </el-tab-pane>
    </el-tabs>




    <div class="col-xs-12">
      <el-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        append-to-body
        center>
        <h4 slot="title" :class="getTextClass(activeData)">
          {{activeData === null ? '' : activeData.name}}
        </h4>
        <el-form v-if="activeData!==null" label-position="top">
          <el-form-item v-if="activeData.required && !activeData.done">
            <h4 class="text-danger"><i class="fa fa-exclamation"></i> Obligatoriu</h4>
          </el-form-item>
          <el-form-item>
            <label slot="label" class="text-danger">Descriere</label>
            <div class="text-default">{{activeData.description}}</div>
          </el-form-item>

          <el-form-item>
            <label slot="label" class="text-danger">Notite</label>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="Adauga notite"
              v-model="activeData.notes">
            </el-input>
          </el-form-item>
          <el-form-item>
            <label slot="label" class="text-danger">Fisiere</label>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="activeData.files"
              list-type="picture">
              <el-button size="small" type="primary">Adauga fisiere</el-button>
              <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <label slot="label" class="text-danger">Data cand s-a intamplat</label>
            <el-date-picker
              v-model="activeData.date"
              type="date"
              placeholder="Alege o zi">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">Cancel</el-button>
          <el-button type="primary" @click="moveItem(activeData)">Confirm</el-button>
        </span>
      </el-dialog>

    </div>

  </div>
</template>
<script>
  import api from 'src/api'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
  import {parse, format} from 'date-fns'
  import roLocale from 'date-fns/locale/ro'

  Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days)
    return dat
  }

  function move(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while ((k--) + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  export default {
    components: {
      Card,
      Checkbox
    },
    data() {
      return {
        child: null,
        periods: [],
        investigations: [],
        dialogVisible: false,
        activeData: null,
        activeIndex: 0,
        fileList: [],
        investigationTypes: {
          consult: 'static/img/consult.png',
          vaccin: 'static/img/syringe.png',
          investigatii: 'static/img/radio.png'
        }
      }
    },
    computed: {
      activePeriod() {
        return this.periods.findIndex(p => p.active === true)
      }
    },
    methods: {
      getColor(item) {
        if (item.done === true) {
          return 'green'
        }
        return 'orange'
      },
      handleCheck(value, item, index) {
        this.activeIndex = index
        this.openDialog(item)
      },
      handleClose() {
        this.activeData.done = false
        this.dialogVisible = false
      },
      async moveItem() {
        this.dialogVisible = false
        let length = this.investigations.length - 1
        let from = this.activeData.done ? this.activeIndex : length
        let to = this.activeData.done ? length : this.activeIndex
        move(this.investigations, from, to)
        var savedData = await api.service('investigations').update(this.activeData._id, this.activeData)
      },
      shortName(name) {
        return `${name.substring(0, 15)}...`
      },
      getType(done, status) {
        let btnStatus = done ? 'success' : 'danger'
        if (status === 'finish') {
          btnStatus = 'primary'
        }
        return btnStatus
      },
      getTextClass(activeData) {
        if (activeData !== null) {
          return activeData.done ? 'text-primary' : 'text-primary'
        }
        return 'text-primary'
      },
      getDueDate(days) {
        return format(parse(this.child.birthDate)
          .addDays(days), "MMMM ", {locale: roLocale})
      },
      openDialog(data) {
        this.activeData = data
        this.dialogVisible = true
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
      }
    },
    async mounted() {
      const userId = this.$store.state.user.userId
      const periodData = await api.service('periods').find({userId: userId})
      this.periods = periodData.data[0].periods
      var childData = await api.service('children').find({userId: userId})
      this.child = childData.data[0]

      const investigationData = await api.service('investigations').find({userId: userId})
      this.investigations = investigationData.data.sort((a, b) => {
        if (a.done === b.done) {
          return a.dueDate > b.dueDate
        } else {
          return a.done > b.done;
        }
      })
    }
  }
</script>

<style lang="scss">
  @import '~assets/sass/paper/variables';

  .card .card-body {
    margin-top: -55px;
    margin-bottom: 5px;
  }

  .card .info {
    .description {
      padding-left: 10px;
      color: darken(white, 10%);
    }
  }

  .card[data-background-color="green"] {
    opacity: 0.85;
  }

  .el-step.is-horizontal .el-step__line {
    top: 24px;
  }

  .el-step__icon {
    width: 50px;
    height: 50px;
  }

  .el-upload__input {
    display: none !important;
  }

  .el-tooltip__popper.is-light {
    border: 1px solid $default-color;
  }

  .el-steps {
    margin-bottom: 20px;
  }

  .timeline-row {
    margin: 10px auto 40px;

  }

  .el-form--label-top .el-form-item__label {
    padding-bottom: 0;
    margin-bottom: 0px;
    margin-top: 10px;
    line-height: 20px;
  }

  .el-form-item {
    margin-bottom: 5px;
  }

  .card .text-white {
    color: white !important;
    margin-left: 10px;
    font-size: 20px;
  }

  .card[data-background-color="green"] {
    $text-color: darken($primary-color, 30%) !important;
    .text-white {
      color: $text-color;
      margin-left: 10px;
      font-size: 20px;
    }
    .description, .card-footer {
      color: $text-color;
    }

  }

  .flip-list-move {
    transition: all 1.5s;
  }

  @media (max-width: $screen-md) {
    .el-dialog {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .el-dialog {
      width: 95%;
    }
  }

  .el-tabs__nav-scroll{
    display: flex;
    justify-content: center;
  }
  .el-tabs__nav-wrap::after {
    content: none;
  }
</style>
