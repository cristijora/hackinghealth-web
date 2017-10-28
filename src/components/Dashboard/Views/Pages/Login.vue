<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">Hacking health 2017</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/register">
                Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/baby_bg.png">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3" @submit.prevent="login">
                <form method="#" action="#">
                  <div class="card login-card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">Login</h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label>Email address</label>
                        <input v-model="addModel.email" type="email" placeholder="Enter email" class="form-control input-no-border">
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input v-model="addModel.password" type="password" placeholder="Password" class="form-control input-no-border">
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <el-button native-type="submit" class="btn btn-fill btn-wd" @click="login" :loading="loading">
                        <span v-if="error" class="text-danger">{{buttonText}}</span>
                        <span v-else>{{buttonText}}</span>
                      </el-button>
                      <div class="forgot">
                        <router-link to="/register">
                          Forgot your password?
                        </router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright">
              &copy; Coded with
              <i class="fa fa-heart heart"></i> by
              <a href="https://github.com/cristijora" target="_blank">Cristi Jora & Ovidiu Latcu</a>.
            </div>
          </div>
        </footer>
        <div class="full-page-background" style="background-image: url(static/img/background/baby_bg.png) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Button} from 'element-ui'
  import api from 'src/api'
  export default {
    components: {
      [Button.name]: Button
    },
    data () {
      return {
        addModel: {
          email: '',
          password: ''
        },
        loading: false,
        error: false,
        buttonText: 'Login'
      }
    },
    methods: {
      async login () {
        try {
          var res = await api.authenticate({
            strategy: 'local',
            ...this.addModel
          })
          var user = await api.passport.verifyJWT(res.accessToken);
          this.$store.commit('setUser', user)
          this.loading = true
          this.error = false
          this.$router.push('/parent/children')
        } catch (e) {
          this.buttonText = e.message
          this.error = true
          this.loading = false
          setTimeout(() => {
            this.buttonText = 'Login'
            this.error = false
          }, 1500)
        }
      },
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
  .login-card{
  }
</style>
