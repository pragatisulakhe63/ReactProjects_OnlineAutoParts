import React ,{useState} from 'react'
import { Card, Button ,Modal,Form} from 'react-bootstrap'
function ProductCards(props) {
   const [isShow,setIsShow]= useState(false);
     
    function onShow(){
      setIsShow(true);
    }
  
    function onHide(){
      setIsShow(false);
    }
  
  return (
    <div>
      <Card>
        <Card.Img src={props.img}></Card.Img>
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> */}
          <Card.Title>{props.producttypes}</Card.Title>
          <Card.Subtitle>{props.companyname}</Card.Subtitle>
          <Card.Text>{props.vehiclemodel}</Card.Text>
          <Card.Text>{props.prize}</Card.Text>
          <Button className='m-1' onClick={onShow}>Update</Button>
          <Button className='m-1'onClick={onShow}>Delete</Button>
        </Card.Body>
      </Card>
      <Modal show={isShow} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='m-1'>
              <Form.Control type='Text' placeholder='Enter Product Company Name'>
              </Form.Control>
            </Form.Group>
            <Form.Group className='m-1'>
              <Form.Control type='Text' placeholder='Enter Product Types'></Form.Control>
            </Form.Group>
            <Form.Group className='m-1'>
              <Form.Control type='Text'placeholder='Enter Vehicle Model'></Form.Control>
            </Form.Group>
            
            <Form.Group className='m-1'>
              <Form.Control type='Text' placeholder='Enter Prize'></Form.Control>
            </Form.Group>
          </Form>

          <Button className='m-1'>ADD</Button>
        </Modal.Body>
      </Modal>


    </div>
  )
}

export default ProductCards