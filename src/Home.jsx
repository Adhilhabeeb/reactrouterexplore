import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Adhil from './Adhil';
import Alfin from './Alfin';
import Esha from './Esha';

function Home() {
  let duc=useRef()
  let location=useLocation()
 

  let [sta,setsta] =useState("hello");

useEffect(() => {
if (location.state) {
  setsta(location.state.id)
}
}, [])


  return (
<>


<div ref={duc}>{sta}</div>


</>  
  
  


  )
}

export default Home