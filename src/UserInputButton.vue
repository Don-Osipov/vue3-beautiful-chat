<template>
  <button class="sc-user-input--button-icon-wrapper">
    <IconUpload :color="color" class="sc-user-input--button-icon" :icon-name="tooltip">
      <slot />
    </IconUpload>
  </button>
</template>

<script>
import IconUpload from './assets/icon-upload.vue'

export default {
  components: {
    IconUpload
  },
  props: {
    color: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.sc-user-input--button-icon-wrapper {
  background: #D4DCE8;
  border-radius: 3px;
  border: none;
  padding: 0px;
  margin: 0px;
  outline: none;
  cursor: pointer;
}

.sc-user-input--button-icon {

}
</style>
