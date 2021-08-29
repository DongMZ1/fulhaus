import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import HomePageProduct from './HomePageProduct'
const HomePageProducts = ({fetchedProducts, setcartProducts, setshowSideBar}) =>{
    return (fetchedProducts.length > 0 ? <Row className='side-border mx-0' >
       {fetchedProducts.map(product => <HomePageProduct setshowSideBar={setshowSideBar} setcartProducts={setcartProducts} product={product}  />)}
    </Row> : null)
}

export default HomePageProducts;