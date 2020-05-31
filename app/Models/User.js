'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }

  static get schemaOptions() {
    return { collection: "_User" };
  }
  /**
   * User's schema
   */
  static get schema() {
    return {
      _id: String,
      username: String,
      token_access: String,
      img: String
    }
  }
}

module.exports = User.buildModel('User')
