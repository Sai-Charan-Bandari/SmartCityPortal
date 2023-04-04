import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Options() {
  let [show, setshow] = useState(0)
  return (
    <div className="head2">
      <div>
        <h2 className='tab' onClick={()=>{
        if(show==0) setshow(1)
        else setshow(0)}}>
          About our Smart City
        </h2>
        {show==1 && <div className="list">
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
        </div>}
      </div>
      <div>
        <h2 className='tab' onClick={()=>{
        if(show==0) setshow(2)
        else setshow(0)}}>
          Public Utilities
        </h2>
        {show==2 && <div className="list">
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
        </div>}
      </div>
      <div>
        <h2 className='tab' onClick={()=>{
        if(show==0) setshow(3)
        else setshow(0)}}>
          HelpLine Numbers
        </h2>
        {show==3 && <div className="list">
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
        </div>}
      </div>
      <div>
        <h2 className='tab' onClick={()=>{
        if(show==0) setshow(4)
        else setshow(0)}}>
          Tourism
        </h2>
        {show==4 && <div className="list">
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
          <h3>jsdhfk</h3>
        </div>}
      </div>
      <div>
        <h2 className='tab' onClick={()=>{
        if(show==0) setshow(5)
        else setshow(0)}}>
         <Link to='/profile'> Public Profile</Link>
        </h2>
        </div>
    </div>
  )
}

export default Options