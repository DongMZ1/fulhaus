import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import useWindowSize from "@rooks/use-window-size"
import navImage from './assert/image/nav-cover.png'
import { CSSTransition } from 'react-transition-group';
import Nav from './component/Nav'
import HomePageProducts from './component/HomePageProducts';
import SideBar from './component/SideBar';
import { Link } from 'react-scroll'
import getProducts from './fakeAPI/getProducts'
function App() {
  const [fetchedProducts, setfetchedProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [showSideBar, setshowSideBar] = useState(false);
  useEffect(
    () => {
      async function fetchdata() {
        const resData = await getProducts()
        setfetchedProducts(resData);
      };
      fetchdata();
    }
    , [])
  return (
    <>
      <div>
        <CSSTransition in={showSideBar} timeout={350} classNames="reverse-row-transition" unmountOnExit>
          <SideBar setshowSideBar={setshowSideBar} cartProducts={cartProducts} setcartProducts={setcartProducts} innerWidth={innerWidth} />
        </CSSTransition>
        <Nav setshowSideBar={setshowSideBar} />
        <div className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
          <img className='width-100 mt-10vh' src={navImage} />
        </div>
        <div className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
          <div className={`green-bg width-100 white-color disp-flex ${innerWidth < 470 ? 'height-20-vh' : 'height-35-vh'}`}>
            <div className='m-auto'>
              <div className={`${innerWidth < 768 ? 'font-2' : 'font-5-vw'} Crimson`}>Patio Furniture</div>
              <div className={`white-color disp-flex`}>
                <Link offset={-80} to='home-products' className='m-auto text-deco-none'>
                  <div className='px-4-5 bold py-1-5 black-bg white-color cursor-pointer hover-black Montserrat'>shop</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='home-products' className={`width-100 ${innerWidth < 768 ? 'px-3' : 'px-5'}`}>
        <HomePageProducts setcartProducts={setcartProducts} fetchedProducts={fetchedProducts} setshowSideBar={setshowSideBar} />
      </div>
    </>
  );
}

export default App;
