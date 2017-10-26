<template>
  <li>
    <a v-if="link.children" data-toggle="collapse" href="javascript:void(0)"
       @click="collapseMenu(index)">
      <i :class="link.icon"></i>
      <p>{{link.name}}
        <b class="caret"></b>
      </p>
    </a>

    <div v-if="link.children"
         aria-expanded="true">
      <el-collapse-transition>
        <ul class="nav" v-show="!link.collapsed">
          <template v-for="(subLink, subLinkIndex) in link.children">
            <sidebar-item v-if="subLink.children && subLink.children.length > 0"
                          :link="subLink"
                          :index="index"
                          :class="{active: subLink.active}"
                          @collapse-menu="collapseSubMenu(subLink)">
            </sidebar-item>
            <component v-else
              :is="elementType(subLink)"
              :key="subLink.path"
              :to="subLink.path" tag="li"
              :class="{active: subLink.active}"
              :ref="subLink.name">
              <a :href="elementType(subLink) === 'li' ? subLink.path : '#'" :target="subLink.target">
                <span class="sidebar-mini">{{linkAbbreviation(subLink.name)}}</span>
                <span class="sidebar-normal">{{subLink.name}}</span>
              </a>
            </component>

          </template>

        </ul>
      </el-collapse-transition>
    </div>


    <component v-else
               :to="link.path"
               :is="elementType(link, false)"
               :class="{active: link.active}"
               :target="link.target"
               :href="link.path">
      <i :class="link.icon"></i>
      <p>{{link.name}}</p>
    </component>

  </li>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    props: {
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
            path: '',
            children: []
          }
        }
      },
      index: Number
    },
    methods: {
      elementType (link, isParent = true) {
        if (link.isRoute === false) {
          return isParent ? 'li' : 'a'
        } else {
          return 'router-link'
        }
      },
      linkAbbreviation (name) {
        const matches = name.match(/\b(\w)/g)
        return matches.join('')
      },
      collapseMenu (index) {
        this.$emit('collapse-menu', index)
      },
      collapseSubMenu (link) {
        link.collapsed = !link.collapsed
      }
    }
  }
</script>
<style>
</style>
