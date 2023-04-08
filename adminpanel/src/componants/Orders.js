import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Orders() {
  const [allorder, setAllOrder] = useState([])

  const navi = useNavigate()

  useEffect(() => {
    axios
      .get("http://Localhost:5000/allorder")
      .then((response) => {
        console.log(response.data);
        setAllOrder(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
      <h2>Orders</h2>
        <Row>
          {allorder.map((prod) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className='m-2'>
                  <Card.Body>
                    
                    <Card.Title>{prod.orderDate}</Card.Title>
                    <Card.Title>{prod.orderAmount}</Card.Title>
                    <Card.Title>{prod.noOfItems}</Card.Title>
                    <Button onClick={() => { navi("/orderdetails/".concat(prod._id)) }}>Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Orders