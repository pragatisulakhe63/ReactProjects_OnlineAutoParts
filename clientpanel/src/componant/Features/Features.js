import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Features/Features.css'

function Features() {
    return (
        <div id='features' className='features section'>
        <h6 className='h3'>Our Features</h6>
            <Container>
                <Row>
                    <Col lg={12}>
                         
                        
                        <div className='features-content'>
                            <Row>
                                <Col lg={3}>
                                    <div className='features-item first-feature wow fadeInUp'>
                                    
                                        <div className='first-number number'>

                                       
                                            <h6>01</h6>
                                        </div>
                                        <div className='icon'></div>
                                        <h4>Original Products</h4>
                                        <div className='line-dec'></div>
                                        <p>Only reliable parts from trusted Aftermarket brands</p>

                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='features-item second-feature wow fadeInUp'>
                                        <div className='second-number number'>
                                            <h6>02</h6>
                                        </div>
                                        <div className='icon'></div>
                                        <h4>Wide variety</h4>
                                        <div className='line-dec'></div>
                                        <p>We have something for everyone when it comes to aftermarket products. Just apply the "Aftermarket" filter in the catalogue and check the offers</p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='features-item first-feature wow fadeInUp'>
                                        <div className='third-number number'>
                                            <h6>03</h6>
                                        </div>
                                        <div className='icon'></div>
                                        <h4>Shipping</h4>
                                        <div className='line-dec'></div>
                                        <p>Free Shipping in your first order</p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='features-item second-feature last-features-item wow fadeInUp'>
                                        <div className='fourth-number number'>
                                            <h6>04</h6>
                                        </div>
                                        <div className='icon'></div>
                                        <h4>Replacement Policy</h4>
                                        <div className='line-dec'></div>
                                        <p> If there is any issues with your products you can raise a replacement request within 10 days of receiving the product</p>

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

export default Features
