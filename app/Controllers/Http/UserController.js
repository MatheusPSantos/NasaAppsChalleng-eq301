'use strict'
const mongoose = require('mongoose')

const User = use('App/Models/User')

class UserController {
  async show({ params, response }) {
    try {
      const user = await User.find({ _id: params.id }).lean()
      return response.status(200).json(user)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async store({ request, response }) {
    try {
      const { username } = request.body

      const userExists = await User.findOne({ username: username }).lean()

      if (userExists) {
        return response.status(409).json({ error: 'This username already exists.' })
      }

      const user = await User.create({
        username: username,
        token_access: null,
        _id: mongoose.Types.ObjectId(),
        img: null
      })
      return response.status(200).send(user)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async index({ response }) {
    try {
      const users = await User.find({}).lean()
      return response.status(200).json(users)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async delete({ request, response }) {
    try {
      const { user_id, username } = request.body
      const user = await User.findOne({ _id: user_id }).where({ username: username })
      if (user) {
        const removed = await User.findOneAndDelete({ _id: user_id })
        return response.status(200).json(removed)
      } else {
        return response.status(400).json({ error: 'User can not be removed or does not exists.' })
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = UserController
