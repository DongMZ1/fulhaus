import React,{useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Exit from '../assert/image/exit.png'
const SideBar = ({ cartProducts, setcartProducts, innerWidth }) => {
   
    const removeProductFromCart = (product) =>{
        if(cartProducts.length > 0){
            let index = cartProducts.indexOf(product);
            const firstArr = cartProducts.slice(0, index);
            const secondArr = cartProducts.slice(index + 1);
            setcartProducts([...firstArr , ...secondArr])
        }
    }

    useEffect(
        ()=>{
            if(document.getElementsByClassName('product-in-cart')){
           document.getElementsByClassName('product-in-cart')[document.getElementsByClassName('product-in-cart').length-1]?.scrollIntoView({behavior: "smooth"});
            }
        },[cartProducts]
    )
    
    return <div className='side-bar px-4 z-100'>
        <div className='height-75 pb-3 overflow-auto'>
            {
                cartProducts?.map(product => <Row className='mx-0 border-b py-3 Crimson product-in-cart relative'>
                    <Col xs={4} className='px-0 disp-flex justify-content-center'>
                        <img className='width-60' src={product.imageURLs[0]} />
                    </Col>
                    <Col xs={6} className='px-0 disp-flex flex-colume'>
                        <div className='font-1-2'>{product.itemName}</div>
                        <div className='font-0-8'>{product.vendorName}</div>
                        <div className='mt-auto font-0-8'>${product.MSRP}</div>
                    </Col>
                    <img onClick={()=>removeProductFromCart(product)} className='exit-icon mt-3 me-3 cursor-pointer' src={Exit} />
                </Row>)
            }
        </div>
        <div className='disp-flex space-between Montserrat font-1-4 bolder'>
            <div>Total:</div>
            <div>${cartProducts.length > 0 ? cartProducts.map(product => product.MSRP).reduce((prev, curr) => prev + curr) : '0'}</div>
        </div>
        <div className='disp-flex Montserrat cursor-pointer font-0-8 black-bg white-color mt-3 py-2-5'>
            <div className='m-auto'>CHECKOUT</div>
        </div>
    </div>
}

export default SideBar;