<template>
  <div class="box">
    <div class="col-xs-12">
      <el-steps direction="vertical" :active="2" :space="60" finish-status="success" process-status="finish">
        <div v-for="weekData in weeks" :key="weekData.week">
          <el-step :title="`${weekData.week} sapt`"
                   :status="weekData.status">
          </el-step>

          <div class="row timeline-row">
            <el-tooltip v-for="data in filterByWeek(weekData.week)"
                        :key="data.name"
                        class="item" effect="light"
                        :content="data.description"
                        placement="top-start">
              <el-button :type="getType(data.done, weekData.status)"
                         plain @click="openDialog(data)">{{shortName(data.name)}}
              </el-button>
            </el-tooltip>
          </div>
        </div>

      </el-steps>

      <div class="col-xs-12">


      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        append-to-body
        center>
        <h4 slot="title" :class="getTextClass(activeData)">
          {{activeData ===null ? '' : activeData.name}}
        </h4>
        <el-form v-if="activeData!==null" label-position="top">
          <el-form-item v-if="activeData.required && !activeData.done">
            <h4 class="text-danger"><i class="fa fa-exclamation"></i> Obligatoriu</h4>
          </el-form-item>
          <el-form-item>
            <label slot="label" class="text-danger">Descriere</label>
            <div class="text-info">{{activeData.description}}</div>
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
              <el-button size="small" type="primary">Click to upload</el-button>
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
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
  </div>

</template>
<script>
  export default {
    props: ['weeks', 'childData'],
    data () {
      return {
        dialogVisible: false,
        activeData: null,
        fileList: []
      }
    },
    methods: {
      filterByWeek (week) {
        return this.childData.filter((data) => {
          if (typeof data.week === 'object' && data.week.length) {
            return data.week.includes(week)
          }
          return data.week === week
        })
      },
      shortName (name) {
        return `${name.substring(0, 15)}...`
      },
      getType (done, status) {
        let btnStatus = done ? 'success' : 'danger'
        if (status === 'finish') {
          btnStatus = 'primary'
        }
        return btnStatus
      },
      getTextClass (activeData) {
        if (activeData !== null) {
          return activeData.done ? 'text-success' : 'text-danger'
        }
        return ''
      },
      openDialog (data) {
        this.activeData = data
        this.dialogVisible = true
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleExceed (files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/sass/paper/variables';

  .el-upload__input {
    display: none !important;
  }

  .el-tooltip__popper.is-light {
    border: 1px solid $default-color;
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

  .box {
    .el-steps .el-button {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
    .top {
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
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
</style>
