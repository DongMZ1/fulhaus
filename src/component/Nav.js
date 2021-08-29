import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Nav = ({setshowSideBar}) =>{
    return <div id='nav-bar' className='width-100 z-100 user-select-none position-fixed white-bg nav-box-shadow disp-flex height-10-vh space-between py-2'>
          <div className='my-auto font-1-4 bolder Montserrat ms-4'>
            Fülhaus Shop
          </div>
          <div className={`disp-flex hover-black-border white-color my-auto px-4-5 bold py-2 font-0-8 me-4 black-bg cursor-pointer Montserrat`} onClick={()=>{setshowSideBar(state => !state)}}>
              <div className='my-auto cursor-pointer'>CART</div>
          </div>
    </div>
}

export default Nav;