'use strict';

var React = require('react');

var Avatar = React.createClass({
  render: function() {
    return (
      <a className="logo" href="#/">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/200px-Starbucks_Coffee_Logo.svg.png" alt=""/>
      </a>
    );
  }
});

var NavButton = React.createClass({
  render: function() {
    return (
          <li>
            <i className={this.props.icon}></i>
            <a href={this.props.href}>{this.props.name}</a>
          </li>
      );
  }
});

var Navigation = React.createClass({
  render: function() {
    return (
        <nav className={this.props.right ? "nav nav-right": "nav"}>
          <ul>
            {this.props.controls.map(function(control) {
              return (<NavButton name={control.name} icon={control.icon} href={control.href}/>)
            })}
          </ul>
        </nav>
      )
  }
});

var Navbar = React.createClass({
  getDefaultProps: function() {
    return {
      leftNavigation: [{
          name: 'Calendar',
          icon: 'fa fa-calendar',
          href: '#/calendar'
        },{
          name: 'Collaborators',
          icon: 'fa fa-group',
          href: '#/collaborators'
        }, {
          name: 'Projects',
          icon: 'fa fa-suitcase',
          href: '#/projects'
        }, {
          name: 'Reports',
          icon: 'fa fa-list-alt',
          href: '#/reports'
        }, {
          name: 'Settings',
          icon: 'fa fa-cogs',
          href: '#/settings'
      }],

      rightNavigation: [{
          name: 'Signin',
          href: '#/signin',
          icon: 'fa fa-sign-in'
        }, {
          name: 'Signup',
          href: '#/signup',
          icon: 'fa fa-user'
      }]
    }
  },
  render: function() {
    return (
      <div className="nav-wrapper">
        <Avatar />
        <Navigation controls={this.props.leftNavigation} />
        <Navigation controls={this.props.rightNavigation} right="true"/>
      </div>
    );
  }
});

module.exports = Navbar;