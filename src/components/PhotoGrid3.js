import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
    } from 'reactstrap';

export default class PhotoGrid3 extends Component {
    render() {
        return (
            <div className="grid3-wrapper">
                
                <div className="top-deck">
                <CardDeck>
                    <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo1.png" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo2.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo3.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                </CardDeck>
                            </div>
                            <div className="middle-deck">
                            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo4.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo5.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo6.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                </CardDeck>
                            </div>
                            <div className="bottom-deck">
                            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo7.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo8.jpeg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Bookmark</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/photoGrid/user-three/photo9.png" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
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
