<template>
  <div class="sc-user-input-wrap"  :style="{backgroundColor: colors.messageList.bg}">
    <div
      v-if="file"
      class="file-container"
      :style="{
        backgroundColor: colors.userInput.text,
        color: colors.userInput.bg
      }"
    >
      <span class="icon-file-message"
        ><img :src="icons.file.img" :alt="icons.file.name" height="15"
      /></span>
      {{ file.name }}
      <span class="delete-file-message" @click="cancelFile()"
        ><img
          :src="icons.closeSvg.img"
          :alt="icons.closeSvg.name"
          height="10"
          title="Remove the file"
      /></span>
    </div>
    <form
      class="sc-user-input"
      :class="{active: inputActive}"
      :style="{background: colors.userInput.bg}"
    >
      <div
        ref="userInput"
        role="button"
        tabIndex="0"
        contentEditable="true"
        placeholder="Type"
        class="sc-user-input--text"
        :style="{color: colors.userInput.text}"
        @focus="setInputActive(true)"
        @blur="setInputActive(false)"
        @keydown="handleKey"
        @input="handleInput"
        @focusUserInput="focusUserInput()"
      ></div>
      <div class="sc-user-input--buttons">
        
        <div v-if="isEditing" class="sc-user-input--button">
          <UserInputButton
            :color="colors.userInput.text"
            tooltip="cancel"
            @click.native.prevent="_editFinish"
          >
            <IconCross />
          </UserInputButton>
        </div>
        <div class="sc-user-input--button">
          <UserInputButton
            v-if="isEditing"
            :color="colors.userInput.text"
            tooltip="Edit"
            @click.native.prevent="_editText"
          >
            <IconOk />
          </UserInputButton>
          <UserInputButton
            v-else
            :color="colors.userInput.text"
            tooltip="Send"
            @click.native.prevent="_submitText"
          >
            <IconSend />
          </UserInputButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import EmojiIcon from './icons/EmojiIcon.vue'
import FileIcons from './icons/FileIcons.vue'
import UserInputButton from './UserInputButton.vue'
import Suggestions from './Suggestions.vue'
import FileIcon from './assets/file.svg'
import CloseIconSvg from './assets/x-close.vue'
import store from './store/'
import IconCross from './components/icons/IconCross.vue'
import IconOk from './components/icons/IconOk.vue'
import IconSend from './components/icons/IconSend.vue'

