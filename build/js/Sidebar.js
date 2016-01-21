// Import React and HelloText class
import React from 'react';

// Create class called HelloBox that extends the base React Component class
export default class Sidebar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <aside className="main-sidebar">
    <section className="sidebar" style={{height: 'auto'}}>
      
      
      
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      
      
      <ul className="sidebar-menu">
        <li className="active">
          <a href="#">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="label label-primary pull-right">4</span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
            <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul>
        </li>
        <li>
          <a href="pages/widgets.html">
            <i className="fa fa-th"></i> <span>Widgets</span>
            <small className="label pull-right bg-green">new</small>
          </a>
        </li>
        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
    
  </aside>;

    }
}