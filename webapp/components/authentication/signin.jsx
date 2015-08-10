'use strict';

var React = require('react');
var Signin = React.createClass({
  render: function() {
    return (
      <div className="signin z-depth-1">
        <form>
    			<div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" required/>
            <label for="icon_prefix">Username</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock_outline</i>
            <input id="icon_prefix" type="password" className="validate" required/>
            <label for="icon_prefix">Password</label>
          </div>

          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          </button>
        </form>
      </div>
    );
  }
});

module.exports = Signin;
