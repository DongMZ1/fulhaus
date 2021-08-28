import { id } from 'postcss-selector-parser';
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import useInterval from 'use-interval'

const HomePageProduct = ({ product }) => {
    const [currentImage, setcurrentImage] = useState(0);
    const [showHover, setshowHover] = useState(false);
    useInterval(() => {
        if (currentImage < (product.imageURLs.length - 1)) {
            setcurrentImage(prev => prev + 1);
        } else {
            setcurrentImage(0);
        }
    }, 4000);
    return <Col lg={4} md={6} className='p-4' >
        <div className='relative cursor-pointer rounder-border' onMouseOver={() => setshowHover(true)} onMouseLeave={() => setshowHover(false)}>
            {showHover && <div className='width-100 rounder-border height-100 black-through-bg absolute top-0 left-0 p-4 white-color'>
                hello
            </div>}
            <img className='width-100 rounder-border' src={product.imageURLs[currentImage]} alt='product image' />
        </div>
    </Col>
}

export default HomePageProduct;