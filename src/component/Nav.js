import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Nav = ({setshowSideBar}) =>{
    return <div className='width-100 z-100 position-fixed white-bg nav-box-shadow disp-flex align-items-stretch height-10-vh space-between py-2'>
          <div className='my-auto font-1-4 bolder Montserrat ms-4'>
            Fülhaus Shop
          </div>
          <div className={`disp-flex px-4-5 bold my-1 font-0-8 me-4 black-bg cursor-pointer Montserrat`}>
              <div className='my-auto white-color cursor-pointer' onClick={()=>{setshowSideBar(state => !state)}}>CART</div>
          </div>
    </div>
}

export default Nav;