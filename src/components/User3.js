import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid3 from './PhotoGrid3';
import Profile3 from './Profile3';

export default class User3 extends Component {
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
                    <Profile3 />
                </aside>

                <div className="user-photo-grid">
                    <PhotoGrid3 />
                </div>
                </div>
            </div>
        )
    }
}
