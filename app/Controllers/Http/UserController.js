'use strict'
const mongoose = require('mongoose')

const User = use('App/Models/User')

class UserController {
  async show({ params, response }) {
    try {
      return await User.find({ _id: params.id })
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async store({ request, response }) {
    try {
      const { username } = request.body
      return await User.create({
        username: username,
        token_access: null,
        _id: mongoose.Types.ObjectId(),
        img: null
      })
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }
}

module.exports = UserController
