'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Routes for User
Route.post('/users', 'UserController.store')
Route.get('/users/:id', 'UserController.show')
Route.get('/users', 'UserController.index')

// Routes for Session
Route.post('/sessions', 'SessionController.store')

// Answers routes
Route.get('/answers', 'AnswerController.index')
Route.get('/answers/:username', 'AnswerController.show')
Route.post('/answers', 'AnswerController.store')
Route.delete('/answers', 'AnswerController.delete')
