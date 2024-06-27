<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}"  @click="toggleMinimize">
    <div class="sc-message--avatar" :class="{ 'minimized': minimized }" :style="{ opacity: minimized ? 1 : 0 }">
      <img src="./assets/boticon.svg" class="sc-message--avatar-img"/>
    </div>
    <div class="sc-header--minimize-button" @click="toggleMinimize">
      <MinimizeIconSvg :minimized="minimized"/>
    </div>
    <div v-if="showCloseButton" class="sc-header--close-button" @click="$emit('close')">
      <CloseIconSvg/>
    </div>
  </div>
</template>

<script setup>
import CloseIconSvg from './assets/x-close.vue'
import MinimizeIconSvg from './assets/minimize.vue'
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
            img: CloseIconSvg,
            name: 'default'
          },
          minimize: {
            img: MinimizeIconSvg,
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
      inUserList: false,
      minimized: false
    }
  },
  computed: {
    ...mapState(['disableUserListToggle', 'titleImageUrl', 'showCloseButton'])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit('userList', this.inUserList)
    },
    toggleMinimize() {
      this.minimized = !this.minimized
      this.$emit('minimize'); 
    }
  }
}
</script>

<style scoped>
.sc-header {
  height: 48px;
  min-height: 48px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0px 10px;  
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  cursor: pointer;
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

.sc-header--close-button, .sc-header--minimize-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%
}

.sc-header--close-button {
  margin-right: 10px;
}

.sc-header--close-button:hover, .sc-header--minimize-button:hover {
  background-color: white;
  transition: background-color 0.3s ease;
}

@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}

.sc-message--avatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: auto;
  background-color: #1677FF;
  margin-left: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.sc-message--avatar.minimized {
  transition: opacity 0.3s ease-in;
}

.sc-message--avatar-img {
  height: 100%;
  width: 100%; 
  object-fit: cover;
  border-radius: 50%; 
}
</style>
