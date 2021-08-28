import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import HomePageProduct from './HomePageProduct'
const HomePageProducts = ({fetchedProducts}) =>{
    return (fetchedProducts.length > 0 ? <Row className='side-border mx-0' >
       {fetchedProducts.map(product => <HomePageProduct product={product}  />)}
    </Row> : null)
}

export default HomePageProducts;