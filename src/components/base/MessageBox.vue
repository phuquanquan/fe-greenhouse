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
                    <div
                      class="mi mi-48"
                      :class="[
                        isWarning
                          ? 'mi-exclamation-warning-48'
                          : 'mi-exclamation-error-48-2',
                      ]"
                    ></div>
                  </div>
                  <div draggable="false" class="message-content">
                    <span id="idMessage" class="message">{{ message }}</span>
                  </div>
                </div>
                <div class="mess-line"></div>
                <div class="mess-footer">
                  <div
                    draggable="false"
                    :class="[isWarning ? 'Right' : 'Center']"
                  >
                    <button
                      @click="btnCloseMsgBoxOnClick"
                      name="button"
                      class="ms-component ms-button ms-button-size-default ms-button-primary ms-button-primary-disabled-false ms-button-radius-false ms-button"
                    >
                      <div
                        class="ms-button-text ms-button--text flex align-center"
                      >
                        Đóng
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
export default {
  data() {
    return {
      // Biến lưu nội dung thông báo
      message: null,
    }
  },
  props: ['msg', 'isWarning'],
  created() {
    this.message = this.msg
  },
  methods: {
    btnCloseMsgBoxOnClick() {
      this.$emit('closeMessageBox', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.con-ms-message-box {
    transition: all .2s;
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
    background: rgba(0, 0, 0, .4);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 10;
    transition: all .25s ease;
    opacity: 1;
}

.drag-it-dude {
    position: absolute;
    z-index: 100;
}

.ms-mesage-box {
    position: relative;
    transition: all .2s;
    z-index: 100;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 10%);
    background: #fff;
    animation: rebound .3s;
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

.mi-exclamation-warning-48 {
  background-position: -592px -456px;
  background-position-x: -592px;
  background-position-y: -456px;
}

.Right {
  float: right;
}
</style>
