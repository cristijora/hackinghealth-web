<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-minimize">
        <button class="btn btn-icon btn-primary" @click="minimizeSidebar">
          <i :class="$sidebar.isMinimized ? 'ti-menu-alt' : 'ti-more-alt'"></i>
        </button>
      </div>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">Meniu</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a>
              <el-badge value="3">
                <button class="btn btn-primary btn-icon">
                  <i class="ti-bell"></i>
                </button>
              </el-badge>

            </a>
          </li>
          <li>
            <a style="cursor: pointer;" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import api from 'src/api'

  export default {
    data() {
      return {
        activeNotifications: false
      }
    },
    methods: {
      async logout() {
        await api.logout()
        this.$router.push('/login')
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown() {
        this.activeNotifications = false
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      minimizeSidebar() {
        this.$sidebar.toggleMinimize()
      }
    },
    mounted() {
      this.minimizeSidebar()
    }
  }

</script>
<style lang="scss">
  .el-badge__content.is-fixed{
    border: 0px;
  }
</style>
