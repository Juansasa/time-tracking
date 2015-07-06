var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./home/layout');
var Home = require('./home/home');

var routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
	</Route>
);

exports.start = function() {
  
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}