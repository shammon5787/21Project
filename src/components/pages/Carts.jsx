import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartProduct'

const Carts = () => {
  const select = useSelector((state)=>state.MyCarts)
  const dispech = useDispatch()

  const onRemoveHandler = (prod)=>{
    dispech(remove(prod))
  }
  
  return (  
    <div className='wraperClass'>
            {
                select.map((prod) => (
                    <div className='MyCarts'>
                        <div>
                            <img className='imges' style={{width:'100px', height:'100px'}} src={prod.image} alt="" />
                        </div>
                        <div className='content'>
                            <h4>{prod.title}</h4>
                            <h4>{prod.price}</h4>
                            <button className='catBtn' onClick={()=>onRemoveHandler(prod.id)}>Remove Cart</button>
                        </div>
                    </div>
                ))
            }

        </div>
  )
}

export default Carts