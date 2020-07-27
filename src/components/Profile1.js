import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Item1 from '../assets/images/stewieProfilePic.jpg'

export default class Profile1 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <br/>
                    <ListGroupItem color="success"> <img src={Item1} alt="profile picute" classname="profile-pic" width="50%" /> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="info"> <strong> Stewie </strong> </ListGroupItem>
                    <br/>
                    <ListGroupItem color="warning"> <strong> 6 Posts </strong></ListGroupItem>
                    <br/>
                    <ListGroupItem color="danger"> <strong>Bookmarked: </strong> </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
