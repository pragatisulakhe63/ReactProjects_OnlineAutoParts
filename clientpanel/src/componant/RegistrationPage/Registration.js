import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import '../RegistrationPage/Registration.css'
import { useNavigate } from 'react-router-dom'
import webp from './Image/mobile-login-concept-illustration_114360-83.webp'
import wave from './Image/wave.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { signup } from '../Redux/AuthSlice'
import axios from 'axios'



function Registration() {
  const navi = useNavigate()
  //const dispatcher = useDispatch();
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");


  // function goHome() {
  //   navi('/')
  // }

  function goSignIn() {
    navi('/login')
  }
  
  function doRegistration() {
    navi("/login")
  }

  function addUser() {
    const user = {
      email: email,
      password: password,
      password: confirmpassword,
      mobile: mobilenumber,
    };

    axios.post("http://Localhost:5000/adduser", user)
      .then((res) => {
        console.log(res.data[0])
        navi("/customerform")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>

      <Container>
        <Row className='border-box'>
          <Col className='bg-color-register'>
            <h6 style={{
              color: "White", position: "relative", fontSize: "30px",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "500",


            }}>Looks Like you're new Here!</h6>
            <p style={{
              color: "White", position: "relative", fontSize: "20px",
              fontFamily: "'Courier New', Courier, monospace",


            }}>Sign up And Get Started </p>
            <Image src={webp} style={{
              width: "100%",
              height: "80%"
            }} />
          </Col>
          <Col>
            <Form >
              <Form.Group>
                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }}>Enter Email:</Form.Label>
                <Form.Control type='Text' placeholder='Enter Email Number' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} onChange={(e) => setUserEmail(e.target.value)} />
                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }}  >Enter Password:</Form.Label>
                <Form.Control type='Password' placeholder='Enter Password' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} onChange={(e) => setPassword(e.target.value)} />

                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} >Enter Confirm-Password:</Form.Label>
                <Form.Control type='Password' placeholder='Enter Confirm-Password' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} onChange={(e) => setConfirmPassword(e.target.value)} />

                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} >Mobile Number:</Form.Label>
                <Form.Control type='Text' placeholder='Enter Mobile Number' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} onChange={(e) => setMobileNumber(e.target.value)} />




              </Form.Group>

              <Button variant="primary" 
              onClick={addUser} style={{
                color: "white", position: "relative", fontSize: "20px",
                fontFamily: "'Courier New', Courier, monospace",
                width: "100%",
                marginTop: "27px",
              }}>Register</Button>{' '}
              <p style={{
                color: "#0d6efd", position: "relative", fontSize: "20px",
                fontFamily: "'Courier New', Courier, monospace",
                width: "100%",
                marginTop: "80px",
                textAlign: "center",
                textDecoration: "none",
              }}>Existing User?<a href='#' onClick={goSignIn} style={{

                textDecoration: "none",
              }}>Log in</a></p>

            </Form>
            <Image src={wave} style={{
              color: "black", position: "relative", fontSize: "20px",
              fontFamily: "'Courier New', Courier, monospace",
              width: "100%",
              marginTop: "50px",
              textAlign: "center"
            }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Registration
