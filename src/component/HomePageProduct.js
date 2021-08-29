import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import useInterval from 'use-interval'

const HomePageProduct = ({ product, setcartProducts, setshowSideBar }) => {
    const [currentImage, setcurrentImage] = useState(0);
    const [showHover, setshowHover] = useState(false);
    useInterval(() => {
        if (currentImage < (product.imageURLs.length - 1)) {
            setcurrentImage(prev => prev + 1);
        } else {
            setcurrentImage(0);
        }
    }, 4000);
    return <Col xl={4} lg={6} md={6} className='p-4 user-select-none Crimson' >
        <div className='relative rounder-border ' onMouseOver={() => setshowHover(true)} onMouseLeave={() => setshowHover(false)}>
            {showHover && <div className='width-100 flex-colume rounder-border disp-flex space-between height-100 black-through-bg absolute top-0 left-0 p-4 white-color'>
                <Row>
                    <Col md={10} xs={11} className='offset-1'>
                        {product.itemName}
                    </Col>
                    <Col md={10} xs={11} className='offset-1 font-0-8'>
                        {product.vendorName}
                    </Col>
                </Row>
                <div className='disp-flex mb-2 space-between px-2'>
                    <div className='cursor-pointer' onClick={() => { setcartProducts(state => [...state, product]);
                         setshowSideBar(true);
                        }}>+ Add to Cart</div>
                <div>${product.MSRP}</div>
            </div>
            </div>}
        {product.imageURLs?.map(url =>
            <img className='width-100 rounder-border' src={url} alt='product image' />
        )[currentImage]
        }
        </div>
    </Col >
}

export default HomePageProduct;