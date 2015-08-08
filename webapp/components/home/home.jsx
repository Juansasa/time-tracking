'use strict';

var React = require('react');
var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <h1>This is home</h1>
        <p>This is the splash page</p>
      </div>
    );
  }
});

module.exports = Home;
