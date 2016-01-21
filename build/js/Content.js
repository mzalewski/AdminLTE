// Import React and HelloText class
import React from 'react';
import ListBox from './ListBox';

// Create class called HelloBox that extends the base React Component class
export default class Content extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="content-wrapper" style={{minHeight: 916}}>
    <section className="content">
        <ListBox />
        </section>
    </div>;

    }
}