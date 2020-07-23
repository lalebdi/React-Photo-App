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
            <div className="home-big-wrapper">
                <NavBar />
                <div className="profile-cards">
                <CardDeck>
                    <Card>
                        <CardImg top width="50%" src={stewieProfilePic} alt="Stewie Profile Picture" />
                        <CardBody>
                            <CardTitle>Stewie</CardTitle>
                            
                            <CardText>A highly precocious infant who talks and acts as an adult. Wizard magazine rated him the 95th-greatest villain of all time.</CardText>
                            <Button>Login</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="50%" src={QuagmireProfilePic} alt="Quagmire Profile Picture" />
                        <CardBody>
                            <CardTitle>Quagmire</CardTitle>

                            <CardText>An appalling human being who is still caught in the Rat Pack era, based on anachronistic 1950s party-animal clichés.</CardText>
                            <Button>Login</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="50%" src={BrianProfilePic} alt="Brian Profile Picture" />
                        <CardBody>
                            <CardTitle>Brian</CardTitle>
                            
                            <CardText>less-than-adept writer struggling to find himself, attempting essays, novels, screenplays, and newspaper articles.</CardText>
                            <Button>Login</Button>
                        </CardBody>
                    </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}
