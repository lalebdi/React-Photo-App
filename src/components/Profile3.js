import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile3 extends Component {
    render() {
        return (
            <div className="side-profile">
                <ListGroup>
                    <br/>
                    <ListGroupItem color="success">insert the photo here</ListGroupItem>
                    <br/>
                    <ListGroupItem color="info"></ListGroupItem>
                    <br/>
                    <ListGroupItem color="warning">insert the number of posts here</ListGroupItem>
                    <br/>
                    <ListGroupItem color="danger">insert the number of followers here</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
