<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}">

    <div v-if="showCloseButton" class="sc-header--close-button" @click="$emit('close')">
      <CloseIconSvg/>
    </div>
  </div>
</template>

<script setup>
import CloseIconSvg from './assets/x-close.vue'
</script>

<script>
import {mapState} from './store/'

export default {
  props: {
    icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: CloseIconSvg, // Changed from CloseIcon to CloseIconSvg
            name: 'default'
          }
        }
      }
    },
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inUserList: false
    }
  },
  computed: {
    ...mapState(['disableUserListToggle', 'titleImageUrl', 'showCloseButton'])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit('userList', this.inUserList)
    }
  }
}
</script>

<style scoped>
.sc-header {
  min-height: 45px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.sc-header--img {
  border-radius: 50%;
  align-self: center;
  padding: 10px;
}

.sc-header--title {
  align-self: center;
  padding: 10px;
  flex: 1;
  user-select: none;
  font-size: 20px;
}

.sc-header--title.enabled {
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--title.enabled:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
}


.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}



@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}
</style>
