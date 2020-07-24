import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid3 from './PhotoGrid3';
import Profile3 from './Profile3';

export default class User3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <aside className="side-bar">
                    <Profile3 />
                </aside>

                <div>
                    <PhotoGrid3 />
                </div>
            </div>
        )
    }
}
