/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Card, Col,Row, Container} from "react-bootstrap";
import BoardProject from "./images/BoardProject.png";
import Ecommerce from "./images/Ecommerce.png";
import FortuneFound from "./images/FortuneFound.png";
import MadLips from "./images/MadLips.png";
import MovieProject from "./images/MovieProject.png";
import "./index.css"
export default function Projects(){
    return (
        <Container fluid = "md">
        <Row fluid="md" id= "projects" >
            
            <Col>
            <Card className ="projectCard">
                <Card.Img variant="top" src={MadLips} className= "cardImage"  />
                <Card.Body>
                    <Card.Title>Madlips Project</Card.Title>
                    <Card.Text>
                    Fun game of filling the blanks randomly.
                    </Card.Text>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a aria-hidden="true" href = "https://github.com/knargocer" className ="fa fa-github" ></a>
                </Card.Body>
            </Card>
            </Col>

         <Col>
            <Card className ="projectCard">
                <Card.Img variant="top" src={MovieProject} className= "cardImage"  />
                <Card.Body>
                    <Card.Title>Movie Project</Card.Title>
                    <Card.Text>
                        The movie site that was implemented using Object Oriented Programming
                    </Card.Text>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a aria-hidden="true" href = "https://github.com/knargocer/MovieOOP-Project" className ="fa fa-github" ></a>
                </Card.Body>
            </Card>
            </Col>
            <Col> 
            <Card className ="projectCard">
                <Card.Img variant="top" src={Ecommerce} className= "cardImage"  />
                <Card.Body>
                    <Card.Title>E-commerce Project</Card.Title>
                    <Card.Text>
                        E-commerce site implemented usinf FireBase  
                    </Card.Text>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a aria-hidden="true" href = "https://github.com/knargocer/E-commerce" className ="fa fa-github" ></a>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className ="projectCard">
                <Card.Img variant="top" src={BoardProject} className= "cardImage"  />
                <Card.Body>
                    <Card.Title>Board Project</Card.Title>
                    <Card.Text>
                    The site that enables the user to plan a vacation efficiently
                    </Card.Text>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a aria-hidden="true" href = "https://github.com/knargocer/board-project-1" className ="fa fa-github" ></a>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className ="projectCard">
                <Card.Img variant="top" src={FortuneFound} className= "cardImage" />
                <Card.Body>
                    <Card.Title>Fortune Found Project</Card.Title>
                    <Card.Text>
                        The capstone project for Re:Coded that aims to connect people in-need and volunteers
                    </Card.Text>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a aria-hidden="true" href = "https://github.com/ReCoded-Org/capstone-istanbul-from_garbage_to_gift" className ="fa fa-github" ></a>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    )
}