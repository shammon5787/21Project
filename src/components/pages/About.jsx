import React, { useState } from 'react'
import student from '../manu/menu'
import { Link } from 'react-router-dom'

const About = () => {
    const [data, setData] = useState(student)
    return (
        <div className='myclass'>
            <table className='table-auto w-auto' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((da) => (
                            <tr>
                                <td>{da.id}</td>
                                <td>{da.name}</td>
                                <td>{da.Address}</td>
                                <td>
                                    <button style={{marginLeft:'10px', backgroundColor:'blue' ,borderRadius:'6px' , padding:'3px'}}>Edit</button>
                                    <button style={{marginLeft:'10px', backgroundColor:'red', borderRadius:'6px' , padding:'3px'}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default About
