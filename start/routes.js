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

Route.get('/', () => {
	return `
		<!DOCTYPE html>

		<html>
		  <head>
		    <meta charset="utf-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1">

		    <title>Axl Ivan</title>

		    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400">
		    <link rel="stylesheet" type="text/css" href="css/animate.css">
		    <link rel="stylesheet" type="text/css" href="css/style.css">

		    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		    <!-- Leave those next 4 lines if you care about users using IE8 -->
		    <!--[if lt IE 9]>
		      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		    <![endif]-->

		  </head>
		  <body>

		    <div class="container-fluid">

		      <div class="text-center">
		        <img src="img/25552047_136150920504233_8840929622962669965_n_2.jpg" width=200 class="profile-pic">
		        <h1>Axl Ivan</h1>
		        <h3>Software Engineer</h3>
		        <h5></h5>
		      </div>

		      <div class="row row-grey">
		          <div class="col-sm-8 col-sm-offset-2">

		            <div class="row work-item-row">
		              <div class="col-lg-8">
		                <img src="img/print-alive_3.png" class="img-responsive center-block">
		              </div>
		              <div class="col-lg-4">
		                <h2><a href="https://www.miyens.com/services/print-alive/" target="blank">Print Alive</a></h2>
		                <p>An Android application and iOS application use for scanning Print Alive Generated QR codes to reveal contents like video, photo gallery, signup forms, product description, and more.</p>
		                <h4>Technology</h4>
		                <p>Print Alive mobile application is built using React Native, with Koa node as server that runs on Heroku. Integrating with the Google Sheets API for real-time statistics.</p>
		              </div>
		            </div>
		            <div class="row text-center">
		              <div class="col-xs-12">
		                <img src="img/techlogos/reactnative.png" class="techlogo" width="100">
		                <img src="img/techlogos/koa.png" class="techlogo" width="100">
		                <img src="img/techlogos/node.png" class="techlogo" width="100">
		                <img src="img/techlogos/heroku.png" class="techlogo" width="100">
		              </div>
		            </div>
		            <div class="row text-center" style="margin:20px;">
		                <a class="btn btn-launch" href="https://www.miyens.com/services/print-alive/" target="blank">Go to site</a>
		            </div>
		          </div>
		      </div>


		      <div class="row row-white">
		          <div class="col-sm-8 col-sm-offset-2">

		            <div class="row work-item-row">
		              <div class="col-lg-8 col-lg-push-4">
		                <img src="img/track-task.png" class="img-responsive center-block">
		              </div>
		              <div class="col-lg-4 col-lg-pull-8">
		                <h2><a href="https://trackmiyens.com" target="blank">Track | Task</a></h2>
		                <p>A web application for managing tasks. It keep track on your employees tasks and give you real-time updates.</p>
		                <h4>Technology</h4>
		                <p>Track is built on Laravel framework, with Vue as its frontend, and a node SocketIO that acts as a server for pushing real-time data.</p>
		              </div>
		            </div>
		            <div class="row text-center">
		              <div class="col-xs-12">
		                <img src="img/techlogos/laravel.png" class="techlogo" width="100">
		                <img src="img/techlogos/bootstrap-logo.png" class="techlogo" width="100">
		                <img src="img/techlogos/vue.png" class="techlogo" width="100">
		                <img src="img/techlogos/socketio.png" class="techlogo" width="100">
		                <img src="img/techlogos/node.png" class="techlogo" width="100">
		                <img src="img/techlogos/heroku.png" class="techlogo" width="100">
		              </div>
		            </div>
		            <div class="row text-center" style="margin:20px;">
		                <a class="btn btn-launch" href="https://trackmiyens.com" target="blank">Go to site</a>
		            </div>
		          </div>
		      </div>


		      <div class="row row-grey">
		          <div class="col-sm-8 col-sm-offset-2">

		            <div class="row work-item-row">
		              <div class="col-lg-8">
		                <img src="img/school-intel-pro-laptop.png" class="img-responsive center-block">
		              </div>
		              <div class="col-lg-4">
		                <h2><a href="https://appsbuildertech.com/school-intel-pro/" target="blank">School Intel Pro</a></h2>
		                <p>School Intel Pro is a system that will automate various tasks of your school. Make school life easier for both teachers and students as they gain access to their daily tasks, curriculum, colleague communication, and so much more – even from the convenience of their homes and smartphones.</p>
		                <h4>Technology</h4>
		                <p>School Intel Pro is built using Angular, with a PHP backend for handling API requests.</p>
		              </div>
		            </div>
		            <div class="row text-center">
		              <div class="col-xs-12">
		                <img src="img/techlogos/angular.png" class="techlogo" width="100">
		                <img src="img/techlogos/php.png" class="techlogo" width="100">
		              </div>
		            </div>
		            <div class="row text-center" style="margin:20px;">
		                <a class="btn btn-launch" href="https://appsbuildertech.com/school-intel-pro/" target="blank">Go to site</a>
		            </div>
		          </div>
		      </div>


		      <div class="row row-footer text-center">
		        <div class="col">
		          <div style="margin:50px;">
		            <h3 style="margin:50px 0 15px">I'm available for work, get in touch</h3>

		          </div>
		        </div>
		      </div>




		    </div>
		<!--
		    <div class="container-fluid">



		    </div> -->

		<!--    <div class="text-center">
		        <p style="margin-top:20px"">*Also love building other things, like VBA macros, mobile applications, chat bots, and the odd motorbike...</p>
		      </div> -->



		    <!-- Including Bootstrap JS (with its jQuery dependency) so that dynamic components work -->

		    <script src="js/jquery-3.1.0.min.js"></script>
		    <script src="js/bootstrap.min.js"></script>
		    <!-- <script src="js/myScripts.js"></script> -->

		  </body>
		</html>

	`
})
