<template>
  <div id="message-box">
    <div class="con-ms-message-box">
      <div class="message-center" shortkey="Close">
        <div class="ms-message-bg"></div>
        <div class="drag-it-dude">
          <div class="ms-mesage-box">
            <div class="ms-message-box--header"></div>
            <div style="width: 444px; min-width: 444px">
              <div class="ms-message-box--content">
                <div class="content">
                  <div class="icon-message">
                    <div class="mi mi-48 mi-exclamation-warning-48"></div>
                  </div>
                  <div draggable="false" class="message-content">
                    <span id="idMessage" class="message">{{ message }}</span>
                  </div>
                </div>
                <div class="mess-line"></div>
                <div class="mess-footer">
                  <div draggable="false" class="RightSecond">
                    <button
                      @click="btnHandleSubmit"
                      name="button"
                      class="ms-component ms-button ms-button-size-default ms-button-primary ms-button-primary-disabled-false ms-button-radius-false ms-button"
                    >
                      <!---->
                      <div
                        class="ms-button-text ms-button--text flex align-center"
                      >
                        Có
                      </div>
                    </button>
                  </div>
                  <div draggable="false" class="Left">
                    <button
                      @click="btnCloseCfDialogOnClick"
                      name="button"
                      class="ms-component ms-button ms-button-size-default ms-button-secondary ms-button-secondary-disabled-false ms-button-radius-false ms-button"
                    >
                      <!---->
                      <div
                        class="ms-button-text ms-button--text flex align-center"
                      >
                        Không
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  props: ['message'],
  created() {},
  methods: {
    /**
     * Đóng confirm dialog
     */
    btnCloseCfDialogOnClick() {
      this.$emit('closeCfDialog', false)
    },
    /**
     * Hàm thực hiện khi ấn submit
     * Author: Trần Phú Quân (25/6/2022)
     */
    btnHandleSubmit() {
      this.$emit('handleSubmit')
      this.$emit('closeCfDialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.con-ms-message-box {
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20000;
  opacity: 1;
}

.message-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.ms-message-bg {
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 10;
  transition: all 0.25s ease;
  opacity: 1;
}

.drag-it-dude {
  position: absolute;
  z-index: 100;
}

.ms-mesage-box {
  position: relative;
  transition: all 0.2s;
  z-index: 100;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 10%);
  background: #fff;
  animation: rebound 0.3s;
  border-radius: 3px;
}

.ms-mesage-box .ms-message-box--header {
  position: absolute;
  height: 32px;
  left: 0;
}

.ms-message-box--content {
  padding: 32px;
}

.content {
  display: flex;
  align-items: flex-start;
}

.mess-line {
  height: 1px;
  background: #b8bcc3;
  margin-bottom: 20px;
}

.mess-footer {
  position: relative;
  height: 36px;
}

.Center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.mi-exclamation-error-48-2 {
  background-position: -24px -954px;
}

.mi-48 {
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
}

.message-content {
  overflow: auto;
  max-height: 400px;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-top: 12px;
}

.message {
  display: block;
}

@keyframes rebound {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.RightSecond {
  float: right;
  padding-left: 8px;
}

.mi-exclamation-warning-48 {
  background-position: -592px -456px;
  background-position-x: -592px;
  background-position-y: -456px;
}

.Left {
  float: left;
}
</style>
