<template>
  <div class="form-group" :class="{'input-group': hasIconSlot}">
    <slot name="addonLeft"></slot>
    <slot name="label">
      <label v-if="label">
        {{label}}
      </label>
    </slot>
    <input
      :value="value"
      @input="$emit('input',$event.target.value)"
      v-bind="$attrs"
      class="form-control input-group"
      aria-describedby="addon-right addon-left">
    <slot></slot>
    <slot name="addonRight"></slot>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    name: 'fg-input',
    props: {
      label: String,
      value: [String, Number]
    },
    computed: {
      hasIconSlot () {
        const {addonRight, addonLeft} = this.$slots;
        return addonRight !== undefined || addonLeft !== undefined;
      }
    }
  };
</script>
<style>
</style>
