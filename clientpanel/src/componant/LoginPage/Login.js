import React, { useState } from 'react'
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap'
//import login from './Image/login-3938432_960_720.jpg'
//import curve from './Image/curve.jpg'
import webp from './Image/mobile-login-concept-illustration_114360-83.webp'
import wave from './Image/wave.png'
import '../LoginPage/Login.css'
import { useNavigate } from 'react-router-dom'

import axios from "axios"


function Login() {
  const navi = useNavigate()
  const [email, setUserEmail] = useState("")
  const [password, setPassword] = useState("")

  function goSignUp() {
    navi('/register')
  }

  function doLogin() {
    const user = {
      userEmail: email
    }

    axios.post("http://Localhost:5000/getuserbyemail", user)
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
        <Row className='border-box'>
          <Col className='bg-color'>
            <h6 style={{
              color: "White", position: "relative", fontSize: "30px",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "500",


            }}>Login</h6>
            <p style={{
              color: "White", position: "relative", fontSize: "20px",
              fontFamily: "'Courier New', Courier, monospace",


            }}>Get access to your Orders,<br />Wishlist and Recommendations</p>
            <Image src={webp} style={{
              width: "100%",
              height: "70%"
            }} />
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "200",

                }}>Enter Email/Mobile Number:</Form.Label>
                <Form.Control type='Text' placeholder='Enter Email' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Form.Label style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} >Enter Password:</Form.Label>
                <Form.Control type='Password' placeholder='Enter Password' style={{
                  color: "black", position: "relative", fontSize: "20px",
                  fontFamily: "'Courier New', Courier, monospace",

                }} onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
                <a href='#' className='forgot-Password' style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  textDecoration: "none",
                }}>Forgot Password</a>

              </Form.Group>

              <Button variant="primary" style={{
                color: "white", position: "relative", fontSize: "20px",
                fontFamily: "'Courier New', Courier, monospace",
                width: "100%",
                marginTop: "27px",
              }} onClick={doLogin}>Login</Button>{' '}

              <p style={{
                color: "#0d6efd", position: "relative", fontSize: "20px",
                fontFamily: "'Courier New', Courier, monospace",
                width: "100%",
                marginTop: "80px",
                textAlign: "center",
                textDecoration: "none",
              }}>Don't Have Account?<a href='#' onClick={goSignUp} style={{

                textDecoration: "none",
              }}>Create An Account</a></p>

            </Form>
            <Image src={wave} style={{
              color: "black", position: "relative", fontSize: "20px",
              fontFamily: "'Courier New', Courier, monospace",
              width: "100%",
              marginTop: "150px",
              textAlign: "center"
            }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
