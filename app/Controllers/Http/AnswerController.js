'use strict'
const mongoose = require('mongoose')
const Answer = use('App/Models/Answer')
const User = use('App/Models/User')

class AnswerController {
  async store({ request, response }) {
    try {
      const { answers, username, user_id } = request.body
      const userExists = await User.findOne({ _id: user_id }).where({ username: username }).lean()
      if (!userExists) {
        return response.status(409).json({ error: 'User does not exists.' })
      }
      const answer = await Answer.create({
        _id: mongoose.Types.ObjectId(),
        _p_User_username: username,
        _p_User_id: user_id,
        answers: answers
      })
      return response.status(200).json(answer)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async show({ params, response }) {
    try {
      const answer = await Answer.findOne({ username: params.username }).lean()
      if (!answer) {
        return response.status(400).send({ error: 'No answers allowed for this user.' })
      }
      return response.status(200).json(answer)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async index({ response }) {
    try {
      const answers = await Answer.find({})
      return response.status(200).json(answers)
    } catch (error) {
      throw response.status(400).json({ error: error })
    }
  }

  async delete({ request, response }) {
    try {
      const { user_id } = request.body
      const userExists = await User.findOne({ _id: user_id })

      if (userExists) {
        const answers = await Answer.findOneAndDelete({ _p_User_id: user_id })
        return response.status(200).json(answers)
      } else {
        return response.status(400).send({ error: 'Answers can not deleted. User does not exist.' })
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = AnswerController
