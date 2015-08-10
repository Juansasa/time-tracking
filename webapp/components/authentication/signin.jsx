'use strict';

var React = require('react');
var Signin = React.createClass({
  render: function() {
    return (
      <div className="signin">
        <form action="submit">
			<input type="text"/>
			<input type="password"/>
			<button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = Signin;
