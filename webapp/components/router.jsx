'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./layout');
var Home = require('./home/home');
var Calendar = require('./calendar/calendar');
var Collaborators = require('./collaborators/collaborators');
var Projects = require('./projects/projects');
var Reports = require('./reports/reports');
var Settings = require('./settings/settings');


var routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
		<Route name="/calendar" handler={Calendar}/>
		<Route name="/collaborators" handler={Collaborators}/>
		<Route name="/projects" handler={Projects}/>
		<Route name="/reports" handler={Reports}/>
		<Route name="/settings" handler={Settings}/>
	</Route>
);

exports.start = function() {
  
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}