import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import '../Products/Products.css';
import { useSelector, useDispatch } from "react-redux"
import { addItem } from '../Redux/CartSlice';



function Products() {
  const dispatcher = useDispatch();

  const [allproduct, setAllProduct] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/allproduct")
      .then((response) => {
        console.log(response.data);
        setAllProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h2 className='heading' >Our Products</h2>


      <Container>
        <Row>
          {allproduct.map((prod) => {
            return (
              <Col sm={12} md={6} lg={4} className="prodcard">
                <Card className='m-1 b3'>
                  <Card.Img src={"http://localhost:5000".concat(prod.Image)}
                    className='image m-1' />
                  <Card.Title>{prod.productCompany}</Card.Title>
                  <Card.Title>{prod.productTypes}</Card.Title>
                  <Card.Title> {prod.vehicleModel}</Card.Title>
                  <Card.Subtitle>{prod.productPrize}</Card.Subtitle>
                  <Card.Text>{prod.Description}</Card.Text>
                  <Button className='m-2 '
                    onClick={() => dispatcher(addItem(prod))}>Add Cart</Button>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div >

         

  )
}

export default Products