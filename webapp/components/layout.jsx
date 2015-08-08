'use strict';

var React = require('react');
var Router = require('react-router');
var Navbar = require('../shared/navigation/navbar.jsx');
var RouteHandler = Router.RouteHandler;
var Layout = React.createClass({

  render: function() {
    return (
      <div className="App">
      	<Navbar />
      	<RouteHandler />
      </div>
    );
  }
});

module.exports = Layout;