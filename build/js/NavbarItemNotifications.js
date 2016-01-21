  // Import React and HelloText class
import React from 'react';

import NavbarDropdown from './NavbarDropdown';
// Create class called HelloBox that extends the base React Component class
export default class NavbarItemNotifications extends React.Component {
    constructor() {
        super();
        this.state= {  notifications: [ { icon:'users', text: 'This is a notification' }] };
    }

    render() {
        
        let notifications = this.state.notifications.slice(0,this.props.maxShown).map(function (notification) { return <li>
                    <a href="#">
                      <i className={"fa fa-" + notification.icon + " text-aqua"}></i> {notification.text}
                    </a>
                  </li>;
        });
        return <NavbarDropdown className="notifications-menu" icon="bell-o" count={this.state.notifications.length} countLabelType="warning">
              <li className="header">You have {this.state.notifications.length} notifications</li>
              <li>
                
                <ul className="menu">
                    {notifications}
                </ul>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </NavbarDropdown>;
    }
}