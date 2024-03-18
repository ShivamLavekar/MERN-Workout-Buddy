import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <div>
        <Link to='/'><h1 className='title'>WORKOUT BUDDY<img src="/muscle.png" alt=""className='img-fluid' style={{width:'50px'}}/></h1></Link>
      </div>
    </>
  )
}
