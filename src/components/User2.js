import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid2 from './PhotoGrid2';
import Profile2 from './Profile2';

export default class User2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <aside className="side-bar">
                    <Profile2 />
                </aside>

                <div>
                    <PhotoGrid2 />
                </div>
            </div>
        )
    }
}
