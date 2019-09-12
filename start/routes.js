'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Request = use('request')

Route.get('/resume', ({ response }) => {
	const url = 'https://raw.githubusercontent.com/axlivan/RESUME/8ad6356b4f5efe6afff22e99ab8cf069d07dc5c4/RESUME.pdf'
	response.implicitEnd = false
	Request
		.get(url)
		.pipe(response.response)
})
