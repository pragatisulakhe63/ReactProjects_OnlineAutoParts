import React from 'react'
import { Container, Form, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function CustomerForms() {
  const navi = useNavigate()
  const [name, setName] = useState("")
  const [mobilenumber, setMobileNumber] = useState("")
  const [address, setAddress] = useState(" ")
  const [city, setCity] = useState(" ")
  const [pincode, setPincode] = useState(" ")
  const [state, setState] = useState("")


  function addCustomer() {
    const customer = {
       customerfullname: name,
       customermobno :mobilenumber,
       customeraddress: address,
      customercity:  city,
       customerpincode: pincode,
       customerstate: state,
    };

    axios.post("http://localhost:5000/addcustomers", customer)
      .then((res) => {
        console.log(res.data[0])
        navi("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Container>
        <h2>Deliver Address</h2>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type='Text'
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control type='Text'
                placeholder='Mobile Number'
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <Form.Label>Address:</Form.Label>
              <Form.Control type='Text'
                onChange={(e) => setAddress(e.target.value)}
              />
              <Form.Label>City:</Form.Label>
              <Form.Control type='Text'
                onChange={(e) => setCity(e.target.value)}
              />
              <Form.Label>Pincode:</Form.Label>
              <Form.Control type='Text'
                onChange={(e) => setPincode(e.target.value)}
              />
              <Form.Label>State:</Form.Label>
              <Form.Control type='Text'
                onChange={(e) => setState(e.target.value)}
              />

            </Form.Group>
            <Button onClick={addCustomer} className='m-1'>Save</Button>
          </Form>

        </Row>
      </Container>
    </div>
  )
}

export default CustomerForms