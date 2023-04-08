import axios from 'axios'
import React, { useEffect } from 'react'
import { Container, Row, Col, Image , Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import cluch from '../Image/cluchcable.jpg'
import indicator from '../Image/indicator.png'
import '../componants/Dashboard.css'

function Orderdetails() {
    const { orderId } = useParams()

    useEffect(() => {
        axios.get("localhost:5000/getorder".concat(orderId))
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log("Error", err)
            })
    }, [])


    return (
        <div>
            <Container className='scroll'>
                <article>
                 <Row className='border-box'>
                        <Card className='m-1 margin-card'>
                        <h2 style={{fontFamily: "emoji",fontSize: "31px"}}>Order Details:</h2>
                        <h6 style={{fontFamily: "cursive",fontSize: "18px",}}>Pragati</h6> 
                        <h6 style={{fontFamily: "cursive",fontSize: "18px"}}>954568620</h6>
                        <h6 style={{fontFamily: "cursive",fontSize: "18px"}}>Address:</h6>
                        <p style={{fontFamily: "cursive",fontSize: "15px"}}>Tal.D:Bhusawal Dist.: Jalgaon</p>
                        <h6 style={{fontFamily: "cursive",fontSize: "18px"}}>Total Prize :1500</h6>

                        </Card>

                       
                        
                 </Row>
                 <Row>
                     <Col >
                      <Card className='m-1'>
                         <Image src={cluch} style={{
                         width: "28%",
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
                         width: "43%",
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

export default Orderdetails