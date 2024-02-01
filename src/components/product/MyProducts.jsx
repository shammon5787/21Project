import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartProduct';

const MyProducts = () => {

    const dispetch = useDispatch()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const result = await fetch('https://fakestoreapi.com/products');
            const data = await result.json();
            console.log(data);
            setProducts(data)
        }
        fetchProduct();
    }, [])

    const onAddHandler = (product)=>{
        dispetch(add(product))
    }

    return (
        <div className='wraperClass'>
            {
                products.map((prod) => (
                    <div className='MyCarts'>
                        <div>
                            <img className='imges' style={{width:'100px', height:'100px'}} src={prod.image} alt="" />
                        </div>
                        <div className='content'>
                            <h4>{prod.title}</h4>
                            <h4>{prod.price}</h4>
                            <button className='catBtn' onClick={()=>onAddHandler(prod)}>Add Cart</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default MyProducts
