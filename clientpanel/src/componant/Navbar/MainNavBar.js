import React from 'react'
import { Nav, Navbar, Button, } from 'react-bootstrap'
import '../Navbar/MainNavBar.css';
//import cart from './Image/cart.png'
import { GiShoppingCart } from "react-icons/gi"
import { CgProfile } from "react-icons/cg"

//import { FaSignInAlt } from "react-icons/fa"


import { useNavigate } from 'react-router-dom';



function MainNavBar() {
  const navi = useNavigate()

  function goCart() {
    navi("/cart")
  }

  function goSignIn() {
    navi("/login")
  }

  function goProfile() {
    navi("/profile")
  }
  
  function goToOrder(){
    navi('/customerform')
  }
  return (
    <div>
      <Navbar className='mainnav' expand='lg'>
        <Navbar.Toggle aria-controls='responsive-navbar'></Navbar.Toggle>
        <Navbar.Brand className="m-1" style={{
              color: "white",position: "relative", 
              fontFamily: "Times New Roman",
              textShadow: "2px 2px 4px #000000",
              
              fontSize: "34px",
            }}><em>AutoZone</em></Navbar.Brand>

        <Navbar.Collapse id='responsive-navbar'>
          <Nav className='me-auto navmargin'>
            <Nav.Link className='mNavLink'style={{
              
             
              color: "White",position: "relative", fontSize:"20px",
              fontFamily: "Times New Roman",
              fontWeight: "500",
              top: "6px"
            
             
              
            }} >Home</Nav.Link>
           
            <Nav.Link className='mNavLink'style={{
             
             color: "White",position: "relative", fontSize:"20px",
              fontFamily: "Times New Roman",
              fontWeight: "500",
              top: "6px",
            }}>Features</Nav.Link>
            
            <Nav.Link className='mNavLink'style={{
              
              color: "White",position: "relative", fontSize:"20px",
              fontFamily: "Times New Roman",
              fontWeight: "500",
              top: "6px",
            }}>Services</Nav.Link>
            
            <Nav.Link className='mNavLink'style={{
             
             color: "White",position: "relative", fontSize:"20px",
              fontFamily: "Times New Roman",
              fontWeight: "500",
              top: "6px",
             
            }}>Products</Nav.Link>
            <Nav.Link className='mNavLink'onClick={goToOrder} style={{
              
              color: "White",position: "relative", fontSize:"20px",
              fontFamily: "Times New Roman",
              fontWeight: "500",
              top: "6px",
            }}>Order</Nav.Link>


            {/* <FaSignInAlt onClick={goSignIn}/> */}



          </Nav>

        </Navbar.Collapse>

        <CgProfile onClick={goProfile} className='right-profile' />
      <GiShoppingCart onClick={goCart} className='right-cart' />
       
        <Button onClick={goSignIn} className='right-btn'>Login</Button>

    </Navbar>

    </div >
  )
}

export default MainNavBar
