import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile1 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <ListGroupItem color="success">profile photo here</ListGroupItem>
                    <ListGroupItem color="info">the user name here</ListGroupItem>
                    <ListGroupItem color="warning">number of posts here</ListGroupItem>
                    <ListGroupItem color="danger">number of followers here</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
