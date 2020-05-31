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
}

module.exports = UserController
