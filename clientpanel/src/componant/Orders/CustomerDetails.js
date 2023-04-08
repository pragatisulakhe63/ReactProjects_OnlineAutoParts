import React from 'react'
import { Container, Col, Card, Image, Row} from 'react-bootstrap'
import cluch from './Image/cluchcable.jpg'
import indicator from './Image/indicator.png'
import '../Orders/Order.css'
function CustomerDetails() {
  return (
    <div>
        <Container >
                <article>
                 <Row className='border-box'>
                        <Card >
                        <h2 style={{fontFamily: "emoji",fontSize: "31px"}}>Order Details:</h2>
                        <h6 style={{fontFamily: "cursive",fontSize: "21px",}}>Pragati</h6> 
                        <h6 style={{fontFamily: "cursive",fontSize: "21px"}}>954568620</h6>
                        <h6 style={{fontFamily: "cursive",fontSize: "21px"}}>Address:</h6>
                        <p style={{fontFamily: "cursive",fontSize: "17px"}}>Tal.D:Bhusawal Dist.: Jalgaon</p>
                        <p style={{fontFamily: "cursive",fontSize: "21px"}}>Total Prize : 1500</p>

                        </Card>

                       
                        
                 </Row>
                 <Row>
                     <Col >
                      <Card className='m-2'>
                         <Image src={cluch} style={{
                         width: "33%",
                        marginLeft: "34%",
                        marginTop: "24px",
                         }}></Image> 
                         <hr />
                         <Card.Title> MINDA </Card.Title>
                         <Card.Title>CLUTCH CABLE </Card.Title>
                         <Card.Title>SHINE </Card.Title>
                         <Card.Title>No Of Item: 3 </Card.Title>
                         <Card.Title>Prize: 350 </Card.Title>
                     </Card>
                    </Col>
                    <Col>
                    <Card className='m-2'>
                    <Image src={indicator} style={{
                         width: "52%",
                        marginLeft: "29%",
                        marginTop: "24px",
                         }}></Image> <hr/>
                         <Card.Title> ASK</Card.Title>
                         <Card.Title>INDICATOR </Card.Title>
                         <Card.Title>PASSION PRO </Card.Title>
                         <Card.Title>items: 1 </Card.Title>
                         <Card.Title>Prize: 450 </Card.Title>
                   </Card>
                    </Col>
                 </Row>

               
                       
                  
                </article>
            </Container>
    </div>
  )
}

export default CustomerDetails