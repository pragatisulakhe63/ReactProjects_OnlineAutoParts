import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../Services/Services.css'
import web from './Images/service-icon-01.png'
import web1 from './Images/service-icon-02.png'
import web2 from './Images/service-icon-03.png'
// import web3 from './Images/service-icon-03.png'
// import web4 from './Images/service-icon-01.png'
// import web5 from './Images/service-icon-02.png'

function Services() {
  return (
    <div id='services' className='our-services section'>
        <Container>
            <Row>
                <Col lg={6} className='offset-lg-3'>
                    <div className='section-heading wow bounceIn'>
                        <h6>Our Services </h6>
                        
                       
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col lg={4}>
                    <div className='service-item wow bounceInUp'>
                        <Row>
                            <Col lg={4}>
                                <div className='icon'>
                                    <Image src={web}></Image>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className='right-content'>
                                    <h4>Customer Service</h4>
                                    <p>Repair Your Product  </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='service-item wow bounceInUp'>
                        <Row>
                            <Col lg={4}>
                                <div className='icon'>
                                    <Image src={web1}></Image>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className='right-content'>
                                    <h4>Company Product</h4>
                                    <p>We Sales top company product offerdable prize.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='service-item wow bounceInUp'>
                        <Row>
                            <Col lg={4}>
                                <div className='icon'>
                                    <Image src={web2}></Image>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className='right-content'>
                                    <h4>Delivery</h4>
                                    <p>On time delivery </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Services