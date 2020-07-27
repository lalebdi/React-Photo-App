import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import item2 from '../assets/images/QuagmireProfilePic.png'

export default class Profile2 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <br/>
                    <ListGroupItem color="success"> <img src={item2} alt =" profile pic" className="profile-pic" /> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="info"> <strong> Quagmire </strong> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="warning"> <strong> 6 Posts </strong> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="danger"> <strong> Bookmarked : </strong> </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
