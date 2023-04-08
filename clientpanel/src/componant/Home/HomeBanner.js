import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import '../Home/HomeBanner.css';

function HomeBanner() {
  return (
    <div className='main-banner wow fadeIn' id='top' >
        <Container>
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={6} className='align-self-center'>
                            <div className='left-content header-text wow fadeInLeft'>
                                <Row>
                                    <Col lg={4} sm={4}>
                                        <div className='info-stat'>
                                            <h6>Company Status:</h6>
                                            <h4>Available</h4>
                                        </div>
                                    </Col>
                                    <Col lg={4} sm={4}>
                                         <div className='info-stat'>
                                            <h6>Price</h6>
                                            <h4>Lowest Price</h4>
                                         </div>       
                                    </Col>
                                    <Col lg={4} sm={4}>
                                        <div className='info-stat'>
                                            <h6>Quality</h6>
                                            <h4>Assured Quality</h4>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <h2>Auto Parts Company</h2>
                                    </Col>
                                    
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeBanner