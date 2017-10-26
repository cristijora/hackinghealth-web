<template>
  <div :class="sidebarClasses" :data-background-color="backgroundColor" :data-active-color="activeColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="logo">
      <a class="simple-text logo-mini" href="https://www.creative-tim.com/product/vue-paper-dashboard-pro">
          <div class="logo-img">
              <img :src="logo" alt="">
          </div>
      </a>

      <a class="simple-text logo-normal" href="https://www.creative-tim.com/vue-paper-dashboard-pro">
          {{ title }}
      </a>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot>

      </slot>
      <ul :class="navClasses" >
        <sidebar-item v-for="(link, index) in sidebarLinks"
                      :key="link.name + index"
                      :link="link"
                      :index="index"
                      :class="{active: isMenuActive(link) || link.active}"
                      @collapse-menu="collapseMenu">

        </sidebar-item>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Paper Dashboard Pro'
      },
      type: {
        type: String,
        default: 'sidebar',
        validator: (value) => {
          let acceptedValues = ['sidebar', 'navbar']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundColor: {
        type: String,
        default: 'black',
        validator: (value) => {
          let acceptedValues = ['white', 'brown', 'black']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      logo: {
        type: String,
        default: 'static/img/vue-logo.png'
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      sidebarClasses () {
        if (this.type === 'sidebar') {
          return 'sidebar'
        } else {
          return 'collapse navbar-collapse off-canvas-sidebar'
        }
      },
      navClasses () {
        if (this.type === 'sidebar') {
          return 'nav'
        } else {
          return 'nav navbar-nav'
        }
      },
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx () {
        return this.linkHeight * this.linkCountFromTop + 5 * this.menuCountFromTop
      }
    },
    data () {
      return {
        linkHeight: 52,
        linkCountFromTop: 0,
        menuCountFromTop: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        currentActiveMenu: {}
      }
    },
    methods: {
      findActiveLink () {
        if (!this.$route) return
        this.linkCountFromTop = 0
        this.menuCountFromTop = 0
        this.sidebarLinks.every((menu) => {
          let hasChildren = menu.children
          let isActive = this.isMenuActive(menu)
          if (!isActive) {
            this.linkCountFromTop = hasChildren ? this.linkCountFromTop + 1 : this.linkCountFromTop
            this.menuCountFromTop = hasChildren ? this.menuCountFromTop + 1 : this.menuCountFromTop
            if (hasChildren && !menu.collapsed) {
              this.linkCountFromTop += menu.children.length
            }
          } else {
            if (hasChildren && !menu.collapsed) {
              this.menuCountFromTop++
              menu.children.every((subMenu) => {
                let isActive = subMenu.path === this.$route.path
                this.linkCountFromTop++
                return !isActive
              })
            }
          }
          return !isActive
        })
      },
      isMenuActive (menu) {
        if (!this.$route) return false
        if (menu.path === this.$route.path) {
          this.currentActiveMenu = menu
          return true
        }
        if (menu.children) {
          let child = menu.children.find(child => child.path === this.$route.path)
          if (child) {
            this.currentActiveMenu = menu
            return true
          }
        }
        return false
      },
      collapseMenu (index) {
        let link = this.sidebarLinks[index]
        link.collapsed = !link.collapsed
        this.findActiveLink()
      },
      async initScrollBarAsync () {
        await import('perfect-scrollbar/dist/css/perfect-scrollbar.css')
        const PerfectScroll = await import('perfect-scrollbar')
        PerfectScroll.initialize(this.$refs.sidebarScrollArea)
      }
    },
    mounted () {
      this.findActiveLink()
      if (this.currentActiveMenu && this.currentActiveMenu.collapsed) {
        this.currentActiveMenu.collapsed = false
      }
      this.initScrollBarAsync()
    },
    beforeDestroy () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false
      }
    },
    watch: {
      $route: function (newRoute, oldRoute) {
        this.findActiveLink()
      }
    }
  }

</script>
<style>
  @media (min-width: 992px) {
    .navbar-search-form-mobile,
    .nav-mobile-menu{
      display: none;
    }
  }
</style>
