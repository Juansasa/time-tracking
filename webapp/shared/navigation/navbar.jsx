'use strict';

var React = require('react');

var Logo = React.createClass({
  render: function() {
    return (
      <a href="#" className="brand-logo">Logo</a>
    );
  }
});

var NavButton = React.createClass({
  render: function() {
    return (
          <li><a href={this.props.href}><i className="material-icons left">{this.props.icon}</i>{this.props.name}</a></li>
      );
  }
});

var Navigation = React.createClass({
  render: function() {
    return (
          <ul className={this.props.right ? "right hide-on-med-and-down" : "left hide-on-med-and-down"}>
            {this.props.controls.map(function(control) {
              return (<NavButton name={control.name} icon={control.icon} href={control.href}/>)
            })}
          </ul>
      );
  }
});

var SideNavigation = React.createClass({
  render: function() {
    return (
          <ul className="side-nav" id="mobile">
            {this.props.controls.map(function(control) {
              return (<NavButton name={control.name} icon={control.icon} href={control.href}/>)
            })}
          </ul>
      );
  }
});

var Navbar = React.createClass({
  getDefaultProps: function() {
    return {
      leftNavigation: [{
          name: 'Calendar',
          icon: 'view_column',
          href: '#/calendar'
        },{
          name: 'Collaborators',
          icon: 'group',
          href: '#/collaborators'
        }, {
          name: 'Projects',
          icon: 'work',
          href: '#/projects'
        }, {
          name: 'Reports',
          icon: 'insert_chart',
          href: '#/reports'
        }, {
          name: 'Settings',
          icon: 'settings',
          href: '#/settings'
        }],

      rightNavigation: [{
          name: 'Signin',
          href: '#/signin',
          icon: 'account_circle'
        }, {
          name: 'Signup',
          href: '#/signup',
          icon: 'check'
      }]
    }
  },
  componentDidMount: function() {
      $(".button-collapse").sideNav();
  },
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper teal darken-2">
          <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <Logo />
          <Navigation controls={this.props.leftNavigation} />
          <Navigation controls={this.props.rightNavigation} right="true"/>
          <SideNavigation controls={this.props.leftNavigation.concat(this.props.rightNavigation)} />
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;