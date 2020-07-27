import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
    } from 'reactstrap';
import Pic1 from '../assets/images/photoGrid/user-three/photo1.png';
import Pic2 from '../assets/images/photoGrid/user-three/photo2.jpg';
import Pic3 from '../assets/images/photoGrid/user-three/photo3.jpg';
import Pic4 from '../assets/images/photoGrid/user-three/photo4.jpg';
import Pic5 from '../assets/images/photoGrid/user-three/photo5.jpg';
import Pic6 from '../assets/images/photoGrid/user-three/photo6.jpg';
import Pic7 from '../assets/images/photoGrid/user-three/photo7.jpg';
import Pic8 from '../assets/images/photoGrid/user-three/photo8.jpeg';
import Pic9 from '../assets/images/photoGrid/user-three/photo9.png';

export default class PhotoGrid3 extends Component {
    render() {
        return (
            <div className="grid3-wrapper">
                
                <div className="top-deck">
                <CardDeck>
                    <Card>
                    <CardImg top width="100%" src={Pic1} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic2} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic3} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                </CardDeck>
                            </div>
                            <div className="middle-deck">
                            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={Pic4} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic5} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic6} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                </CardDeck>
                            </div>
                            <div className="bottom-deck">
                            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={Pic7} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic8} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Pic9} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Likes : 129</CardTitle>
                    <CardSubtitle>Caption:</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                </CardDeck>
                </div>
            </div>
        )
    }
}
