import React from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
function AddValues() {
  const [companyname, setCompanyName] = useState("");
  const [producttypes, setProductTypes] = useState("");
  const [vehiclemodel, setVehicleModel] = useState("");

  function addCompany() {
    const company = {
      companyname: companyname,
    };
    axios
      .post("http://localhost:5000/addCompany", company)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function addProductTypes() {
    const product = {
      producttypes: producttypes,
    };
    axios
      .post("http://localhost:5000/addProdctTypes", product)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function addVehicleModel() {
    const vehicle = {
      vehiclemodel: vehiclemodel,
    };
    axios
      .post("http://localhost:5000/addVehicleModel", vehicle)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  }
    return (
    <div>
      <Container>
        <h2>Add Values</h2>
        <Form>
          <Row>
            <Col>
              {/* <Form.Label>Comapny Name</Form.Label> */}
              <Form.Control
                type='Text'
                value={companyname}
                placeholder='Enter Comapny Name'
                onChange={(e) => setCompanyName(e.target.value)}>
              </Form.Control>
            </Col>
            <Col>
              <Button className='m-1' onClick={addCompany}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="Text"
                value={producttypes}
                placeholder='Enter Product Types'
                onChange={(e) => setProductTypes(e.target.value)}>
              </Form.Control>
            </Col>

            <Col>
              <Button className='m-1' onClick={addProductTypes}>Add</Button>
            </Col>
          </Row>


          <Row>
            <Col>
              <Form.Control
                type='Text'
                value={vehiclemodel}
                placeholder='Enter Vehicle Model'
                onChange={(e) => setVehicleModel(e.target.value)}>
              </Form.Control>
            </Col>
            <Col>
              <Button className='m-1' onClick={addVehicleModel}>Add</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default AddValues