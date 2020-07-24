import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid3 from './PhotoGrid3';

export default class User3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <aside className="side-bar">
                    
                </aside>

                <div>
                    <PhotoGrid3 />
                </div>
            </div>
        )
    }
}
