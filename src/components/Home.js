import React, { Component } from 'react';
import NavBar from './NavBar';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
    } from 'reactstrap';
import stewieProfilePic from '../assets/images/stewieProfilePic.jpg';
import QuagmireProfilePic from '../assets/images/QuagmireProfilePic.png';
import BrianProfilePic from '../assets/images/BrianProfilePic.jpg'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <CardDeck>
      <Card>
        <CardImg top width="100%" src={stewieProfilePic} alt="Stewie Profile Picture" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={QuagmireProfilePic} alt="Quagmire Profile Picture" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={BrianProfilePic} alt="Brian Profile Picture" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
                
            </div>
        )
    }
}
