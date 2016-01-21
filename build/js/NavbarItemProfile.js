   // Import React and HelloText class
import React from 'react';

// Create class called HelloBox that extends the base React Component class
export default class NavbarItemProfile extends React.Component {
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
        
        return <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" onClick={this.handleClick}>
              <img src={this.props.profile.imageUrl} className="user-image" alt="User Image" />
              <span className="hidden-xs">{this.props.profile.name}</span>
            </a>
            <ul className="dropdown-menu" style={dropdownStyle}>
              
              <li className="user-header">
                <img src={this.props.profile.imageUrl} className="img-circle" alt="User Image" />

                <p>
                  {this.props.profile.name} - {this.props.profile.title}
                  <small>Member since {this.props.profile.joinDate}</small>
                </p>
              </li>
              
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Reviews</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Posts</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Comnments</a>
                  </div>
                </div>
                
              </li>
              
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>;
    }
}
          