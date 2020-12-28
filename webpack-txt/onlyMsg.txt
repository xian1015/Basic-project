import { Message } from 'element-ui'

const showMessage = Symbol('showMessage')

class OnlyMessage {
  success (option, duration = '1000', single = false) {
    this[showMessage]('success', option, duration, single)
  }

  warning (option, duration = '1000',single = true) {
    this[showMessage]('warning', option, duration, single)
  }

  info (option, duration = '1000',single = false) {
    this[showMessage]('info', option, duration, single)
  }

  error (option, duration = '1000',single = true) {
    this[showMessage]('error', option, duration, single)
  }

  [showMessage] (type, options, duration, single) {
    if (single) {
      let list = document.getElementsByClassName('el-message')
      // let buf = list.slice(0, list.length - 2)
      // console.log(list)
      // console.log(buf)
      if (list.length < 2) {
        Message({
          type: type,
          message: options,
          duration: duration
        })
      } else {
        // Message.destroy()
        // buf.style.display = 'none'
        // Message[type](options)
      }
    } else {
      Message({
        type: type,
        message: options,
        duration: duration
      })
    }
  }
}

export default new OnlyMessage()
