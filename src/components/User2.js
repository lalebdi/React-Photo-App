import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid2 from './PhotoGrid2';
import Profile2 from './Profile2';

export default class User2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <div className="nav-bar-div">
                    <NavBar />
                </div>
                <div className="body-of-user">
                <aside className="side-bar">
                    <Profile2 />
                </aside>

                <div className="user-photo-grid">
                    <PhotoGrid2 />
                </div>
                </div>
            </div>
        )
    }
}
