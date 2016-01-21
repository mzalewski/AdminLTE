// Import React and HelloText class
import React from 'react';
import NavbarItemMessages from './NavbarItemMessages';
import NavbarItemNotifications from './NavbarItemNotifications';
import NavbarItemTasks from './NavbarItemTasks';
import NavbarItemProfile from './NavbarItemProfile';
import NavbarItemSettings from './NavbarItemSettings';

// Create class called HelloBox that extends the base React Component class
export default class Navbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <nav className="navbar navbar-static-top" role="navigation">
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </a>
            <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
         <NavbarItemMessages maxShown="3" />
         <NavbarItemNotifications  maxShown="5"  />
          
          <NavbarItemTasks maxShown="5" />
          
         <NavbarItemProfile profile={{joinDate:"Nov 2013", title: "Master Chief", name: "John", imageUrl:"http://wwr.mobi/core/image.php?userid=728&dateline=1412446339"}} />
         <NavbarItemSettings />
        </ul>
        </div></nav>;
}
}