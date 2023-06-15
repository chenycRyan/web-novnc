/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable no-useless-escape */
import ViewUI from 'view-design'
export default {
  // 深度拷贝
  deepCopy: function(obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  // Loading状态开始
  spinShow: function() {
    ViewUI.Spin.show({
      render: h => {
        return h('div', [
          h('Icon', {
            class: 'demo-spin-icon-load',
            props: {
              type: 'ios-loading',
              size: 18
            }
          }),
          h('div', 'Loading')
        ])
      }
    })
  },
  // Loading状态结束
  spinHide: function() {
    ViewUI.Spin.hide()
  },
  // 获取当前日期字符串
  getNowTimeString(date) {
    // let date = new Date();
    const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
    const nowData = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return (
      date.getFullYear().toString() +
      month.toString() +
      nowData.toString() +
      hours.toString() +
      minutes.toString() +
      seconds.toString()
    )
  },
  // 含样式导出Excel
  Download(filename) {
    var oHtml = document.getElementsByClassName('tableA')[0].outerHTML
    console.log(document.getElementsByClassName('tableA'))

    var excelHtml = `<html>  <head>  <meta charset='utf-8' /> <style>
              .tableA { border-collapse: collapse; color: black;}
              .tableA .title th {   font-weight: bold; font-style:italic;font-family:Verdana; text-align: center;padding: 5px; height: 50px; width: 100%;font-size: 20pt;}
              .tableA tr th { border:1px solid #e8eaec; height: 40px;   width:auto;  background-color:#A7C942; }
              .tableA tr td { padding: 0 40px;  border:1px solid #e8eaec; height: 40px;  width:auto;  text-align: center; }
              .textpadder{mso-number-format:'\@'}
              </style> </head>  <body> ${oHtml}</body> </html>`
    // var debug = { hello: "world" };
    console.log(excelHtml)
    // 在导出的表格中显示为文本格式
    //  mso-number-format:'\@'
    // var blob = new Blob([JSON.stringify(debug, null, 2)], {
    //   type: "application/json"
    // });
    var excelBlob = new Blob([excelHtml], { type: 'application/vnd.ms-excel' })
    // 创建一个a标签
    // 兼容 IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(excelBlob, filename)
    } else {
      var oA = document.createElement('a')
      // 利用URL.createObjectURL()方法为a元素生成blob URL
      oA.href = URL.createObjectURL(excelBlob)
      // 给文件命名
      oA.download = filename
      // 模拟点击
      oA.click()
    }
  },
  // 保留当前窗口，另打开地址栏新窗口
  openWindow: function(url, type, name) {
    if (type === 1) {
      return window.open(
        url,
        '',
        'location=yes,menubar=yes,titlebar=yes,scrollbars=yes,toolbar=yes,resizable=yes,left=' +
          (window.screen.width - 1024) / 2 +
          ',top=' +
          (window.screen.height - 768) / 2 +
          ',height=' +
          (768 - 30) +
          ',width=1150'
      )
    }
    // location=no,
    var OPENWINDOW_NO_MENU =
      'location=no,menubar=no,titlebar=no,scrollbars=yes,toolbar=no,resizable=yes,left=' +
      (window.screen.width - 1024) / 2 +
      ',top=' +
      (window.screen.height - 768) / 2 +
      ',height=' +
      (768 - 30) +
      ',width=1150'
    var OPENWINDOW_NO_MENU_800 =
      'location=no,menubar=no,titlebar=no,scrollbars=yes,toolbar=no,resizable=yes,left=0,top=0,height=' +
      (window.screen.availHeight - 30) +
      ',width=' +
      window.screen.availWidth
    try {
      if (window.screen.width >= 1024) {
        window.open(url, '', OPENWINDOW_NO_MENU).focus()
      } else {
        window.open(url, '', OPENWINDOW_NO_MENU_800).focus()
      }
    } catch (ex) {}
  },
  // 获取当前浏览器
  getBrowserVersion: function() {
    var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1
    var isIE =
      userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
    var isIE11 =
      userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if (isOpera) {
      return 'Opera'
    } // 判断是否Opera浏览器
    if (userAgent.indexOf('Firefox') > -1) {
      return 'FF'
    } // 判断是否Firefox浏览器
    if (userAgent.indexOf('Chrome') > -1) {
      return 'Chrome'
    }
    if (userAgent.indexOf('Safari') > -1) {
      return 'Safari'
    } // 判断是否Safari浏览器
    if (isIE || isEdge || isIE11) {
      return 'IE'
    } // 判断是否IE浏览器
  },
  // 正则取URL上的键值对
  getQueryString: function(href, value) {
    const reg = new RegExp('(^|&)' + value + '=([^&]*)(&|$)')
    const r =
    href.search.substr(1).match(reg) ||
    href.hash.substring(href.hash.search(/\?/) + 1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
  },
  // 获取IE详细版本号
  getIEVersion: function() {
    // 在IE直接转旧版，取注册表里IE详细版本，并存取log
    const regeditStr =
      'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Internet Explorer\\svcVersion'
    try {
      // 读取注册表的IE详细版本
      // eslint-disable-next-line
        return new ActiveXObject('WScript.Shell').regRead(regeditStr)
    } catch (e) {
      return 'get' + this.getBrowserVersion() + 'VersionException'
    }
  },
  // 解析Excel 重写readAsBinaryString方法 兼容IE
  // analysisExcel(file) {
  //   return new Promise(function(resolve, reject) {
  //     const reader = new FileReader()
  //     FileReader.prototype.readAsBinaryString = function(file) {
  //       let binary = '' // 读取完成的数据
  //       const XLSX = require('xlsx') // 此处引入，用于解析excel
  //       const reader = new FileReader()
  //       reader.readAsArrayBuffer(file)
  //       reader.onload = () => {
  //         const bytes = new Uint8Array(reader.result)
  //         bytes.forEach(item => {
  //           binary += String.fromCharCode(item)
  //         })
  //         const wb = XLSX.read(binary, {
  //           type: 'binary'
  //         })
  //         const outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  //         resolve(outdata)
  //         reject('error')
  //       }
  //     }
  //     reader.readAsBinaryString(file)
  //   })
  // },
  // 文件转Base64字符串
  fileToBase64Str(file) {
    return new Promise(resolve => {
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result.split(';base64,')[1])
      }
    })
  },
  // base64转文件下载
  base64ToFile(fileByte, fileName) {
    // 下载文件
    var bstr = atob(fileByte)
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const blob = new Blob([u8arr], { type: '' })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName)
    } else {
      const downloadElement = document.createElement('a')
      const href = window.URL.createObjectURL(blob)
      downloadElement.href = href
      downloadElement.download = fileName
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)
      window.URL.revokeObjectURL(href)
    }
  }
}
