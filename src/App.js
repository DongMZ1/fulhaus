import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import useWindowSize from "@rooks/use-window-size"
import navImage from './assert/image/nav-cover.png'

import Nav from './component/Nav'
import HomePageProducts from './component/HomePageProducts';
import SideBar from './component/SideBar';
function App() {
  const [fetchedProducts, setfetchedProducts] = useState([]);
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [showSideBar, setshowSideBar] = useState(false);
  useEffect(
    () => {
      async function fetchdata() {
        const res = await fetch(
          'https://main-api.fulhaus.com/fulhaus-tech-test/get-products',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const resData = await res.json();
        setfetchedProducts(resData);
      };
      fetchdata();
    }
    , [])
  return (
    <>
      <div>
        {showSideBar && <SideBar />}
        <Nav setshowSideBar={setshowSideBar} />
        <div className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
          <img className='width-100' src={navImage} />
        </div>
        <div className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
          <div className='green-bg width-100 white-color disp-flex height-30-vh'>
            <div className='m-auto'>
              <div className={`${innerWidth < 768 ? 'font-2' : 'font-5-vw'} Crimson`}>Patio Furniture</div>
              <div className={`white-color disp-flex`}>
                <div className='m-auto px-4-5 bold py-1-5 black-bg white-color cursor-pointer Montserrat'>shop</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
        <HomePageProducts fetchedProducts={fetchedProducts} />
      </div>
    </>
  );
}

export default App;