export default {
  components: {
    EmojiIcon,
    FileIcons,
    UserInputButton,
    Suggestions,
    IconCross,
    IconOk,
    IconSend
  },
  props: {
    icons: {
      type: Object,
      default: function () {
        return {
          file: {
            img: FileIcon,
            name: 'default'
          },
          closeSvg: {
            img: CloseIconSvg,
            name: 'default'
          }
        }
      }
    },
    showEmoji: {
      type: Boolean,
      default: () => false
    },
    showEmojiInText: {
      type: Boolean,
      default: () => false
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => false
    },
    onSubmit: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Write something...'
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      file: null,
      inputActive: false,
      prevSelectionRange: null
    }
  },
  computed: {
    editMessageId() {
      return this.isEditing && store.state.editMessage.id
    },
    isEditing() {
      return store.state.editMessage && store.state.editMessage.id
    }
  },
  watch: {
    editMessageId(m) {
      if (store.state.editMessage != null && store.state.editMessage != undefined) {
        this.$refs.userInput.focus()
        this.$refs.userInput.textContent = store.state.editMessage.data.text
      } else {
        this.$refs.userInput.textContent = ''
      }
    }
  },
  mounted() {
    this.$event.$on('focusUserInput', () => {
      if (this.$refs.userInput) {
        this.focusUserInput()
      }
    })

    document.addEventListener('selectionchange', () => {
      const selection = document.getSelection()
      if (
        !selection ||
        !selection.anchorNode ||
        (selection.anchorNode != this.$refs.userInput &&
          selection.anchorNode.parentNode != this.$refs.userInput)
      ) {
        return
      }
      if (selection.rangeCount) {
        this.prevSelectionRange = selection.getRangeAt(0).cloneRange()
      } else {
        this.prevSelectionRange = null
      }
    })
  },
  methods: {
    cancelFile() {
      this.file = null
    },
    setInputActive(onoff) {
      this.inputActive = onoff
    },
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        if (!this.isEditing) {
          this._submitText(event)
        } else {
          this._editText(event)
        }
        this._editFinish()
        event.preventDefault()
      } else if (event.keyCode === 27) {
        this._editFinish()
        event.preventDefault()
      }
    },
    handleInput(event) {
      this.$emit('onType', event.target.textContent)
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus()
      })
    },
    _submitSuggestion(suggestion) {
      this.onSubmit({author: 'me', type: 'text', data: {text: suggestion}})
    },
    _checkSubmitSuccess(success) {
      if (Promise !== undefined) {
        Promise.resolve(success).then(
          function (wasSuccessful) {
            if (wasSuccessful === undefined || wasSuccessful) {
              this.file = null
              this.$refs.userInput.innerHTML = ''
            }
          }.bind(this)
        )
      } else {
        this.file = null
        this.$refs.userInput.innerHTML = ''
      }
    },
    _submitText(event) {
      const text = this.$refs.userInput.textContent
      const file = this.file
      if (file) {
        this._submitTextWhenFile(event, text, file)
      } else {
        if (text && text.length > 0) {
          this._checkSubmitSuccess(
            this.onSubmit({
              author: 'me',
              type: 'text',
              data: {text}
            })
          )
          this.$refs.userInput.textContent = ''; // Clear the text input field
        }
      }
    },
    _submitTextWhenFile(event, text, file) {
      if (text && text.length > 0) {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: 'me',
            type: 'file',
            data: {text, file}
          })
        )
      } else {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: 'me',
            type: 'file',
            data: {file}
          })
        )
      }
    },
    _editText(event) {
      const text = this.$refs.userInput.textContent
      if (text && text.length) {
        this.$emit('edit', {
          author: 'me',
          type: 'text',
          id: store.state.editMessage.id,
          data: {text}
        })
        this._editFinish()
      }
    },
    _handleEmojiPicked(emoji) {
      if (this.showEmojiInText) {
        this._addToTextEmoji(emoji)
      } else {
        this._submitEmoji(emoji)
      }
    },
    _submitEmoji(emoji) {
      this._checkSubmitSuccess(
        this.onSubmit({
          author: 'me',
          type: 'emoji',
          data: {emoji}
        })
      )
    },
    _addToTextEmoji(emoji) {
      let range = this.prevSelectionRange
      if (!range) {
        if (!this.$refs.userInput.firstChild) {
          this.$refs.userInput.append(document.createTextNode(''))
        }

        range = document.createRange()
        range.setStart(this.$refs.userInput.firstChild, this.$refs.userInput.textContent.length)
        range.collapse(true)
      }
      let selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)

      let textNode = document.createTextNode(emoji)
      range.deleteContents()
      range.insertNode(textNode)
      range.collapse(false)
      this.$refs.userInput.focus()
    },
    _handleFileSubmit(file) {
      this.file = file
    },
    _editFinish() {
      store.setState('editMessage', null)
    }
  }
}
</script>

<style>
.sc-user-input-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: -4px;
}


.sc-user-input {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  border-radius: 8px; /* 16px */
  border: 1px solid #d1d5db; /* Tailwind's gray-300 */
  background-color: #ffffff;
  cursor: text !important;
  margin-bottom: 1.5rem; 
  margin-top: .8rem; 
  box-sizing: border-box;
}

.sc-user-input:focus-within {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Tailwind's primary-blue-50a */
  border: 1px solid #d1d5db; /* Maintain the border */
  outline: none; /* Remove the outline */
}
.sc-user-input--text {
  flex: 1;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  border-radius: 1rem 0 0 1rem; /* 16px */
  outline: none;
  box-sizing: border-box;
  cursor: text;
}

.focus-within\\:ring-2:focus-within {
  box-shadow: 0 0 0 2px rgba(22, 119, 255, .5);
}

.focus-within\\:outline-none:focus-within {
  outline: none;
}


.sc-user-input--buttons {
  width: 30px;
  height: 30px;
  margin: 6px 12px 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sc-user-input--button {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.sc-user-input--button-icon-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


}

.sc-user-input--button-icon {
  height: 28px;
  width: 28px;

}

/* .sc-user-input.active {
  box-shadow: none;
  background-color: white;
  box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
} */
/* 
.sc-user-input--button label {
  position: relative;
  height: 24px;
  padding-left: 3px;
  cursor: pointer;
}

.sc-user-input--button label:hover path {
  fill: rgba(86, 88, 103, 1);
}

.sc-user-input--button input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
} */

.file-container {
  background-color: #f4f7f9;
  border-top-left-radius: 10px;
  padding: 16px;
  color: #565867;
}

.delete-file-message {
  font-style: normal;
  float: right;
  cursor: pointer;
  color: #c8cad0;
}

.delete-file-message:hover {
  color: #5d5e6d;
}

.icon-file-message {
  margin-right: 5px;
}
</style>
