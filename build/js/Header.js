// Import React and HelloText class
import React from 'react';
import Navbar from './Navbar';

// Create class called HelloBox that extends the base React Component class
export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <header className="main-header">
    <a href="../../index2.html" className="logo">
      <span className="logo-mini"><b>A</b>LT1</span>
      <span className="logo-lg"><b>Admin</b>LTE1</span>
    </a>
  

      <Navbar />
 
  </header>

    }
}