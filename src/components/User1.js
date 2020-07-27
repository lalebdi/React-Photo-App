import React, { Component } from 'react';
import NavBar from './NavBar';
import PhotoGrid1 from './PhotoGrid1';
import Profile1 from './Profile1';

export default class User1 extends Component {
    constructor(prop){
        super(props)
        this.state={
            
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
                    <Profile1 />
                </aside>
                
                <div className="user-photo-grid">
                    <PhotoGrid1 />
                </div>
                </div>
            </div>
        )
    }
}
