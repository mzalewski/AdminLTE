  // Import React and HelloText class
import React from 'react';

import NavbarDropdown from './NavbarDropdown';
// Create class called HelloBox that extends the base React Component class
export default class NavbarItemTasks extends React.Component {
    constructor() {
        super();
        this.state = { tasks: [
                              {complete:20, text: 'Design some buttons' },
                              {complete:60, text: 'Halo 5 Review' }
                              ] };
    }

    render() {
        
        let tasks = this.state.tasks.slice(0,this.props.maxShown).map(function(task) { 
            return <li>
                    <a href="#">
                      <h3>
                        {task.text}
                        <small className="pull-right">{task.complete}%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-aqua" style={{width: task.complete +'%'}} role="progressbar" aria-valuenow={task.complete} aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">{task.complete}% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>;
         });
         return <NavbarDropdown className="tasks-menu" icon="flag-o" count={this.state.tasks.length} countLabelType="danger">
              <li className="header">You have {this.state.tasks.length} tasks</li>
              <li>
                
                <ul className="menu">
                    {tasks}
                  
                </ul>
              </li>
              <li className="footer">
                <a href="#">View all tasks</a>
              </li>
            </NavbarDropdown>;
}
}