'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Answers
 */
class Answer extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'AnswerHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  static get schemaOptions() {
    return { collection: "_Answer" };
  }
  /**
   * Answer's schema
   */
  static get schema() {
    return {
      _id: String,
      _p_User_username: String,
      _p_User_id: String,
      answers: Object
    }
  }
}

module.exports = Answer.buildModel('Answer')
