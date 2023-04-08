
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function AddProduct() {

  const [productCompany, setProductCompany] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [vehicleModel, setVehicleModel] = useState([]);

  const [productPrize, setProductPrize] = useState("");
  const [Description, setDescription] = useState("");
  const [selectfile, setSelectFile] = useState("");

  const [pCom, setPCom] = useState("");
  const [pType, setPType] = useState("");
  const [vModel, setVModel] = useState("");



  useEffect(() => {
    axios
      .get("http://localhost:5000/allCompany")
      .then((response) => {
        console.log(response.data);
        setProductCompany(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allProductTypes")
      .then((response) => {
        console.log(response.data);
        setProductTypes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allVehicleModel")
      .then((response) => {
        console.log(response.data);
        setVehicleModel(response.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addProduct() {
    const product = {
      productcompany: pCom,
      producttypes: pType,
      vehiclemodel: vModel,
      productprize: productPrize,
      description: Description,
      image: selectfile,
    };
    axios
      .post("http://localhost:5000/addproduct", product)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  async function handlechangeimage(e) {
    const imgData = new FormData();
    imgData.append(
      'image',
      e.target.files[0]
    );
    axios.post("http://localhost:5000/uploadimage", imgData)
      .then((res) => {
        console.log("Res:", res.data);
        setSelectFile(res.data.filepath)
      })
      .catch((err) => {
        console.log("Err:", err);
      });
  }


  return (
    <div>

      <Container>
        <h2>AddProducts</h2>
        <Form onSubmit={addProduct}>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Product Company:</Form.Label>
                <Form.Select
                  aria-label=" select product company"
                  value={pCom}
                  onChange={(e) => setPCom(e.target.value)}>
                  <option>
                    Select Company
                  </option>
                  {
                    productCompany.map((prodVal) => {
                      return (
                        <option>{prodVal.companyName}</option>
                      )
                    })
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Product Types:</Form.Label>
                <Form.Select
                  aria-label="select product type"
                  value={pType}
                  onChange={(e) => setPType(e.target.value)}>
                  <option>
                    Select Prod Type
                  </option>
                  {
                    productTypes.map((prodVal) => {
                      return (
                        <option>{prodVal.productTypes}</option>
                      )
                    })
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>


          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Vehicle Model:</Form.Label>
                <Form.Select
                  aria-label="select product type"
                  value={vModel}
                  onChange={(e) => setVModel(e.target.value)}>
                  <option>
                    Select Type
                  </option>
                  {
                    vehicleModel.map((prodVal) => {
                      return (
                        <option>{prodVal.vehicleModel}</option>
                      )
                    })
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Product Prize:</Form.Label>
              <Form.Control
                type='Number'
                value={productPrize}
                onChange={(e) => setProductPrize(e.target.value)}
                placeholder='Enter Prduct Prize'>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Select File:</Form.Label>
              <Form.Control
                onChange={handlechangeimage}
                type='File'
                placeholder='Select File'></Form.Control>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" className='m-1'>Add</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default AddProduct