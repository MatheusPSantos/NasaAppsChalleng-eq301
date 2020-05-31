'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Room
 */
class Room extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'RoomHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Room's schema
   *
   */

  static get schemaOptions() {
    return { collection: "_Room" };
  }

  static get primaryKey() {
    return "_id";
  }

  static get schema() {
    return {
      _id: String,
      users: Array,
      messages: Array
    }
  }
}

module.exports = Room.buildModel('Room')
