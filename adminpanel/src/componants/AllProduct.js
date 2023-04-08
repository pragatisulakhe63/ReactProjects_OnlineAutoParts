import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'


function AllProduct() {
  const [allproduct, setAllProduct] = useState([])

  const [selProdId, setSelProdId] = useState("")

  const [updatePrize, setUpdatePrice] = useState(0)
  const [isShow, setIsShow] = useState(false);

  function onShow(idx) {
    setIsShow(true);
    setSelProdId(idx)
  }

  function onHide() {
    setIsShow(false);
  }

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
  }, []);

  function productdelete(id) {
    axios
      .delete("http://localhost:5000/deleteproductData/".concat(id))
      .then((response) => {
        console.log("Deleted".response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateProduct() {
    const prodDataPrice = {
      productprize: updatePrize
    }

    axios
      .put("http://localhost:5000/updateproduct/"
        .concat(selProdId), prodDataPrice)
      .then((response) => {
        console.log("Updated..".response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Container>
       <h2>All Products</h2>
        <Row>
          {allproduct.map((prod) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className='m-2'>
                  <Card.Body className='m-1'>
                    <Card.Img src={"http://localhost:5000".concat(prod.Image)}
                      className='image m-1' />

                    <Card.Title>{prod.productCompany}</Card.Title>
                    <Card.Title>{prod.productTypes}</Card.Title>
                    <Card.Title>{prod.vehicleModel}</Card.Title>
                    <Card.Title>{prod.productPrize}</Card.Title>
                    <Card.Title>{prod.Description}</Card.Title>
                    {/* <Card.Title>{prod.Image}</Card.Title> */}
                    <Button className='m-1'
                      onClick={() => onShow(prod._id)}>Update</Button>
                    <Button className='m-1'
                      onClick={() => productdelete(prod._id)}>Delete</Button>
                  </Card.Body>
                </Card>
                <Modal show={isShow} onHide={onHide}>
                  <Modal.Header closeButton>
                    <Modal.Title>Product Details:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className='m-1'>
                        <Form.Control type='Text'
                          onChange={(e) => setUpdatePrice(e.target.value)} placeholder='Enter Prize'></Form.Control>
                      </Form.Group>
                    </Form>

                    <Button className='m-1' onClick={updateProduct}>ADD</Button>
                  </Modal.Body>
                </Modal>
              </Col>
            )
          })}
        </Row>
      </Container>

    </div>
  )
}

export default AllProduct