<template>
  <div class="wrapper">

    <side-bar type="sidebar" title="Hacking Health 2017" :sidebar-links="$sidebar.sidebarLinks">
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MovingArrow from 'src/components/UIComponents/SidebarPlugin/MovingArrow.vue'
  import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue'
  import MobileMenu from 'src/components/UIComponents/SidebarPlugin/MobileMenu.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MovingArrow,
      UserMenu,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
