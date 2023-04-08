import React from 'react'
import { Container, Row, Image, Col, Nav } from 'react-bootstrap'
import image from './Image/images.png'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { MdPayments } from 'react-icons/md'
import { BiLogOutCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import '../Profile/Profile.css'

function Profile() {
  const navi= useNavigate()
  
  function goLogin(){
    navi('/login')
  }
  function goToDetails(){
    navi("/customerdetails")
  }

  return (
    <div>
      <Container >
        
        <Row>
         <h2 style={{
           marginLeft: "115px",
         }}>Hello</h2>
          <Image src={image} className='profile-border'/>
         


          <Col className='h2-border'>
            <h2>Personal Information:</h2>
            <h6  style={{fontFamily: "cursive",fontSize: "21px",}}>Name : Pragati</h6>
            <h6  style={{fontFamily: "cursive",fontSize: "21px",}}>Mobile Number:954568620</h6>
            <h6  style={{fontFamily: "cursive",fontSize: "21px",}}>Address:</h6>
            <p style={{fontFamily: "cursive",fontSize: "21px",}}>Tal.D:Bhusawal Dist.: Jalgaon</p>
          </Col>
        </Row>

        <Row className='profile-border' style={{
          marginTop: "-319px",
          height:"320px",
        }}>
          <aside className='asideBar'>
            <Nav className="flex-column">
              <Nav.Link onClick={goToDetails} style={{
                
                margin:"9px 0px -18px",
              }}>

                <HiOutlineClipboardList />
                MY ORDERS

              </Nav.Link>
              <hr/>
              <Nav.Link style={{
                margin:"9px 0px -18px",
              }}>

                <AiFillSetting />
                ACCOUNT SETTING

              </Nav.Link>
              <hr/>
              <Nav.Link style={{
                margin:"9px 0px -18px",
              }}>

                <MdPayments />
                PAYMENTS
              </Nav.Link>
              <hr/>
              <Nav.Link onClick={goLogin} style={{
                margin:"9px 0px -18px",
              }}>

                <BiLogOutCircle />
                LOGOUT

              </Nav.Link>
              <hr/>

            </Nav>
          </aside>
        </Row>

      </Container>
    </div>
  )
}

export default Profile
