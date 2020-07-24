import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile1 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <br/>
                    <ListGroupItem color="success">profile photo here</ListGroupItem>
                    <br/>
                    <ListGroupItem color="info">the user name here</ListGroupItem>
                    <br/>
                    <ListGroupItem color="warning">number of posts here</ListGroupItem>
                    <br/>
                    <ListGroupItem color="danger">number of followers here</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
