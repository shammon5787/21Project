import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const select = useSelector((state)=>state.MyCarts)

    return (
        <>
            <div className='navbar'>
                <span style={{ fontWeight: 'bold', fontFamily: 'sans-serif', color: 'blueviolet', backgroundColor: 'black', borderRadius: '100%', padding: '10px', cursor: 'pointer' }}>PAK</span>
                <div className='menus'>
                    <Link className='links' to="/">Home</Link>
                    <Link className='links' to="/cart">Cart</Link>
                    <Link className='links' to="/about">About</Link>
                </div>
                <h3>Total : {select.length}</h3>
            </div>
            <hr />
        </>
    )
}

export default Navbar
