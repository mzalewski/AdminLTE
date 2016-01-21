 // Import React and HelloText class
import React from 'react';

import NavbarDropdown from './NavbarDropdown';

// Create class called HelloBox that extends the base React Component class
export default class NavbarItemMessages extends React.Component {
    constructor() {
        super();
        
          this.state = { messages: [
              {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' },
                                                 {from:"Support Team",text:"Hello, how are you?", image_url: "", time:'5 mins ago' }
                                                ] };

        
    }
    render() {
        
        let messages = this.state.messages.slice(0,this.props.maxShown).map(function (message) {
				return (
					<li>
                    <a href="#">
                      <div className="pull-left">
                        <img src={message.imageUrl} className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                            {message.from}
                        <small><i className="fa fa-clock-o"></i> {message.time}</small>
                      </h4>
                      <p>{message.text}</p>
                    </a>
                  </li>
				);
			}, this);

        var seeAllMessages = this.state.messages.length == 0 ? "" : <li className="footer"><a href="#">See All Messages</a></li>;
        return <NavbarDropdown className="messages-menu" icon="envelope-o" count={this.state.messages.length} countLabelType="success">
              <li className="header">You have {this.state.messages.length} message{this.state.messages.length != 1 ? "s" : ""}</li>
              <li>
                <ul className="menu">
                    {messages}
                </ul>
              </li>
                
                {seeAllMessages}
            </NavbarDropdown>;
    }
}