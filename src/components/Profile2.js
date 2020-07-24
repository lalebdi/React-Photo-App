import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile2 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <ListGroupItem color="success">Profile photo here</ListGroupItem>
                    <ListGroupItem color="info">insert the user name here</ListGroupItem>
                    <ListGroupItem color="warning">insert the number of posts here</ListGroupItem>
                    <ListGroupItem color="danger">insert the number of followers here</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
