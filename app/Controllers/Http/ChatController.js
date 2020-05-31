'use strict'

const Room = use('App/Models/Room')
const mongoose = require('mongoose')

const { broadcast } = require('../../Services/ConnectionService')

class ChatController {
  async create({ request, response }) {
    try {
      const id = mongoose.Types.ObjectId()
      const { users } = request.body
      if (users === undefined || users.length === 0 || users === null) {
        return response.status(400).send({ error: 'Not present users ids' })
      }
      const newRoom = await Room.create({ _id: id, users: users, messages: [] })
      return response.status(200).json(newRoom)
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete({ request, response }) {
    try {
      const { roomId } = request.body
      const room = Room.findOne({ _id: roomId }).lean()
      if (room) {
        const deleted = await Room.findOneAndDelete({ _id: roomId })
        return response.status(200).json(deleted)
      }

      return response.status(400).json({ error: 'Room chat does not exists.' })
    } catch (error) {
      throw new Error(error)
    }
  }

  async show({ params, response }) {
    try {
      const chat = await Room.findOne({ _id: params.id })
      if (chat) {
        return response.status(200).json(chat)
      }
      return response.status(400).json({ error: 'Chat does not exist for this ID.' })
    } catch (error) {
      throw new Error(error)
    }
  }

  async createMessage({ params, request, response }) {
    const chat = await Room.findOne({ _id: params.id }).lean()
    if (!chat) {
      return response.status(400).json({ error: 'chat room does not exist. ' })
    }
    const { user_id, message } = request.body
    chat.messages.push({
      message: message,
      _created_at: new Date(),
      user: user_id
    })

    const updated = await Room.findOneAndUpdate({ _id: chat._id }, chat)

    broadcast(chat._id, 'chat:newMessage', message)
    return response.status(200).json(message)
  }
}

module.exports = ChatController
