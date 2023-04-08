import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../componants/Dashboard.css';

function Dashboard() {
  return (
    <div>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className='dashboard-ui m-3'>
              <center>
                <h1 style={{fontSize:"12px",color: "#035a57",
    fontSize: "26px",
    /* top: 17px; */
    fontFamily: "emoji",}}>ADD PRODUCT</h1>
                <h2 style={{fontSize:"12px",color: "#035a57",
    fontSize: "26px",
    /* top: 17px; */
    fontFamily: "emoji",}}>3</h2>
              </center>
            </Col>
            <Col sm={12} md={6} lg={4} className='dashboard1-ui m-3'>
              <center>
                <h1 style={{
                  fontSize:"12px",color: "#4c021e",
                    fontSize: "26px",
                    /* top: 17px; */
                    fontFamily: "emoji",}}>ORDERS</h1>
                <h2 style={{fontSize:"12px",color: "#4c021e",
    fontSize: "26px",
    /* top: 17px; */
    fontFamily: "emoji",}}>2</h2>
              </center>
            </Col>
            <Col sm={12} md={6} lg={4} className='dashboard2-ui m-3'>
              <center>
                <h1 style={{fontSize:"12px",color: "#4c021e",
                fontSize: "26px",
                /* top: 17px; */
                fontFamily: "emoji",}}>ADD VALUES</h1>
                <h2 style={{fontSize:"12px",color: "#4c021e",
                  fontSize: "26px",
                 /* top: 17px; */
                fontFamily: "emoji",}}>58</h2>
              </center>
            </Col>
            <Col sm={12} md={6} lg={4} className='dashboard3-ui m-3'>
              <center>
                <h1 style={{fontSize:"12px",color: "#035a57",
                  fontSize: "26px",
                   fontFamily: "emoji",}}>ALL PRODUCT</h1>
                <h2 style={{fontSize:"12px",color: "#035a57",
                  fontSize: "26px",
                  /* top: 17px; */
                  fontFamily: "emoji",}}>3</h2>
              </center>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Dashboard