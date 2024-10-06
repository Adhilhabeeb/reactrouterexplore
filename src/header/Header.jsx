

import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='adhil'>


  <NavLink  className="abu" to={"chart"}>
    chart
  </NavLink>


  <NavLink  className="user" to={"user"}>
    user
  </NavLink>




  <NavLink to={"usage"} className={(obj)=>{

console.log(obj)
return `abu ${obj.isActive ? "active":""}`

  }}>
usage
  </NavLink>




  <NavLink to={"/"}  className={()=>{

    return "abu"
  }}>
    home 
  </NavLink>
</div>


       

  )
}

export default Header