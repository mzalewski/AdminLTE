 // Import React and HelloText class
import React from 'react';

// Create class called HelloBox that extends the base React Component class
export default class NavbarDropdown extends React.Component {
    constructor() {
        super();
        
          this.state = { open: false };
        this.handleClick = this.handleClick.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        
    }
    hide() {
        this.setState({ open: false });
        document.removeEventListener("click", this.hide);
    }
    
    show() {
        this.setState({ open: true });
        document.addEventListener("click", this.hide);
    }
    handleClick(event) {
        this.show();
    }
    render() {
        let dropdownStyle = {};
        
        if (this.state.open)
            dropdownStyle.display = "block";
        
     //   var seeAllMessages = this.state.messages.length == 0 ? "" : <li className="footer"><a href="#">See All Messages</a></li>;
        return <li className={this.props.className +  " dropdown"}>
            <a href="#"  onClick={this.handleClick}>
              <i className={"fa fa-" + this.props.icon }></i>
              <span className={"label label-" + this.props.countLabelType}>{this.props.count}</span>
            </a>
            <ul className="dropdown-menu" style={dropdownStyle}>
                {this.props.children}
            </ul>
          </li>;
    }
}