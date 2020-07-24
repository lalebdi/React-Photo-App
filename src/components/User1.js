import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid1 from './PhotoGrid1';

export default class User1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                
                <aside className="side-bar">
                    
                </aside>
                
                <div>
                    <PhotoGrid1 />
                </div>
            </div>
        )
    }
}
