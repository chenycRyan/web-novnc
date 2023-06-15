<template>
  <div ref="canvas" class="page-home">
    <div id="top_bar">
      <div id="status">Loading</div>
      <div id="sendCtrlAltDelButton">Send CtrlAltDel</div>
    </div>
    <div id="screen"></div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb'
import pagesJson from './pages.json'
export default {
  name: 'Novnc',
  data() {
    return {
      rfb: null,
      desktopName: '',
      isFullscreen: false,
    }
  },
  mounted() {
    console.log(pagesJson)
    document.getElementById('sendCtrlAltDelButton').onclick = this.sendCtrlAltDel

    this.connectVnc()
  },

  //销毁 断开连接
  beforeDestroy() {
    this.rfb && this.rfb._disconnect()
  },

  methods: {
    sendCtrlAltDel() {
      this.rfb.sendCtrlAltDel()
      return false
    },

    //连接
    connectVnc() {
      const PASSWORD = '123456' //VNC Server 密码
      const url = 'ws://127.0.0.1:6080'
      this.rfb = new RFB(document.getElementById('screen'), url, {
        // 向vnc 传递的一些参数，比如说虚拟机的开机密码等
        credentials: { password: PASSWORD },
      })
      this.rfb.addEventListener('connect', this.connectedToServer)
      this.rfb.addEventListener('disconnect', this.disconnectedFromServer)
      this.rfb.scaleViewport = false //scaleViewport指示是否应在本地扩展远程会话以使其适合其容器。禁用时，如果远程会话小于其容器，则它将居中，或者根据clipViewport它是否更大来处理。默认情况下禁用。
      this.rfb.resizeSession = false //是一个boolean指示是否每当容器改变尺寸应被发送到调整远程会话的请求。默认情况下禁用
      console.log(this.rfb)
    },

    status(text) {
      document.getElementById('status').textContent = text
    },

    connectedToServer(e) {
      this.status('Connected to ' + this.desktopName)
      console.log('success', e)
    },

    disconnectedFromServer(e) {
      if (e.detail.clean) {
        this.status('Disconnected')

        console.log('clean', e.detail.clean)
        //根据 断开信息的msg.detail.clean 来判断是否可以重新连接
        // this.connectVnc()
      } else {
        this.status('Something went wrong, connection is closed')
        console.log('链接失败,重新链接中-------' + this.wsURL)
        // this.connectVnc()
      }
    },
  },
}
</script>

<style scoped>
.page-home {
  width: 100%;
  height: 800px;
  margin: 0;
  background-color: dimgrey;
  display: flex;
  flex-direction: column;
}
#top_bar {
  background-color: #6e84a3;
  color: white;
  font: bold 12px Helvetica;
  padding: 6px 5px 4px 5px;
  border-bottom: 1px outset;
}
#status {
  text-align: center;
}
#sendCtrlAltDelButton {
  position: fixed;
  top: 0px;
  right: 0px;
  border: 1px outset;
  padding: 5px 5px 4px 5px;
  cursor: pointer;
}

#screen {
  flex: 1; /* fill remaining space */
  overflow: hidden;
}
</style>
