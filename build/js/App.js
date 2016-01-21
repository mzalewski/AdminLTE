// Import React and HelloText class
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Styles from '../less/AdminLTE.less';

import Skins from '../less/skins/_all-skins.less';
// Create class called HelloBox that extends the base React Component class
export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <Header />
            <Sidebar />
            <Content />
            
            </div>

    }
}