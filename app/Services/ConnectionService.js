'use strict'

const Ws = use('Ws')

module.exports = {
  broadcast: (id, type, data) => {
    const channel = Ws.getChannel('chat:*')
    if (!channel) return

    const topic = channel.topic(`chat:${id}`)
    if (!topic) {
      console.log('Has no topic')
      return
    }

    // emit, broadcast, broadcasToAll
    topic.broadcastToAll(`message`, {
      type,
      data
    })
  }
}
