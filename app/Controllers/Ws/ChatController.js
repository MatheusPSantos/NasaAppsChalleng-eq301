'use strict'

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request

    console.log('A new subscribe for chat topic: ', socket.topic)
  }

  onMessage(data) {
    try {
      console.log('got message: ', data)
    } catch (error) {
      throw new Error(error)
    }
  }

  onClose() {
    console.log('Closing subscription for chat topic: ', this.socket.topic)
  }
}

module.exports = ChatController
