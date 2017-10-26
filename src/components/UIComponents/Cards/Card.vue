<template>
  <div class="card" :class="{'card-image': type === 'image', 'card-user': type ==='user'}">
    <div :class="{'card-header': type==='', 'image': type!==''}" v-if="$slots.header && type !== 'image'">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <hr>
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props: {
      type: {
        type: String,
        default: '',
        validator: (value) => {
          return ['', 'image', 'user']
            .indexOf(value) !== -1;
        }
      }
    }
  };
</script>
<style>
</style>
