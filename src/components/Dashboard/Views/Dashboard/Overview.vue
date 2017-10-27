<template>
  <div>
    <div class="">
      <div class="col-xs-12">
        <el-button class="btn btn-fill btn-default" style="margin-bottom: 20px;" @click="addChild = !addChild">Add
          child
        </el-button>
      </div>
      <div class="row">
        <el-collapse-transition>
          <div class="col-sm-6 col-xs-12" v-show="addChild">
            <h4>{{newChild.name}}</h4>
            <div class="card card-user card-child">
              <div class="image">
              </div>
              <el-form label-position="top" class="card-content row">
                <div class="author">
                  <img class="avatar"
                       src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"
                       alt="...">
                  <h4 class="title text-info">

                  </h4>
                </div>
                <el-form-item class="col-sm-6 col-xs-12">
              <span slot="label" class="text-danger">
                Name
              </span>
                  <el-input v-model="newChild.name">
                  </el-input>
                </el-form-item>
                <el-form-item class="col-sm-6 col-xs-12">
               <span slot="label" class="text-danger">
                Gender
               </span>
                  <el-select v-model="newChild.gender" placeholder="Select">
                    <el-option
                      v-for="item in genders"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                      <i :class="item.icon"> {{item.value}}</i>
                    </el-option>
                  </el-select>
                </el-form-item>
                <div class="row">
                </div>
                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth weight (kg)</span>
                  <el-input-number :value="newChild.birthWeight/1000"
                                   @change="(newValue) => child.birthWeight = newValue * 1000"
                                   :step="0.1">
                  </el-input-number>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth height</span>
                  <el-input-number v-model="newChild.birthHeight"></el-input-number>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth date</span>
                  <el-date-picker v-model="newChild.birthDate" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Current weight (cm)</span>
                  <el-input-number v-model="newChild.currentHeight"></el-input-number>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Current weight (kg)</span>
                  <el-input-number :value="newChild.currentWeight/1000"
                                   @change="(newValue) => child.currentWeight = newValue * 1000"
                                   :step="0.1">
                  </el-input-number>
                </el-form-item>
                <el-form-item class="col-xs-12 text-center">
                  <el-button class="btn btn-fill btn-success btn-wd" @click.native="createChild" :loading="loading">
                  <span class="text-danger" v-if="error">
                     {{buttonText}}
                  </span>
                    <span v-else>
                    {{buttonText}}
                  </span>

                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-collapse-transition>
      </div>
      <div class="row">
      </div>

      <div class="row">
        <h4 style="padding-left: 15px;">My Children</h4>
        <transition-group name="list">
          <div class="col-sm-6 col-xs-12" v-for="child in children" :key="child._id">
            <div class="card card-user card-child">
              <div class="image">
              </div>
              <el-form label-position="top" class="card-content row">
                <div class="author">
                  <img class="avatar"
                       src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"
                       alt="...">
                  <h4 class="title text-info"><i
                    :class="child.gender === 'feminin'? 'fa fa-female' : 'fa fa-male text-success'"></i>{{child.name}}
                  </h4>
                </div>
                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth weight</span>
                  <span class="text-primary">{{child.birthWeight/1000}} kg</span>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth height</span>
                  <span class="text-primary">{{child.birthHeight}} cm</span>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Birth date</span>
                  <el-date-picker v-model="child.birthDate" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Current weight (cm)</span>
                  <el-input-number v-model="child.currentHeight"></el-input-number>
                </el-form-item>

                <el-form-item class="col-sm-6 col-xs-12">
                  <span slot="label" class="text-danger">Current weight (kg)</span>
                  <el-input-number :value="child.currentWeight/1000"
                                   @change="(newValue) => child.currentWeight = newValue * 1000"
                                   :step="0.1">
                  </el-input-number>
                </el-form-item>
                <el-form-item class="col-xs-12 text-center">
                  <el-button class="btn btn-fill btn-success btn-wd" @click.native="updateChild(child)"
                             :loading="loading">
                  <span class="text-danger" v-if="error">
                     {{updateButtonText}}
                  </span>
                    <span v-else>
                    {{updateButtonText}}
                  </span>

                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
  import api from 'src/api'
  import Card from 'src/components/UIComponents/Cards/Card'
  import FgInput from 'src/components/UIComponents/Inputs/formGroupInput'

  const initialChildInfo = {
    name: '',
    birthDate: '2017-10-26',
    birthWeight: 3100,
    birthHeight: 60,
    gender: 'feminin',
    currentWeight: 3500,
    currentHeight: 80
  }
  export default {
    components: {
      Card,
      FgInput
    },
    data () {
      return {
        addChild: false,
        loading: false,
        error: false,
        buttonText: 'Save',
        updateButtonText: 'Update',
        children: [],
        genders: [{value: 'feminin', icon: 'fa fa-female'}, {value: 'masculin', icon: 'fa fa-male'}],
        newChild: {
          ...initialChildInfo
        }
      }
    },
    methods: {
      async createChild () {
        try {
          this.loading = true
          const savedChild = await api.service('children').create(this.newChild)
          this.loading = false
          this.error = false
          this.newChild = {...initialChildInfo}
          this.addChild = false
          this.children.unshift(savedChild)
        } catch (e) {
          this.buttonText = e.message
          this.error = true
          this.loading = false
          setTimeout(() => {
            this.buttonText = 'Save'
            this.error = false
          }, 1500)
        }
      },
      async updateChild (child) {
        try {
          this.loading = true
          await api.service('children').update(child._id, child)
          this.loading = false
          this.error = false
        } catch (e) {
          this.updateButtonText = e.message
          this.error = true
          this.loading = false
          setTimeout(() => {
            this.updateButtonText = 'Update'
            this.error = false
          }, 1500)
        }
      }
    },
    async mounted () {
      let response = await api.service('children').find()
      this.children = response.data
      if (this.children.length === 0) {
        this.addChild = true
      }
    }
  }
</script>
<style lang="scss">
  @import '~assets/sass/paper/variables';

  .card-user .image {
    height: 70px;
    background-color: $default-bg;
  }

  .el-form--label-top .el-form-item__label {
    padding-bottom: 0;
    margin-bottom: 5px;
    margin-top: 10px;
    line-height: 20px;
  }

  .card-content {
    height: 100%;
  }

  .card-child {
    .text-primary {
      font-weight: bold;
      font-size: 16px;
    }
    .el-form-item {
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .el-select,
    .el-input,
    .el-input-number {
      width: 70%;
      .el-input {
        width: 100%;
      }
    }
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
