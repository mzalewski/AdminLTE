     // Import React and HelloText class
import React from 'react';

// Create class called HelloBox that extends the base React Component class
export default class NavbarItemSettings extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
    }
}