'use strict';

var React = require('react');
var adder = (p, q) => p + q;
var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <h1>'Hallo, 'Allo!</h1>
        <p>You now have</p>
        <ul>
            <li>ReactJS Reflux Boilerplate</li>
            <li>Jest</li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
