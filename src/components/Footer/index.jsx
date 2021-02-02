/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Container,Col, Row } from "react-bootstrap"
import "./index.css"

export default function Footer () {
    return (
      <Container  id ="contact" className = "footerContainer" fluid>
        <Row >
        <Col className = "footerSocialMedia">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a aria-hidden="true" href = "https://github.com/knargocer" className ="fa fa-github" ></a>
            <a aria-hidden="true" href = "https://www.instagram.com/knargocer/?hl=en" className ="fa fa-instagram" ></a>
            <a aria-hidden="true" href = "https://www.facebook.com/knar.gocer/" className ="fa fa-facebook" ></a>
            <a aria-hidden="true" href = "https://www.linkedin.com/in/knar-gocer-0505281bb/" className ="fa fa-linkedin" ></a>
        </Col>
        <Col className="footerOtherContact" >
          <p>knargr@gmail.com</p>
          <p>(+374) 77542206</p>
          <p>(+90) 5465569811</p>
        </Col>
        </Row>
     </Container>
    )
}