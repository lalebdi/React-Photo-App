import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Item3 from "../assets/images/BrianProfilePic.jpg"

export default class Profile3 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <br/>
                    <ListGroupItem color="success"> <img src={Item3} alt="profile picture" className="profile-pic"/></ListGroupItem>
                    <br/>
                    <ListGroupItem color="info"> <strong> Brain </strong> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="warning"> <strong> 8 Posts </strong> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="danger"> <strong>Bookmarked : </strong> </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
