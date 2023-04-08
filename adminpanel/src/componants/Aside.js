import React from 'react'
import '../componants/Dashboard.css'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaProductHunt} from 'react-icons/fa'
import {MdDashboard} from 'react-icons/md'
import {BsCartDash} from 'react-icons/bs'
import {GrUserAdmin} from 'react-icons/gr'
import {RiProductHuntLine,RiUserSmileLine} from 'react-icons/ri'
function Aside() {
  return (
    <div>
      <aside className='asideBar'>
        <center><GrUserAdmin className='icons'/></center>
        <h2 className='h2-center'><em>Auto<span>Zone</span></em></h2>
        <hr/>
          <Nav className="flex-column">
              <Nav.Link className='m-1'>
                  <Link to='/' className='mNavLink'>
                  <MdDashboard className='nav-icons'/>
                      Dashboard
                  </Link>
              </Nav.Link>

              <Nav.Link className='m-1'>
                  <Link to='/addproduct' className='mNavLink'>
                       <FaProductHunt className='nav-icons'/>
                        AddProduct
                  </Link>
              </Nav.Link>

              <Nav.Link className='m-1'>
                  <Link to='/orders' className='mNavLink'>
                  <BsCartDash className='nav-icons'/>
                      Orders
                  </Link>
              </Nav.Link>

              <Nav.Link className='m-1'>
                <Link to='/addvalues' className='mNavLink'>
                <RiUserSmileLine className='nav-icons'/>
                    AddValues
                </Link>
              </Nav.Link>

              <Nav.Link className='m-1'>
                  <Link to='/allproduct' className='mNavLink'>
                  <RiProductHuntLine className='nav-icons'/>
                      AllProduct
                  </Link>
              </Nav.Link>
          </Nav>
      </aside>
    </div>
  )
}

export default Aside
